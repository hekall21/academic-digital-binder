import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Sun,
  Moon,
  Download,
  Upload,
  RotateCcw,
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
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#11131B]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-4 lg:px-8 py-3 transition-colors no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & University Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 dark:bg-indigo-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
                Academic Digital Binder
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 uppercase tracking-wider font-mono">
                Unindra R1G
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Repository Perkuliahan & Catatan Digital Semester 1
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari matkul, pertemuan, konsep, istilah... (Ctrl + K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={onOpenSearch}
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg bg-slate-100 dark:bg-[#181B26] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search Mobile */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            title="Cari"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Sync Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border bg-slate-100 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            {isSupabaseConfigured ? (
              <>
                <Cloud className="w-3.5 h-3.5 text-emerald-500" />
                <span>Supabase Cloud</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                <span>Indexed Offline</span>
              </>
            )}
          </div>

          {/* Interactive Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Ganti ke Mode Terang (Light Mode)' : 'Ganti ke Mode Gelap (Dark Mode)'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Backup & Restore Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDataMenu(!showDataMenu)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
            >
              <span>Backup</span>
              <span className="text-[10px] text-slate-400">▾</span>
            </button>

            {showDataMenu && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white dark:bg-[#181B26] border border-slate-200 dark:border-white/15 shadow-xl p-2 z-50 text-xs space-y-1">
                <button
                  onClick={() => {
                    onExport();
                    setShowDataMenu(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 text-left cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Export JSON Backup</span>
                </button>
                <label className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer text-left">
                  <Upload className="w-3.5 h-3.5 text-cyan-500" />
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
                <div className="h-px bg-slate-200 dark:bg-white/10 my-1"></div>
                <button
                  onClick={() => {
                    if (confirm('Pulihkan data ke catatan master 8 matkul pertemuan 1-4?')) {
                      onResetSeed();
                    }
                    setShowDataMenu(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 text-left cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
                  <span>Reset ke Master Seed</span>
                </button>
              </div>
            )}
          </div>

          {/* User Settings Button */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Pengaturan"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
