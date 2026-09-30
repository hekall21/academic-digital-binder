import React from 'react';
import {
  GraduationCap,
  Plus,
  Calendar,
  FileText,
  Sparkles,
  CheckCircle2,
  Circle,
  ArrowRight,
  BookOpen,
  PenTool,
  Clock,
  Trash2,
  Edit2,
} from 'lucide-react';

export function SubjectsView({
  subjects,
  selectedSubjectId,
  onSelectSubject,
  onSelectMeeting,
  onOpenAddMeeting,
  onOpenAddSubject,
  onToggleProgress,
  onDeleteMeeting,
}) {
  const currentSubject = selectedSubjectId
    ? subjects.find((s) => s.id === selectedSubjectId)
    : null;

  return (
    <div className="space-y-6 pb-16">
      {/* If specific subject is selected, show detail subject header */}
      {currentSubject ? (
        <div>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#181B26] to-slate-900 border border-white/10 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono font-bold px-3 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${currentSubject.color}20`,
                      color: currentSubject.color,
                      border: `1px solid ${currentSubject.color}40`,
                    }}
                  >
                    {currentSubject.code || 'MATKUL'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {currentSubject.schedule}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {currentSubject.name}
                </h1>
                <p className="text-sm text-slate-300 mt-1">
                  Dosen Pengampu: <strong className="text-white">{currentSubject.lecturer}</strong> • {currentSubject.room}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAddMeeting(currentSubject.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Tambah Pertemuan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Meetings Grid for the selected subject */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-lg font-bold font-heading text-white">
                Daftar Pertemuan ({currentSubject.meetings?.length || 0} Pertemuan)
              </h2>
              <span className="text-xs text-slate-400">
                Centang status checklist untuk memperbarui progres binder
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentSubject.meetings || []).map((m) => {
                const isNoted = m.progress?.is_noted_in_binder;

                return (
                  <div
                    key={m.id}
                    className={`p-5 rounded-xl border transition-all flex flex-col justify-between ${
                      isNoted
                        ? 'bg-[#121820] border-emerald-500/30'
                        : 'bg-[#11131B] border-white/10 hover:border-indigo-500/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-indigo-400">
                          Pertemuan {m.meeting_number}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {m.date}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-base text-white mb-2 line-clamp-2">
                        {m.title}
                      </h3>

                      <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                        {m.description || 'Materi perkuliahan.'}
                      </p>

                      {/* 4-Tier Checklist Tracker (Section 10 of Binder.txt) */}
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 space-y-2 mb-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Checklist Akademik:
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
                            <input
                              type="checkbox"
                              checked={!!m.progress?.is_read}
                              onChange={() => onToggleProgress(currentSubject.id, m.id, 'is_read')}
                              className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span>Sudah membaca</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
                            <input
                              type="checkbox"
                              checked={!!m.progress?.is_summarized}
                              onChange={() => onToggleProgress(currentSubject.id, m.id, 'is_summarized')}
                              className="rounded border-slate-700 text-cyan-600 focus:ring-cyan-500"
                            />
                            <span>Sudah dirangkum</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
                            <input
                              type="checkbox"
                              checked={!!m.progress?.is_studied}
                              onChange={() => onToggleProgress(currentSubject.id, m.id, 'is_studied')}
                              className="rounded border-slate-700 text-violet-600 focus:ring-violet-500"
                            />
                            <span>Sudah dipelajari</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer text-emerald-400 font-semibold hover:text-emerald-300">
                            <input
                              type="checkbox"
                              checked={!!m.progress?.is_noted_in_binder}
                              onChange={() => onToggleProgress(currentSubject.id, m.id, 'is_noted_in_binder')}
                              className="rounded border-slate-700 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span>Catat di Binder</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectMeeting(currentSubject.id, m.id)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                        >
                          <span>Buka Detail</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onDeleteMeeting(currentSubject.id, m.id)}
                          className="p-1.5 rounded-md text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Hapus Pertemuan"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Overview of all 8 subjects */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold font-heading text-white">
                Mata Kuliah Semester 1
              </h1>
              <p className="text-xs text-slate-400">
                Pilih mata kuliah untuk melihat detail silabus pertemuan dan materi kuliah
              </p>
            </div>
            <button
              onClick={onOpenAddSubject}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>+ Mata Kuliah Baru</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subj) => {
              const meetingCount = (subj.meetings || []).length;
              const completedCount = (subj.meetings || []).filter(
                (m) => m.progress?.is_noted_in_binder
              ).length;
              const pct = meetingCount > 0 ? Math.round((completedCount / meetingCount) * 100) : 0;

              return (
                <div
                  key={subj.id}
                  onClick={() => onSelectSubject(subj.id)}
                  className="p-6 rounded-2xl bg-[#11131B] border border-white/10 hover:border-indigo-500/40 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-mono font-bold px-3 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${subj.color}20`,
                          color: subj.color,
                          border: `1px solid ${subj.color}40`,
                        }}
                      >
                        {subj.code}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {completedCount} / {meetingCount} Dicatat
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white mb-1">
                      {subj.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {subj.lecturer}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {subj.schedule} • {subj.room}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Progress: <strong className="text-white">{pct}%</strong>
                    </span>
                    <span className="text-xs font-bold text-indigo-400 flex items-center gap-1">
                      <span>Kelola Pertemuan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
