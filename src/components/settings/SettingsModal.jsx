import React, { useState } from 'react';
import {
  X,
  User,
  Database,
  Cloud,
  Download,
  Upload,
  RotateCcw,
  CheckCircle2,
  Key,
  HelpCircle,
} from 'lucide-react';
import { isSupabaseConfigured } from '../../lib/supabase';

export function SettingsModal({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onExport,
  onImportFile,
  onResetSeed,
}) {
  const [name, setName] = useState(profile?.full_name || 'Muhammad Haikel');
  const [email, setEmail] = useState(profile?.email || 'haikel@unindra.ac.id');
  const [univ, setUniv] = useState(profile?.university || 'Universitas Indraprasta PGRI (Unindra)');
  const [classCode, setClassCode] = useState(profile?.class_code || 'R1G Reguler');

  if (!isOpen) return null;

  const handleSaveProfile = (e) => {
    e.preventDefault();
    onUpdateProfile({
      ...profile,
      full_name: name,
      email,
      university: univ,
      class_code: classCode,
    });
    alert('Profil berhasil diperbarui!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md no-print">
      <div className="w-full max-w-xl rounded-2xl bg-[#181B26] border border-white/15 p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <User className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold font-heading text-white">
              Pengaturan Profil & Database
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSaveProfile} className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Identitas Mahasiswa:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email Kampus / Personal
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Universitas
              </label>
              <input
                type="text"
                value={univ}
                onChange={(e) => setUniv(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Kelas & Jurusan
              </label>
              <input
                type="text"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow"
            >
              Simpan Profil
            </button>
          </div>
        </form>

        {/* Database & Supabase Integration Status */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Status Penyimpanan & Cloud Sync:</span>
            <span className="text-[10px] text-cyan-400 font-mono">
              {isSupabaseConfigured ? '🟢 SUPABASE ACTIVE' : '⚪ OFFLINE STORAGE ACTIVE'}
            </span>
          </h3>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>
                <strong>Local Persistence:</strong> Aktif melalui browser LocalStorage & JSON Backup Engine. Seluruh perubahan pertemuan dan checklist tersimpan otomatis.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-indigo-400" />
              <span>
                <strong>Supabase Integration:</strong> Tersedia skema PostgreSQL lengkap di <code>supabase_schema.sql</code>. Untuk menghubungkan ke Cloud Supabase, cukup masukkan <code>VITE_SUPABASE_URL</code> dan <code>VITE_SUPABASE_ANON_KEY</code> pada berkas <code>.env</code>.
              </span>
            </div>
          </div>
        </div>

        {/* Backup and Data Maintenance */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pemeliharaan & Cadangan Data:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={onExport}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-white flex flex-col items-center gap-1.5 transition-all text-center"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Export JSON</span>
            </button>

            <label className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-white flex flex-col items-center gap-1.5 transition-all cursor-pointer text-center">
              <Upload className="w-4 h-4 text-cyan-400" />
              <span>Import JSON</span>
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    onImportFile(e.target.files[0]);
                    onClose();
                  }
                }}
              />
            </label>

            <button
              type="button"
              onClick={() => {
                if (confirm('Pulihkan seluruh 8 mata kuliah dan 32 pertemuan ke data master awal?')) {
                  onResetSeed();
                  onClose();
                }
              }}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-xs font-semibold text-amber-400 flex flex-col items-center gap-1.5 transition-all text-center"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Reset Master</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
