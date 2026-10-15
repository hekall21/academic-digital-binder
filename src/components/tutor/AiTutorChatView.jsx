import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  BookOpen,
  FileText,
  Copy,
  Check,
  Upload,
  RefreshCw,
  Clock,
  Brain,
  ShieldCheck,
  ChevronDown,
  Info,
  Maximize2,
  PenTool,
  Hash,
} from 'lucide-react';
import { askAiTutor, TUTOR_MODES } from '../../lib/aiTutorEngine';
import { ingestDocumentIntoRag } from '../../lib/documentRagEngine';
import { formatTutorResponseToHtml, convertToPhysicalBinderFormat } from '../../lib/latexRenderer';
import { sanitizeHtml } from '../../lib/security';

const QUICK_PROMPTS = [
  {
    label: 'Turunan Aljabar via Limit',
    subjectId: 'subject-matdas',
    text: 'Jelaskan turunan fungsi aljabar dari dasar limit, berikan rumus, contoh soal, dan pembahasan langkah demi langkah berdasarkan PDF kuliah saya.',
  },
  {
    label: '10 Rumus Limit Trigonometri',
    subjectId: 'subject-matdas',
    text: 'Jelaskan 10 rumus baku limit trigonometri untuk x mendekati 0 dan cara mengubah bentuk 1 - cos ax!',
  },
  {
    label: 'Simbol ANSI Flowchart',
    subjectId: 'subject-algo',
    text: 'Jelaskan simbol-simbol standar ANSI untuk flowchart dan kaidah pembuatan alur program yang benar.',
  },
  {
    label: 'Hukum Titik Koma Pascal',
    subjectId: 'subject-pascal',
    text: 'Jelaskan aturan titik koma pada percabangan IF-THEN-ELSE di Pascal dan berikan contoh nested IF.',
  },
  {
    label: 'Piramida DIKW (KSI)',
    subjectId: 'subject-ksi',
    text: 'Jelaskan konsep piramida DIKW (Data, Informasi, Knowledge, Wisdom) dan komponen pembangun CBIS.',
  },
  {
    label: '4 Landasan Pancasila',
    subjectId: 'subject-pancasila',
    text: 'Jelaskan 4 landasan pendidikan Pancasila di perguruan tinggi (Historis, Kultural, Yuridis, Filosofis).',
  },
];

