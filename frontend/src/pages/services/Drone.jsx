import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';

export default function Drone() {
  useSEO({
    title: 'Drone Photography & Aerial Videography',
    description: 'Grand, cinematic aerial views that provide breathtaking context to your celebration. Professional drone photography and 4K aerial videography in Vijayawada.',
    keywords: 'drone photography Vijayawada, aerial videography, drone wedding shoot, aerial photography Andhra Pradesh, cinematic drone video, outdoor drone shoot, best drone photographer',
    path: '/services/drone',
    image: '/photos/drone/2.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero heading="A New Perspective on Your Story" subheading="Sweeping aerial reveals." description="Grand, cinematic views that provide breathtaking context to your celebration." image="/photos/drone/2.jpg" />

      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12 text-center">Featured Work</h3>
        <ServiceGallery theme="drone" />
      </section>
      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-drone" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}
