import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { pageData } from '../data/pages';

export default function ServicesMaster() {
  useSEO({
    title: 'Photography Services – Wedding, Event, Maternity & More',
    description: 'Explore our full range of premium photography services: weddings, pre-weddings, maternity, family, birthday, events, studio, commercial, drone & 4K videography in Vijayawada.',
    keywords: 'photography services Vijayawada, wedding photography services, maternity shoot, family photography, birthday photography, drone photography, commercial photography, studio portrait, event photography, videography services',
    path: '/services',
    image: '/photos/studio/1.jpg',
  });

  // Filter out the non-service pages from pageData to only show actual services and packages
  const excludedIds = ['about', 'portfolio', 'reviews', 'contact', 'services'];
  const services = pageData.filter(p => !excludedIds.includes(p.id));

  return (
    <main className="bg-brand-dark min-h-screen pb-32">
      <PageHero
        heading="One Studio. Every Moment."
        subheading="Many disciplines, one lens."
        minHeight="min-h-[78vh]"
        image="/photos/studio/1.jpg"
      />

      {/* Services Intro Section */}
      <section className="relative w-full bg-brand-dark py-24 overflow-hidden border-b border-brand-charcoal">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] text-center opacity-[0.02] pointer-events-none overflow-hidden">
          <span className="text-[15vw] font-serif font-bold text-white tracking-tighter mix-blend-overlay">
            PORTFOLIO
          </span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-gold/60"></div>
            <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase">Unmatched Excellence</span>
            <div className="w-12 h-px bg-brand-gold/60"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory font-light leading-[1.2] mb-10">
            The Premier Photography Services <br className="hidden md:block" />
            <span className="text-brand-gold italic">in Vijayawada</span>
          </h2>
          
          <p className="text-brand-ivory/80 text-lg md:text-xl font-sans leading-relaxed max-w-3xl mx-auto font-light mb-6">
            From intimate weddings and milestone maternity shoots to grand corporate events, Sai Krishna Photography offers a comprehensive suite of premium visual storytelling services. 
          </p>
          <p className="text-brand-ivory/60 text-base font-sans leading-relaxed max-w-2xl mx-auto">
            We are widely recognized as the best photography studio in Vijayawada, combining over three decades of artistic mastery with cutting-edge cinematic technology to deliver unparalleled quality across every discipline. Whatever your story, we have the vision to capture it.
          </p>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-brand-charcoal/50 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <span className="block text-brand-gold font-serif text-4xl mb-2">12+</span>
              <span className="text-brand-ivory/50 font-sans text-[10px] uppercase tracking-widest">Specialized Services</span>
            </div>
            <div className="text-center">
              <span className="block text-brand-gold font-serif text-4xl mb-2">4K</span>
              <span className="text-brand-ivory/50 font-sans text-[10px] uppercase tracking-widest">Cinematic Delivery</span>
            </div>
            <div className="text-center">
              <span className="block text-brand-gold font-serif text-4xl mb-2">30+</span>
              <span className="text-brand-ivory/50 font-sans text-[10px] uppercase tracking-widest">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
