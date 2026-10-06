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
