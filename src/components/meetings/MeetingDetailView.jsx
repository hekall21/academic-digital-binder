import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  FileText,
  Copy,
  Printer,
  Download,
  BookOpen,
  ExternalLink,
  Image as ImageIcon,
  Maximize2,
  Eye,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { sanitizeHtml, sanitizeUrl } from '../../lib/security';
import { PdfViewerModal } from '../materials/PdfViewerModal';
import { CheatsheetViewerModal } from '../materials/CheatsheetViewerModal';

const CHEATSHEET_MAP = {
  'subject-matdas': { title: 'Matematika Dasar', image: '/images/MATEMATIKA_DASAR_UTS_P1_P4.jpg' },
  'subject-algo': { title: 'Algoritma 1', image: '/images/ALGORITMA_DAN_PASCAL_UTS_P1_P4.jpg' },
  'subject-pascal': { title: 'Pemrograman 1 (Pascal)', image: '/images/ALGORITMA_DAN_PASCAL_UTS_P1_P4.jpg' },
  'subject-ksi': { title: 'Konsep Sistem Informasi', image: '/images/KONSEP_SISTEM_INFORMASI_UTS_P1_P4.jpg' },
  'subject-indo': { title: 'Bahasa Indonesia', image: '/images/BAHASA_INDONESIA_UTS_P1_P4.jpg' },
  'subject-pancasila': { title: 'Pendidikan Pancasila', image: '/images/PENDIDIKAN_PANCASILA_UTS_P1_P4.jpg' },
  'subject-pai': { title: 'Pendidikan Agama Islam', image: '/images/PENDIDIKAN_AGAMA_ISLAM_UTS_P1_P4.jpg' },
};

export const getMaterialUrl = (m) => m?.url || m?.file_url || '';
export const isPdfMaterial = (m) => m?.type === 'pdf' || getMaterialUrl(m).toLowerCase().endsWith('.pdf');

