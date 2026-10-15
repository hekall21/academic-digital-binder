import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  FileText,
  Sparkles,
  ArrowRight,
  Clock,
  BookMarked,
  Image as ImageIcon,
  ExternalLink,
  Calculator,
  Cpu,
  Network,
  Languages,
  Landmark,
  Compass,
} from 'lucide-react';

const CHEATSHEET_GALLERY = [
  {
    id: 'matdas',
    subjectId: 'subject-matdas',
    Icon: Calculator,
    title: 'Matematika Dasar',
    code: 'TI-106',
    color: '#06B6D4',
    topics: 'Sistem Bilangan Real, Operasi Aljabar, Pertidaksamaan & Interval, Nilai Mutlak, Fungsi & Parabola, Limit & Turunan',
    image: '/images/MATEMATIKA_DASAR_UTS_P1_P4.jpg',
  },
  {
    id: 'algo',
    subjectId: 'subject-algo',
    Icon: Cpu,
    title: 'Algoritma & Pascal',
    code: 'TI-103',
    color: '#6366F1',
    topics: 'Logika Al-Khawarizmi, Flowchart Standar ANSI, Struktur Program Pascal, I/O, IF-THEN-ELSE',
    image: '/images/ALGORITMA_DAN_PASCAL_UTS_P1_P4.jpg',
  },
  {
    id: 'ksi',
    subjectId: 'subject-ksi',
    Icon: Network,
    title: 'Konsep Sistem Informasi',
    code: 'TI-101',
    color: '#3B82F6',
    topics: 'Data vs Informasi Gordon Davis, Piramida DIKW, 6 Blok Pembangun Burch, Anthony Triangle',
    image: '/images/KONSEP_SISTEM_INFORMASI_UTS_P1_P4.jpg',
  },
  {
    id: 'indo',
    subjectId: 'subject-indo',
    Icon: Languages,
    title: 'Bahasa Indonesia',
    code: 'MKWK107',
    color: '#EC4899',
    topics: '13 Ciri Hakikat Bahasa, 3 Pilar Sikap Arifin, EYD V, Diksi & Hukum Peluluhan K/T/S/P',
    image: '/images/BAHASA_INDONESIA_UTS_P1_P4.jpg',
  },
  {
    id: 'pancasila',
    subjectId: 'subject-pancasila',
    Icon: Landmark,
    title: 'Pendidikan Pancasila',
    code: 'MK02',
    color: '#EF4444',
    topics: '4 Landasan Pendidikan, Lintasan Sejarah Pra/Pasca Kemerdekaan, Dasar Negara & 15 Kisi UTS',
    image: '/images/PENDIDIKAN_PANCASILA_UTS_P1_P4.jpg',
  },
  {
    id: 'pai',
    subjectId: 'subject-pai',
    Icon: Compass,
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
  onOpenTutor,
}) {
  const continueItem = stats.continueStudying;
  const [selectedPreviewImage, setSelectedPreviewImage] = useState(null);

  return (
    <div className="space-y-8 pb-12">
      {/* Editorial Academic Header */}
      <div className="rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <span>Semester 1 (R1G) • Universitas Indraprasta PGRI</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Digital Binder
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Workspace terpadu untuk 8 mata kuliah aktif: telaah modul resmi dosen, bedah materi PPT, rumus matematika presisi bebas broken-render, serta panduan salin ke lembar binder fisik.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-5">
            {onOpenTutor && (
              <button
                onClick={() => onOpenTutor('all')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Buka AI Academic Tutor</span>
              </button>
            )}
            <button
              onClick={() => onSelectSubject(subjects[0]?.id || 'subject-matdas')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-semibold transition-all cursor-pointer"
            >
              <BookMarked className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Mulai Belajar</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Core Computed Metrics (No redundant or fake fallback counts) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Kurikulum</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {stats.totalSubjects}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Mata Kuliah Aktif</p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400 mb-2">
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Pertemuan</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {stats.totalMeetings}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Sesi Perkuliahan</p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between text-violet-600 dark:text-violet-400 mb-2">
            <FileText className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Dokumen</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {stats.totalMaterials}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Modul PDF Resmi Dosen</p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Rangkuman</span>
          </div>
          <div className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {stats.totalSummaries}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Catatan Kuliah Siap</p>
        </div>
      </div>

      {/* Continue Studying Card */}
      {continueItem && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#181B26] border border-indigo-200 dark:border-indigo-500/30 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <Clock className="w-4 h-4" />
                <span>Lanjutkan Belajar</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">
                {continueItem.subject.name} — Pertemuan {continueItem.meeting.meeting_number}: {continueItem.meeting.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Dosen: {continueItem.subject.lecturer} • Jadwal: {continueItem.subject.schedule}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => onSelectMeeting(continueItem.subject.id, continueItem.meeting.id)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Buka Materi Pertemuan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DIRECT SUBJECTS EXPLORER (8 Mata Kuliah Aktif) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
              8 Mata Kuliah Semester 1
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pilih mata kuliah untuk menelusuri materi per pertemuan dan dokumen PDF dosen
            </p>
          </div>
          <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
            {subjects.length} Matkul
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {subjects.map((subj) => {
            const meetingCount = (subj.meetings || []).length;
            const pdfCount = (subj.meetings || []).reduce((acc, m) => acc + (m.materials || []).length, 0);

            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj.id)}
                className="p-4 rounded-xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all cursor-pointer shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${subj.color}15`,
                        color: subj.color,
                        border: `1px solid ${subj.color}30`,
                      }}
                    >
                      {subj.code || 'TI'}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {meetingCount} Sesi
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {subj.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {subj.lecturer}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    {pdfCount} Berkas PDF
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                    <span>Buka</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CHEATSHEET & FORMULA GALLERY (Clean Editorial Cards) */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                <span>Kartu Cheatsheet & Formula Kunci (Format HD)</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono font-semibold">
                  6 Kartu Siap Cetak
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Formula matematika, simbol ANSI flowchart, kaidah EYD V, dan konsep kunci resolusi tinggi.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CHEATSHEET_GALLERY.map((card) => {
            const CardIcon = card.Icon;
            return (
              <div
                key={card.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#181B26] border border-slate-200 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300">
                      <CardIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                      {card.code}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    {card.topics}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedPreviewImage(card)}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-transparent text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Preview</span>
                  </button>
                  <a
                    href={card.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-lg bg-cyan-50 dark:bg-cyan-600/20 hover:bg-cyan-100 dark:hover:bg-cyan-600/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 text-xs font-semibold transition-all flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka HD</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cheatsheet Image Modal Preview */}
      {selectedPreviewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPreviewImage(null)}
        >
          <div
            className="bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  {selectedPreviewImage.title} ({selectedPreviewImage.code})
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Infografis UTS Resmi
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedPreviewImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka Tab Penuh</span>
                </a>
                <button
                  onClick={() => setSelectedPreviewImage(null)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-slate-950">
              <img
                src={selectedPreviewImage.image}
                alt={selectedPreviewImage.title}
                className="max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
