import React from 'react';
import {
  GraduationCap,
  Calendar,
  FileText,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
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
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${currentSubject.color}15`,
                      color: currentSubject.color,
                      border: `1px solid ${currentSubject.color}30`,
                    }}
                  >
                    {currentSubject.code || 'MATKUL'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {currentSubject.schedule}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                  {currentSubject.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Dosen Pengampu: <strong className="text-slate-800 dark:text-slate-200">{currentSubject.lecturer}</strong> • {currentSubject.room}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Kurikulum Terverifikasi</span>
                </span>
              </div>
            </div>
          </div>

          {/* Meetings Grid for the selected subject */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                Daftar Pertemuan ({currentSubject.meetings?.length || 0} Pertemuan)
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Pilih sesi untuk membaca rangkuman dan membuka dokumen PDF dosen
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentSubject.meetings || []).map((m) => {
                const isNoted = m.progress?.is_noted_in_binder;
                const pdfCount = (m.materials || []).length;

                return (
                  <div
                    key={m.id}
                    className={`p-5 rounded-xl border transition-all flex flex-col justify-between shadow-sm ${
                      isNoted
                        ? 'bg-slate-50 dark:bg-[#121820] border-emerald-300 dark:border-emerald-500/30'
                        : 'bg-white dark:bg-[#11131B] border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                          Pertemuan {m.meeting_number}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          {m.date}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2 line-clamp-2">
                        {m.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                        {m.description || 'Materi perkuliahan.'}
                      </p>

                      {/* Resource Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-indigo-300 border border-slate-200 dark:border-white/5 text-[11px] font-mono">
                          <FileText className="w-3 h-3 text-indigo-500" />
                          <span>{pdfCount} PDF</span>
                        </span>
                        {isNoted && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-[11px] font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>Tercatat di Binder</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                      <button
                        onClick={() => onSelectMeeting(currentSubject.id, m.id)}
                        className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Buka Catatan & Berkas PDF</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
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
              <h1 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                Mata Kuliah Semester 1
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pilih mata kuliah untuk melihat detail silabus pertemuan dan materi kuliah
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span>8 Mata Kuliah Terdaftar</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {subjects.map((subj) => {
              const meetingCount = (subj.meetings || []).length;
              const pdfCount = (subj.meetings || []).reduce((acc, m) => acc + (m.materials || []).length, 0);

              return (
                <div
                  key={subj.id}
                  onClick={() => onSelectSubject(subj.id)}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-mono font-bold px-2.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${subj.color}15`,
                          color: subj.color,
                          border: `1px solid ${subj.color}30`,
                        }}
                      >
                        {subj.code}
                      </span>
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                        {pdfCount} Berkas PDF
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1">
                      {subj.name}
                    </h3>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {subj.lecturer}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {subj.schedule} • {subj.room}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Sesi: <strong className="text-slate-800 dark:text-white">{meetingCount} Pertemuan</strong>
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Buka Silabus</span>
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
