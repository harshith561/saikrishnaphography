import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';

export default function Studio() {
  useSEO({
    title: 'Studio Photography – Elegant Portraiture',
    description: 'Elegant, minimalist studio portraiture crafted with absolute precision in Ibrahimpatnam, Vijayawada. Professional headshots, fashion & family portraits.',
    keywords: 'studio photography Vijayawada, professional portraits, headshots photographer, fashion photography studio, indoor photoshoot, family studio portraits, Ibrahimpatnam photo studio',
    path: '/services/studio',
    image: '/photos/studio/2.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero heading="Precision. Light. Craft." subheading="Clean, professional, controlled." description="Elegant, minimalist portraiture crafted with absolute precision." image="/photos/studio/2.jpg" />

      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12 text-center">Featured Work</h3>
        <ServiceGallery theme="studio" />
      </section>
      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-studio" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}
