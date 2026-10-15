import React from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  PenTool,
  Sparkles,
  FolderArchive,
  Terminal,
} from 'lucide-react';

export function Sidebar({
  activeView,
  setActiveView,
  selectedSubjectId,
  setSelectedSubjectId,
  subjects,
  semesters,
  activeSemesterId,
  setActiveSemesterId,
  stats,
}) {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-[61px] lg:h-[calc(100vh-61px)] overflow-y-auto p-4 lg:py-6 lg:pl-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 no-print">
      {/* Semester Selector */}
      <div className="mb-5 p-3 rounded-xl bg-slate-100 dark:bg-[#181B26] border border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
          <span className="font-semibold uppercase tracking-wider text-[10px]">Semester Aktif</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-mono font-medium">2026/2027</span>
        </div>
        <select
          value={activeSemesterId}
          onChange={(e) => setActiveSemesterId(e.target.value)}
          className="w-full bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500 cursor-pointer"
        >
          {semesters.map((sem) => (
            <option key={sem.id} value={sem.name}>
              {sem.name} • Unindra Reguler
            </option>
          ))}
        </select>
      </div>

      {/* Primary Navigation Menu */}
      <nav className="space-y-1 mb-6">
        <button
          onClick={() => {
            setActiveView('dashboard');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'dashboard'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Akademik</span>
          </div>
          <span className={`text-[10px] font-mono ${activeView === 'dashboard' ? 'text-indigo-100' : 'text-slate-400'}`}>
            {stats.totalSubjects} Matkul
          </span>
        </button>

        <button
          onClick={() => {
            setActiveView('ai_tutor');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'ai_tutor'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span>AI Academic Tutor</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/20 px-1.5 py-0.5 rounded font-bold">
            RAG
          </span>
        </button>

        <button
          onClick={() => {
            setActiveView('subjects');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'subjects' && !selectedSubjectId
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-4 h-4" />
            <span>Semua Mata Kuliah</span>
          </div>
          <span className={`text-[10px] font-mono ${activeView === 'subjects' && !selectedSubjectId ? 'text-indigo-100' : 'text-slate-400'}`}>
            {stats.totalMeetings} Sesi
          </span>
        </button>

        <button
          onClick={() => {
            setActiveView('handwriting');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'handwriting'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <PenTool className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Salin Catatan Fisik</span>
          </div>
          <span className="text-[10px] font-mono text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/20 px-1.5 py-0.5 rounded font-bold">
            Binder
          </span>
        </button>

        <button
          onClick={() => {
            setActiveView('pascal');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'pascal'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Koleksi Pascal (.PAS)</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold">
            24 File
          </span>
        </button>
      </nav>

      {/* Academic Repository Metadata Card */}
      <div className="mb-6 p-3.5 rounded-xl bg-slate-100 dark:bg-[#181B26] border border-slate-200 dark:border-white/10 text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="font-heading font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
            <FolderArchive className="w-3.5 h-3.5 text-indigo-500" />
            <span>Repository Kuliah</span>
          </span>
          <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400 text-[11px]">
            Semester 1
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Total Sesi:</span>
            <span className="font-mono font-semibold text-slate-800 dark:text-white">{stats.totalMeetings} Pertemuan</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Modul PDF Dosen:</span>
            <span className="font-mono font-semibold text-cyan-600 dark:text-cyan-400">
              {stats.totalMaterials} Berkas
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Cheatsheet Formula:</span>
            <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">6 Kartu HD</span>
          </div>
          <div
            onClick={() => {
              setActiveView('pascal');
              setSelectedSubjectId(null);
            }}
            className="flex items-center justify-between cursor-pointer hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            <span className="text-slate-500 dark:text-slate-400">Kode Pascal:</span>
            <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 underline decoration-dotted">24 Berkas</span>
          </div>
        </div>
      </div>

      {/* Subject Quick Jump Section */}
      <div>
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Daftar Mata Kuliah
          </span>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
            {subjects.length} Matkul
          </span>
        </div>

        <div className="space-y-1">
          {subjects.map((subj) => {
            const isSelected = selectedSubjectId === subj.id;
            const pdfCount = (subj.meetings || []).reduce((acc, m) => acc + (m.materials || []).length, 0);

            return (
              <button
                key={subj.id}
                onClick={() => {
                  setSelectedSubjectId(subj.id);
                  setActiveView('subject_detail');
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all text-left cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-white font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: subj.color || '#6366F1' }}
                  />
                  <span className="truncate">{subj.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex-shrink-0">
                  {pdfCount} PDF
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
