import React, { useState } from 'react';
import { X, GraduationCap } from 'lucide-react';

export function AddSubjectModal({ onClose, onAddSubject }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [schedule, setSchedule] = useState('');
  const [room, setRoom] = useState('');
  const [color, setColor] = useState('#6366F1');
  const [targetMeetings, setTargetMeetings] = useState(16);

  const colors = [
    '#6366F1', // Indigo
    '#06B6D4', // Cyan
    '#10B981', // Emerald
    '#F59E0B', // Amber
    '#8B5CF6', // Violet
    '#EC4899', // Pink
    '#3B82F6', // Blue
    '#14B8A6', // Teal
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddSubject({
      name: name.trim(),
      code: code.trim() || 'TI-BARU',
      lecturer: lecturer.trim() || 'Tim Dosen',
      schedule: schedule.trim() || 'Jadwal Kuliah',
      room: room.trim() || 'Ruang Kuliah',
      color,
      target_meetings: Number(targetMeetings) || 16,
      semester: 'Semester 1',
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm no-print">
      <div className="w-full max-w-lg rounded-2xl bg-[#181B26] border border-white/15 p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold font-heading text-white">
              + Tambah Mata Kuliah Baru
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
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nama Mata Kuliah
            </label>
            <input
              type="text"
              placeholder="misal: Struktur Data & Algoritma Lanjut"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Kode Matkul
              </label>
              <input
                type="text"
                placeholder="misal: TI-201"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Target Pertemuan
              </label>
              <input
                type="number"
                min="1"
                max="32"
                value={targetMeetings}
                onChange={(e) => setTargetMeetings(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Dosen Pengampu
            </label>
            <input
              type="text"
              placeholder="Nama dosen dan gelar..."
              value={lecturer}
              onChange={(e) => setLecturer(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Jadwal Kuliah
              </label>
              <input
                type="text"
                placeholder="Senin • 08:00 - 10:30 WIB"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Ruangan / Gedung
              </label>
              <input
                type="text"
                placeholder="Ruang R.4.2"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Color Tag Picker */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Warna Aksen Mata Kuliah
            </label>
            <div className="flex items-center gap-2">
              {colors.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    color === c ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
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
              Simpan Mata Kuliah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
