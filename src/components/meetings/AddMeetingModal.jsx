import React, { useState } from 'react';
import { X, Plus, Calendar } from 'lucide-react';

export function AddMeetingModal({ subject, onClose, onAddMeeting }) {
  const nextMeetingNumber = ((subject?.meetings || []).length || 0) + 1;

  const [meetingNumber, setMeetingNumber] = useState(nextMeetingNumber);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddMeeting(subject.id, {
      meeting_number: Number(meetingNumber),
      date,
      title: title.trim(),
      description: description.trim(),
      notes: notes.trim(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm no-print">
      <div className="w-full max-w-lg rounded-2xl bg-[#181B26] border border-white/15 p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              {subject?.name}
            </span>
            <h2 className="text-lg font-bold font-heading text-white">
              + Tambah Pertemuan Baru
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Nomor Pertemuan
              </label>
              <input
                type="number"
                min="1"
                value={meetingNumber}
                onChange={(e) => setMeetingNumber(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Tanggal Sesi
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Judul Pertemuan / Topik Bahasan
            </label>
            <input
              type="text"
              placeholder="misal: Struktur Data Tree & Graf Berarah"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Deskripsi Singkat / Silabus
            </label>
            <textarea
              rows={2}
              placeholder="Ringkasan materi yang dipelajari..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Catatan Tambahan Mahasiswa (Instruksi Dosen / Tugas)
            </label>
            <textarea
              rows={2}
              placeholder="Catatan kuis, rumus hafalan, deadline tugas..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow"
            >
              Simpan Pertemuan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
