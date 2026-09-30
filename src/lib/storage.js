// Local Storage & Backup Persistence Utilities

const STORAGE_KEY_SUBJECTS = 'academic_binder_subjects_v1';
const STORAGE_KEY_PROFILE = 'academic_binder_profile_v1';
const STORAGE_KEY_SEMESTERS = 'academic_binder_semesters_v1';

export function loadSavedData(initialSubjects, initialProfile, initialSemesters) {
  try {
    const savedSubjects = localStorage.getItem(STORAGE_KEY_SUBJECTS);
    const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);
    const savedSemesters = localStorage.getItem(STORAGE_KEY_SEMESTERS);

    return {
      subjects: savedSubjects ? JSON.parse(savedSubjects) : initialSubjects,
      profile: savedProfile ? JSON.parse(savedProfile) : initialProfile,
      semesters: savedSemesters ? JSON.parse(savedSemesters) : initialSemesters,
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

export function saveSubjectsToLocal(subjects) {
  try {
    localStorage.setItem(STORAGE_KEY_SUBJECTS, JSON.stringify(subjects));
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
    version: '1.0.0',
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
        const json = JSON.parse(event.target.result);
        if (!json.subjects || !Array.isArray(json.subjects)) {
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
