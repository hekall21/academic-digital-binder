import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export function GlobalSearchModal({
  isOpen,
  onClose,
  subjects,
  onSelectMeeting,
}) {
  const [query, setQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Search logic
  const q = query.toLowerCase().trim();

  const results = [];
  if (q.length >= 2) {
    subjects.forEach((subj) => {
      if (subjectFilter !== 'all' && subj.id !== subjectFilter) return;

      (subj.meetings || []).forEach((m) => {
        // Status filters
        if (statusFilter === 'noted' && !m.progress?.is_noted_in_binder) return;
        if (statusFilter === 'unnoted' && m.progress?.is_noted_in_binder) return;
        if (statusFilter === 'summarized' && !m.progress?.is_summarized) return;
        if (statusFilter === 'unsummarized' && m.progress?.is_summarized) return;

        const inTitle = m.title?.toLowerCase().includes(q);
        const inDesc = m.description?.toLowerCase().includes(q);
        const inNotes = m.notes?.toLowerCase().includes(q);
        const inSummary = (m.summaries?.standar || '').toLowerCase().includes(q);
        const inTranscript = (m.transcripts?.[0]?.content || '').toLowerCase().includes(q);

        if (inTitle || inDesc || inNotes || inSummary || inTranscript) {
          // Find matched snippet
          let snippet = m.description;
          if (inSummary) {
            const raw = m.summaries.standar.replace(/<[^>]+>/g, ' ');
            const idx = raw.toLowerCase().indexOf(q);
            const start = Math.max(0, idx - 40);
            snippet = '...' + raw.slice(start, start + 120) + '...';
          } else if (inTranscript) {
            const raw = m.transcripts[0].content;
            const idx = raw.toLowerCase().indexOf(q);
            const start = Math.max(0, idx - 40);
            snippet = '[Transkrip] ...' + raw.slice(start, start + 120) + '...';
          }

          results.push({
            subject: subj,
            meeting: m,
            matchType: inTitle
              ? 'Judul Pertemuan'
              : inSummary
              ? 'Isi Rangkuman / Konsep'
              : inTranscript
              ? 'Transkrip Dosen'
              : 'Silabus / Catatan',
            snippet,
          });
        }
      });
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-20 bg-black/75 backdrop-blur-md no-print">
      <div className="w-full max-w-2xl rounded-2xl bg-[#181B26] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari matkul, pertemuan, konsep (misal: 'entropi', 'EYD', 'flowchart')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white text-xs">
              Bersihkan
            </button>
          )}
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Bar */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="bg-slate-800 border border-white/10 rounded-md px-2 py-1 text-slate-200 text-xs focus:outline-none"
            >
              <option value="all">Semua Mata Kuliah</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-800 border border-white/10 rounded-md px-2 py-1 text-slate-200 text-xs focus:outline-none"
          >
            <option value="all">Semua Status Catatan</option>
            <option value="noted">✓ Sudah Dicatat di Binder</option>
            <option value="unnoted">○ Belum Dicatat di Binder</option>
            <option value="summarized">Rangkuman AI Siap</option>
          </select>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {query.length < 2 ? (
            <div className="p-8 text-center text-slate-500 text-xs space-y-1">
              <p className="font-semibold text-slate-400">Ketik minimal 2 karakter untuk memulai pencarian cerdas.</p>
              <p>Mencari di seluruh 8 mata kuliah, judul, ringkasan, transkrip dosen, dan istilah.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              <p className="font-semibold text-white">Tidak ada hasil ditemukan untuk "{query}".</p>
              <p className="text-slate-500 mt-1">Coba kata kunci lain atau ubah filter mata kuliah.</p>
            </div>
          ) : (
            results.map(({ subject, meeting, matchType, snippet }, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectMeeting(subject.id, meeting.id);
                  onClose();
                }}
                className="p-3.5 rounded-xl bg-[#11131B] border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all cursor-pointer space-y-1.5 group"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: subject.color || '#6366F1' }}
                    />
                    <span className="font-bold text-slate-300">{subject.name}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-indigo-400 font-mono font-semibold">
                      Pertemuan {meeting.meeting_number}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-white/5 font-mono">
                    {matchType}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {meeting.title}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {snippet}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
