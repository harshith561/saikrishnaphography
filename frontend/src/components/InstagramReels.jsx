import { useRef, useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from 'lucide-react';
import { motion } from 'framer-motion';

const reels = [
  {
    id: 1,
    title: "Reel 1",
    subtitle: "SAI KRISHNA PHOTOGRAPHY",
    src: "/reels/reel1.mp4",
    url: "https://www.instagram.com/reel/DNlFzpKyDBC/",
  },

  {
    id: 2,
    title: "Reel 2",
    subtitle: "SAI KRISHNA PHOTOGRAPHY",
    src: "/reels/reel2.mp4",
    url: "https://www.instagram.com/reel/DdbYUCoTFYt/"
  },
  {
    id: 3,
    title: "Reel 3",
    subtitle: "SAI KRISHNA PHOTOGRAPHY",
    src: "/reels/reel3.mp4",
    url: "https://www.instagram.com/reel/DSUwB5Kk2L0/"
  },
  {
    id: 4,
    title: "Reel 4",
    subtitle: "SAI KRISHNA PHOTOGRAPHY",
    src: "/reels/reel4.mp4",
    url: "https://www.instagram.com/reel/DKMkQCpTuEf/"
  },
];

function ReelCard({ reel, index }) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play / Pause
  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Mute / Unmute
  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Update current playing time
  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video) return;

    setCurrentTime(video.currentTime);
  };

  // Get actual video duration
  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    setDuration(video.duration);
  };

  // Seek video
  const handleSeek = (event) => {
    const video = videoRef.current;

    if (!video) return;

    const newTime = Number(event.target.value);

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Fullscreen
  const handleFullscreen = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  // Format seconds into 0:00
  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="bg-[#111114] border border-[#1f1f23] rounded-[2rem] p-4 flex flex-col group hover:border-brand-gold/50 transition-colors relative"
    >
      {/* iPhone Mockup Container */}
      <div className="relative aspect-[9/16] bg-black rounded-[1.5rem] overflow-hidden mb-4 border border-[#2a2a30]">

        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#111114] rounded-b-xl z-30">
          <div className="w-12 h-1 bg-[#2a2a30] rounded-full mx-auto mt-2"></div>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          src={reel.src}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Video Controls */}
        <div className="absolute bottom-4 left-4 right-4 text-white z-20">

          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 mb-3 cursor-pointer accent-white"
            aria-label="Video progress"
          />

          {/* Controls Row */}
          <div className="flex items-center justify-between">

            {/* Left Controls */}
            <div className="flex items-center gap-3">

              {/* Play / Pause */}
              <button
                type="button"
                onClick={togglePlay}
                className="hover:scale-110 transition-transform cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white" />
                )}
              </button>

              {/* Current Time / Duration */}
              <span className="text-xs font-mono whitespace-nowrap">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">

              {/* Mute / Unmute */}
              <button
                type="button"
                onClick={toggleMute}
                className="hover:scale-110 transition-transform cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Fullscreen */}
              <button
                type="button"
                onClick={handleFullscreen}
                className="hover:scale-110 transition-transform cursor-pointer"
                aria-label="Fullscreen video"
              >
                <Maximize className="w-4 h-4" />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Reel Footer */}
      <div className="flex items-center justify-between px-2">

        <div>
          <h4 className="text-white font-bold text-sm flex items-center gap-2">
            <Play className="w-3 h-3 text-red-500 fill-current" />
            {reel.title}
          </h4>

          <p className="text-brand-ivory/40 text-[10px] tracking-widest uppercase mt-1">
            {reel.subtitle}
          </p>
        </div>

        {/* Watch Button */}
        {reel.url && (
          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2a2a30] hover:bg-white hover:text-black text-brand-ivory/80 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
          >
            Watch
            <span className="text-lg leading-none">↗</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function InstagramReels() {
  return (
    <section className="bg-[#0a0a0c] py-24 border-y border-[#1a1a1e]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Instagram Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#111114] border border-[#1f1f23] rounded-2xl p-4 md:p-6 mb-12 shadow-2xl">

          <div className="flex items-center gap-3 min-w-0">

            {/* Instagram Icon */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] shrink-0">

              <div className="bg-brand-dark w-full h-full rounded-full flex items-center justify-center border-2 border-[#111114]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                  />

                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>

              </div>
            </div>

            {/* Instagram Profile */}
            <div className="min-w-0">

              <h3 className="text-white font-bold text-base md:text-xl flex items-center gap-2 truncate">
                @saikrishnaphotography

                <span className="bg-blue-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                  ✓
                </span>
              </h3>

              <p className="text-brand-ivory/50 text-xs md:text-sm">
                Behind-the-Scenes · Short Reels · Studio Life
              </p>

            </div>
          </div>

          {/* Follow Button */}
          <a
            href="https://www.instagram.com/saikrishnaphotographyibm/"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shrink-0"
          >
            Follow
          </a>

        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {reels.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}