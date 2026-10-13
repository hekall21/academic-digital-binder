import React, { useState, useMemo } from 'react';
import {
  Code,
  Copy,
  Check,
  Download,
  ExternalLink,
  Search,
  Filter,
  FileCode,
  Terminal,
  Play,
  Cpu,
  Layers,
  Sparkles,
  BookOpen,
  Info,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { PASCAL_FILES } from '../../data/pascalFiles';

// Pascal Keywords, Types, Built-ins for Syntax Highlighting
const PASCAL_KEYWORDS = new Set([
  'program', 'uses', 'var', 'const', 'begin', 'end', 'if', 'then', 'else',
  'case', 'of', 'while', 'do', 'for', 'to', 'downto', 'repeat', 'until',
  'function', 'procedure', 'array', 'record', 'with', 'and', 'or', 'not', 'mod', 'div'
]);

const PASCAL_TYPES = new Set([
  'integer', 'real', 'string', 'char', 'boolean', 'byte', 'word', 'longint', 'single', 'double'
]);

const PASCAL_BUILTINS = new Set([
  'writeln', 'write', 'readln', 'read', 'clrscr', 'readkey', 'delay', 'abs', 'sqr', 'sqrt'
]);

// Helper function to tokenize and highlight a single line of Pascal code
function renderPascalTokens(line) {
  if (!line || line.trim() === '') {
    return ' ';
  }

  // Regex to capture comments ({...} or //...), string literals ('...'), identifiers, numbers, operators, and whitespace
  const tokenRegex = /(\{[^}]*\}|\/\/[^\n]*|'[^']*'|[a-zA-Z_][a-zA-Z0-9_]*|\d+(?:\.\d+)?|:=|<=|>=|<>|[+\-*\/=<>():;,.\[\]]|\s+)/g;
  const elements = [];
  let match;
  let keyIdx = 0;

  while ((match = tokenRegex.exec(line)) !== null) {
    const token = match[0];
    const lower = token.toLowerCase();

    if (token.startsWith('{') || token.startsWith('//')) {
      elements.push(
        <span key={keyIdx++} className="text-emerald-400/90 italic font-medium">
          {token}
        </span>
      );
    } else if (token.startsWith("'")) {
      elements.push(
        <span key={keyIdx++} className="text-amber-300 font-normal">
          {token}
        </span>
      );
    } else if (PASCAL_KEYWORDS.has(lower)) {
      elements.push(
        <span key={keyIdx++} className="text-cyan-400 font-bold">
          {token}
        </span>
      );
    } else if (PASCAL_TYPES.has(lower)) {
      elements.push(
        <span key={keyIdx++} className="text-purple-400 font-semibold">
          {token}
        </span>
      );
    } else if (PASCAL_BUILTINS.has(lower)) {
      elements.push(
        <span key={keyIdx++} className="text-sky-300 font-semibold">
          {token}
        </span>
      );
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      elements.push(
        <span key={keyIdx++} className="text-orange-300 font-mono">
          {token}
        </span>
      );
    } else if ([':=', '<=', '>=', '<>', '='].includes(token)) {
      elements.push(
        <span key={keyIdx++} className="text-rose-400 font-bold">
          {token}
        </span>
      );
    } else {
      elements.push(
        <span key={keyIdx++} className="text-slate-200">
          {token}
        </span>
      );
    }
  }

  return elements.length > 0 ? elements : line;
}

