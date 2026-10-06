import { useState } from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';
import VideoShowcase from '../../components/VideoShowcase';
import BabyShinePromo from '../../components/BabyShinePromo';
import { videos } from '../../data/videos';

const VIDEO_TABS = [
  { key: 'all', label: 'All Films' },
  { key: 'family', label: 'Family & Milestones' },
  { key: 'wedding', label: 'Wedding Films' },
  { key: 'pre-wedding', label: 'Pre-Wedding' },
  { key: 'post-wedding', label: 'Post-Wedding & Reception' },
];

export default function Family() {
  useSEO({
    title: 'Family Photography & Cinema – Generational Portraits',
    description: 'Candid and joyful family photography in Vijayawada. Preserve the legacy of your family tree with timeless portraits & 4K cinema by Sai Krishna Photography.',
    keywords: 'family photography Vijayawada, family portrait, generational photography, family photoshoot, kids photography, baby photography, joint family portrait, family video Vijayawada, milestone photography',
    path: '/services/family',
    image: '/photos/family/2.jpg',
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter((v) => v.categories.includes(activeCategory));

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <div className="-mt-[60px]">
        <PageHero
          heading="Every Generation, One Frame"
          subheading="Generational warmth."
          description="Candid and joyful moments that preserve the legacy of your family tree."
          image="/photos/family/2.jpg"
        />
      </div>

      {/* Featured Stills Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12 text-center">Featured Work</h3>
        <ServiceGallery theme="family" />
      </section>

      {/* 4K Cinematic Films & Family Heirlooms Section */}
      <section className="max-w-7xl mx-auto px-6 pb-28 w-full border-t border-brand-charcoal pt-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-brand-gold font-sans text-xs tracking-widest uppercase mb-3">
            <Film className="w-4 h-4 text-brand-gold" />
            <span>4K Cinema & Heirlooms</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-brand-ivory font-light mt-1">
            Family Stories in Motion
          </h3>
          <p className="text-brand-ivory/60 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Preserving the laughter of elders, sacred turmeric showers, joyful half saree rites, and timeless celebrations uniting generations across our authentic film archive.
          </p>
        </div>

        {/* Interactive Category Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-14 px-2">
          {VIDEO_TABS.map((tab) => {
            const count = tab.key === 'all'
              ? videos.length
              : videos.filter(v => v.categories.includes(tab.key)).length;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`relative px-4 md:px-5 py-2.5 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-none border cursor-pointer flex items-center gap-2 ${activeCategory === tab.key
                    ? 'border-brand-gold text-brand-gold bg-brand-gold/10 shadow-lg shadow-brand-gold/10'
                    : 'border-brand-charcoal text-brand-ivory/50 hover:text-brand-ivory hover:border-brand-ivory/30'
                  }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${activeCategory === tab.key ? 'bg-brand-gold text-brand-dark font-bold' : 'bg-brand-charcoal text-brand-ivory/60'
                  }`}>
                  {count}
                </span>
                {activeCategory === tab.key && (
                  <motion.div
                    layoutId="family-video-filter-active"
                    className="absolute inset-0 border border-brand-gold -m-px pointer-events-none"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Video Showcase Grid */}
        <VideoShowcase videos={filteredVideos} />
      </section>

      <BabyShinePromo />

      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-family" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}

