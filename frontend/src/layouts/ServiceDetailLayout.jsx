import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import BabyShinePromo from '../components/BabyShinePromo';
import PortfolioGrid from '../components/PortfolioGrid';

export default function ServiceDetailLayout({ data }) {
  useSEO({
    title: data.title,
    description: data.description
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero 
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
      />
      
      {/* Dynamic Content based on service */}
      

      {/* Mini Gallery for the specific service */}
      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12  mt-2 text-center">Featured Work</h3>
        <PortfolioGrid items={3} />
      </section>

      {/* Conditionally render the Baby Shine Promo for Maternity, Family, and Birthday */}
      {data.requiresBabyShinePromo && (
        <BabyShinePromo />
      )}
      
      {/* Global Book a Session CTA */}
      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">
          Ready to capture your story?
        </h2>
        <a id={`book-session-${data.id}`} href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-700 ease-custom mx-auto">
          Inquire Now
        </a>
      </section>
    </main>
  );
}