export function PascalExplorerView({ initialMeeting = null, onSelectMeeting = null }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeetingFilter, setSelectedMeetingFilter] = useState(
    initialMeeting ? String(initialMeeting) : 'all'
  );
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFileId, setSelectedFileId] = useState(
    initialMeeting
      ? PASCAL_FILES.find((f) => f.meeting === Number(initialMeeting))?.id || PASCAL_FILES[0].id
      : PASCAL_FILES[0].id
  );
  const [copied, setCopied] = useState(false);

  // Available unique categories
  const categories = useMemo(() => {
    const set = new Set(PASCAL_FILES.map((f) => f.category));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered files
  const filteredFiles = useMemo(() => {
    return PASCAL_FILES.filter((file) => {
      const matchSearch =
        searchQuery === '' ||
        file.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchMeeting =
        selectedMeetingFilter === 'all' ||
        file.meeting === Number(selectedMeetingFilter);

      const matchCategory =
        selectedCategory === 'all' || file.category === selectedCategory;

      return matchSearch && matchMeeting && matchCategory;
    });
  }, [searchQuery, selectedMeetingFilter, selectedCategory]);

  // Active file
  const activeFile = useMemo(() => {
    const found = PASCAL_FILES.find((f) => f.id === selectedFileId);
    if (found) return found;
    return filteredFiles[0] || PASCAL_FILES[0];
  }, [selectedFileId, filteredFiles]);

  const handleCopyCode = () => {
    if (!activeFile) return;
    navigator.clipboard.writeText(activeFile.rawCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const totalLines = useMemo(() => {
    return PASCAL_FILES.reduce((acc, f) => acc + f.linesCount, 0);
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#181B26] to-slate-900 border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pascal Source Vault</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Free Pascal & Turbo Pascal
              </span>
              <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                Unindra 2026/2027
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white flex items-center gap-2.5">
              <span>💻 Berkas Kode Pascal (.PAS) Resmi</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
              Koleksi lengkap <strong>24 berkas kode sumber Pascal (.pas)</strong> dari repositori perkuliahan{' '}
              <code className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 bg-black/40 rounded">
                03_source_code_pascal
              </code>
              . Tersedia kode program terstruktur, nomor baris, pewarnaan sintaks IDE, dan tombol unduh langsung satu klik.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex items-center gap-2 flex-wrap self-start md:self-center">
            <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-white/10 text-center">
              <div className="text-lg font-mono font-extrabold text-cyan-400">
                {PASCAL_FILES.length}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">Berkas .PAS</div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-white/10 text-center">
              <div className="text-lg font-mono font-extrabold text-indigo-400">
                {totalLines}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">Baris Kode</div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-white/10 text-center">
              <div className="text-lg font-mono font-extrabold text-emerald-400">
                100%
              </div>
              <div className="text-[10px] text-slate-400 font-medium">Bebas Error FPC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-[#181B26] border border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-md">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kode Pascal... (misal: diskon, bmi, array, kabisat, terbesar, gaji)"
            className="w-full bg-[#11131B] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white"
            >
              Reset
            </button>
          )}
        </div>

        {/* Meeting Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedMeetingFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedMeetingFilter === 'all'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            Semua ({PASCAL_FILES.length})
          </button>
          <button
            onClick={() => setSelectedMeetingFilter('5')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedMeetingFilter === '5'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            Pertemuan 5 (IF-ELSE)
          </button>
          <button
            onClick={() => setSelectedMeetingFilter('6')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedMeetingFilter === '6'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            Pertemuan 6 (Nested IF)
          </button>
          <button
            onClick={() => setSelectedMeetingFilter('11')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedMeetingFilter === '11'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            P11 (Loop)
          </button>
          <button
            onClick={() => setSelectedMeetingFilter('14')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedMeetingFilter === '14'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            P14 (Nested Loop)
          </button>
          <button
            onClick={() => setSelectedMeetingFilter('15')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedMeetingFilter === '15'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            P15 (Array)
          </button>
        </div>
      </div>

      {/* Main 2-Column Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: File List (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1 flex items-center justify-between">
            <span>Daftar Berkas Terpilih ({filteredFiles.length})</span>
            {selectedMeetingFilter !== 'all' && (
              <span className="text-cyan-400 font-mono">P{selectedMeetingFilter}</span>
            )}
          </div>

          {filteredFiles.length === 0 ? (
            <div className="p-8 rounded-xl bg-[#11131B] border border-white/10 text-center text-xs text-slate-400">
              Tidak ada berkas Pascal yang cocok dengan pencarian "{searchQuery}".
            </div>
          ) : (
            filteredFiles.map((file) => {
              const isSelected = activeFile?.id === file.id;

              return (
                <div
                  key={file.id}
                  onClick={() => setSelectedFileId(file.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500/50 shadow-lg shadow-cyan-950/20'
                      : 'bg-[#181B26] border-white/5 hover:border-white/15 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <FileCode className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span className={`text-xs font-mono font-bold truncate ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {file.filename}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex-shrink-0">
                      P{file.meeting}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-white line-clamp-1 mb-1">
                    {file.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 line-clamp-2 mb-2 leading-relaxed">
                    {file.description}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
                    <span className="font-mono text-slate-400">
                      {file.linesCount} baris • {(file.sizeBytes / 1024).toFixed(1)} KB
                    </span>
                    <span className={`px-2 py-0.5 rounded font-mono ${
                      file.difficulty === 'Dasar'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : file.difficulty === 'Menengah'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    }`}>
                      {file.difficulty}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Code Viewer & Explanation Panel (7 cols on lg) */}
        {activeFile && (
          <div className="lg:col-span-7 space-y-4">
            {/* Active File Header Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#181B26] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                    Pertemuan {activeFile.meeting}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                    {activeFile.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded text-slate-400 bg-white/5">
                    {activeFile.linesCount} Baris
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-extrabold text-white font-heading leading-snug">
                  {activeFile.title}
                </h2>
                <div className="text-xs text-cyan-400 font-mono font-semibold">
                  📄 {activeFile.filename}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer"
                  title="Salin seluruh kode ke clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>

                <a
                  href={activeFile.downloadUrl}
                  download={activeFile.filename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  title="Unduh berkas .pas asli"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh .pas</span>
                </a>

                <a
                  href={activeFile.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
                  title="Buka teks mentah di tab baru"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Code Viewer Window with Line Numbers & Syntax Highlighting */}
            <div className="rounded-2xl border border-white/10 bg-[#080B12] overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="px-4 py-2.5 bg-[#101420] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-slate-300 ml-2 font-bold text-[11px]">
                    Free Pascal IDE • {activeFile.filename}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold font-mono">ANSI Syntax</span>
                  <span>•</span>
                  <span>{activeFile.linesCount} Baris</span>
                </div>
              </div>

              {/* Window Code Content (Robust Vertical Row Flow) */}
              <div className="p-3 max-h-[520px] overflow-y-auto overflow-x-auto font-mono text-xs leading-relaxed select-text bg-[#090C15]">
                <div className="min-w-fit flex flex-col font-mono text-[12px]">
                  {activeFile.rawCode.split('\n').map((line, idx) => (
                    <div
                      key={idx}
                      className="flex items-start hover:bg-white/[0.04] py-[2px] px-1 rounded transition-colors group"
                    >
                      <span className="select-none text-right pr-4 text-slate-600 group-hover:text-slate-400 w-10 flex-shrink-0 text-[11px] font-mono tabular-nums">
                        {idx + 1}
                      </span>
                      <span className="whitespace-pre font-mono flex-1 text-slate-200">
                        {renderPascalTokens(line)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Explanation and Execution Guide */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#181B26] border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-heading">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Bedah Logika & Cara Kerja Program:</span>
                </div>
                <p className="leading-relaxed text-slate-300">
                  {activeFile.description}
                </p>

                {/* Tag Pills */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[10px] text-slate-400">Kata Kunci:</span>
                  {activeFile.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Free Pascal Execution Shortcut Cheat Sheet */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>
                    <strong>Cara Menjalankan di Free Pascal IDE:</strong> Tekan{' '}
                    <kbd className="px-1.5 py-0.5 bg-slate-800 border border-white/20 rounded font-mono text-[11px] text-white">
                      Ctrl + F9
                    </kbd>{' '}
                    untuk Run, atau{' '}
                    <kbd className="px-1.5 py-0.5 bg-slate-800 border border-white/20 rounded font-mono text-[11px] text-white">
                      Alt + F9
                    </kbd>{' '}
                    untuk Compile.
                  </span>
                </div>
                <a
                  href="https://www.onlinegdb.com/online_pascal_compiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-bold underline whitespace-nowrap text-[11px] flex items-center gap-1"
                >
                  <span>Coba di Compiler Web ↗</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
