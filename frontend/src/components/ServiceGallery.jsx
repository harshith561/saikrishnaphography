import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { getPhotosByCategory, themePhoto, hideOnError } from '../data/photos';
import Lightbox from './Lightbox';

export default function ServiceGallery({ theme }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Get all photos for this category, or fallback to themePhoto
  const categoryPhotos = getPhotosByCategory(theme);
  const images = categoryPhotos.length > 0
    ? categoryPhotos.slice(0, 3)
    : [
        { src: themePhoto(theme, 1), label: theme, title: `${theme} photo 1` },
        { src: themePhoto(theme, 2), label: theme, title: `${theme} photo 2` },
        { src: themePhoto(theme, 3), label: theme, title: `${theme} photo 3` },
      ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:h-[540px]">
        {/* Featured large image — spans 2 rows */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => setLightboxIndex(0)}
          className="relative aspect-[4/3] md:aspect-auto md:row-span-2 overflow-hidden group bg-brand-charcoal/30 cursor-pointer rounded-none border border-white/5"
        >
          <img
            src={images[0]?.src || themePhoto(theme, 1)}
            alt={images[0]?.title || `${theme} photo 1`}
            onError={hideOnError}
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
            <span className="text-brand-gold font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
              FEATURED PERSPECTIVE
            </span>
            <h4 className="text-brand-ivory font-serif text-lg mt-1">{images[0]?.title}</h4>
            <div className="flex items-center gap-2 mt-2 text-brand-gold text-xs tracking-wider uppercase font-sans">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand Fullscreen Details</span>
            </div>
          </div>

          <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/40 transition-colors duration-500 z-20 pointer-events-none" />
        </motion.div>

        {/* Top-right image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onClick={() => setLightboxIndex(1)}
          className="relative aspect-[4/3] md:aspect-auto overflow-hidden group bg-brand-charcoal/30 cursor-pointer rounded-none border border-white/5"
        >
          <img
            src={images[1]?.src || themePhoto(theme, 2)}
            alt={images[1]?.title || `${theme} photo 2`}
            onError={hideOnError}
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-5">
            <span className="text-brand-gold font-sans text-[9px] tracking-[0.2em] uppercase font-semibold">
              CANDID DETAIL
            </span>
            <h4 className="text-brand-ivory font-serif text-base">{images[1]?.title}</h4>
            <div className="flex items-center gap-1.5 mt-1 text-brand-gold text-xs tracking-wider font-sans">
              <Maximize2 className="w-3 h-3" />
              <span>View Details</span>
            </div>
          </div>

          <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/40 transition-colors duration-500 z-20 pointer-events-none" />
        </motion.div>

        {/* Bottom-right image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => setLightboxIndex(2)}
          className="relative aspect-[4/3] md:aspect-auto overflow-hidden group bg-brand-charcoal/30 cursor-pointer rounded-none border border-white/5"
        >
          <img
            src={images[2]?.src || themePhoto(theme, 3)}
            alt={images[2]?.title || `${theme} photo 3`}
            onError={hideOnError}
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-5">
            <span className="text-brand-gold font-sans text-[9px] tracking-[0.2em] uppercase font-semibold">
              SIGNATURE COMPOSITION
            </span>
            <h4 className="text-brand-ivory font-serif text-base">{images[2]?.title}</h4>
            <div className="flex items-center gap-1.5 mt-1 text-brand-gold text-xs tracking-wider font-sans">
              <Maximize2 className="w-3 h-3" />
              <span>View Details</span>
            </div>
          </div>

          <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/40 transition-colors duration-500 z-20 pointer-events-none" />
        </motion.div>
      </div>

      {/* Luxury Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={categoryPhotos.length > 0 ? categoryPhotos : images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}