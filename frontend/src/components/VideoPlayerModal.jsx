import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Film, ChevronLeft, ChevronRight, Loader2, Sparkles } from 'lucide-react';
import { getLocalVideoSrc, driveStreamUrl, drivePreviewUrl } from '../data/videos';

export default function VideoPlayerModal({ video, playlist = [], onClose, onSelectVideo }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [playerMode, setPlayerMode] = useState('direct'); // 'direct' (HTML5 native with full controls) or 'embed' (Drive preview)
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (playlist && playlist.length > 1) {
        const currentIndex = playlist.findIndex((v) => v.id === video?.id);
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onSelectVideo(playlist[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < playlist.length - 1) {
          onSelectVideo(playlist[currentIndex + 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [video, playlist, onClose, onSelectVideo]);

  // Reset loading state on video change
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setPlayerMode('direct');
  }, [video?.id]);

  if (!video) return null;

  const currentIndex = playlist ? playlist.findIndex((v) => v.id === video.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < playlist.length - 1;
  const localSrc = getLocalVideoSrc(video.id);

  const handleDirectError = () => {
    console.warn('Local/Direct MP4 stream not available for this file, switching to Drive iframe embed.');
    setPlayerMode('embed');
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-4 md:p-6"
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-4xl bg-[#0c0a08] border border-brand-gold/30 shadow-2xl shadow-black overflow-hidden flex flex-col my-auto max-h-[96vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Clean Playlist Navigation */}
          <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-brand-charcoal bg-black/70 gap-2 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
              <div className="flex items-center gap-1.5 min-w-0">
                <Film className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span className="font-sans text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase text-brand-gold font-semibold truncate">
                  <span className="hidden sm:inline">SAI KRISHNA </span>CINEMA THEATER
                </span>
              </div>
              {video.badge && (
                <span className="hidden md:inline-block px-2 py-0.5 text-[9px] font-sans tracking-widest uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/20 shrink-0">
                  {video.badge}
                </span>
              )}
            </div>

            {/* Top Bar Controls: Previous, Counter, Next, Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {playlist && playlist.length > 1 && (
                <div className="flex items-center gap-1 mr-1 sm:mr-2">
                  <button
                    onClick={() => hasPrev && onSelectVideo(playlist[currentIndex - 1])}
                    disabled={!hasPrev}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      hasPrev
                        ? 'bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-brand-ivory cursor-pointer'
                        : 'bg-white/5 text-white/20 cursor-not-allowed'
                    }`}
                    title="Previous Film"
                    aria-label="Previous Film"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[9px] sm:text-[10px] font-sans text-brand-gold/70 px-1 font-mono">
                    {currentIndex + 1}/{playlist.length}
                  </span>
                  <button
                    onClick={() => hasNext && onSelectVideo(playlist[currentIndex + 1])}
                    disabled={!hasNext}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      hasNext
                        ? 'bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-brand-ivory cursor-pointer'
                        : 'bg-white/5 text-white/20 cursor-not-allowed'
                    }`}
                    title="Next Film"
                    aria-label="Next Film"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              <button
                onClick={onClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center text-brand-ivory transition-all duration-300"
                aria-label="Close Cinema Player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Perfect 16:9 Local Video Player with Full Native Controls (Play, Stop, Seek, Fullscreen) */}
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden shrink-0">
            {/* Loading Spinner */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black gap-3 pointer-events-none">
                <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
                <span className="text-brand-ivory/50 text-xs font-sans tracking-widest uppercase">Loading Cinema...</span>
              </div>
            )}

            {/* Error Fallback */}
            {hasError && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0806] gap-4 px-6 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-brand-gold ml-0.5" />
                </div>
                <div>
                  <p className="text-brand-ivory font-serif text-base sm:text-lg mb-1">{video.title}</p>
                  <p className="text-brand-ivory/50 text-xs font-sans mb-3">Unable to stream video in this browser</p>
                </div>
              </div>
            )}

            {/* Native HTML5 Video with Full Controls (Play, Pause/Stop, Timeline Scrub/Move, Fullscreen) */}
            {playerMode === 'direct' ? (
              <video
                key={`local-${video.id}`}
                ref={videoRef}
                src={localSrc}
                poster={video.cover}
                controls
                playsInline
                autoPlay
                preload="auto"
                className={`w-full h-full object-contain bg-black transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoadedMetadata={() => setIsLoading(false)}
                onCanPlay={() => setIsLoading(false)}
                onPlaying={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                onError={() => {
                  // If local file is not ready, try direct stream URL
                  if (videoRef.current && videoRef.current.src !== driveStreamUrl(video.driveId)) {
                    videoRef.current.src = driveStreamUrl(video.driveId);
                  } else {
                    handleDirectError();
                  }
                }}
              >
                <source src={localSrc} type="video/mp4" />
                <source src={driveStreamUrl(video.driveId)} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            ) : (
              <iframe
                key={`embed-${video.driveId}`}
                src={drivePreviewUrl(video.driveId)}
                title={video.title}
                className={`w-full h-full border-0 transition-opacity duration-300 ${isLoading || hasError ? 'opacity-0' : 'opacity-100'}`}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="eager"
                onLoad={() => setIsLoading(false)}
                onError={() => { setIsLoading(false); setHasError(true); }}
              />
            )}
          </div>

          {/* Film Details & Actions */}
          <div className="p-3.5 sm:p-6 bg-brand-dark/95 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-t border-brand-charcoal overflow-y-auto flex-grow">
            <div className="space-y-1 sm:space-y-1.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h3 className="text-sm sm:text-lg md:text-xl font-serif text-brand-ivory font-light leading-snug">
                  {video.title}
                </h3>
                {video.duration && (
                  <span className="text-[10px] sm:text-xs font-sans text-brand-gold tracking-widest px-2 py-0.5 border border-brand-gold/30 shrink-0">
                    {video.duration}
                  </span>
                )}
              </div>

              {video.subtitle && (
                <p className="text-brand-gold/80 text-[10px] sm:text-xs tracking-widest uppercase font-sans">
                  {video.subtitle}
                </p>
              )}

              {video.description && (
                <p className="text-brand-ivory/70 text-[11px] sm:text-xs font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {video.description}
                </p>
              )}

              {video.gear && (
                <p className="text-[9px] sm:text-[10px] font-sans tracking-wider text-brand-ivory/40 hidden sm:block">
                  Captured on: {video.gear}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-1 sm:pt-0">
              <a
                href="/contact"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-brand-gold text-brand-dark hover:bg-brand-gold/90 font-sans text-xs tracking-[0.15em] uppercase font-semibold text-center transition-all duration-300 shadow-lg shadow-brand-gold/10"
              >
                Inquire For Cinema
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
