import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Image as ImageIcon,
  CheckCircle,
} from 'lucide-react';
import { sanitizeUrl } from '../../lib/security';

export function CheatsheetViewerModal({
  isOpen,
  onClose,
  imageUrl,
  title = 'Kartu Infografis & Cheatsheet HD',
  subjectName = '',
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setZoomLevel(1);
  }, [imageUrl, isOpen]);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  const safeUrl = sanitizeUrl(imageUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0F111A] border border-white/15 rounded-2xl shadow-2xl flex flex-col w-full max-w-6xl h-[92vh] overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151824] border-b border-white/10 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                Visual Aid HD Cheatsheet • {subjectName}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                {title} (Format Gambar HD)
              </h3>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Perkecil (-)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs font-mono text-slate-400 px-1 font-semibold hidden sm:inline">
              {Math.round(zoomLevel * 100)}%
            </span>

            <button
              onClick={() => setZoomLevel((z) => Math.min(3, z + 0.2))}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Perbesar (+)"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setZoomLevel(1)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Reset Ukuran"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <a
              href={safeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1"
              title="Buka Gambar Asli di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={safeUrl}
              download
              className="p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors text-xs font-semibold flex items-center gap-1"
              title="Unduh Cheatsheet JPG"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh JPG</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 transition-colors"
              title="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Display Area with Pan & Scroll */}
        <div className="flex-1 w-full overflow-auto bg-[#07080C] p-4 flex items-center justify-center">
          <img
            src={safeUrl}
            alt={title}
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
            className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-200 shadow-2xl select-none"
          />
        </div>
      </div>
    </div>
  );
}
