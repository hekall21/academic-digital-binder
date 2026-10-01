import React, { useState } from 'react';
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
  Image as ImageIcon,
  ExternalLink,
  Download,
  Check,
  RefreshCw,
} from 'lucide-react';

const CHEATSHEET_GALLERY = [
  {
    id: 'matdas',
    subjectId: 'subject-matdas',
    icon: '📐',
    title: 'Matematika Dasar',
    code: 'TI-106',
    color: '#06B6D4',
    topics: 'Sistem Bilangan Real, Operasi Aljabar, Pertidaksamaan & Interval, Nilai Mutlak, Fungsi & Parabola',
    image: '/images/MATEMATIKA_DASAR_UTS_P1_P4.jpg',
  },
  {
    id: 'algo',
    subjectId: 'subject-algo',
    icon: '⚡',
    title: 'Algoritma & Pascal',
    code: 'TI-103',
    color: '#6366F1',
    topics: 'Logika Al-Khawarizmi, Flowchart Standar ANSI, Struktur Program Pascal, I/O, IF-THEN-ELSE',
    image: '/images/ALGORITMA_DAN_PASCAL_UTS_P1_P4.jpg',
  },
  {
    id: 'ksi',
    subjectId: 'subject-ksi',
    icon: '🌐',
    title: 'Konsep Sistem Informasi',
    code: 'TI-101',
    color: '#3B82F6',
    topics: 'Data vs Informasi Gordon Davis, Piramida DIKW, 6 Blok Pembangun Burch, Anthony Triangle',
    image: '/images/KONSEP_SISTEM_INFORMASI_UTS_P1_P4.jpg',
  },
  {
    id: 'indo',
    subjectId: 'subject-indo',
    icon: '🔤',
    title: 'Bahasa Indonesia',
    code: 'MKWK107',
    color: '#EC4899',
    topics: '13 Ciri Hakikat Bahasa, 3 Pilar Sikap Arifin, EYD V, Diksi & Hukum Peluluhan K/T/S/P',
    image: '/images/BAHASA_INDONESIA_UTS_P1_P4.jpg',
  },
  {
    id: 'pancasila',
    subjectId: 'subject-pancasila',
    icon: '🇮🇩',
    title: 'Pendidikan Pancasila',
    code: 'MK02',
    color: '#EF4444',
    topics: '4 Landasan Pendidikan, Lintasan Sejarah Pra/Pasca Kemerdekaan, Dasar Negara & 15 Kisi UTS',
    image: '/images/PENDIDIKAN_PANCASILA_UTS_P1_P4.jpg',
  },
  {
    id: 'pai',
    subjectId: 'subject-pai',
    icon: '🕌',
    title: 'Pendidikan Agama Islam',
    code: 'MK01',
    color: '#10B981',
    topics: 'Tauhid 3 Dimensi, Aqidah 4 Ruang Lingkup, Syariah 5 Hukum Taklifi, Akhlak Mahmudah',
    image: '/images/PENDIDIKAN_AGAMA_ISLAM_UTS_P1_P4.jpg',
  },
];

export function DashboardView({
  stats,
  subjects,
  onSelectSubject,
  onSelectMeeting,
  onOpenAddSubject,
  onOpenAddMeeting,
}) {
  const continueItem = stats.continueStudying;
  const [selectedPreviewImage, setSelectedPreviewImage] = useState(null);

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-cyan-950/40 border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Command Center • Unindra Semester 1 R1G</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Academic Digital Binder: Kurikulum Resmi Dosen
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Pusat catatan terpadu untuk 8 mata kuliah, ekstraksi verbatim materi modul PDF dosen Unindra, rumus matematika presisi, serta arsip dokumen PDF dan cheatsheet HD.
          </p>
        </div>

        {/* Semi-transparent decorative pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />
      </div>

      {/* 5 Core Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
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

        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 shadow-sm col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Berkas PDF</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-white">
            {stats.totalMaterials || 43}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">PDF Siap Akses</p>
        </div>
      </div>

      {/* Continue Studying Card */}
      {continueItem && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[#181B26] dark:bg-[#181B26] light:bg-white border-2 border-indigo-500/30 shadow-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Lanjutkan Membaca Catatan & Berkas PDF</span>
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

      {/* CHEATSHEET & INFOGRAPHIC GALLERY SHOWCASE */}
      <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-heading text-white flex items-center gap-2">
                <span>Kartu Infografis & Cheatsheet HD (Format JPG)</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold">
                  6 Kartu Siap Cetak
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Formula matematika, simbol ANSI flowchart, aturan EYD V, dan konsep kunci terkunci permanen dalam resolusi tinggi.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CHEATSHEET_GALLERY.map((card) => (
            <div
              key={card.id}
              className="p-4 rounded-xl bg-[#181B26] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{card.icon}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    {card.code}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                  {card.topics}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedPreviewImage(card)}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Preview</span>
                </button>
                <a
                  href={card.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all flex items-center gap-1"
                >
                  <span>Buka HD ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects Grid & Progress Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold font-heading text-white dark:text-white light:text-slate-900">
              Overview 8 Mata Kuliah Semester 1
            </h2>
            <p className="text-xs text-slate-400">
              Klik kartu mata kuliah untuk melihat seluruh pertemuan dan membaca modul lengkap dosen
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>8 Mata Kuliah Terverifikasi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((subj, idx) => {
            const meetingCount = (subj.meetings || []).length;
            const pdfCount = (subj.meetings || []).reduce((acc, m) => acc + (m.materials || []).length, 0);

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
                    <span className="text-[11px] font-mono text-cyan-400">
                      {pdfCount} Berkas PDF
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

                {/* Resource Indicator inside Card */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400 font-medium">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{(subj.meetings || []).reduce((acc, m) => acc + (m.materials || []).length, 0)} PDF & Diktat</span>
                  </span>
                  <span className="font-semibold text-slate-300">
                    {meetingCount} Sesi
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Cheatsheet Preview */}
      {selectedPreviewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPreviewImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#11131B] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#181B26] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedPreviewImage.icon}</span>
                <span className="font-bold text-white text-sm">
                  {selectedPreviewImage.title} • Cheatsheet UTS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedPreviewImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka Tab Baru</span>
                </a>
                <button
                  onClick={() => setSelectedPreviewImage(null)}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg"
                >
                  Tutup
                </button>
              </div>
            </div>
            <div className="max-h-[80vh] overflow-y-auto p-2 bg-[#090A0F] flex justify-center">
              <img
                src={selectedPreviewImage.image}
                alt={selectedPreviewImage.title}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
