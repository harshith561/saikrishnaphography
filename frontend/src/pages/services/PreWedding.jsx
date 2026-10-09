import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';
import VideoShowcase from '../../components/VideoShowcase';
import { getVideosByCategory } from '../../data/videos';

export default function PreWedding() {
  useSEO({
    title: 'Pre-Wedding Photography & Films – Romantic Outdoor Shoots',
    description: 'Airy, golden hour pre-wedding portraits & cinematic love story films in Vijayawada. Capture the anticipation of your journey together at stunning outdoor locations.',
    keywords: 'pre-wedding photography Vijayawada, pre-wedding shoot, couple photoshoot, golden hour photography, outdoor pre-wedding, cinematic pre-wedding film, engagement shoot Vijayawada, romantic photoshoot Andhra Pradesh',
    path: '/services/pre-wedding',
    image: '/photos/pre-wedding/2.jpg',
  });

  const preWeddingVideos = getVideosByCategory('pre-wedding');

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero
        topheading="Pre-Wedding Photography"
        heading="Falling in Love, One Frame at a Time"
        subheading="Romantic, cinematic, outdoors."
        description="Airy, golden hour portraits that capture the anticipation of your journey together."
        image="/photos/pre-wedding/2.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-2xl tracking-widest uppercase mb-6 mt-6 text-center">Featured Stills</h3>
        <ServiceGallery theme="pre-wedding" />
      </section>

      {/* Pre-Wedding Cinema Section */}
      <section className="max-w-7xl mx-auto px-6 pb-28 w-full border-t border-brand-charcoal pt-24">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-sans text-xs tracking-widest uppercase">Cinematic Films</span>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mt-2">Pre-Wedding Love Stories</h3>
          <p className="text-brand-ivory/60 text-sm max-w-2xl mx-auto mt-3">
            Scenic golden hour horizons, authentic laughter, and musical visual poetry filmed in 4K.
          </p>
        </div>
        <VideoShowcase videos={preWeddingVideos} columns="grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto" />
      </section>

      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-pre-wedding" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}

