import React, { useState } from 'react';
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
  Volume2,
} from 'lucide-react';
import { generateSummary, generateHandwritingFormat, SUMMARY_MODES } from '../../lib/aiSummaryEngine';

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

  // Materials Modal / Form State
  const [newMaterialTitle, setNewMaterialTitle] = useState('');
  const [newMaterialType, setNewMaterialType] = useState('pdf');
  const [newMaterialUrl, setNewMaterialUrl] = useState('');

  // Transcript Edit State
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [transcriptDraft, setTranscriptDraft] = useState(
    meeting.transcripts?.[0]?.content || ''
  );

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

  // Copy Handwriting note
  const handleCopyNote = () => {
    const text = meeting.handwriting_notes || generateHandwritingFormat(subject, meeting);
    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  // Print note
  const handlePrintNote = () => {
    window.print();
  };

  // Add material
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

  // Save transcript
  const handleSaveTranscript = () => {
    onUpdateTranscript(subject.id, meeting.id, transcriptDraft);
    setIsEditingTranscript(false);
  };

  const currentSummaryHtml = meeting.summaries?.[summaryMode] || meeting.summaries?.standar || '';
  const handwritingText = meeting.handwriting_notes || generateHandwritingFormat(subject, meeting);

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
          <Mic className="w-4 h-4" />
          <span>Transkrip Dosen</span>
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
                <option value="video">Rekaman Video Kuliah</option>
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

      {/* TAB 4: TRANSCRIPT VIEW */}
      {activeTab === 'transcript' && (
        <div className="space-y-4 no-print">
          <div className="p-4 rounded-xl bg-[#181B26] border border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold font-heading text-white">
                Transkrip Rekaman Perkuliahan
              </h3>
              <p className="text-xs text-slate-400">
                Catatan transkripsi audio dosen yang menjadi sumber utama ekstraksi rangkuman AI.
              </p>
            </div>

            <button
              onClick={() => {
                if (isEditingTranscript) {
                  handleSaveTranscript();
                } else {
                  setIsEditingTranscript(true);
                }
              }}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow"
            >
              {isEditingTranscript ? 'Simpan Transkrip' : 'Edit Transkrip'}
            </button>
          </div>

          {isEditingTranscript ? (
            <textarea
              rows={12}
              value={transcriptDraft}
              onChange={(e) => setTranscriptDraft(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-900 border border-indigo-500 text-slate-200 text-xs sm:text-sm font-mono focus:outline-none leading-relaxed"
              placeholder="Ketik atau tempel transkrip rekaman dosen di sini..."
            />
          ) : (
            <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">
              {meeting.transcripts?.[0]?.content || 'Belum ada transkrip rekaman untuk pertemuan ini.'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
