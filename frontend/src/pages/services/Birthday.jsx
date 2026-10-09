import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';
import BabyShinePromo from '../../components/BabyShinePromo';

export default function Birthday() {
  useSEO({
    title: 'Birthday Photography – Celebrations Frozen in Joy',
    description: 'Playful and warm birthday photography in Vijayawada. From first birthdays to milestone celebrations, we document life’s most joyful moments.',
    keywords: 'birthday photography Vijayawada, birthday party photographer, first birthday photoshoot, kids birthday photography, milestone birthday, birthday celebration photos, cake smash photography',
    path: '/services/birthday',
    image: '/photos/birthday/2.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero topheading="Birthday Photography" heading="Celebrations, Frozen in Joy" subheading="Colorful, dynamic energy." description="Playful and warm documentation of life’s most joyful milestones." image="/photos/birthday/1.jpg" />

      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-2xl tracking-widest uppercase mb-6 mt-6 text-center">Featured Work</h3>
        <ServiceGallery theme="birthday" />
      </section>

      <BabyShinePromo />

      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-birthday" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}
