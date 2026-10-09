import { useSEO } from '../hooks/useSEO';
import CanvasScrollSequence from '../components/CanvasScrollSequence';
import PortfolioGrid from '../components/PortfolioGrid';
import InstagramReels from '../components/InstagramReels';
import HomeReviews from '../components/HomeReviews';
import { motion } from 'framer-motion';

const STATS = [
  { number: '30+', label: 'Years of Legacy' },
  { number: '5,000+', label: 'Sessions Captured' },
  { number: '50+', label: 'Industry Awards' },
  { number: '4.9★', label: 'Google Rating' },
];

export default function Home() {
  useSEO({
    title: 'Premium Wedding & Event Photography',
    description: '30+ years of capturing life\'s most precious moments. Sai Krishna Photography offers premium wedding, pre-wedding, maternity, family & event photography in Vijayawada, Andhra Pradesh.',
    keywords: 'Sai Krishna Photography, wedding photographer Vijayawada, best photography studio Vijayawada, pre-wedding shoot, maternity photography, family portraits, event photography, drone photography, 4K videography, Ibrahimpatnam',
    path: '/',
    image: '/photos/wedding/2.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen">
      <CanvasScrollSequence />

      <div className="bg-brand-dark py-16 md:py-32 space-y-16 md:space-y-32">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-brand-ivory font-light mb-6">Every Frame Tells a Story</h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-ivory text-lg md:text-xl font-serif leading-relaxed mb-6 font-light">
            From the quiet anticipatory moments before the vows, to the grand celebrations that echo through generations.
          </p>
          <p className="text-brand-ivory/50 font-sans leading-loose text-sm md:text-base tracking-wide max-w-3xl mx-auto">
            Recognized as the premier luxury photography studio in Vijayawada and across Andhra Pradesh, Sai Krishna Photography brings over 30 years of unparalleled expertise to your most cherished celebrations. Whether you are seeking the best wedding photographers in Vijayawada or high-end cinematic videography, our timeless approach ensures your legacy is preserved beautifully.
          </p>
        </motion.section>

        {/* Stats Bar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="border-y border-brand-charcoal"
        >
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-charcoal">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center py-6 px-4 text-center"
              >
                <span className="font-serif text-3xl md:text-4xl text-brand-gold font-light mb-2">{stat.number}</span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-ivory/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Portfolio */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-brand-gold font-sans text-xs tracking-widest uppercase">Latest Work</span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mt-3">From Our Lens</h2>
          </div>
          <PortfolioGrid items={9} />
          <div className="text-center mt-12">
            <a href="/portfolio" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom">
              View Full Portfolio
            </a>
          </div>
        </motion.section>

        {/* Instagram Reels Integration */}
        <InstagramReels />

        {/* 5-Star Reviews */}
        <HomeReviews />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-4xl mx-auto text-center pb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ivory font-light mb-8">
            Let's Create Something Timeless
          </h2>
          <a id="book-session-home" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom">
            Book a Session
          </a>
        </motion.section>
      </div>
    </main>
  );
}
