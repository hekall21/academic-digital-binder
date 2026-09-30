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

        <button
          onClick={() => {
            setActiveView('handwriting');
            setSelectedSubjectId(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeView === 'handwriting'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
              : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 light:hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <PenTool className="w-4 h-4" />
            <span>Mode Catatan Fisik</span>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">
            Print/Salin
          </span>
        </button>
      </div>

      {/* Real-time Binder Progress Card */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-cyan-950/30 border border-indigo-500/20 shadow-md">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-heading font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Progress Salin Buku</span>
          </span>
          <span className="font-mono font-bold text-cyan-400 text-xs">
            {stats.progressPct}%
          </span>
        </div>

        {/* Bar */}
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-500"
            style={{ width: `${stats.progressPct}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Tercatat di Binder</span>
          <span className="font-mono font-semibold text-slate-200">
            {stats.totalNotedInBinder} / {stats.totalMeetings} Sesi
          </span>
        </div>
      </div>

      {/* Subject Quick Jump Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Daftar Mata Kuliah
          </span>
          <button
            onClick={onOpenAddSubject}
            className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
          >
            <Plus className="w-3 h-3" />
            <span>Tambah</span>
          </button>
        </div>

        <div className="space-y-1">
          {subjects.map((subj, index) => {
            const isSelected = selectedSubjectId === subj.id;
            const completedCount = (subj.meetings || []).filter(
              (m) => m.progress?.is_noted_in_binder
            ).length;

            return (
              <button
                key={subj.id}
                onClick={() => {
                  setSelectedSubjectId(subj.id);
                  setActiveView('subject_detail');
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all text-left ${
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
                <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">
                  {completedCount}/{(subj.meetings || []).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
