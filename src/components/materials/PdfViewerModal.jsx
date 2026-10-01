import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Download,
  FileText,
  Maximize2,
  Minimize2,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { sanitizeUrl } from '../../lib/security';

export function PdfViewerModal({
  isOpen,
  onClose,
  initialPdfUrl,
  initialTitle,
  availableMaterials = [],
  subjectName = '',
  meetingNumber = 1,
}) {
  const [activePdfUrl, setActivePdfUrl] = useState(initialPdfUrl);
  const [activeTitle, setActiveTitle] = useState(initialTitle);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (initialPdfUrl) {
      setActivePdfUrl(initialPdfUrl);
      setActiveTitle(initialTitle);
    }
  }, [initialPdfUrl, initialTitle]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !activePdfUrl) return null;

  // Filter only PDF materials
  const pdfMaterials = (availableMaterials || []).filter(
    (m) =>
      m.type === 'pdf' ||
      (m.url && m.url.toLowerCase().endsWith('.pdf')) ||
      (m.file_url && m.file_url.toLowerCase().endsWith('.pdf'))
  );

  const safeUrl = sanitizeUrl(activePdfUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className={`bg-[#0F111A] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? 'w-full h-full rounded-none'
            : 'w-full max-w-5xl h-[92vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151824] border-b border-white/10 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                  {subjectName} • P{meetingNumber}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Secure Viewer</span>
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                {activeTitle}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <a
              href={safeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Buka PDF di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tab Baru</span>
            </a>

            <a
              href={safeUrl}
              download
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Unduh Berkas PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh</span>
            </a>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title={isFullscreen ? 'Kecilkan' : 'Layar Penuh'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 transition-colors"
              title="Tutup Viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-document Switcher Tabs if multiple PDFs exist */}
        {pdfMaterials.length > 1 && (
          <div className="flex items-center gap-2 px-4 py-2 bg-[#10121C] border-b border-white/5 overflow-x-auto">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex-shrink-0">
              Pilih Dokumen:
            </span>
            {pdfMaterials.map((m, idx) => {
              const itemUrl = m.url || m.file_url;
              const isSelected = activePdfUrl === itemUrl;
              return (
                <button
                  key={m.id || idx}
                  onClick={() => {
                    setActivePdfUrl(itemUrl);
                    setActiveTitle(m.title);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 flex-shrink-0 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span className="max-w-[200px] truncate">{m.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* PDF Iframe Viewer Body */}
        <div className="flex-1 w-full bg-[#181B26] relative">
          <iframe
            src={`${safeUrl}#toolbar=1&navpanes=0`}
            title={activeTitle}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
          />

          {/* Fallback overlay in case of iframe blocking */}
          <noscript>
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-slate-900">
              <a
                href={safeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
              >
                Klik di sini untuk membuka PDF
              </a>
            </div>
          </noscript>
        </div>
      </div>
    </div>
  );
}
