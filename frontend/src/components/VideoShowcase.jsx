import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Clock, Sparkles } from 'lucide-react';
import VideoPlayerModal from './VideoPlayerModal';
import { hideOnError } from '../data/photos';

export default function VideoShowcase({ videos = [], columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }) {
  const [activeVideo, setActiveVideo] = useState(null);

  if (!videos || videos.length === 0) return null;

  return (
    <>
      <div className={`grid ${columns} gap-6 lg:gap-8`}>
        {videos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            onClick={() => setActiveVideo(item)}
            className="group relative bg-brand-charcoal/40 border border-brand-charcoal hover:border-brand-gold/50 cursor-pointer overflow-hidden flex flex-col transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-brand-gold/10"
          >
            {/* Thumbnail Poster Container (16:9) */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={item.cover || '/photos/wedding/1.jpg'}
                alt={item.title}
                onError={hideOnError}
                className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-85 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500" />

              {/* Badge & Duration Pills */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                {item.badge && (
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[9px] font-sans font-semibold tracking-[0.2em] uppercase text-brand-gold border border-brand-gold/30">
                    {item.badge}
                  </span>
                )}
                {item.duration && (
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-black/70 backdrop-blur-md text-[10px] font-sans tracking-wider text-brand-ivory/80 border border-white/10 ml-auto">
                    <Clock className="w-3 h-3 text-brand-gold" />
                    {item.duration}
                  </span>
                )}
              </div>

              {/* Center Radiant Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-16 h-16 rounded-full bg-brand-gold/20 animate-ping group-hover:bg-brand-gold/40" />
                  <div className="w-14 h-14 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow-lg shadow-black/60 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Subtle film grain effect line */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-500" />
            </div>

            {/* Video Details */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-brand-dark/90">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-brand-gold/80 text-[10px] tracking-[0.25em] uppercase font-sans font-medium">
                  <Film className="w-3 h-3 text-brand-gold" />
                  <span>Cinematic Film</span>
                </div>

                <h4 className="text-brand-ivory font-serif text-lg lg:text-xl group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h4>

                {item.subtitle && (
                  <p className="text-brand-gold text-xs tracking-wider uppercase font-sans font-light">
                    {item.subtitle}
                  </p>
                )}

                {item.description && (
                  <p className="text-brand-ivory/60 text-xs font-sans leading-relaxed line-clamp-2 pt-1">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-brand-charcoal flex items-center justify-between">
                <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium group-hover:underline flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Watch Film
                </span>
                <span className="text-[10px] text-brand-ivory/40 tracking-widest uppercase font-sans">
                  Ultra HD 4K
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Theater Modal */}
      {activeVideo && (
        <VideoPlayerModal
          video={activeVideo}
          playlist={videos}
          onClose={() => setActiveVideo(null)}
          onSelectVideo={setActiveVideo}
        />
      )}
    </>
  );
}
