import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';

export default function Event() {
  useSEO({
    title: 'Event Photography – Corporate & Private Celebrations',
    description: 'From keynotes to the dance floor, we capture the pulse of the room. Professional event photography for corporate events, parties & celebrations in Vijayawada.',
    keywords: 'event photography Vijayawada, corporate event photographer, party photographer, conference photography, private event photography, concert photography, best event photographer Andhra Pradesh',
    path: '/services/event',
    image: '/photos/event/2.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero topheading="Event Photography" heading="Every Event, Perfectly Framed" subheading="Dynamic, multi-scene energy." description="From keynotes to the dance floor, we capture the pulse of the room." image="/photos/event/2.jpg" />

      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-2xl tracking-widest uppercase mb-6 mt-6 text-center">Featured Work</h3>
        <ServiceGallery theme="event" />
      </section>
      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-event" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}
