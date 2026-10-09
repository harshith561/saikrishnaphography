import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import { hideOnError } from '../data/photos';

export default function About() {
  useSEO({
    title: 'About Us – 30 Years of Visual Storytelling',
    description: 'Discover Sai Krishna Photography\'s 30-year legacy of documentary realism and cinematic elegance. From a small Vijayawada studio to one of Andhra Pradesh\'s most trusted photography brands.',
    keywords: 'about Sai Krishna Photography, photography studio Vijayawada, professional photographer Ibrahimpatnam, documentary realism photography, wedding photography legacy, 30 years photography experience',
    path: '/about',
    image: '/photos/about/3.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen pb-20">
      <PageHero
        heading="Three Decades of Trust"
        subheading="From film to forever."
        image="/photos/about/3.jpg"
      />

      <section className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] bg-brand-charcoal/40 border border-brand-charcoal relative overflow-hidden">
            <img
              src="/photos/about/1.jpg"
              alt="A Legacy of Light"
              width="600"
              height="800"
              loading="lazy"
              onError={hideOnError}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-brand-ivory/80 font-serif italic text-2xl bg-brand-dark/30 mix-blend-overlay">
              Est. 1996
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-brand-ivory font-light mb-6">A Legacy of Light</h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6"></div>
            <p className="text-brand-ivory/70 font-sans leading-relaxed mb-4 text-sm md:text-base">
              What started over thirty years ago as a small local studio has grown into a multi-generational legacy. We have witnessed families grow, captured the tearful joy of weddings, and frozen the fleeting innocence of childhood.
            </p>
            <p className="text-brand-ivory/70 font-sans leading-relaxed text-sm md:text-base">
              Our philosophy has always remained the same: to tell your story with unscripted authenticity and uncompromising quality.
            </p>
          </div>
        </div>

        {/* The Team / Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <h1 className="text-3xl font-serif text-brand-ivory font-light mb-6">Our Approach</h1>
            <div className="w-12 h-[1px] bg-brand-gold mb-6"></div>
            <p className="text-brand-ivory/70 font-sans leading-relaxed mb-4 text-sm md:text-base">
              We describe our style as documentary realism infused with cinematic elegance. We aren't just taking pictures; we are crafting heirlooms.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-4">
                <span className="text-brand-gold font-serif italic text-xl">01</span>
                <div>
                  <h4 className="text-brand-ivory text-sm font-sans uppercase tracking-widest mb-1">Authenticity</h4>
                  <p className="text-brand-ivory/60 text-xs font-sans leading-relaxed">We capture the moments as they unfold naturally, without staging.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-gold font-serif italic text-xl">02</span>
                <div>
                  <h4 className="text-brand-ivory text-sm font-sans uppercase tracking-widest mb-1">Craftsmanship</h4>
                  <p className="text-brand-ivory/60 text-xs font-sans leading-relaxed">Every image is color-graded and retouched with meticulous precision.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-first md:order-last aspect-[4/3] bg-brand-charcoal/40 border border-brand-charcoal relative overflow-hidden">
            <img
              src="/photos/about/2.jpg"
              alt="Our Approach"
              width="800"
              height="600"
              loading="lazy"
              onError={hideOnError}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