export function AiTutorChatView({
  subjects = [],
  initialSubjectId = 'all',
  initialQuery = '',
}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubjectId);
  const [tutorMode, setTutorMode] = useState(TUTOR_MODES.COMPREHENSIVE);
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [copyFeedbackId, setCopyFeedbackId] = useState(null);
  const [copyTypeFeedback, setCopyTypeFeedback] = useState('');
  const [uploadStatus, setUploadStatus] = useState(null);

  const fileInputRef = useRef(null);
  const chatBottomRef = useRef(null);

  // Initial welcome message
  const [messages, setMessages] = useState([
    {
      id: 'welcome_msg',
      sender: 'ai',
      timestamp: 'Baru saja',
      text: `Halo Haikel! Saya adalah **AI Academic Tutor & RAG Companion** untuk 8 mata kuliah Anda di Universitas Indraprasta PGRI (Unindra).

Saya siap membantu Anda dengan:
- 📐 **Matematika & Kalkulus**: Menjelaskan konsep dari dasar, rumus matematis LaTeX (KaTeX), dan pembahasan langkah demi langkah tanpa melompat.
- 📄 **Pemahaman Dokumen PDF**: Mengambil kutipan dan dalil langsung dari modul PDF dosen (termasuk modul Pertemuan 6 Matematika Dasar).
- 📓 **Catatan Buku Tulis Fisik**: Menyediakan format salinan bersih untuk dituliskan ke binder kertas Anda.
- ⚡ **Pemrograman & Sistem**: Flowchart ANSI, sintaks Free Pascal, arsitektur sistem informasi, hingga kisi-kisi UTS.

Silakan pilih topik di bawah atau ketikkan pertanyaan Anda secara bebas!`,
      sources: [
        { documentTitle: '1792035539_Pert_6_Matematika_-_Turunan_Aljabar_RG.pdf', pageNumber: 8, subjectName: 'Matematika Dasar' },
        { documentTitle: 'algo_p3_flowchart_ansi.pdf', pageNumber: 1, subjectName: 'Algoritma 1' },
      ],
    },
  ]);

  // Auto scroll to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const activeSubject = subjects.find((s) => s.id === selectedSubjectId);
  const activeSubjectName = activeSubject ? activeSubject.name : 'Semua 8 Mata Kuliah';

  // Handle Send Message
  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || loading) return;

    const userMessageId = `user_${Date.now()}`;
    const userMsg = {
      id: userMessageId,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const response = await askAiTutor({
        query,
        subjectId: selectedSubjectId,
        subjectName: activeSubjectName,
        mode: tutorMode,
        onStream: (statusText) => setLoadingStatus(statusText),
      });

      const aiMsg = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: response.answer,
        sources: response.sources || [],
        isExternal: response.isExternal,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('[AI Tutor Error]', err);
      const errorMsg = {
        id: `err_${Date.now()}`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Mohon maaf, terjadi kendala saat memproses jawaban: ${err.message}. Silakan coba ulangi atau periksa koneksi.`,
        sources: [],
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
      setLoadingStatus('');
    }
  };

  // Copy standard response
  const handleCopyStandard = (msgId, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedbackId(msgId);
      setCopyTypeFeedback('standard');
      setTimeout(() => setCopyFeedbackId(null), 2000);
    });
  };

  // Copy physical notebook handwriting format
  const handleCopyHandwriting = (msgId, text) => {
    const cleanNotes = convertToPhysicalBinderFormat(text);
    navigator.clipboard.writeText(cleanNotes).then(() => {
      setCopyFeedbackId(msgId);
      setCopyTypeFeedback('handwriting');
      setTimeout(() => setCopyFeedbackId(null), 2000);
    });
  };

  // Handle PDF upload into RAG
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadStatus({ loading: true, message: `Membaca & mengekstrak ${file.name}...` });

    try {
      const result = await ingestDocumentIntoRag({
        fileOrBuffer: file,
        documentTitle: file.name,
        subjectId: selectedSubjectId === 'all' ? 'subject-matdas' : selectedSubjectId,
        subjectName: activeSubjectName,
        meetingNumber: 1,
      });

      if (result.success) {
        setUploadStatus({
          loading: false,
          success: true,
          message: `Berhasil mengindeks ${result.documentTitle} (${result.totalPages} Halaman, ${result.chunksCreated} potongan semantik)! AI Tutor kini memahami dokumen ini.`,
        });
      } else {
        setUploadStatus({
          loading: false,
          success: false,
          message: result.error || 'Gagal membaca dokumen PDF.',
        });
      }
    } catch (err) {
      setUploadStatus({
        loading: false,
        success: false,
        message: err.message || 'Terjadi kesalahan sistem.',
      });
    }

    setTimeout(() => setUploadStatus(null), 6000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] min-h-[600px] rounded-2xl bg-[#0B0D14] border border-white/10 shadow-2xl overflow-hidden">
      {/* Top Header & Settings Bar */}
      <div className="p-4 sm:px-6 bg-gradient-to-r from-slate-900 via-[#131622] to-slate-900 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-extrabold font-heading text-white">
                AI Academic Tutor & RAG Companion
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                KaTeX Active
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Menjawab berdasarkan modul PDF resmi perkuliahan Unindra dengan rumus presisi
            </p>
          </div>
        </div>

        {/* Filters & Control Options */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Subject Filter */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 border border-white/10 rounded-xl px-2.5 py-1.5">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-white">Semua 8 Mata Kuliah</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 border border-white/10 rounded-xl px-2.5 py-1.5">
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <select
              value={tutorMode}
              onChange={(e) => setTutorMode(e.target.value)}
              className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <option value={TUTOR_MODES.COMPREHENSIVE} className="bg-slate-900 text-white">
                Mode: Tutor Komprehensif (8 Bab)
              </option>
              <option value={TUTOR_MODES.PROBLEM_SOLVER} className="bg-slate-900 text-white">
                Mode: Pemecahan Soal Langkah demi Langkah
              </option>
              <option value={TUTOR_MODES.HANDWRITING} className="bg-slate-900 text-white">
                Mode: Catatan Buku Tulis Fisik (Binder)
              </option>
              <option value={TUTOR_MODES.QUICK} className="bg-slate-900 text-white">
                Mode: Tanya Jawab Kilat
              </option>
            </select>
          </div>

          {/* Ingest PDF Button */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white border border-indigo-500/40 font-semibold transition-all cursor-pointer"
            title="Unggah dan indeks dokumen PDF perkuliahan baru ke dalam memori RAG"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Indeks PDF Baru</span>
          </button>
        </div>
      </div>

      {/* Upload Notification Alert */}
      {uploadStatus && (
        <div
          className={`px-4 py-2.5 text-xs font-medium border-b flex items-center justify-between ${
            uploadStatus.loading
              ? 'bg-indigo-950/40 text-indigo-300 border-indigo-500/30'
              : uploadStatus.success
              ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
              : 'bg-rose-950/40 text-rose-300 border-rose-500/30'
          }`}
        >
          <div className="flex items-center gap-2">
            {uploadStatus.loading && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
            {uploadStatus.success && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{uploadStatus.message}</span>
          </div>
          <button onClick={() => setUploadStatus(null)} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>
      )}

      {/* Main Chat Message Scroll View */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
            >
              <div className="flex items-center gap-2 mb-1 px-1 text-[11px] text-slate-400">
                <span className="font-semibold text-white">
                  {isUser ? 'Anda (Haikel)' : 'Academic AI Tutor'}
                </span>
                <span>•</span>
                <span>{msg.timestamp}</span>
                {!isUser && msg.sources && msg.sources.length > 0 && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 font-mono">
                    <FileText className="w-3 h-3" />
                    <span>{msg.sources.length} Dokumen RAG</span>
                  </span>
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`rounded-2xl p-4 sm:p-6 text-sm leading-relaxed max-w-3xl ${
                  isUser
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                    : 'bg-[#121520] text-slate-200 border border-white/10 rounded-tl-none shadow-xl w-full'
                }`}
              >
                {isUser ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <div className="space-y-4">
                    {/* Rendered Markdown with KaTeX math */}
                    <div
                      className="academic-tutor-content text-slate-200"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(formatTutorResponseToHtml(msg.text)),
                      }}
                    />

                    {/* Sources Badge Footer */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>Dasar Rujukan Dokumen:</span>
                        </span>
                        {msg.sources.map((src, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-indigo-300 border border-indigo-500/20"
                            title={src.topic || src.documentTitle}
                          >
                            📄 {src.documentTitle} (Hal/Slide {src.pageNumber})
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Bar for AI Message */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyStandard(msg.id, msg.text)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/5"
                          title="Salin seluruh jawaban dalam format Markdown standar"
                        >
                          {copyFeedbackId === msg.id && copyTypeFeedback === 'standard' ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>
                            {copyFeedbackId === msg.id && copyTypeFeedback === 'standard'
                              ? 'Tersalin!'
                              : 'Salin Jawaban'}
                          </span>
                        </button>

                        <button
                          onClick={() => handleCopyHandwriting(msg.id, msg.text)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 transition-colors cursor-pointer font-medium"
                          title="Ubah rumus menjadi teks bersih siap ditulis dengan pena di buku binder"
                        >
                          {copyFeedbackId === msg.id && copyTypeFeedback === 'handwriting' ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <PenTool className="w-3.5 h-3.5 text-amber-400" />
                          )}
                          <span>
                            {copyFeedbackId === msg.id && copyTypeFeedback === 'handwriting'
                              ? 'Format Binder Tersalin!'
                              : 'Salin Format Binder Kertas'}
                          </span>
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          handleSendMessage(
                            `Tolong berikan contoh soal latihan lain beserta pembahasan langkah demi langkah mengenai topik tadi!`
                          )
                        }
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 underline font-medium cursor-pointer"
                      >
                        + Berikan Contoh Soal Lain
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Loading Spinner Indicator */}
        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
            </div>
            <div className="p-4 rounded-2xl bg-[#121520] border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">AI Tutor sedang meneliti dokumen...</span>
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">{loadingStatus}</p>
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Quick Prompt Pills Bar */}
      <div className="px-4 py-2 bg-[#0E101A] border-t border-white/10 overflow-x-auto flex items-center gap-2 scrollbar-none flex-shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap flex items-center gap-1">
          <Hash className="w-3 h-3 text-indigo-400" />
          <span>Topik Populer:</span>
        </span>
        {QUICK_PROMPTS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedSubjectId(p.subjectId);
              setInputQuery(p.text);
            }}
            className="px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Bottom Message Input Area */}
      <div className="p-4 bg-[#11131B] border-t border-white/10 flex-shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-3"
        >
          <div className="flex-1 relative">
            <textarea
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder={`Tanyakan materi ${activeSubjectName} (Contoh: "Jelaskan turunan aljabar dengan limit dan rumus KaTeX")...`}
              rows={1}
              className="w-full bg-[#181B26] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none max-h-32"
            />
          </div>

          <button
            type="submit"
            disabled={!inputQuery.trim() || loading}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer flex-shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Kirim</span>
          </button>
        </form>
      </div>
    </div>
  );
}
