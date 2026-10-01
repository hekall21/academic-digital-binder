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
  RefreshCw,
  Eye,
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
  // Filter only PDF materials
  const pdfMaterials = (availableMaterials || []).filter(
    (m) =>
      m.type === 'pdf' ||
      (m.url && m.url.toLowerCase().endsWith('.pdf')) ||
      (m.file_url && m.file_url.toLowerCase().endsWith('.pdf'))
  );

  const fallbackPdf = pdfMaterials[0];
  const defaultUrl = initialPdfUrl || fallbackPdf?.url || fallbackPdf?.file_url || '';
  const defaultTitle = initialTitle || fallbackPdf?.title || 'Dokumen PDF Perkuliahan';

  const [activePdfUrl, setActivePdfUrl] = useState(defaultUrl);
  const [activeTitle, setActiveTitle] = useState(defaultTitle);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewerMode, setViewerMode] = useState('direct'); // 'direct' or 'google'
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const nextUrl = initialPdfUrl || fallbackPdf?.url || fallbackPdf?.file_url || '';
    const nextTitle = initialTitle || fallbackPdf?.title || 'Dokumen PDF Perkuliahan';
    if (nextUrl) {
      setActivePdfUrl(nextUrl);
      setActiveTitle(nextTitle);
      setLoadError(false);
    }
  }, [initialPdfUrl, initialTitle, isOpen]);

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

  if (!isOpen) return null;

  const currentPdfUrl = activePdfUrl || defaultUrl;
  if (!currentPdfUrl) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
        <div className="bg-[#12141F] border border-white/10 p-6 rounded-2xl max-w-md text-center space-y-4">
          <FileText className="w-10 h-10 text-indigo-400 mx-auto" />
          <h3 className="text-white font-bold">Dokumen PDF Belum Tersedia</h3>
          <p className="text-xs text-slate-400">
            Berkas PDF untuk sesi ini sedang dipersiapkan atau belum diunggah.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
          >
            Tutup
          </button>
        </div>
      </div>
    );
  }

  const safeUrl = sanitizeUrl(currentPdfUrl);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const absolutePdfUrl = safeUrl.startsWith('http') ? safeUrl : `${origin}${safeUrl}`;
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    absolutePdfUrl
  )}&embedded=true`;

  const finalViewerSrc =
    viewerMode === 'google'
      ? googleViewerUrl
      : `${safeUrl}#toolbar=1&navpanes=0&scrollbar=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div
        className={`bg-[#0F111A] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? 'w-full h-full rounded-none'
            : 'w-full max-w-6xl h-[94vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151824] border-b border-white/10 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                  {subjectName} • P{meetingNumber}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" />
                  <span>PDF Viewer</span>
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white truncate" title={activeTitle}>
                {activeTitle}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Toggle Viewer Mode (Direct vs Google Docs) */}
            <button
              onClick={() => setViewerMode(viewerMode === 'direct' ? 'google' : 'direct')}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold border border-white/10"
              title="Ganti Mode Viewer (berguna jika browser tidak menampilkan PDF)"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>{viewerMode === 'direct' ? 'Mode Google Docs' : 'Mode Direct'}</span>
            </button>

            <a
              href={safeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors text-xs font-semibold flex items-center gap-1.5 shadow"
              title="Buka PDF di Tab Baru Browser"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tab Baru ↗</span>
            </a>

            <a
              href={safeUrl}
              download
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border border-white/10"
              title="Unduh Berkas PDF ke Komputer/HP"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
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
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-900/50 text-slate-400 hover:text-rose-300 transition-colors"
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
              const isSelected = (activePdfUrl || defaultUrl) === itemUrl;
              return (
                <button
                  key={m.id || idx}
                  onClick={() => {
                    setActivePdfUrl(itemUrl);
                    setActiveTitle(m.title);
                    setLoadError(false);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  <FileText className="w-3 h-3 text-indigo-400" />
                  <span className="max-w-[220px] truncate">{m.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-[#181B26] relative flex flex-col">
          {loadError ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 bg-[#0B0C10]">
              <FileText className="w-12 h-12 text-indigo-400 animate-pulse" />
              <div className="space-y-1 max-w-md">
                <h4 className="text-white font-bold text-base">Tidak Dapat Memuat Pratinjau Langsung</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Peramban Anda mungkin memblokir tampilan PDF dalam frame. Anda dapat membuka langsung di tab baru browser atau mencoba mode Google Docs.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={safeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow"
                >
                  Buka di Tab Baru Browser ↗
                </a>
                <button
                  onClick={() => {
                    setLoadError(false);
                    setViewerMode('google');
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all"
                >
                  Coba Mode Google Docs
                </button>
              </div>
            </div>
          ) : (
            <iframe
              key={finalViewerSrc}
              src={finalViewerSrc}
              title={activeTitle}
              className="w-full h-full border-0 bg-white"
              onError={() => setLoadError(true)}
            />
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="px-4 py-2 bg-[#12141F] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 no-print">
          <div className="flex items-center gap-1.5 truncate">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
            <span className="truncate">
              Tips: Jika tampilan kosong di HP/ponsel, ganti ke <strong>Mode Google Docs</strong> atau tekan <strong>Tab Baru ↗</strong>.
            </span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 text-[11px]">
            <button
              onClick={() => setViewerMode(viewerMode === 'direct' ? 'google' : 'direct')}
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-2 cursor-pointer"
            >
              {viewerMode === 'direct' ? 'Buka via Google Docs' : 'Kembali ke Mode Direct'}
            </button>
            <span className="text-slate-600">•</span>
            <a
              href={safeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2"
            >
              Buka di Tab Baru ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
