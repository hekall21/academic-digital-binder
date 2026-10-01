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
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Kurikulum Terkunci & Terverifikasi</span>
                </span>
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
                Pilih sesi untuk membaca rangkuman komprehensif dan membuka dokumen PDF dosen
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

                      {/* Academic Resource Info Badges */}
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 space-y-1.5 mb-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Materi Perkuliahan:
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                            <FileText className="w-3 h-3 text-indigo-400" />
                            <span>{(m.materials || []).length} Dokumen PDF</span>
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            <span>Rangkuman Detail</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-3 border-t border-white/5">
                      <button
                        onClick={() => onSelectMeeting(currentSubject.id, m.id)}
                        className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Buka Rangkuman & Dokumen PDF</span>
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
              <h1 className="text-2xl font-extrabold font-heading text-white">
                Mata Kuliah Semester 1
              </h1>
              <p className="text-xs text-slate-400">
                Pilih mata kuliah untuk melihat detail silabus pertemuan dan materi kuliah
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>8 Mata Kuliah Terdaftar</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subj) => {
              const meetingCount = (subj.meetings || []).length;
              const pdfCount = (subj.meetings || []).reduce((acc, m) => acc + (m.materials || []).length, 0);

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
                      <span className="text-xs font-mono text-cyan-400">
                        {pdfCount} Berkas PDF
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
                      Sesi: <strong className="text-white">{meetingCount} Pertemuan</strong>
                    </span>
                    <span className="text-xs font-bold text-indigo-400 flex items-center gap-1">
                      <span>Buka Silabus & PDF</span>
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
