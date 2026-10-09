import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { hideOnError } from '../data/photos';

export default function PageHero({
  topheading,
  heading,
  subheading,
  description,
  minHeight = "min-h-[78vh]",
  image,
  imagePosition = "object-[center_30%]",
  imageClassName = "",
  imageStyle = {}
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // Parallax: image drifts down slightly as the hero scrolls out of view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const ease = [0.25, 1, 0.5, 1];
  const dur = (s) => (reduceMotion ? 0 : s);

  return (
    <div
      ref={ref}
      className={`relative ${minHeight} bg-brand-dark flex flex-col items-center justify-center overflow-hidden pt-20`}
    >
      {image && (
        <motion.img
          src={image}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          onError={hideOnError}
          className={`absolute inset-x-0 -top-[280px] z-0 w-full h-[calc(100%+560px)] object-cover opacity-35 ${imagePosition} ${imageClassName}`}
          style={{ ...imageStyle, y: reduceMotion ? 0 : parallaxY }}
        />
      )}

      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-charcoal/50 via-brand-dark to-brand-dark opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* {topheading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur(1.2), ease }}
            className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-4 "
          >
            {topheading}
          </motion.p>
        )} */}
        {topheading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur(1.2), ease }}
            className="inline-block text-white text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans mb-6 px-4 sm:px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
          >
            {topheading}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(1.2), ease }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-brand-ivory font-light tracking-tight mb-6 px-2">
            {heading}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur(1.5), delay: reduceMotion ? 0 : 0.4, ease }}
          className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(1.2), delay: reduceMotion ? 0 : 0.6, ease }}
        >
          {subheading && (
            <h2 className="text-brand-gold text-sm tracking-widest font-sans uppercase mb-4">
              {subheading}
            </h2>
          )}
          {description && (
            <p className="text-brand-ivory/70 text-base md:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}