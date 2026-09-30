import React, { useState } from 'react';
import {
  PenTool,
  Printer,
  Copy,
  Check,
  CheckCircle2,
  Filter,
  Download,
  BookOpen,
} from 'lucide-react';
import { generateHandwritingFormat } from '../../lib/aiSummaryEngine';

export function ModeCatatanFisikView({
  subjects,
  onToggleProgress,
}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('all');
  const [onlyUnnoted, setOnlyUnnoted] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Filter notes
  const displayedNotes = subjects
    .filter((s) => selectedSubjectId === 'all' || s.id === selectedSubjectId)
    .flatMap((s) =>
      (s.meetings || [])
        .filter((m) => (onlyUnnoted ? !m.progress?.is_noted_in_binder : true))
        .map((m) => ({
          subject: s,
          meeting: m,
          text: m.handwriting_notes || generateHandwritingFormat(s, m),
        }))
    );

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handlePrintAll = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner & Control Toolbar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 border border-amber-500/20 no-print">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <PenTool className="w-3.5 h-3.5" />
              <span>Mode Catatan Fisik • Handwriting Transcription</span>
            </div>
            <h1 className="text-2xl font-extrabold font-heading text-white">
              Salin Rangkuman ke Binder Kertas
            </h1>
            <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
              Format ringkas berstruktur poin yang dirancang khusus untuk mempermudah Anda menulis ulang catatan ke buku binder fisik menggunakan pena tanpa distraksi visual.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrintAll}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print Halaman Ini / PDF</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold">Pilih Mata Kuliah:</span>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
            >
              <option value="all">Semua 8 Mata Kuliah</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyUnnoted}
              onChange={(e) => setOnlyUnnoted(e.target.checked)}
              className="rounded border-slate-700 text-amber-600 focus:ring-amber-500"
            />
            <span>Hanya tampilkan yang <strong>belum disalin</strong> ke binder</span>
          </label>
        </div>
      </div>

      {/* Notes List */}
      <div className="space-y-6">
        {displayedNotes.length === 0 ? (
          <div className="p-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-white/5">
            <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 mb-2" />
            <p className="text-sm font-semibold text-white">Semua catatan telah disalin ke binder!</p>
            <p className="text-xs text-slate-500 mt-1">Gunakan filter untuk menampilkan kembali semua catatan.</p>
          </div>
        ) : (
          displayedNotes.map(({ subject, meeting, text }) => {
            const isNoted = meeting.progress?.is_noted_in_binder;

            return (
              <div
                key={meeting.id}
                className="rounded-2xl bg-[#0e1017] border border-white/10 overflow-hidden shadow-md printable-note"
              >
                {/* Note Header Toolbar */}
                <div className="p-4 bg-[#141722] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 no-print">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: subject.color || '#6366F1' }}
                    />
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white">
                        {subject.name} • Pertemuan {meeting.meeting_number}: {meeting.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Dosen: {subject.lecturer} • {meeting.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Toggle "Sudah Dicatat di Binder" checkbox */}
                    <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!isNoted}
                        onChange={() =>
                          onToggleProgress(subject.id, meeting.id, 'is_noted_in_binder')
                        }
                        className="rounded border-slate-700 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className={isNoted ? 'text-emerald-400' : 'text-slate-300'}>
                        {isNoted ? '✓ Sudah Disalin di Binder' : 'Tandai Selesai Salin'}
                      </span>
                    </label>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(meeting.id, text)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      {copiedId === meeting.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedId === meeting.id ? 'Tersalin!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Printable Handwriting Content Body */}
                <div className="p-6 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap select-all">
                  {text}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
