import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  FileText,
  Copy,
  BookOpen,
  ExternalLink,
  Image as ImageIcon,
  Maximize2,
  Eye,
  ShieldCheck,
  Check,
  Code,
  PenTool,
  Download,
  CheckCircle2,
} from 'lucide-react';
import { sanitizeHtml, sanitizeUrl } from '../../lib/security';
import { renderMathInHtml, convertToPhysicalBinderFormat } from '../../lib/latexRenderer';
import { PdfViewerModal } from '../materials/PdfViewerModal';
import { CheatsheetViewerModal } from '../materials/CheatsheetViewerModal';
import { PascalExplorerView } from '../pascal/PascalExplorerView';

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
export const isPdfMaterial = (m) =>
  (m?.type === 'pdf' || getMaterialUrl(m).toLowerCase().endsWith('.pdf')) &&
  !m?.id?.startsWith('mat_ai_') &&
  !m?.title?.includes('Guru AI');

export function formatAcademicHtml(rawHtml) {
  if (!rawHtml || typeof rawHtml !== 'string') return '';
  return renderMathInHtml(rawHtml);
}

export function MeetingDetailView({
  subject,
  meeting,
  onBack,
  onOpenTutor,
  onAddMaterial,
  onDeleteMaterial,
  onToggleProgress,
}) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary', 'pdf', 'cheatsheet', 'pascal'
  const [summaryMode, setSummaryMode] = useState('detail'); // 'detail' (Guru AI), 'standar' (Transkrip GMeet), 'ringkas' (Intisari Kilat)
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [copyHandwritingFeedback, setCopyHandwritingFeedback] = useState(false);

  // Available official PDF materials for this meeting
  const pdfMaterials = (meeting.materials || []).filter(isPdfMaterial);
  const firstPdf = pdfMaterials[0];

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
    const freshPdfs = (meeting.materials || []).filter(isPdfMaterial);
    const freshPdf = freshPdfs[0];
    if (freshPdf) {
      const freshUrl = getMaterialUrl(freshPdf);
      setActiveInlinePdfUrl(freshUrl);
      setActiveInlinePdfTitle(freshPdf.title);
      setSelectedPdfUrl(freshUrl);
      setSelectedPdfTitle(freshPdf.title);
    }
  }, [meeting]);

  const currentSummaryHtml =
    meeting.summaries?.[summaryMode] ||
    meeting.summaries?.detail ||
    meeting.summaries?.standar ||
    '';

  const handleCopySummary = () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = renderMathInHtml(currentSummaryHtml);
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    navigator.clipboard.writeText(plainText).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  };

  const handleCopyHandwriting = () => {
    const cleanNotes = convertToPhysicalBinderFormat(currentSummaryHtml);
    navigator.clipboard.writeText(cleanNotes).then(() => {
      setCopyHandwritingFeedback(true);
      setTimeout(() => setCopyHandwritingFeedback(false), 2000);
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

  const isNotedInBinder = meeting.progress?.is_noted_in_binder;

  return (
    <div className="space-y-6 pb-20">
      {/* 1. TOP BREADCRUMB & CONTEXT */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke {subject.name}</span>
        </button>

        {/* Quick Resource Badges */}
        <div className="flex items-center gap-2 text-xs">
          <span
            className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md"
            style={{
              backgroundColor: `${subject.color}15`,
              color: subject.color,
              border: `1px solid ${subject.color}30`,
            }}
          >
            {subject.code || 'TI'}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {subject.schedule}
          </span>
        </div>
      </div>

      {/* 2. MEETING HEADER BANNER (Editorial Clean Style) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 shadow-sm no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
                Pertemuan {meeting.meeting_number}
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-500 dark:text-slate-400 font-mono">
                {meeting.date}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              {meeting.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Dosen Pengampu: <strong className="text-slate-800 dark:text-slate-200">{subject.lecturer}</strong> • {subject.room}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            {onOpenTutor && (
              <button
                onClick={() =>
                  onOpenTutor(
                    subject.id,
                    `Jelaskan secara mendalam materi ${subject.name} Pertemuan ${meeting.meeting_number}: ${meeting.title} dengan rumus KaTeX dan pembahasan langkah demi langkah!`
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm active:scale-95 cursor-pointer"
                title="Buka AI Tutor untuk tanya jawab seputar materi pertemuan ini"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Tanya AI Tutor</span>
              </button>
            )}

            <button
              onClick={handleCopyHandwriting}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 text-xs font-semibold transition-all cursor-pointer"
              title="Salin catatan dengan rumus matematika bersih siap tulis tangan di binder"
            >
              {copyHandwritingFeedback ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <PenTool className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
              <span>{copyHandwritingFeedback ? 'Format Binder Tersalin!' : 'Salin Format Binder'}</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-semibold transition-all cursor-pointer"
              title="Salin teks catatan ke clipboard"
            >
              {copyFeedback ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copyFeedback ? 'Tersalin!' : 'Salin Teks'}</span>
            </button>

            {onToggleProgress && (
              <button
                onClick={() => onToggleProgress(subject.id, meeting.id, 'is_noted_in_binder')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  isNotedInBinder
                    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isNotedInBinder ? 'text-emerald-500' : 'text-slate-400'}`} />
                <span>{isNotedInBinder ? 'Tercatat di Binder' : 'Tandai Disalin'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. PRIMARY CONTENT TABS (Progressive Disclosure) */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-2 no-print overflow-x-auto">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'summary'
              ? 'bg-indigo-600 text-white shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Catatan & Rangkuman Kuliah</span>
        </button>

        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'pdf'
              ? 'bg-indigo-600 text-white shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
          }`}
        >
          <FileText className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
          <span>Dokumen PDF Dosen ({pdfMaterials.length})</span>
        </button>

        {CHEATSHEET_MAP[subject.id] && (
          <button
            onClick={() => setActiveTab('cheatsheet')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cheatsheet'
                ? 'bg-cyan-600 text-white shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-cyan-500 dark:text-cyan-300" />
            <span>Cheatsheet Formula HD</span>
          </button>
        )}

        {(subject.id === 'subject-algo' || subject.id === 'subject-pascal') && (
          <button
            onClick={() => setActiveTab('pascal')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'pascal'
                ? 'bg-emerald-600 text-white shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            <Code className="w-4 h-4 text-emerald-500 dark:text-emerald-300" />
            <span>Berkas Pascal (.PAS) (24)</span>
          </button>
        )}
      </div>

      {/* TAB 1: CATATAN & RANGKUMAN KULIAH (Focused Reader View) */}
      {activeTab === 'summary' && (
        <div className="space-y-6">
          {/* Mode Switcher Segmented Control */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#181B26] border border-slate-200 dark:border-white/10 rounded-xl no-print max-w-2xl">
            <button
              onClick={() => setSummaryMode('detail')}
              className={`w-full sm:flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                summaryMode === 'detail'
                  ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Modul Guru AI & PPT Dosen</span>
            </button>

            <button
              onClick={() => setSummaryMode('standar')}
              className={`w-full sm:flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                summaryMode === 'standar'
                  ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
              <span>Transkrip GMeet & Catatan</span>
            </button>

            <button
              onClick={() => setSummaryMode('ringkas')}
              className={`w-full sm:flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                summaryMode === 'ringkas'
                  ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Intisari Kilat UTS</span>
            </button>
          </div>

          {/* Context Notice for Active Mode */}
          <div className="text-xs text-slate-500 dark:text-slate-400 px-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            {summaryMode === 'detail' && (
              <span>Menampilkan telaah materi komprehensif mengikuti urutan presentasi PPT dosen, tabel komparasi, dan rumus matematika.</span>
            )}
            {summaryMode === 'standar' && (
              <span>Menampilkan catatan mandiri verbatim ditranskripsikan langsung dari rekaman tatap muka dosen.</span>
            )}
            {summaryMode === 'ringkas' && (
              <span>Menampilkan intisari formula, poin kunci hafalan, dan cheatsheet cepat persiapan ujian.</span>
            )}
          </div>

          {/* Centered Academic Reading Container */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-sm">
            <article
              className="academic-summary-content text-slate-800 dark:text-slate-200 text-[15px] sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(formatAcademicHtml(currentSummaryHtml)) }}
            />
          </div>
        </div>
      )}

      {/* TAB 2: DOKUMEN PDF LENGKAP DARI DOSEN */}
      {activeTab === 'pdf' && (
        <div className="space-y-4 no-print">
          {pdfMaterials.length === 0 ? (
            <div className="p-12 rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 text-center space-y-3">
              <FileText className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-slate-900 dark:text-white font-bold">Belum Ada Berkas PDF Resmi untuk Sesi Ini</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Berkas modul atau slide dosen akan otomatis tampil di sini saat diunggah.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* PDF Control & Switcher Bar */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#181B26] border border-slate-200 dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <FileText className="w-4 h-4 text-indigo-500" />
                      <span>Berkas Slide / Modul Resmi Dosen:</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 font-semibold">
                      {pdfMaterials.length} Berkas Dosen
                    </span>
                  </div>

                  {/* Document Switcher Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {pdfMaterials.map((mat, idx) => {
                      const matUrl = getMaterialUrl(mat);
                      const isSelected = (activeInlinePdfUrl || getMaterialUrl(firstPdf)) === matUrl;

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
                              ? 'bg-indigo-600 text-white shadow-sm font-bold'
                              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/5'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="max-w-[280px] truncate">{mat.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Toolbar Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0 self-start lg:self-center">
                  <button
                    onClick={() => setInlineViewerMode(inlineViewerMode === 'direct' ? 'google' : 'direct')}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Ganti Mode Viewer jika PDF tidak muncul di peramban Anda"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{inlineViewerMode === 'direct' ? 'Mode Google Docs' : 'Mode Direct'}</span>
                  </button>

                  <a
                    href={currentSafePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                    title="Buka Dokumen PDF di Tab Baru Browser"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Tab Baru ↗</span>
                  </a>

                  <a
                    href={currentSafePdfUrl}
                    download
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                    title="Unduh Berkas PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-500" />
                  </a>

                  <button
                    onClick={() => {
                      setSelectedPdfUrl(activeInlinePdfUrl || getMaterialUrl(firstPdf));
                      setSelectedPdfTitle(activeInlinePdfTitle || firstPdf.title);
                      setPdfModalOpen(true);
                    }}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                    title="Perbesar Layar Penuh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF Viewer Frame */}
              <div className="w-full h-[750px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0F111A] shadow-sm relative">
                <iframe
                  key={finalInlineViewerSrc}
                  src={finalInlineViewerSrc}
                  title={activeInlinePdfTitle}
                  className="w-full h-full border-0 bg-white"
                />
              </div>

              {/* Help & Mobile Notice */}
              <div className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#11131B] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>
                    Sedang menampilkan berkas: <strong className="text-slate-800 dark:text-white">{activeInlinePdfTitle}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span>Jika tampilan ponsel terpotong:</span>
                  <button
                    onClick={() => setInlineViewerMode(inlineViewerMode === 'direct' ? 'google' : 'direct')}
                    className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold cursor-pointer"
                  >
                    {inlineViewerMode === 'direct' ? 'Ganti ke Google Docs' : 'Kembali ke Direct'}
                  </button>
                  <span>•</span>
                  <a
                    href={currentSafePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
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
          <div className="p-4 rounded-xl bg-white dark:bg-[#181B26] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div>
              <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                <span>Kartu Cheatsheet HD: {CHEATSHEET_MAP[subject.id].title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20 font-semibold">
                  Resolusi Tinggi 1200px
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Diagram, rumus, dan poin kisi-kisi UTS tersimpan permanen dalam citra resolusi tinggi.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={CHEATSHEET_MAP[subject.id].image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Resolusi Penuh ↗</span>
              </a>
              <a
                href={CHEATSHEET_MAP[subject.id].image}
                download
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-emerald-500" />
                <span>Unduh Gambar</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 p-4 flex items-center justify-center overflow-auto shadow-sm">
            <img
              src={CHEATSHEET_MAP[subject.id].image}
              alt={CHEATSHEET_MAP[subject.id].title}
              className="max-h-[800px] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* TAB 4: PASCAL EXPLORER VIEW */}
      {activeTab === 'pascal' && (subject.id === 'subject-algo' || subject.id === 'subject-pascal') && (
        <div className="space-y-4">
          <PascalExplorerView />
        </div>
      )}

      {/* Fullscreen Modals */}
      <PdfViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        pdfUrl={selectedPdfUrl}
        documentTitle={selectedPdfTitle}
      />

      <CheatsheetViewerModal
        isOpen={cheatsheetModalOpen}
        onClose={() => setCheatsheetModalOpen(false)}
        subjectId={subject.id}
      />
    </div>
  );
}
