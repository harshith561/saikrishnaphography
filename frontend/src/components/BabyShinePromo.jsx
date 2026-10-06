export default function BabyShinePromo() {
  return (
    <section className="bg-brand-dark py-24 px-6 border-t border-brand-charcoal">
      <div className="max-w-4xl mx-auto text-center bg-brand-charcoal/20 p-6 sm:p-12 md:p-16 rounded-sm border border-brand-gold/10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-gold/5 blur-[100px] pointer-events-none"></div>
        
        <h3 className="text-sm font-sans tracking-widest text-brand-gold uppercase mb-4 relative z-10">
          Introducing
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-ivory font-light mb-6 relative z-10">
          Baby Shine Studio
        </h2>
        <p className="text-brand-ivory/70 text-sm md:text-base font-sans leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
          Specialized newborn and milestone photography by the team behind Sai Krishna. 
          Because your growing family deserves the same 30-year legacy of trust.
        </p>
        
        <a 
          id="promo-link-babyshine"
          href="https://babyshine.saikrishnaphotography.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block relative z-10 border border-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-500 ease-custom"
        >
          Discover Baby Shine
        </a>
      </div>
    </section>
  );
}
