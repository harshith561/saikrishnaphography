import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { portfolioItems, hideOnError } from '../data/photos';
import Lightbox from './Lightbox';

const FILTER_TABS = [
  { key: 'all', label: 'All' },
  { key: 'wedding', label: 'Weddings' },
  { key: 'pre-wedding', label: 'Pre-Wedding' },
  { key: 'post-wedding', label: 'Post-Wedding' },
  { key: 'maternity', label: 'Maternity' },
  { key: 'family', label: 'Family' },
  { key: 'studio', label: 'Studio' },
  { key: 'drone', label: 'Drone' },
  { key: 'event', label: 'Events' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'birthday', label: 'Birthday' },
  { key: 'videography', label: 'Videography' },
];

const SERVICE_LINKS = {
  wedding: '/services/wedding',
  'pre-wedding': '/services/pre-wedding',
  'post-wedding': '/services/post-wedding',
  maternity: '/services/maternity',
  family: '/services/family',
  birthday: '/services/birthday',
  event: '/services/event',
  studio: '/services/studio',
  drone: '/services/drone',
  commercial: '/services/commercial',
  videography: '/services/videography',
};

// Varied aspect ratios for stunning editorial masonry grid
const ASPECT_CYCLE = [
  'aspect-[4/5]',
  'aspect-[3/4]',
  'aspect-square',
  'aspect-[3/4]',
  'aspect-[4/5]',
  'aspect-square',
];

export default function PortfolioGrid({ items = 9, startIndex = 0, showFilters = false }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeFilter);

  const displayed = filtered.slice(startIndex, startIndex + items);

  return (
    <div>
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 px-2">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`relative px-4 md:px-5 py-2 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 rounded-none border cursor-pointer ${
                activeFilter === tab.key
                  ? 'border-brand-gold text-brand-gold bg-brand-gold/10 shadow-lg shadow-brand-gold/10'
                  : 'border-brand-charcoal text-brand-ivory/50 hover:text-brand-ivory hover:border-brand-ivory/30'
              }`}
            >
              {tab.label}
              {activeFilter === tab.key && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 border border-brand-gold -m-px"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {displayed.map((item, i) => {
            // Find global index in filtered array so Lightbox navigates through filtered set
            const itemIndexInFiltered = filtered.findIndex(p => p.id === item.id);
            const globalIndex = itemIndexInFiltered !== -1 ? itemIndexInFiltered : i;

            return (
              <motion.div
                key={`${item.src}-${i}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.25, 1, 0.5, 1] }}
                onClick={() => setLightboxIndex(globalIndex)}
                className={`relative overflow-hidden group bg-brand-charcoal/30 w-full break-inside-avoid cursor-pointer ${ASPECT_CYCLE[i % ASPECT_CYCLE.length]}`}
              >
                <img
                  src={item.src}
                  alt={`${item.title || item.label} photography by Sai Krishna`}
                  onError={hideOnError}
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  loading="lazy"
                />

                {/* Floating expand icon in top right on hover */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-gold">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Hover overlay with photo details & links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-end pb-7 px-5 text-center">
                  <span className="text-brand-gold font-sans text-[9px] tracking-[0.3em] uppercase mb-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 font-medium">
                    {item.label}
                  </span>

                  <h3 className="text-brand-ivory font-serif text-base lg:text-lg mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="text-brand-gold text-xs tracking-wider uppercase font-sans font-medium flex items-center gap-1 hover:underline">
                      View Project Details ↗
                    </span>

                    {SERVICE_LINKS[item.category] && (
                      <a
                        href={SERVICE_LINKS[item.category]}
                        onClick={(e) => e.stopPropagation()}
                        className="text-brand-ivory/70 hover:text-white font-sans text-xs tracking-widest uppercase border-b border-brand-ivory/30 pb-0.5 hover:border-brand-gold transition-colors"
                      >
                        Service Page →
                      </a>
                    )}
                  </div>
                </div>

                {/* Gold corner border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/40 transition-colors duration-500 z-20 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {displayed.length === 0 && (
        <div className="text-center py-20 text-brand-ivory/40 font-sans text-sm tracking-widest uppercase">
          No photos in this category yet
        </div>
      )}

      {/* Luxury Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}