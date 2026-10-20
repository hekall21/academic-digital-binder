import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  BookOpen,
  FileText,
  Copy,
  Check,
  Brain,
  ShieldCheck,
  PenTool,
  Hash,
} from 'lucide-react';
import { askAiTutor, TUTOR_MODES } from '../../lib/aiTutorEngine';
import { formatTutorResponseToHtml, convertToPhysicalBinderFormat } from '../../lib/latexRenderer';
import { sanitizeHtml } from '../../lib/security';

const QUICK_PROMPTS = [
  {
    label: 'Paket Latihan Limit & Turunan (10 Soal)',
    subjectId: 'subject-matdas',
    text: 'Jelaskan pembahasan tuntas paket latihan Limit Aljabar (akar & faktorisasi), Limit Trigonometri, dan Turunan Aljabar (definisi limit & diferensial) langkah demi langkah dengan rumus KaTeX!',
  },
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
- 📄 **Pemahaman Dokumen PDF**: Mengambil kutipan dan dalil langsung dari modul PDF dosen (termasuk modul Pertemuan 5 & 6 Matematika Dasar).
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

  const handleCopyStandard = (msgId, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedbackId(msgId);
      setCopyTypeFeedback('standard');
      setTimeout(() => setCopyFeedbackId(null), 2000);
    });
  };

  const handleCopyHandwriting = (msgId, text) => {
    const cleanNotes = convertToPhysicalBinderFormat(text);
    navigator.clipboard.writeText(cleanNotes).then(() => {
      setCopyFeedbackId(msgId);
      setCopyTypeFeedback('handwriting');
      setTimeout(() => setCopyFeedbackId(null), 2000);
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] min-h-[600px] rounded-2xl bg-white dark:bg-[#0B0D14] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
      {/* Top Header & Settings Bar */}
      <div className="p-4 sm:px-6 bg-slate-50 dark:bg-[#131622] border-b border-slate-200 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-extrabold font-heading text-slate-900 dark:text-white">
                AI Academic Tutor & RAG Companion
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-bold">
                KaTeX Active
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Menjawab berdasarkan modul PDF resmi perkuliahan Unindra dengan rumus KaTeX presisi
            </p>
          </div>
        </div>

        {/* Filters & Control Options */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Subject Filter */}
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-2.5 py-1.5">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="bg-transparent text-slate-800 dark:text-white text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Semua 8 Mata Kuliah</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-2.5 py-1.5">
            <Brain className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <select
              value={tutorMode}
              onChange={(e) => setTutorMode(e.target.value)}
              className="bg-transparent text-slate-800 dark:text-white text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <option value={TUTOR_MODES.COMPREHENSIVE} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                Mode: Tutor Komprehensif (8 Bab)
              </option>
              <option value={TUTOR_MODES.PROBLEM_SOLVER} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                Mode: Pemecahan Soal Langkah demi Langkah
              </option>
              <option value={TUTOR_MODES.HANDWRITING} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                Mode: Catatan Buku Tulis Fisik (Binder)
              </option>
              <option value={TUTOR_MODES.QUICK} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                Mode: Tanya Jawab Kilat
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Chat Message Scroll View */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
            >
              <div className="flex items-center gap-2 mb-1 px-1 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-white">
                  {isUser ? 'Anda (Haikel)' : 'Academic AI Tutor'}
                </span>
                <span>•</span>
                <span>{msg.timestamp}</span>
                {!isUser && msg.sources && msg.sources.length > 0 && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-500/20 font-mono">
                    <FileText className="w-3 h-3" />
                    <span>{msg.sources.length} Rujukan RAG</span>
                  </span>
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`rounded-2xl p-4 sm:p-6 text-sm leading-relaxed max-w-3xl ${
                  isUser
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm'
                    : 'bg-slate-50 dark:bg-[#121520] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 rounded-tl-none shadow-sm w-full'
                }`}
              >
                {isUser ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <div className="space-y-4">
                    {/* Rendered Markdown with KaTeX math */}
                    <div
                      className="academic-tutor-content text-slate-800 dark:text-slate-200"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(formatTutorResponseToHtml(msg.text)),
                      }}
                    />

                    {/* Sources Badge Footer */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-500" />
                          <span>Dasar Rujukan Dokumen:</span>
                        </span>
                        {msg.sources.map((src, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-indigo-500/20"
                            title={src.topic || src.documentTitle}
                          >
                            📄 {src.documentTitle} (Hal {src.pageNumber})
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Bar for AI Message */}
                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyStandard(msg.id, msg.text)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-white/5"
                          title="Salin seluruh jawaban dalam format Markdown standar"
                        >
                          {copyFeedbackId === msg.id && copyTypeFeedback === 'standard' ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 transition-colors cursor-pointer font-medium"
                          title="Ubah rumus menjadi teks bersih siap ditulis dengan pena di buku binder"
                        >
                          {copyFeedbackId === msg.id && copyTypeFeedback === 'handwriting' ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <PenTool className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          )}
                          <span>
                            {copyFeedbackId === msg.id && copyTypeFeedback === 'handwriting'
                              ? 'Format Binder Tersalin!'
                              : 'Salin Format Binder'}
                          </span>
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          handleSendMessage(
                            `Tolong berikan contoh soal latihan lain beserta pembahasan langkah demi langkah mengenai topik tadi!`
                          )
                        }
                        className="text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline font-medium cursor-pointer"
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
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin" />
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">AI Tutor sedang menganalisis dokumen...</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{loadingStatus}</p>
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Quick Prompt Pills Bar */}
      <div className="px-4 py-2 bg-slate-100 dark:bg-[#0E101A] border-t border-slate-200 dark:border-white/10 overflow-x-auto flex items-center gap-2 flex-shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap flex items-center gap-1 font-mono">
          <Hash className="w-3 h-3 text-indigo-500" />
          <span>Topik Diskusi:</span>
        </span>
        {QUICK_PROMPTS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedSubjectId(p.subjectId);
              setInputQuery(p.text);
            }}
            className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Bottom Message Input Area */}
      <div className="p-4 bg-white dark:bg-[#11131B] border-t border-slate-200 dark:border-white/10 flex-shrink-0">
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
              className="w-full bg-slate-50 dark:bg-[#181B26] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none max-h-32"
            />
          </div>

          <button
            type="submit"
            disabled={!inputQuery.trim() || loading}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer flex-shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Kirim</span>
          </button>
        </form>
      </div>
    </div>
  );
}