export function MeetingDetailView({
  subject,
  meeting,
  onBack,
}) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary', 'pdf', 'cheatsheet'
  const [contentSubView, setContentSubView] = useState('ai'); // Default to 'ai' (Penjelasan Lengkap Guru AI)
  const [summaryMode, setSummaryMode] = useState('detail'); // Default to 'detail' (Penjelasan Guru AI)
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Available PDF materials for this meeting
  const pdfMaterials = (meeting.materials || []).filter(isPdfMaterial);
  const firstPdf = pdfMaterials[0];
  const aiGuidePdf = pdfMaterials.find((m) => m.title?.includes('Guru AI') || m.id?.startsWith('mat_ai_'));

  // Inline PDF Viewer State
  const [activeInlinePdfUrl, setActiveInlinePdfUrl] = useState(getMaterialUrl(firstPdf));
  const [activeInlinePdfTitle, setActiveInlinePdfTitle] = useState(firstPdf?.title || 'Dokumen PDF Perkuliahan');
  const [inlineViewerMode, setInlineViewerMode] = useState('direct'); // 'direct' or 'google'

  // Modals State
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(getMaterialUrl(firstPdf));
  const [selectedPdfTitle, setSelectedPdfTitle] = useState(firstPdf?.title || 'Dokumen PDF Perkuliahan');
  const [cheatsheetModalOpen, setCheatsheetModalOpen] = useState(false);

  // Synchronize inline PDF when meeting changes
  useEffect(() => {
    const freshPdf = (meeting.materials || []).filter(isPdfMaterial)[0];
    if (freshPdf) {
      const freshUrl = getMaterialUrl(freshPdf);
      setActiveInlinePdfUrl(freshUrl);
      setActiveInlinePdfTitle(freshPdf.title);
      setSelectedPdfUrl(freshUrl);
      setSelectedPdfTitle(freshPdf.title);
    }
  }, [meeting]);

  const currentSummaryHtml = meeting.summaries?.[summaryMode] || meeting.summaries?.standar || '';

  const handleCopySummary = () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentSubView === 'slide' ? (meeting.raw_slide_content || currentSummaryHtml) : currentSummaryHtml;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    navigator.clipboard.writeText(plainText).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  };

  const currentSafePdfUrl = sanitizeUrl(activeInlinePdfUrl);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const absolutePdfUrl = currentSafePdfUrl.startsWith('http') ? currentSafePdfUrl : `${origin}${currentSafePdfUrl}`;
  const inlineGoogleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(absolutePdfUrl)}&embedded=true`;
  const finalInlineViewerSrc =
    inlineViewerMode === 'google'
      ? inlineGoogleViewerUrl
      : `${currentSafePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke {subject.name}</span>
        </button>

        {/* Quick Direct Actions */}
        <div className="flex items-center gap-2 text-xs">
          {pdfMaterials.length > 0 && (
            <button
              onClick={() => {
                setActiveTab('pdf');
                setSelectedPdfUrl(activeInlinePdfUrl || getMaterialUrl(pdfMaterials[0]));
                setSelectedPdfTitle(activeInlinePdfTitle || pdfMaterials[0].title);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600/50 hover:text-white font-medium transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dokumen PDF ({pdfMaterials.length})</span>
            </button>
          )}

          {aiGuidePdf && (
            <button
              onClick={() => {
                setActiveTab('pdf');
                const aiUrl = getMaterialUrl(aiGuidePdf);
                setActiveInlinePdfUrl(aiUrl);
                setActiveInlinePdfTitle(aiGuidePdf.title);
                setSelectedPdfUrl(aiUrl);
                setSelectedPdfTitle(aiGuidePdf.title);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/25 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/40 hover:text-white font-medium transition-all shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Modul Guru AI (PDF)</span>
            </button>
          )}

          {CHEATSHEET_MAP[subject.id] && (
            <button
              onClick={() => setCheatsheetModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-600/30 font-medium transition-colors cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cheatsheet HD (JPG)</span>
            </button>
          )}
        </div>
      </div>

      {/* Meeting Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#181B26] to-slate-900 border border-white/10 no-print">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${subject.color}20`,
                  color: subject.color,
                  border: `1px solid ${subject.color}40`,
                }}
              >
                {subject.name}
              </span>
              <span className="text-xs text-indigo-400 font-mono font-bold">
                Pertemuan {meeting.meeting_number}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {meeting.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {meeting.title}
            </h1>

            <p className="text-sm text-slate-300 mt-1">
              Dosen: {subject.lecturer} • Jadwal: {subject.schedule} • {subject.room}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer"
            >
              {copyFeedback ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copyFeedback ? 'Tersalin!' : 'Salin Teks Catatan'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Detail Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 no-print overflow-x-auto">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'summary'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📖 Rangkuman Akademik & Kisi-Kisi UTS</span>
        </button>

        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'pdf'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>📄 Dokumen PDF Perkuliahan ({pdfMaterials.length})</span>
        </button>

        {CHEATSHEET_MAP[subject.id] && (
          <button
            onClick={() => setActiveTab('cheatsheet')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cheatsheet'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-cyan-300" />
            <span>📐 Cheatsheet Formula HD (JPG)</span>
          </button>
        )}
      </div>

      {/* TAB 1: RANGKUMAN AKADEMIK & KISI-KISI UTS */}
      {activeTab === 'summary' && (
        <div className="space-y-6">
          {/* Dual-View Switcher: Penjelasan Guru AI (Bedah PPT) vs Transkrip Slide Asli Dosen */}
          <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-[#181B26] border border-white/10 rounded-2xl no-print shadow-sm">
            <button
              onClick={() => setContentSubView('ai')}
              className={`w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                contentSubView === 'ai'
                  ? 'bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>🤖 Penjelasan Guru AI (Bedah PPT Dosen, Pengayaan & Sumber)</span>
            </button>

            <button
              onClick={() => setContentSubView('slide')}
              className={`w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                contentSubView === 'slide'
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <FileText className="w-4 h-4 text-cyan-300" />
              <span>📖 Transkrip Slide Modul Dosen (Verbatim)</span>
            </button>
          </div>

          {/* VIEW A: SLIDE & MODUL ASLI DARI DOSEN */}
          {contentSubView === 'slide' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11131B] border border-white/10 shadow-sm leading-relaxed space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 mb-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <h3 className="font-heading font-bold text-sm text-white">
                    Materi Modul PDF Dosen & Ekstraksi Silabus
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {pdfMaterials.length > 0 && (
                    <button
                      onClick={() => setActiveTab('pdf')}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-semibold hover:bg-indigo-600/50 hover:text-white transition-all cursor-pointer shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Buka Tab Pembaca PDF ↗</span>
                    </button>
                  )}
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    Ekstraksi Akademik Resmi
                  </span>
                </div>
              </div>

              <div
                className="academic-summary-content text-slate-200 text-sm sm:text-base space-y-4"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    meeting.raw_slide_content || meeting.summaries?.standar || '<p>Materi sedang dipersiapkan.</p>'
                  ),
                }}
              />
            </div>
          )}

          {/* VIEW B: RANGKUMAN CERDAS */}
          {contentSubView === 'ai' && (
            <div className="space-y-6">
              {/* Mode Selector (Ringkas / Standar / Detail) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#11131B] border border-white/10 no-print">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-semibold">Tingkat Kedalaman:</span>
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/5">
                    {['ringkas', 'standar', 'detail'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setSummaryMode(m)}
                        className={`px-3 py-1 rounded text-xs font-semibold capitalize transition-all cursor-pointer ${
                          summaryMode === m
                            ? m === 'detail'
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow font-bold'
                              : 'bg-indigo-600 text-white shadow'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {m === 'detail' ? '🤖 Detail (Guru AI)' : m === 'ringkas' ? '⚡ Ringkas' : '✅ Standar'}
                      </button>
                    ))}
                  </div>
                </div>

                <span className="text-xs text-slate-400">
                  {summaryMode === 'ringkas'
                    ? '⚡ Ringkas: Glosarium & Intisari Cepat'
                    : summaryMode === 'detail'
                    ? '🤖 Detail Guru AI: Panduan Pembelajaran Lengkap, Intuisi First Principles, Bedah Kasus & Kisi-Kisi UTS'
                    : '✅ Standar: Rangkuman Step-by-Step Berimbang'}
                </span>
              </div>

              {/* Summary Content Body */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11131B] border border-white/10 shadow-sm leading-relaxed">
                <div
                  className="academic-summary-content text-slate-200 text-sm sm:text-base space-y-4"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(currentSummaryHtml) }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: DOKUMEN PDF LENGKAP (MODUL DOSEN & RANGKUMAN MAHASISWA) */}
      {activeTab === 'pdf' && (
        <div className="space-y-4 no-print">
          {pdfMaterials.length === 0 ? (
            <div className="p-12 rounded-2xl bg-[#11131B] border border-white/10 text-center space-y-3">
              <FileText className="w-10 h-10 text-slate-500 mx-auto" />
              <h4 className="text-white font-bold">Belum Ada Berkas PDF untuk Sesi Ini</h4>
              <p className="text-xs text-slate-400">
                Berkas modul dosen atau rangkuman mahasiswa akan ditambahkan ke sesi ini.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* PDF Control & Switcher Bar */}
              <div className="p-4 rounded-xl bg-[#181B26] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-indigo-400" />
                      <span>Pilih Berkas PDF Perkuliahan:</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {pdfMaterials.length} Berkas Tersedia
                    </span>
                  </div>

                  {/* Document Switcher Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {pdfMaterials.map((mat, idx) => {
                      const matUrl = getMaterialUrl(mat);
                      const isSelected = (activeInlinePdfUrl || getMaterialUrl(firstPdf)) === matUrl;
                      const isAiGuide = mat.title?.includes('Guru AI') || mat.id?.startsWith('mat_ai_');

                      return (
                        <button
                          key={mat.id || idx}
                          onClick={() => {
                            setActiveInlinePdfUrl(matUrl);
                            setActiveInlinePdfTitle(mat.title);
                            setSelectedPdfUrl(matUrl);
                            setSelectedPdfTitle(mat.title);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? isAiGuide
                                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md font-bold border border-emerald-400/40'
                                : 'bg-indigo-600 text-white shadow-md font-bold'
                              : isAiGuide
                              ? 'bg-emerald-950/40 text-emerald-300 hover:text-white hover:bg-emerald-900/60 border border-emerald-500/30 font-medium'
                              : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                          }`}
                        >
                          {isAiGuide ? (
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                          )}
                          <span className="max-w-[320px] truncate">{mat.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Toolbar Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0 self-start lg:self-center">
                  <button
                    onClick={() => setInlineViewerMode(inlineViewerMode === 'direct' ? 'google' : 'direct')}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Ganti Mode Viewer jika PDF tidak muncul di peramban Anda"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{inlineViewerMode === 'direct' ? 'Mode Google Docs' : 'Mode Direct'}</span>
                  </button>

                  <a
                    href={currentSafePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow cursor-pointer"
                    title="Buka Dokumen PDF di Tab Baru Browser"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Tab Baru ↗</span>
                  </a>

                  <a
                    href={currentSafePdfUrl}
                    download
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                    title="Unduh Berkas PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                  </a>

                  <button
                    onClick={() => {
                      setSelectedPdfUrl(activeInlinePdfUrl || getMaterialUrl(firstPdf));
                      setSelectedPdfTitle(activeInlinePdfTitle || firstPdf.title);
                      setPdfModalOpen(true);
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                    title="Perbesar Layar Penuh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF Viewer Frame */}
              <div className="w-full h-[800px] rounded-2xl overflow-hidden border border-white/10 bg-[#0F111A] shadow-2xl relative">
                <iframe
                  key={finalInlineViewerSrc}
                  src={finalInlineViewerSrc}
                  title={activeInlinePdfTitle}
                  className="w-full h-full border-0 bg-white"
                />
              </div>

              {/* Help & Mobile Notice */}
              <div className="px-4 py-2.5 rounded-xl bg-[#11131B] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Sedang menampilkan: <strong className="text-white">{activeInlinePdfTitle}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span>Jika tampilan di HP/ponsel tidak muncul:</span>
                  <button
                    onClick={() => setInlineViewerMode(inlineViewerMode === 'direct' ? 'google' : 'direct')}
                    className="text-cyan-400 hover:text-cyan-300 underline font-semibold cursor-pointer"
                  >
                    {inlineViewerMode === 'direct' ? 'Ganti ke Mode Google Docs' : 'Kembali ke Direct'}
                  </button>
                  <span>•</span>
                  <a
                    href={currentSafePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 underline font-semibold"
                  >
                    Buka Tab Baru ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CHEATSHEET HD (JPG) VIEW */}
      {activeTab === 'cheatsheet' && CHEATSHEET_MAP[subject.id] && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#181B26] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold font-heading text-white flex items-center gap-2">
                <span>Kartu Cheatsheet HD: {CHEATSHEET_MAP[subject.id].title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Resolusi Tinggi 1200px • Bebas Error Render
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Formula matematika, simbol ANSI flowchart, aturan EYD V, dan konsep kunci terkunci permanen dalam format JPG.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={CHEATSHEET_MAP[subject.id].image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Tab Penuh ↗</span>
              </a>
              <a
                href={CHEATSHEET_MAP[subject.id].image}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh JPG</span>
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090A0F] border border-white/10 flex justify-center overflow-x-auto shadow-2xl">
            <img
              src={CHEATSHEET_MAP[subject.id].image}
              alt={`Cheatsheet ${CHEATSHEET_MAP[subject.id].title}`}
              className="max-w-full h-auto rounded-xl shadow-lg border border-white/10"
            />
          </div>
        </div>
      )}

      {/* Interactive PDF Reader Modal (Fullscreen) */}
      <PdfViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        initialPdfUrl={selectedPdfUrl}
        initialTitle={selectedPdfTitle}
        availableMaterials={meeting.materials || []}
        subjectName={subject.name}
        meetingNumber={meeting.meeting_number}
      />

      {/* Interactive HD Cheatsheet Modal */}
      {CHEATSHEET_MAP[subject.id] && (
        <CheatsheetViewerModal
          isOpen={cheatsheetModalOpen}
          onClose={() => setCheatsheetModalOpen(false)}
          imageUrl={CHEATSHEET_MAP[subject.id].image}
          title={CHEATSHEET_MAP[subject.id].title}
          subjectName={subject.name}
        />
      )}
    </div>
  );
}
