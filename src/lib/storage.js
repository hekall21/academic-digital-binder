import { safeJsonParse } from './security';

// Local Storage & Backup Persistence Utilities
// Versioned to ensure curriculum updates are automatically synced to the user's browser

export const CURRENT_DATA_VERSION = 'v8_unindra_sem1_pdf_url_fix_2026';
const STORAGE_KEY_VERSION = 'academic_binder_data_version';
const STORAGE_KEY_SUBJECTS = 'academic_binder_subjects_v3';
const STORAGE_KEY_PROFILE = 'academic_binder_profile_v3';
const STORAGE_KEY_SEMESTERS = 'academic_binder_semesters_v3';

export function loadSavedData(initialSubjects, initialProfile, initialSemesters) {
  try {
    const savedVersion = localStorage.getItem(STORAGE_KEY_VERSION);
    const savedSubjectsStr = localStorage.getItem(STORAGE_KEY_SUBJECTS) || localStorage.getItem('academic_binder_subjects_v1');
    const savedProfileStr = localStorage.getItem(STORAGE_KEY_PROFILE) || localStorage.getItem('academic_binder_profile_v1');
    const savedSemestersStr = localStorage.getItem(STORAGE_KEY_SEMESTERS) || localStorage.getItem('academic_binder_semesters_v1');

    // If version is missing or old, automatically merge progress with latest initialSubjects
    if (savedVersion !== CURRENT_DATA_VERSION) {
      console.log(`[Storage] Upgrading academic binder data from version "${savedVersion}" to "${CURRENT_DATA_VERSION}"`);
      
      let mergedSubjects = initialSubjects;
      if (savedSubjectsStr) {
        try {
          const oldSubjects = safeJsonParse(savedSubjectsStr, []);
          // Preserve progress flags and user notes, but upgrade curriculum content & summaries
          mergedSubjects = initialSubjects.map((freshSubj) => {
            const oldSubj = oldSubjects.find((s) => s.id === freshSubj.id || s.name === freshSubj.name);
            if (!oldSubj) return freshSubj;

            const mergedMeetings = (freshSubj.meetings || []).map((freshMeeting) => {
              const oldMeeting = (oldSubj.meetings || []).find((m) => m.meeting_number === freshMeeting.meeting_number);
              if (!oldMeeting) return freshMeeting;

              return {
                ...freshMeeting,
                notes: oldMeeting.notes || freshMeeting.notes,
                progress: {
                  is_read: oldMeeting.progress?.is_read || false,
                  is_summarized: oldMeeting.progress?.is_summarized || true,
                  is_studied: oldMeeting.progress?.is_studied || false,
                  is_noted_in_binder: oldMeeting.progress?.is_noted_in_binder || false,
                },
                materials: [
                  ...(freshMeeting.materials || []),
                  // Retain any user-uploaded custom materials
                  ...(oldMeeting.materials || []).filter(
                    (om) => !(freshMeeting.materials || []).some((fm) => fm.title === om.title)
                  ),
                ],
              };
            });

            return {
              ...freshSubj,
              meetings: mergedMeetings,
            };
          });
        } catch (mergeErr) {
          console.warn('[Storage] Error during smart merge, defaulting to fresh curriculum:', mergeErr);
          mergedSubjects = initialSubjects;
        }
      }

      // Persist upgraded version
      localStorage.setItem(STORAGE_KEY_VERSION, CURRENT_DATA_VERSION);
      saveSubjectsToLocal(mergedSubjects);

      return {
        subjects: mergedSubjects,
        profile: savedProfileStr ? safeJsonParse(savedProfileStr, initialProfile) : initialProfile,
        semesters: savedSemestersStr ? safeJsonParse(savedSemestersStr, initialSemesters) : initialSemesters,
      };
    }

    return {
      subjects: savedSubjectsStr ? safeJsonParse(savedSubjectsStr, initialSubjects) : initialSubjects,
      profile: savedProfileStr ? safeJsonParse(savedProfileStr, initialProfile) : initialProfile,
      semesters: savedSemestersStr ? safeJsonParse(savedSemestersStr, initialSemesters) : initialSemesters,
    };
  } catch (error) {
    console.error('Failed to parse localStorage data:', error);
    return {
      subjects: initialSubjects,
      profile: initialProfile,
      semesters: initialSemesters,
    };
  }
}

export function forceSyncCurriculum(initialSubjects) {
  try {
    localStorage.setItem(STORAGE_KEY_VERSION, CURRENT_DATA_VERSION);
    saveSubjectsToLocal(initialSubjects);
    return initialSubjects;
  } catch (e) {
    console.error('Failed to force sync curriculum:', e);
    return initialSubjects;
  }
}

export function saveSubjectsToLocal(subjects) {
  try {
    localStorage.setItem(STORAGE_KEY_SUBJECTS, JSON.stringify(subjects));
    localStorage.setItem(STORAGE_KEY_VERSION, CURRENT_DATA_VERSION);
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

export function saveProfileToLocal(profile) {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

export function saveSemestersToLocal(semesters) {
  try {
    localStorage.setItem(STORAGE_KEY_SEMESTERS, JSON.stringify(semesters));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

export function exportBackupJSON(state) {
  const data = {
    app: 'Academic Digital Binder',
    version: '3.0.0',
    data_version: CURRENT_DATA_VERSION,
    export_date: new Date().toISOString(),
    profile: state.profile,
    semesters: state.semesters,
    subjects: state.subjects,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `academic_binder_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importBackupJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = safeJsonParse(event.target.result);
        if (!json || !json.subjects || !Array.isArray(json.subjects)) {
          throw new Error('Format file backup tidak valid. Field subjects tidak ditemukan.');
        }
        resolve(json);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Gagal membaca file backup.'));
    reader.readAsText(file);
  });
}
