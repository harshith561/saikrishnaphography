import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function Lightbox({ items = [], initialIndex = 0, onClose }) {
  const [current, setCurrent] = useState(initialIndex);
  const [showHint, setShowHint] = useState(true);

  // Safety check
  const validItems = items.length > 0 ? items : [];
  const total = validItems.length;

  const prev = useCallback(() => {
    setCurrent(i => (i - 1 + total) % total);
    setShowHint(false);
  }, [total]);

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % total);
    setShowHint(false);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    // Auto-fade the hint pill after 4 seconds
    const timer = setTimeout(() => setShowHint(false), 4000);

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onClose, prev, next]);

  if (total === 0) return null;

  const activeItem = validItems[current] || validItems[0];
  const formattedIndex = String(current + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9999] bg-[#080706]/95 backdrop-blur-2xl flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden select-none"
        onClick={onClose}
      >
        {/* LEFT EDITORIAL COLUMN (Reference: Left panel in screenshot) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full lg:w-[420px] xl:w-[480px] bg-[#0e0c0a] border-b lg:border-b-0 lg:border-r border-white/10 p-4 sm:p-6 lg:p-12 flex flex-col justify-between shrink-0 overflow-hidden"
        >
          {/* Big subtle watermark number in background (like '01' in reference) */}
          <div className="absolute top-4 right-6 text-[60px] sm:text-[90px] lg:text-[160px] font-serif font-bold text-white/[0.03] select-none pointer-events-none leading-none">
            {formattedIndex}
          </div>

          {/* Top Section */}
          <div className="relative z-10 space-y-3 lg:space-y-6">
            {/* Category badge and counter */}
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-[10px] tracking-[0.2em] uppercase font-sans font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span>{activeItem.discipline || `${activeItem.label || 'PHOTOGRAPHY'} DISCIPLINE`}</span>
              </div>

              <div className="text-white/40 font-mono text-xs tracking-widest">
                <span className="text-brand-gold font-semibold">{formattedIndex}</span> / {formattedTotal}
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-serif text-brand-ivory font-light leading-tight">
                {activeItem.title || `${activeItem.label} Moments`}
              </h2>
              {/* Copper / Gold accent bar */}
              <div className="h-[2px] w-14 bg-gradient-to-r from-brand-gold to-amber-600 mt-4 rounded-full" />
            </div>

            {/* Editorial Description */}
            <p className="text-brand-ivory/70 font-sans text-[11px] lg:text-sm leading-relaxed tracking-wide hidden sm:block">
              {activeItem.description ||
                'Every frame is meticulously crafted with natural ambient lighting, candid emotional realism, and master color grading to create an heirloom to treasure for generations.'}
            </p>

            {/* Craftsmanship & Inclusions */}
            <div className="pt-2 lg:pt-4 border-t border-white/10 space-y-2 lg:space-y-3">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-brand-ivory/40 block font-semibold">
                CRAFTSMANSHIP &amp; INCLUSIONS
              </span>

              <div className="space-y-2.5">
                {(activeItem.inclusions || [
                  'Sony Alpha 4K Full-Frame RAW Capture',
                  'Dual Off-Camera Ambient Lighting',
                  'Color Graded Fine-Art Master',
                  'Signature Archival Retouching',
                ]).map((inc, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-brand-ivory/80 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="relative z-10 pt-3 lg:pt-8 mt-3 lg:mt-6 border-t border-white/10 flex items-center justify-between gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-brand-gold text-brand-dark font-sans text-[10px] sm:text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold/90 transition-all shadow-lg shadow-brand-gold/20"
            >
              <span>Book This Experience</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>

            <span className="text-[10px] font-sans text-brand-ivory/40 tracking-wider shrink-0">
              Sai Krishna Studio
            </span>
          </div>
        </motion.div>

        {/* RIGHT PHOTO CANVAS COLUMN (Reference: Right view in screenshot) */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex-1 relative flex flex-col items-center justify-between p-3 lg:p-8 min-h-[280px] sm:min-h-[380px] lg:min-h-0 overflow-hidden"
        >
          {/* Top Bar Floating Controls */}
          <div className="w-full flex items-center justify-between z-30 pointer-events-none mb-2">
            {/* Floating badge: PRIMARY CINEMATIC VIEW */}
            <div className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/80 text-[10px] font-sans uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>PRIMARY CINEMATIC VIEW</span>
            </div>

            {/* ESC Close Button */}
            <button
              onClick={onClose}
              className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white hover:text-brand-gold font-sans text-xs uppercase tracking-widest transition-all shadow-lg"
              title="Close (ESC)"
            >
              <span>ESC</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Main Large Photo Display */}
          <div className="relative flex-1 w-full flex items-center justify-center min-h-0 px-2 lg:px-12 my-auto">
            {/* Prev Arrow */}
            <button
              onClick={prev}
              className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 hover:bg-brand-gold/20 backdrop-blur-md border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold flex items-center justify-center transition-all z-20 shadow-xl"
              title="Previous Photo (←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Hint overlay badge (Reference: 'Scroll or use ← → arrows to view 5 photos') */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-20 pointer-events-none top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-sans tracking-widest shadow-2xl flex items-center gap-2"
                >
                  <span>↔ Use ← → arrows or click thumbnails to view {total} photos</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Photo with motion transition */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.src}
                src={activeItem.src}
                alt={activeItem.title || activeItem.label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="max-h-[62vh] lg:max-h-[72vh] max-w-full object-contain rounded-sm shadow-2xl select-none"
                draggable={false}
              />
            </AnimatePresence>

            {/* Next Arrow */}
            <button
              onClick={next}
              className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 hover:bg-brand-gold/20 backdrop-blur-md border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold flex items-center justify-center transition-all z-20 shadow-xl"
              title="Next Photo (→)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Floating Thumbnail Dock (Reference: Bottom carousel pill in screenshot) */}
          <div className="z-30 mt-3 max-w-full">
            <div className="inline-flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl overflow-x-auto max-w-[95vw]">
              {/* Left mini arrow */}
              <button
                onClick={prev}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 transition-all shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto py-1 px-1 scrollbar-none">
                {validItems.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrent(idx);
                      setShowHint(false);
                    }}
                    className={`relative w-12 h-9 lg:w-14 lg:h-10 rounded overflow-hidden shrink-0 transition-all duration-300 ${
                      current === idx
                        ? 'ring-2 ring-brand-gold ring-offset-2 ring-offset-black scale-105 opacity-100'
                        : 'opacity-40 hover:opacity-90 hover:scale-100 border border-white/20'
                    }`}
                  >
                    <img
                      src={thumb.thumb || thumb.src}
                      alt={thumb.label || `Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              {/* Right mini arrow */}
              <button
                onClick={next}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 transition-all shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Counter badge */}
              <div className="px-2.5 py-1 rounded-full bg-white/10 text-brand-gold font-mono text-[11px] font-semibold tracking-wider shrink-0">
                {current + 1} / {total}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
