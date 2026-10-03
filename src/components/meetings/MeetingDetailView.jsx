import React, { useState, useEffect, useRef } from 'react';
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
  Mic,
  Upload,
  Edit3,
  Save,
  Trash2,
  Radio,
  Square,
  Play,
  Volume2,
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
export const isPdfMaterial = (m) =>
  (m?.type === 'pdf' || getMaterialUrl(m).toLowerCase().endsWith('.pdf')) &&
  !m?.id?.startsWith('mat_ai_') &&
  !m?.title?.includes('Guru AI');

export function MeetingDetailView({
  subject,
  meeting,
  onBack,
}) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary', 'transcript', 'pdf', 'cheatsheet'
  const [summaryMode, setSummaryMode] = useState('standar'); // Default to student summary ('standar'), user can switch to 'detail' (Guru AI) or 'ringkas'
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Transcript states
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [transcriptDraft, setTranscriptDraft] = useState(meeting.transcripts?.[0]?.content || '');
  const [copyTranscriptFeedback, setCopyTranscriptFeedback] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedMediaFile, setSelectedMediaFile] = useState(null);
  const [mediaPreviewUrl, setMediaPreviewUrl] = useState(null);

  // Available official PDF materials for this meeting (excluding AI duplicates)
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

  // Synchronize inline PDF and transcripts when meeting changes
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
    setTranscriptDraft(meeting.transcripts?.[0]?.content || '');
    setIsEditingTranscript(false);
  }, [meeting]);

  const currentTranscript = meeting.transcripts?.[0]?.content || transcriptDraft;
  const currentSummaryHtml = meeting.summaries?.[summaryMode] || meeting.summaries?.standar || meeting.summaries?.detail || '';

  const handleCopySummary = () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = currentSummaryHtml;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    navigator.clipboard.writeText(plainText).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  };

  const handleCopyTranscript = () => {
    navigator.clipboard.writeText(currentTranscript).then(() => {
      setCopyTranscriptFeedback(true);
      setTimeout(() => setCopyTranscriptFeedback(false), 2000);
    });
  };

  const handleMediaFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedMediaFile(file);
      const url = URL.createObjectURL(file);
      setMediaPreviewUrl(url);
    }
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
              <span>Dokumen PDF Dosen ({pdfMaterials.length})</span>
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
              <span>{copyFeedback ? 'Tersalin!' : 'Salin Teks'}</span>
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
          <span>📖 Rangkuman & Catatan Kuliah</span>
        </button>

        <button
          onClick={() => setActiveTab('transcript')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'transcript'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Mic className="w-4 h-4 text-cyan-400" />
          <span>🎙️ Rekaman & Transkrip AI (GMeet)</span>
          {currentTranscript && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Transkrip Tersedia" />
          )}
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
          <span>📄 Dokumen PDF Dosen ({pdfMaterials.length})</span>
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

      {/* TAB 1: RANGKUMAN & CATATAN KULIAH */}
      {activeTab === 'summary' && (
        <div className="space-y-6">
          {/* 3-Way Mode Switcher: Catatan Mahasiswa vs Guru AI (Bedah Slide) vs Intisari Kilat */}
          <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-[#181B26] border border-white/10 rounded-2xl no-print shadow-sm">
            <button
              onClick={() => setSummaryMode('standar')}
              className={`w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                summaryMode === 'standar'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>📝 Rangkuman Mahasiswa (Transkripsi GMeet & Catatan Kuliah)</span>
            </button>

            <button
              onClick={() => setSummaryMode('detail')}
              className={`w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                summaryMode === 'detail'
                  ? 'bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>🤖 Bedah Slide Guru AI (Slide-by-Slide PPT Dosen & Pengayaan)</span>
            </button>

            <button
              onClick={() => setSummaryMode('ringkas')}
              className={`w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                summaryMode === 'ringkas'
                  ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Clock className="w-4 h-4 text-amber-300" />
              <span>⚡ Intisari Kilat UTS (Cheatsheet)</span>
            </button>
          </div>

          {/* Mode Context Status Badge */}
          {summaryMode === 'standar' && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>
                  <strong>📝 Catatan Asli Mahasiswa:</strong> Disusun dan ditranskripsikan langsung dari rekaman suara Google Meet & kuliah tatap muka dosen oleh Muhammad Haikel Saleh.
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 whitespace-nowrap self-start sm:self-center">
                Verbatim Rekaman Kelas
              </span>
            </div>
          )}

          {summaryMode === 'detail' && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong>🤖 Bedah Slide Guru AI:</strong> Penjelasan setiap slide PPT dosen secara berurutan, singkat dan padat, disertai materi pengayaan first principles dan sumber resmi di bagian paling bawah.
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 whitespace-nowrap self-start sm:self-center">
                Slide-by-Slide + Pengayaan
              </span>
            </div>
          )}

          {summaryMode === 'ringkas' && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  <strong>⚡ Intisari Kilat & Poin Kunci Ujian:</strong> Definisi baku, formula, kaidah mutlak, dan rangkuman review cepat 5 menit untuk persiapan kuis & UTS.
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 whitespace-nowrap self-start sm:self-center">
                Cheatsheet Cepat
              </span>
            </div>
          )}

          {/* Summary Content Body */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#11131B] border border-white/10 shadow-sm leading-relaxed">
            <div
              className="academic-summary-content text-slate-200 text-sm sm:text-base space-y-4"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(currentSummaryHtml) }}
            />
          </div>
        </div>
      )}

      {/* TAB 2: REKAMAN SUARA & TRANSKRIP GMEET */}
      {activeTab === 'transcript' && (
        <div className="space-y-6 no-print">
          {/* UPLOAD & RECORDING CONTROL PANEL */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#181B26] to-[#12141F] border border-white/10 shadow-lg space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Transkrip Perkuliahan Google Meet & Suara Kelas</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-white">
                  Rekaman Suara Dosen & Transkrip Perkuliahan
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Catatan transkripsi suara yang merekam secara langsung saat dosen menerangkan materi kuliah di kelas tatap muka atau Google Meet.
                </p>
              </div>

              {/* Action Buttons: Copy, Edit, Upload */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*,video/*"
                  className="hidden"
                  onChange={handleMediaFileChange}
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lampirkan Rekaman Audio</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyTranscript}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow cursor-pointer"
                >
                  {copyTranscriptFeedback ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copyTranscriptFeedback ? 'Tersalin!' : 'Salin Transkrip'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-all cursor-pointer"
                >
                  {isEditingTranscript ? <Save className="w-3.5 h-3.5 text-emerald-400" /> : <Edit3 className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isEditingTranscript ? 'Selesai Edit' : 'Edit Transkrip'}</span>
                </button>
              </div>
            </div>

            {/* Media Player if selected */}
            {mediaPreviewUrl && (
              <div className="p-3 bg-black/40 rounded-xl border border-white/10 flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <audio controls src={mediaPreviewUrl} className="w-full h-8" />
              </div>
            )}
          </div>

          {/* Transcript Viewer / Editor */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Isi Transkrip Rekaman:</span>
              <span>{currentTranscript.length} karakter</span>
            </div>

            {isEditingTranscript ? (
              <textarea
                value={transcriptDraft}
                onChange={(e) => setTranscriptDraft(e.target.value)}
                rows={14}
                className="w-full p-4 rounded-2xl bg-[#11131B] border border-indigo-500 text-slate-200 text-sm font-sans focus:outline-none leading-relaxed"
                placeholder="Tuliskan atau tempel transkrip rekaman suara kuliah dosen di sini..."
              />
            ) : (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11131B] border border-white/10 text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-wrap select-text max-h-[600px] overflow-y-auto">
                {currentTranscript || (
                  <div className="text-center py-8 text-slate-400 space-y-2">
                    <Mic className="w-8 h-8 mx-auto text-slate-600" />
                    <p className="font-semibold text-slate-300">Belum ada transkrip rekaman suara untuk pertemuan ini.</p>
                    <p className="text-xs text-slate-500">
                      Anda dapat menekan tombol <strong>"Edit Transkrip"</strong> di atas untuk menambahkan transkripsi rekaman GMeet atau kelas tatap muka.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: DOKUMEN PDF LENGKAP DARI DOSEN */}
      {activeTab === 'pdf' && (
        <div className="space-y-4 no-print">
          {pdfMaterials.length === 0 ? (
            <div className="p-12 rounded-2xl bg-[#11131B] border border-white/10 text-center space-y-3">
              <FileText className="w-10 h-10 text-slate-500 mx-auto" />
              <h4 className="text-white font-bold">Belum Ada Berkas PDF Resmi untuk Sesi Ini</h4>
              <p className="text-xs text-slate-400">
                Berkas modul atau slide dosen akan otomatis tampil di sini.
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
                      <span>Pilih Berkas Slide / Modul Resmi Dosen:</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
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
                              ? 'bg-indigo-600 text-white shadow-md font-bold'
                              : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5 flex-shrink-0" />
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
                    Sedang menampilkan berkas resmi: <strong className="text-white">{activeInlinePdfTitle}</strong>
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

      {/* TAB 4: CHEATSHEET HD (JPG) VIEW */}
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Tab Penuh ↗</span>
              </a>
              <a
                href={CHEATSHEET_MAP[subject.id].image}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold cursor-pointer"
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
        availableMaterials={pdfMaterials}
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
