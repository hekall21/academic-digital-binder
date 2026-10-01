import React, { useState, useEffect } from 'react';
import { useBinderStore } from './hooks/useBinderStore';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardView } from './components/dashboard/DashboardView';
import { SubjectsView } from './components/subjects/SubjectsView';
import { MeetingDetailView } from './components/meetings/MeetingDetailView';
import { GlobalSearchModal } from './components/search/GlobalSearchModal';
import { SettingsModal } from './components/settings/SettingsModal';

export function App() {
  const { theme, toggleTheme } = useTheme();

  const {
    subjects,
    profile,
    semesters,
    activeSemesterId,
    setActiveSemesterId,
    stats,
    searchQuery,
    setSearchQuery,
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
  } = useBinderStore();

  // Navigation State
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard', 'subjects', 'subject_detail', 'meeting_detail', 'handwriting'
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedMeetingId, setSelectedMeetingId] = useState(null);

  // Modals State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [isAddMeetingOpen, setIsAddMeetingOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [meetingSubjectTarget, setMeetingSubjectTarget] = useState(null);

  // Global Ctrl + K search hotkey
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleSelectSubject = (subjectId) => {
    setSelectedSubjectId(subjectId);
    setActiveView('subject_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMeeting = (subjectId, meetingId) => {
    setSelectedSubjectId(subjectId);
    setSelectedMeetingId(meetingId);
    setActiveView('meeting_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAddMeeting = (subjectId) => {
    const target = subjects.find((s) => s.id === subjectId) || subjects[0];
    setMeetingSubjectTarget(target);
    setIsAddMeetingOpen(true);
  };

  // Find active subject and meeting instances
  const activeSubject = subjects.find((s) => s.id === selectedSubjectId);
  const activeMeeting = activeSubject?.meetings?.find((m) => m.id === selectedMeetingId);

  return (
    <div className="min-h-screen bg-[#090A0F] dark:bg-[#090A0F] light:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#F8FAFC] light:text-[#0F172A] flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSearch={() => setIsSearchOpen(true)}
        onExport={handleExport}
        onImportFile={handleImport}
        onResetSeed={resetToFactorySeed}
        onOpenSettings={() => setIsSettingsOpen(true)}
        profile={profile}
      />

      {/* Main Layout Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          selectedSubjectId={selectedSubjectId}
          setSelectedSubjectId={setSelectedSubjectId}
          subjects={subjects}
          semesters={semesters}
          activeSemesterId={activeSemesterId}
          setActiveSemesterId={setActiveSemesterId}
          stats={stats}
        />

        {/* Dynamic Center Stage Content View */}
        <main className="flex-1 py-6 min-w-0">
          {activeView === 'dashboard' && (
            <DashboardView
              stats={stats}
              subjects={subjects}
              onSelectSubject={handleSelectSubject}
              onSelectMeeting={handleSelectMeeting}
            />
          )}

          {(activeView === 'subjects' || activeView === 'subject_detail') && (
            <SubjectsView
              subjects={subjects}
              selectedSubjectId={selectedSubjectId}
              onSelectSubject={handleSelectSubject}
              onSelectMeeting={handleSelectMeeting}
            />
          )}

          {activeView === 'meeting_detail' && activeSubject && activeMeeting && (
            <MeetingDetailView
              subject={activeSubject}
              meeting={activeMeeting}
              onBack={() => {
                setActiveView('subject_detail');
              }}
            />
          )}
        </main>
      </div>

      {/* Modals & Overlays */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={subjects}
        onSelectMeeting={handleSelectMeeting}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        profile={profile}
        onUpdateProfile={(p) => {}}
        onExport={handleExport}
        onImportFile={handleImport}
        onResetSeed={resetToFactorySeed}
      />
    </div>
  );
}

export default App;
