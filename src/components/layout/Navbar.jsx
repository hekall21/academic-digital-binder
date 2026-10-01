import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Sun,
  Moon,
  Download,
  Upload,
  RotateCcw,
  Sparkles,
  Cloud,
  CheckCircle2,
  Settings,
} from 'lucide-react';
import { isSupabaseConfigured } from '../../lib/supabase';

export function Navbar({
  theme,
  toggleTheme,
  searchQuery,
  setSearchQuery,
  onOpenSearch,
  onExport,
  onImportFile,
  onResetSeed,
  onOpenSettings,
  profile,
}) {
  const [showDataMenu, setShowDataMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#11131B]/90 dark:bg-[#11131B]/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200 px-4 lg:px-8 py-3 transition-colors no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & University Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-white dark:text-white light:text-slate-900">
                Academic Digital Binder
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                Unindra R1G
              </span>
            </div>
            <p className="text-[11px] text-slate-400 light:text-slate-500 hidden sm:block">
              Sistem Manajemen Rangkuman & Catatan Buku Fisik
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari matkul, pertemuan, konsep, istilah, transkrip... (Ctrl + K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={onOpenSearch}
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full bg-[#181B26] dark:bg-[#181B26] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search Mobile */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-lg bg-slate-800/60 light:bg-slate-100 border border-white/10 light:border-slate-200 text-slate-300 light:text-slate-700"
            title="Cari"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Cloud / Local Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border-white/10 dark:border-white/10 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isSupabaseConfigured ? (
              <>
                <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                <span>Supabase Cloud</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Offline Indexed</span>
              </>
            )}
          </div>

          {/* Dark Mode Permanent Indicator */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-300"
            title="Mode Tampilan: Dark Mode Permanen"
          >
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline text-[11px]">Dark</span>
          </div>

          {/* Backup & Restore Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDataMenu(!showDataMenu)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-1.5 hover:bg-slate-700/60 transition-colors"
            >
              <span>Backup</span>
              <span className="text-[10px] text-slate-400">▾</span>
            </button>

            {showDataMenu && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl bg-[#181B26] dark:bg-[#181B26] light:bg-white border border-white/15 dark:border-white/15 light:border-slate-200 shadow-2xl p-2 z-50 text-xs space-y-1">
                <button
                  onClick={() => {
                    onExport();
                    setShowDataMenu(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-700 hover:bg-slate-700/50 light:hover:bg-slate-100 text-left"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Export JSON Backup</span>
                </button>
                <label className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-700 hover:bg-slate-700/50 light:hover:bg-slate-100 cursor-pointer text-left">
                  <Upload className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Import JSON Backup</span>
                  <input
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        onImportFile(e.target.files[0]);
                        setShowDataMenu(false);
                      }
                    }}
                  />
                </label>
                <div className="h-px bg-white/10 dark:bg-white/10 light:bg-slate-200 my-1"></div>
                <button
                  onClick={() => {
                    if (confirm('Pulihkan data ke catatan master 8 matkul pertemuan 1-4?')) {
                      onResetSeed();
                    }
                    setShowDataMenu(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-amber-400 hover:bg-amber-500/10 text-left"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reset ke Master Seed</span>
                </button>
              </div>
            )}
          </div>

          {/* User Settings Button */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-white"
            title="Pengaturan"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
