import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';

export default function Packages() {
  useSEO({
    title: 'Photography Packages & Pricing',
    description: 'Transparent pricing for heirlooms you will treasure for a lifetime. Explore our wedding, family, and event photography packages in Vijayawada.',
    keywords: 'wedding photography packages Vijayawada, photography pricing, pre-wedding shoot cost, photoshoot packages Andhra Pradesh, affordable premium photography, wedding videography price',
    path: '/packages',
    image: '/photos/packages/1.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero topheading="Packages" heading="Find the Perfect Package" subheading="Elegant, simple, timeless." description="Transparent pricing for heirlooms you will treasure for a lifetime." image="/photos/packages/1.jpg" />

      <section className="max-w-7xl mx-auto px-6 pt-24 w-full">
        <h3 className="text-brand-gold font-sans text-2xl tracking-widest uppercase mb-12 text-center">Work Included in Every Package</h3>
        <ServiceGallery theme="packages" />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Package 1 */}
          <div className="bg-brand-charcoal/20 border border-brand-charcoal p-10 hover:border-brand-gold/50 transition-colors">
            <h3 className="text-brand-ivory text-xl font-serif mb-2">The Essential</h3>
            <p className="text-brand-ivory/60 text-sm font-sans mb-8">Perfect for intimate gatherings.</p>
            <div className="text-3xl font-serif text-brand-gold mb-8">₹50,000</div>
            <ul className="space-y-4 text-brand-ivory/80 text-sm font-sans mb-12">
              <li>• 4 Hours Coverage</li>
              <li>• 1 Primary Photographer</li>
              <li>• 200 Edited Images</li>
              <li>• Online Gallery</li>
            </ul>
            <a href="/contact" className="block text-center border border-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 py-3 text-brand-gold tracking-widest text-xs uppercase transition-all">Book Now</a>
          </div>

          {/* Package 2 */}
          <div className="bg-brand-dark border border-brand-gold p-10 relative md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1">Most Popular</div>
            <h3 className="text-brand-ivory text-xl font-serif mb-2">The Signature</h3>
            <p className="text-brand-ivory/60 text-sm font-sans mb-8">Comprehensive coverage for your big day.</p>
            <div className="text-3xl font-serif text-brand-gold mb-8">₹1,20,000</div>
            <ul className="space-y-4 text-brand-ivory/80 text-sm font-sans mb-12">
              <li>• 8 Hours Coverage</li>
              <li>• 2 Primary Photographers</li>
              <li>• Videography Team</li>
              <li>• 500 Edited Images</li>
              <li>• Cinematic Highlight Reel</li>
              <li>• Premium Layflat Album</li>
            </ul>
            <a href="/contact" className="block text-center border border-brand-gold bg-brand-gold text-brand-dark hover:bg-brand-gold/80 px-6 py-3 tracking-widest text-xs uppercase transition-all">Book Now</a>
          </div>

          {/* Package 3 */}
          <div className="bg-brand-charcoal/20 border border-brand-charcoal p-10 hover:border-brand-gold/50 transition-colors">
            <h3 className="text-brand-ivory text-xl font-serif mb-2">The Legacy</h3>
            <p className="text-brand-ivory/60 text-sm font-sans mb-8">The ultimate heirloom experience.</p>
            <div className="text-3xl font-serif text-brand-gold mb-8">₹2,50,000</div>
            <ul className="space-y-4 text-brand-ivory/80 text-sm font-sans mb-12">
              <li>• Multi-Day Coverage</li>
              <li>• Full Photography & Videography Team</li>
              <li>• Drone Coverage</li>
              <li>• Pre-Wedding Session Included</li>
              <li>• Unlimited Edited Images</li>
              <li>• 2 Premium Layflat Albums</li>
            </ul>
            <a href="/contact" className="block text-center border border-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 py-3 text-brand-gold tracking-widest text-xs uppercase transition-all">Book Now</a>
          </div>

        </div>
      </section>
    </main>
  );
}
