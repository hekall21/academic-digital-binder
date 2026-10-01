import React from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  PenTool,
  Sparkles,
  FolderArchive,
  Plus,
  CheckCircle,
  FileCheck,
  Calendar,
  ChevronRight,
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
  onOpenAddSubject,
}) {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-[61px] lg:h-[calc(100vh-61px)] overflow-y-auto p-4 lg:py-6 lg:pl-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 dark:border-white/10 light:border-slate-200 no-print">
      {/* Semester Selector */}
      <div className="mb-6 p-3 rounded-xl bg-[#181B26] dark:bg-[#181B26] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
          <span className="font-semibold uppercase tracking-wider text-[10px]">Semester Aktif</span>
          <span className="text-indigo-400 font-mono">2026/2027</span>
        </div>
        <select
          value={activeSemesterId}
          onChange={(e) => setActiveSemesterId(e.target.value)}
          className="w-full bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500"
        >
          {semesters.map((sem) => (
            <option key={sem.id} value={sem.name}>
              {sem.name} • Unindra Reguler
            </option>
          ))}
        </select>
      </div>

      {/* Primary Navigation Menu */}
      <div className="space-y-1 mb-6">
        <button
          onClick={() => {
            setActiveView('dashboard');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeView === 'dashboard'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
              : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 light:hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Akademik</span>
          </div>
          <span className="text-[10px] font-mono opacity-80">{stats.totalSubjects} Matkul</span>
        </button>

        <button
          onClick={() => {
            setActiveView('subjects');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeView === 'subjects' && !selectedSubjectId
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
              : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 light:hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-4 h-4" />
            <span>Semua Mata Kuliah</span>
          </div>
          <span className="text-[10px] font-mono opacity-80">{stats.totalMeetings} Sesi</span>
        </button>
      </div>

      {/* Academic Repository Vault Card */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-cyan-950/30 border border-indigo-500/20 shadow-md">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-heading font-bold text-white flex items-center gap-1.5">
            <FolderArchive className="w-3.5 h-3.5 text-cyan-400" />
            <span>Repository Kuliah</span>
          </span>
          <span className="font-mono font-bold text-cyan-400 text-xs">
            Semester 1
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] text-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Total Sesi:</span>
            <span className="font-mono font-semibold text-white">32 Pertemuan</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Berkas PDF Tersedia:</span>
            <span className="font-mono font-semibold text-cyan-400">
              {subjects.reduce((acc, s) => acc + (s.meetings || []).reduce((mAcc, m) => mAcc + (m.materials || []).length, 0), 0)} Berkas
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Cheatsheet HD (JPG):</span>
            <span className="font-mono font-semibold text-amber-400">6 Kartu</span>
          </div>
        </div>
      </div>

      {/* Subject Quick Jump Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Daftar Mata Kuliah
          </span>
          <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20 font-semibold">
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
                    ? 'bg-slate-800 border border-indigo-500/40 text-white font-semibold'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: subj.color || '#6366F1' }}
                  />
                  <span className="truncate">{subj.name}</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 flex-shrink-0">
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
