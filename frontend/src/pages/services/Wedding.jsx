import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';
import VideoShowcase from '../../components/VideoShowcase';
import { getVideosByCategory } from '../../data/videos';

export default function Wedding() {
  useSEO({
    title: 'Wedding Photography & Cinema – Candid & Cinematic',
    description: 'Every fleeting smile, every joyful tear. Premium candid wedding photography & 4K cinematic films in Vijayawada. Capturing the unscripted magic of your big day.',
    keywords: 'wedding photography Vijayawada, candid wedding photographer, cinematic wedding film, 4K wedding videography, best wedding photographer Andhra Pradesh, Telugu wedding photography, Hindu wedding photography, baraat photography',
    path: '/services/wedding',
    image: '/photos/wedding/2.jpg',
  });

  const weddingVideos = getVideosByCategory('wedding');

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero
        heading="Your Vows, Captured Forever"
        subheading="Candid documentary realism & 4K Cinema."
        description="Every fleeting smile, every joyful tear. We capture the unscripted magic of your big day."
        image="/photos/wedding/2.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12 text-center">Featured Gallery</h3>
        <ServiceGallery theme="wedding" />
      </section>

      {/* Wedding Cinema & Teasers Section */}
      <section className="max-w-7xl mx-auto px-6 pb-28 w-full border-t border-brand-charcoal pt-24">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-sans text-xs tracking-widest uppercase">4K Cinematic Films</span>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mt-2">Royal Wedding Teasers</h3>
          <p className="text-brand-ivory/60 text-sm max-w-2xl mx-auto mt-3">
            Cinematic highlights capturing the sacred muhurtham, heartfelt vows, grand baraat, and unscripted bridal grace.
          </p>
        </div>
        <VideoShowcase videos={weddingVideos} />
      </section>

      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-wedding" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}

