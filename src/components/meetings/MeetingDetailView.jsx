import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  FileText,
  Upload,
  Link as LinkIcon,
  Mic,
  Copy,
  Printer,
  Download,
  CheckCircle2,
  FileCheck,
  Check,
  BookOpen,
  Trash2,
  Plus,
  Play,
  Pause,
  Video,
  Music,
  Square,
  Radio,
  FileAudio,
  FileVideo,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { generateSummary, generateHandwritingFormat, SUMMARY_MODES } from '../../lib/aiSummaryEngine';
import { transcribeMediaFile } from '../../lib/transcriptionEngine';

export function MeetingDetailView({
  subject,
  meeting,
  onBack,
  onToggleProgress,
  onAddMaterial,
  onDeleteMaterial,
  onUpdateTranscript,
  onUpdateSummary,
}) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary', 'handwriting', 'materials', 'transcript'
  const [summaryMode, setSummaryMode] = useState('standar'); // 'ringkas', 'standar', 'detail'
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiProgress, setAiProgress] = useState({ pct: 0, msg: '' });
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [copyTranscriptFeedback, setCopyTranscriptFeedback] = useState(false);

  // Materials Modal / Form State
  const [newMaterialTitle, setNewMaterialTitle] = useState('');
  const [newMaterialType, setNewMaterialType] = useState('pdf');
  const [newMaterialUrl, setNewMaterialUrl] = useState('');

  // Transcript Edit State
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [transcriptDraft, setTranscriptDraft] = useState(
    meeting.transcripts?.[0]?.content || ''
  );

  // Audio / Video Recording & AI Transcription State
  const [selectedMediaFile, setSelectedMediaFile] = useState(null);
  const [mediaPreviewUrl, setMediaPreviewUrl] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcribeProgress, setTranscribeProgress] = useState({ pct: 0, msg: '' });

  // Live Microphone Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recordTimer, setRecordTimer] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);
  const fileInputRef = useRef(null);

  // Synchronize transcriptDraft when meeting changes
  useEffect(() => {
    setTranscriptDraft(meeting.transcripts?.[0]?.content || '');
  }, [meeting]);

  // Clean up object URLs on unmount or file change
  useEffect(() => {
    return () => {
      if (mediaPreviewUrl && mediaPreviewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(mediaPreviewUrl);
      }
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [mediaPreviewUrl]);

  // Handle Audio / Video File Selection (MP4, MP3, WAV, M4A, etc.)
  const handleMediaFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (mediaPreviewUrl && mediaPreviewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(mediaPreviewUrl);
    }

    const objectUrl = URL.createObjectURL(file);
    setSelectedMediaFile(file);
    setMediaPreviewUrl(objectUrl);
    setIsVideo(file.type.startsWith('video/') || file.name.endsWith('.mp4') || file.name.endsWith('.mkv'));

    // Automatically add to materials so it's tracked
    onAddMaterial(subject.id, meeting.id, {
      title: `Rekaman: ${file.name}`,
      type: file.type.startsWith('video/') ? 'video' : 'audio',
      file_url: objectUrl,
      file_size: file.size,
    });
  };

  // Live Microphone Recording Logic (Browser MediaRecorder API)
  const startLiveRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const recordedFile = new File(
          [audioBlob],
          `Rekaman_Kuliah_P${meeting.meeting_number}_${new Date().toISOString().slice(0, 10)}.webm`,
          { type: 'audio/webm' }
        );

        const objectUrl = URL.createObjectURL(recordedFile);
        setSelectedMediaFile(recordedFile);
        setMediaPreviewUrl(objectUrl);
        setIsVideo(false);

        // Save recorded audio as material
        onAddMaterial(subject.id, meeting.id, {
          title: `Rekaman Langsung Kuliah (P${meeting.meeting_number})`,
          type: 'audio',
          file_url: objectUrl,
          file_size: recordedFile.size,
        });

        // Stop all audio tracks
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordTimer(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordTimer((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert('Tidak dapat mengakses mikrofon: ' + err.message);
    }
  };

  const stopLiveRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerIntervalRef.current);
    }
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Run AI Speech-to-Text Transcription
  const handleTranscribeAudio = async () => {
    setIsTranscribing(true);
    try {
      const result = await transcribeMediaFile({
        file: selectedMediaFile,
        subject,
        meeting,
        onProgress: (pct, msg) => setTranscribeProgress({ pct, msg }),
      });

      onUpdateTranscript(subject.id, meeting.id, result.transcript);
      setTranscriptDraft(result.transcript);

      // Auto-check "Sudah membaca/memproses"
      if (!meeting.progress?.is_read) {
        onToggleProgress(subject.id, meeting.id, 'is_read');
      }
    } catch (err) {
      alert('Gagal mentranskripsi audio/video: ' + err.message);
    } finally {
      setIsTranscribing(false);
    }
  };

  // Trigger AI Summary Generation
  const handleGenerateSummary = async (mode = summaryMode) => {
    setIsGeneratingAi(true);
    try {
      const result = await generateSummary({
        subject,
        meeting,
        mode,
        onProgress: (pct, msg) => setAiProgress({ pct, msg }),
      });
      onUpdateSummary(subject.id, meeting.id, result);
    } catch (err) {
      alert('Gagal menghasilkan rangkuman: ' + err.message);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Directly generate summary from newly created transcript
  const handleGenerateSummaryFromTranscript = async () => {
    setActiveTab('summary');
    await handleGenerateSummary('standar');
  };

  // Copy Handwriting note
  const handleCopyNote = () => {
    const text = meeting.handwriting_notes || generateHandwritingFormat(subject, meeting);
    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  // Copy Transcript text
  const handleCopyTranscript = () => {
    const text = meeting.transcripts?.[0]?.content || transcriptDraft;
    navigator.clipboard.writeText(text);
    setCopyTranscriptFeedback(true);
    setTimeout(() => setCopyTranscriptFeedback(false), 2000);
  };

  // Print note
  const handlePrintNote = () => {
    window.print();
  };

  // Add material submit
  const handleAddMaterialSubmit = (e) => {
    e.preventDefault();
    if (!newMaterialTitle.trim()) return;
    onAddMaterial(subject.id, meeting.id, {
      title: newMaterialTitle,
      type: newMaterialType,
      file_url: newMaterialUrl || '#',
      file_size: 1500000,
    });
    setNewMaterialTitle('');
    setNewMaterialUrl('');
  };

  // Save manual transcript edit
  const handleSaveTranscript = () => {
    onUpdateTranscript(subject.id, meeting.id, transcriptDraft);
    setIsEditingTranscript(false);
  };

  const currentSummaryHtml = meeting.summaries?.[summaryMode] || meeting.summaries?.standar || '';
  const handwritingText = meeting.handwriting_notes || generateHandwritingFormat(subject, meeting);
  const currentTranscript = meeting.transcripts?.[0]?.content || transcriptDraft;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke {subject.name}</span>
        </button>

        {/* 4-Item Quick Progress Indicators */}
        <div className="hidden sm:flex items-center gap-3 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
            <input
              type="checkbox"
              checked={!!meeting.progress?.is_read}
              onChange={() => onToggleProgress(subject.id, meeting.id, 'is_read')}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>Membaca</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
            <input
              type="checkbox"
              checked={!!meeting.progress?.is_summarized}
              onChange={() => onToggleProgress(subject.id, meeting.id, 'is_summarized')}
              className="rounded text-cyan-600 focus:ring-cyan-500"
            />
            <span>Dirangkum</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
            <input
              type="checkbox"
              checked={!!meeting.progress?.is_studied}
              onChange={() => onToggleProgress(subject.id, meeting.id, 'is_studied')}
              className="rounded text-violet-600 focus:ring-violet-500"
            />
            <span>Dipelajari</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer text-emerald-400 font-bold">
            <input
              type="checkbox"
              checked={!!meeting.progress?.is_noted_in_binder}
              onChange={() => onToggleProgress(subject.id, meeting.id, 'is_noted_in_binder')}
              className="rounded text-emerald-600 focus:ring-emerald-500"
            />
            <span>Catat di Binder</span>
          </label>
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
              onClick={() => handleGenerateSummary(summaryMode)}
              disabled={isGeneratingAi}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:brightness-110 text-white font-bold text-xs shadow-lg transition-all active:scale-95 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGeneratingAi ? 'Memproses AI...' : 'Buat Rangkuman AI'}</span>
            </button>
          </div>
        </div>

        {/* AI Loading Status Bar */}
        {isGeneratingAi && (
          <div className="mt-4 p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300 space-y-1.5 animate-pulse">
            <div className="flex justify-between">
              <span>{aiProgress.msg}</span>
              <span className="font-mono font-bold">{aiProgress.pct}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${aiProgress.pct}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Detail Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 no-print overflow-x-auto">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'summary'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Rangkuman Akademik</span>
        </button>

        <button
          onClick={() => setActiveTab('handwriting')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'handwriting'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <FileCheck className="w-4 h-4 text-amber-400" />
          <span>Mode Catatan Fisik (Salin Buku)</span>
        </button>

        <button
          onClick={() => setActiveTab('materials')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'materials'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Upload className="w-4 h-4" />
          <span>Source Material ({(meeting.materials || []).length})</span>
        </button>

        <button
          onClick={() => setActiveTab('transcript')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'transcript'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Mic className="w-4 h-4 text-cyan-400" />
          <span>Rekaman & Transkrip AI</span>
          {currentTranscript && (
            <span className="w-2 h-2 rounded-full bg-emerald-400" title="Transkrip Tersedia" />
          )}
        </button>
      </div>

      {/* TAB 1: SUMMARY VIEW */}
      {activeTab === 'summary' && (
        <div className="space-y-6">
          {/* Mode Selector (Ringkas / Standar / Detail) */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#11131B] border border-white/10 no-print">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Tingkat Detail Rangkuman:</span>
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/5">
                {['ringkas', 'standar', 'detail'].map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setSummaryMode(m);
                      if (!meeting.summaries?.[m]) {
                        handleGenerateSummary(m);
                      }
                    }}
                    className={`px-3 py-1 rounded text-xs font-semibold capitalize transition-all ${
                      summaryMode === m
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-xs text-slate-500 hidden sm:inline">
              {summaryMode === 'ringkas'
                ? '⚡ Ringkas: Glosarium & Intisari Cepat'
                : summaryMode === 'detail'
                ? '📚 Detail: Elaborasi Mendalam Kisi-Kisi UTS'
                : '✅ Standar: Catatan Kuliah Lengkap'}
            </span>
          </div>

          {/* Summary Content Body */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#11131B] border border-white/10 shadow-sm leading-relaxed">
            {currentSummaryHtml ? (
              <div
                className="academic-summary-content text-slate-200 text-sm sm:text-base space-y-4"
                dangerouslySetInnerHTML={{ __html: currentSummaryHtml }}
              />
            ) : (
              <div className="text-center py-12 text-slate-400 space-y-3">
                <Sparkles className="w-8 h-8 mx-auto text-indigo-400 animate-bounce" />
                <p className="text-base font-semibold text-white">Rangkuman belum dibuat untuk mode ini.</p>
                <button
                  onClick={() => handleGenerateSummary(summaryMode)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
                >
                  Generate Rangkuman AI Sekarang
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: MODE CATATAN FISIK */}
      {activeTab === 'handwriting' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#181B26] border border-white/10 no-print">
            <div>
              <h3 className="font-heading font-bold text-white text-sm">
                Mode Catatan Fisik (Format Tulisan Tangan)
              </h3>
              <p className="text-xs text-slate-400">
                Format ringkas yang dirancang agar nyaman disalin menggunakan pena ke buku binder Anda.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyNote}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold"
              >
                {copyFeedback ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copyFeedback ? 'Tersalin!' : 'Copy'}</span>
              </button>
              <button
                onClick={handlePrintNote}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0C10] border border-white/10 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap printable-note shadow-inner">
            {handwritingText}
          </div>
        </div>
      )}

      {/* TAB 3: SOURCE MATERIALS */}
      {activeTab === 'materials' && (
        <div className="space-y-6 no-print">
          {/* Add New Material Form */}
          <form
            onSubmit={handleAddMaterialSubmit}
            className="p-5 rounded-xl bg-[#11131B] border border-white/10 space-y-4"
          >
            <h3 className="text-sm font-bold font-heading text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-indigo-400" />
              <span>Tambah Berkas / Link Materi Kuliah</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Judul Materi (misal: Slide PPT Bab 3)"
                value={newMaterialTitle}
                onChange={(e) => setNewMaterialTitle(e.target.value)}
                className="sm:col-span-2 px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                required
              />

              <select
                value={newMaterialType}
                onChange={(e) => setNewMaterialType(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="pdf">Dokumen PDF</option>
                <option value="pptx">Slide PPT / PPTX</option>
                <option value="docx">Dokumen Word</option>
                <option value="audio">Rekaman Audio Kuliah</option>
                <option value="video">Rekaman Video Kuliah (MP4)</option>
                <option value="link">Tautan Web / Drive</option>
              </select>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow"
              >
                Simpan Materi
              </button>
            </div>

            <input
              type="text"
              placeholder="URL Berkas / Link Drive (Opsional)"
              value={newMaterialUrl}
              onChange={(e) => setNewMaterialUrl(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </form>

          {/* Materials List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Daftar Materi Kuliah Tersimpan ({(meeting.materials || []).length}):
            </h4>

            {(meeting.materials || []).length === 0 ? (
              <p className="text-xs text-slate-500 italic">Belum ada materi yang ditambahkan.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {meeting.materials.map((mat) => (
                  <div
                    key={mat.id}
                    className="p-3.5 rounded-xl bg-[#181B26] border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400 font-mono text-[10px] font-bold uppercase">
                        {mat.type}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white line-clamp-1">{mat.title}</h5>
                        <p className="text-[10px] text-slate-400 font-mono">
                          {mat.file_size ? `${(mat.file_size / 1000000).toFixed(1)} MB • ` : ''}
                          {mat.date_added || 'Tersimpan'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onDeleteMaterial(subject.id, meeting.id, mat.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Hapus Materi"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: TRANSCRIPT & MULTIMEDIA UPLOAD (MP4 / MP3 / RECORDING) */}
      {activeTab === 'transcript' && (
        <div className="space-y-6 no-print">
          {/* UPLOAD & RECORDING CONTROL PANEL */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#181B26] to-[#12141F] border border-white/10 shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Multimedia Audio & Video Speech-to-Text Engine</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-white">
                  Upload Rekaman Kuliah (MP4 / MP3) atau Rekam Langsung
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Pilih file rekaman kuliah dosen (format video MP4, MKV atau audio MP3, M4A, WAV) dari laptop Anda, atau tekan tombol rekam mikrofon untuk merekam penjelasan dosen secara langsung.
                </p>
              </div>

              {/* Action Buttons: Pick File & Live Record */}
              <div className="flex flex-wrap items-center gap-2.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/mkv,video/webm,video/*,audio/mp3,audio/mpeg,audio/wav,audio/m4a,audio/x-m4a,audio/*"
                  className="hidden"
                  onChange={handleMediaFileChange}
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-all shadow-md active:scale-95"
                >
                  <Upload className="w-4 h-4 text-cyan-400" />
                  <span>Upload File Rekaman (MP4 / Audio)</span>
                </button>

                {/* Live Microphone Recording Button */}
                {isRecording ? (
                  <button
                    type="button"
                    onClick={stopLiveRecording}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-lg shadow-rose-600/30 animate-pulse active:scale-95"
                  >
                    <Square className="w-4 h-4 fill-white" />
                    <span>Hentikan Rekam ({formatTimer(recordTimer)})</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={startLiveRecording}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md active:scale-95"
                  >
                    <Radio className="w-4 h-4 text-rose-300" />
                    <span>Rekam Suara Langsung</span>
                  </button>
                )}
              </div>
            </div>

            {/* PREVIEW MEDIA PLAYER IF SELECTED OR RECORDED */}
            {selectedMediaFile && mediaPreviewUrl && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {isVideo ? <Video className="w-4 h-4" /> : <Music className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white truncate max-w-sm sm:max-w-md">
                        {selectedMediaFile.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {(selectedMediaFile.size / (1024 * 1024)).toFixed(2)} MB • {isVideo ? 'Format Video (MP4/WebM)' : 'Format Audio'}
                      </p>
                    </div>
                  </div>

                  {/* Transcribe Trigger Button */}
                  <button
                    type="button"
                    onClick={handleTranscribeAudio}
                    disabled={isTranscribing}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-indigo-700 hover:brightness-110 text-white text-xs font-bold transition-all shadow-lg active:scale-95 disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isTranscribing ? 'Mentranskripsi...' : '⚡ Transkripsikan Rekaman (AI Speech-to-Text)'}</span>
                  </button>
                </div>

                {/* HTML5 Video or Audio Player */}
                <div className="flex justify-center bg-black/60 rounded-xl overflow-hidden p-2">
                  {isVideo ? (
                    <video
                      controls
                      src={mediaPreviewUrl}
                      className="w-full max-h-[380px] rounded-lg shadow-2xl"
                    />
                  ) : (
                    <audio
                      controls
                      src={mediaPreviewUrl}
                      className="w-full max-w-xl py-2"
                    />
                  )}
                </div>

                {/* AI Transcription In-Progress Bar */}
                {isTranscribing && (
                  <div className="p-3.5 rounded-xl bg-indigo-950/60 border border-cyan-500/40 space-y-2 animate-pulse">
                    <div className="flex justify-between text-xs text-cyan-300 font-semibold">
                      <span>{transcribeProgress.msg}</span>
                      <span className="font-mono">{transcribeProgress.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300"
                        style={{ width: `${transcribeProgress.pct}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* TRANSCRIPT DISPLAY & EDIT PANEL */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#181B26] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold font-heading text-white flex items-center gap-2">
                  <span>Hasil Transkripsi Perkuliahan</span>
                  {currentTranscript && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Tersimpan di Database
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-400">
                  Transkrip ini menjadi bahan rujukan utama bagi AI dalam menyusun rangkuman akademik 7 bab.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {currentTranscript && (
                  <>
                    <button
                      onClick={handleCopyTranscript}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold"
                    >
                      {copyTranscriptFeedback ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copyTranscriptFeedback ? 'Tersalin!' : 'Copy'}</span>
                    </button>

                    <button
                      onClick={handleGenerateSummaryFromTranscript}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 hover:brightness-110 text-white text-xs font-bold transition-all shadow"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Buat Rangkuman dari Transkrip</span>
                    </button>
                  </>
                )}

                <button
                  onClick={() => {
                    if (isEditingTranscript) {
                      handleSaveTranscript();
                    } else {
                      setIsEditingTranscript(true);
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-white/10"
                >
                  {isEditingTranscript ? 'Simpan Transkrip' : 'Edit Manual'}
                </button>
              </div>
            </div>

            {isEditingTranscript ? (
              <textarea
                rows={14}
                value={transcriptDraft}
                onChange={(e) => setTranscriptDraft(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-indigo-500 text-slate-200 text-xs sm:text-sm font-mono focus:outline-none leading-relaxed"
                placeholder="Ketik atau tempel transkrip rekaman kuliah dosen di sini..."
              />
            ) : (
              <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-wrap select-text max-h-[500px] overflow-y-auto">
                {currentTranscript || (
                  <div className="text-center py-8 text-slate-400 space-y-2">
                    <Mic className="w-8 h-8 mx-auto text-slate-600" />
                    <p className="font-semibold text-slate-300">Belum ada transkrip rekaman untuk pertemuan ini.</p>
                    <p className="text-xs text-slate-500">
                      Silakan upload video MP4 atau rekaman audio di atas, lalu klik <strong>"Transkripsikan Rekaman"</strong>.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
