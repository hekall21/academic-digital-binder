import { useState, useEffect, useMemo, useCallback } from 'react';
import { initialSubjects, initialProfile, initialSemesters } from '../data/seedData';
import {
  loadSavedData,
  saveSubjectsToLocal,
  saveProfileToLocal,
  saveSemestersToLocal,
  exportBackupJSON,
  importBackupJSON,
} from '../lib/storage';

export function useBinderStore() {
  // Load persisted state or fallback
  const [data, setData] = useState(() =>
    loadSavedData(initialSubjects, initialProfile, initialSemesters)
  );

  const [subjects, setSubjects] = useState(data.subjects);
  const [profile, setProfile] = useState(data.profile);
  const [semesters, setSemesters] = useState(data.semesters);
  const [activeSemesterId, setActiveSemesterId] = useState('Semester 1');

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'noted', 'unnoted', 'summarized', 'unsummarized'

  // Persist automatically to LocalStorage on changes
  useEffect(() => {
    saveSubjectsToLocal(subjects);
  }, [subjects]);

  useEffect(() => {
    saveProfileToLocal(profile);
  }, [profile]);

  useEffect(() => {
    saveSemestersToLocal(semesters);
  }, [semesters]);

  // Statistics calculation across all subjects and meetings
  const stats = useMemo(() => {
    let totalMeetings = 0;
    let totalMaterials = 0;
    let totalSummaries = 0;
    let totalNotedInBinder = 0;
    let totalRead = 0;
    let totalStudied = 0;
    let continueStudying = null;

    subjects.forEach((subj) => {
      (subj.meetings || []).forEach((m) => {
        totalMeetings++;
        totalMaterials += (m.materials || []).length;
        if (m.summaries?.standar || m.progress?.is_summarized) {
          totalSummaries++;
        }
        if (m.progress?.is_noted_in_binder) {
          totalNotedInBinder++;
        }
        if (m.progress?.is_read) {
          totalRead++;
        }
        if (m.progress?.is_studied) {
          totalStudied++;
        }

        // Find the first meeting that hasn't been noted into the physical binder
        if (!continueStudying && (!m.progress?.is_noted_in_binder || !m.progress?.is_studied)) {
          continueStudying = {
            subject: subj,
            meeting: m,
          };
        }
      });
    });

    const progressPct = totalMeetings > 0 
      ? Math.round((totalNotedInBinder / totalMeetings) * 100) 
      : 0;

    return {
      totalSubjects: subjects.length,
      totalMeetings,
      totalMaterials,
      totalSummaries,
      totalNotedInBinder,
      totalRead,
      totalStudied,
      progressPct,
      continueStudying,
    };
  }, [subjects]);

  // Subject Operations
  const addSubject = useCallback((newSubj) => {
    const created = {
      id: `subj_${Date.now()}`,
      name: newSubj.name,
      code: newSubj.code || `TI-${100 + subjects.length + 1}`,
      lecturer: newSubj.lecturer || 'Dosen Pengampu',
      schedule: newSubj.schedule || 'Jadwal Kuliah',
      room: newSubj.room || 'Ruang Kelas',
      color: newSubj.color || '#6366F1',
      target_meetings: Number(newSubj.target_meetings) || 16,
      semester: newSubj.semester || 'Semester 1',
      academic_year: '2026/2027',
      meetings: [],
    };
    setSubjects((prev) => [...prev, created]);
    return created;
  }, [subjects.length]);

  const updateSubject = useCallback((id, updatedFields) => {
    setSubjects((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s))
    );
  }, []);

  const deleteSubject = useCallback((id) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  }, []);

  // Meeting Operations
  const addMeeting = useCallback((subjectId, meetingData) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        const currentMeetings = s.meetings || [];
        const nextNum = meetingData.meeting_number || (currentMeetings.length + 1);
        const newMeeting = {
          id: `${subjectId}_m${Date.now()}`,
          subject_id: subjectId,
          meeting_number: nextNum,
          date: meetingData.date || new Date().toISOString().slice(0, 10),
          title: meetingData.title || `Pertemuan ${nextNum}`,
          description: meetingData.description || '',
          notes: meetingData.notes || '',
          materials: meetingData.materials || [],
          transcripts: meetingData.transcripts || [],
          summaries: meetingData.summaries || { standar: '', ringkas: '', detail: '' },
          progress: {
            is_read: false,
            is_summarized: false,
            is_studied: false,
            is_noted_in_binder: false,
          },
        };
        return {
          ...s,
          meetings: [...currentMeetings, newMeeting],
        };
      })
    );
  }, []);

  const updateMeeting = useCallback((subjectId, meetingId, updatedFields) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.map((m) =>
            m.id === meetingId ? { ...m, ...updatedFields } : m
          ),
        };
      })
    );
  }, []);

  const deleteMeeting = useCallback((subjectId, meetingId) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.filter((m) => m.id !== meetingId),
        };
      })
    );
  }, []);

  // Binder Progress Checklist Toggle
  const toggleProgressItem = useCallback((subjectId, meetingId, key) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m;
            const currentProg = m.progress || {};
            return {
              ...m,
              progress: {
                ...currentProg,
                [key]: !currentProg[key],
              },
            };
          }),
        };
      })
    );
  }, []);

  // Materials Operations
  const addMaterial = useCallback((subjectId, meetingId, material) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m;
            return {
              ...m,
              materials: [
                ...(m.materials || []),
                {
                  id: `mat_${Date.now()}`,
                  type: material.type,
                  title: material.title,
                  file_url: material.file_url || '#',
                  file_size: material.file_size || 0,
                  date_added: new Date().toISOString().slice(0, 10),
                },
              ],
            };
          }),
        };
      })
    );
  }, []);

  const deleteMaterial = useCallback((subjectId, meetingId, materialId) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m;
            return {
              ...m,
              materials: (m.materials || []).filter((mat) => mat.id !== materialId),
            };
          }),
        };
      })
    );
  }, []);

  // Transcript Operations
  const updateTranscript = useCallback((subjectId, meetingId, text) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m;
            return {
              ...m,
              transcripts: [
                {
                  id: `trans_${Date.now()}`,
                  content: text,
                  audio_url: null,
                  status: 'completed',
                  updated_at: new Date().toISOString(),
                },
              ],
            };
          }),
        };
      })
    );
  }, []);

  // Summary Update
  const updateSummary = useCallback((subjectId, meetingId, { mode, content_html, handwriting_notes }) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== subjectId) return s;
        return {
          ...s,
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m;
            return {
              ...m,
              summaries: {
                ...(m.summaries || {}),
                [mode]: content_html,
              },
              handwriting_notes: handwriting_notes || m.handwriting_notes,
              progress: {
                ...(m.progress || {}),
                is_summarized: true,
              },
            };
          }),
        };
      })
    );
  }, []);

  // Backup & Restore
  const handleExport = useCallback(() => {
    exportBackupJSON({ profile, semesters, subjects });
  }, [profile, semesters, subjects]);

  const handleImport = useCallback(async (file) => {
    try {
      const backup = await importBackupJSON(file);
      if (backup.subjects) setSubjects(backup.subjects);
      if (backup.profile) setProfile(backup.profile);
      if (backup.semesters) setSemesters(backup.semesters);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const resetToFactorySeed = useCallback(() => {
    setSubjects(initialSubjects);
    setProfile(initialProfile);
    setSemesters(initialSemesters);
    saveSubjectsToLocal(initialSubjects);
    saveProfileToLocal(initialProfile);
    saveSemestersToLocal(initialSemesters);
  }, []);

  // Search Results
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return subjects
      .filter((s) => {
        if (selectedSubjectFilter !== 'all' && s.id !== selectedSubjectFilter) {
          return false;
        }
        return true;
      })
      .map((s) => {
        const matchingMeetings = (s.meetings || []).filter((m) => {
          // Status filter
          if (statusFilter === 'noted' && !m.progress?.is_noted_in_binder) return false;
          if (statusFilter === 'unnoted' && m.progress?.is_noted_in_binder) return false;
          if (statusFilter === 'summarized' && !m.progress?.is_summarized) return false;
          if (statusFilter === 'unsummarized' && m.progress?.is_summarized) return false;

          // Search query
          if (!q) return true;
          const inTitle = m.title?.toLowerCase().includes(q);
          const inDesc = m.description?.toLowerCase().includes(q);
          const inNotes = m.notes?.toLowerCase().includes(q);
          const inSummary = (m.summaries?.standar || '').toLowerCase().includes(q);
          const inTrans = (m.transcripts?.[0]?.content || '').toLowerCase().includes(q);

          return inTitle || inDesc || inNotes || inSummary || inTrans;
        });

        return {
          ...s,
          meetings: matchingMeetings,
        };
      })
      .filter((s) => {
        if (!searchQuery && statusFilter === 'all') return true;
        return s.meetings.length > 0 || s.name.toLowerCase().includes(q);
      });
  }, [subjects, searchQuery, selectedSubjectFilter, statusFilter]);

  return {
    subjects,
    profile,
    semesters,
    activeSemesterId,
    setActiveSemesterId,
    stats,
    searchQuery,
    setSearchQuery,
    selectedSubjectFilter,
    setSelectedSubjectFilter,
    statusFilter,
    setStatusFilter,
    filteredData,
    addSubject,
    updateSubject,
    deleteSubject,
    addMeeting,
    updateMeeting,
    deleteMeeting,
    toggleProgressItem,
    addMaterial,
    deleteMaterial,
    updateTranscript,
    updateSummary,
    handleExport,
    handleImport,
    resetToFactorySeed,
  };
}
