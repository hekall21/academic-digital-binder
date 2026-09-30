import React from 'react';
import {
  GraduationCap,
  Calendar,
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  BookMarked,
  Plus,
  Play,
  Share2,
} from 'lucide-react';

export function DashboardView({
  stats,
  subjects,
  onSelectSubject,
  onSelectMeeting,
  onOpenAddSubject,
  onOpenAddMeeting,
}) {
  const continueItem = stats.continueStudying;

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-cyan-950/40 border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Command Center • Semester 1</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Selamat Datang di Academic Digital Binder
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Pusat manajemen terintegrasi untuk 8 mata kuliah, materi dosen, transkrip rekaman, rangkuman AI, dan pelacakan salin ke buku fisik Anda.
          </p>
        </div>

        {/* Semi-transparent decorative pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />
      </div>

      {/* 5 Core Metric Cards (Section 3 of Binder.txt) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Metric 1 */}
        <div className="p-4 rounded-xl bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-indigo-400 mb-2">
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Total</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
            {stats.totalSubjects}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">Mata Kuliah Aktif</p>
        </div>

        {/* Metric 2 */}
        <div className="p-4 rounded-xl bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-cyan-400 mb-2">
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Sesi</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
            {stats.totalMeetings}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">Total Pertemuan</p>
        </div>

        {/* Metric 3 */}
        <div className="p-4 rounded-xl bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-violet-400 mb-2">
            <FileText className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Berkas</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
            {stats.totalMaterials}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">Materi & Slide Dosen</p>
        </div>

        {/* Metric 4 */}
        <div className="p-4 rounded-xl bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-amber-400 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">AI</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
            {stats.totalSummaries}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">Rangkuman Siap</p>
        </div>

        {/* Metric 5 */}
        <div className="p-4 rounded-xl bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Buku Fisik</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-white dark:text-white light:text-slate-900">
            {stats.totalNotedInBinder}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">Sudah Dicatat</p>
        </div>
      </div>

      {/* Continue Studying Card (Binder.txt requirement) */}
      {continueItem && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[#181B26] dark:bg-[#181B26] light:bg-white border-2 border-indigo-500/30 shadow-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Continue Studying • Belum Selesai Dicatat</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white dark:text-white light:text-slate-900">
                {continueItem.subject.name} — Pertemuan {continueItem.meeting.meeting_number}: {continueItem.meeting.title}
              </h3>
              <p className="text-xs text-slate-400">
                Dosen: {continueItem.subject.lecturer} • Jadwal: {continueItem.subject.schedule}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectMeeting(continueItem.subject.id, continueItem.meeting.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
              >
                <span>Buka Detail Pertemuan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subjects Grid & Progress Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold font-heading text-white dark:text-white light:text-slate-900">
              Overview 8 Mata Kuliah Semester 1
            </h2>
            <p className="text-xs text-slate-400">
              Klik kartu mata kuliah untuk melihat seluruh pertemuan dan mengelola materi
            </p>
          </div>
          <button
            onClick={onOpenAddSubject}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 text-xs font-bold transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Mata Kuliah Baru</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((subj, idx) => {
            const meetingCount = (subj.meetings || []).length;
            const completedCount = (subj.meetings || []).filter(
              (m) => m.progress?.is_noted_in_binder
            ).length;
            const pct = meetingCount > 0 ? Math.round((completedCount / meetingCount) * 100) : 0;

            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj.id)}
                className="group p-5 rounded-2xl bg-[#11131B] dark:bg-[#11131B] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-indigo-500/40 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${subj.color}20`,
                        color: subj.color,
                        border: `1px solid ${subj.color}40`,
                      }}
                    >
                      {subj.code || `MATKUL ${idx + 1}`}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {completedCount} / {meetingCount} Sesi
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {subj.name}
                  </h3>

                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    {subj.lecturer}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                    {subj.schedule}
                  </p>
                </div>

                {/* Progress Bar inside Card */}
                <div className="mt-5 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 font-medium">
                    <span>Progress Salin</span>
                    <span className="font-mono text-slate-300">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: subj.color || '#6366F1',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
