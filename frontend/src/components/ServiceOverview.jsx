export default function ServiceOverview({ title, description, description2 }) {
  const seoParagraph = description2 || `As the most trusted and best photography studio in Vijayawada, Sai Krishna Photography brings over three decades of creative legacy to every shoot. Recognized as a premier luxury studio in Andhra Pradesh, we combine state-of-the-art cinematic equipment with an unparalleled artistic vision. Whether you are looking for the best photographers in Vijayawada or a high-end visual storytelling team, we are committed to delivering world-class excellence and preserving your legacy for generations to come.`;

  return (
    <section className="relative w-full bg-brand-dark py-24 md:py-32 border-b border-brand-charcoal overflow-hidden group">
      {/* Abstract Animated Glow */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-brand-gold/20 to-transparent"></div>
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

      {/* Background large watermark text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-0 opacity-[0.02] pointer-events-none w-full overflow-hidden whitespace-nowrap">
        <span className="text-[12rem] lg:text-[18rem] font-serif font-bold text-white tracking-tighter mix-blend-overlay">
          {title}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top small accent */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <div className="h-px w-12 bg-brand-gold/50"></div>
          <span className="text-brand-gold font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase">The Studio Legacy</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Title & Highlight */}
          <div className="w-full lg:w-5/12 flex flex-col relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory font-light leading-[1.1] tracking-wide relative mb-8">
              <span className="block text-brand-gold italic text-2xl md:text-3xl mb-2">Defining</span>
              {title}
            </h2>
            
            {/* Minimalist Stats/Badges */}
            <div className="flex gap-8 mt-4 pt-8 border-t border-brand-charcoal/50">
              <div>
                <span className="block text-brand-gold font-serif text-3xl md:text-4xl mb-1">30+</span>
                <span className="text-brand-ivory/50 font-sans text-[10px] uppercase tracking-widest">Years of Trust</span>
              </div>
              <div>
                <span className="block text-brand-gold font-serif text-3xl md:text-4xl mb-1">100%</span>
                <span className="text-brand-ivory/50 font-sans text-[10px] uppercase tracking-widest">Premium Quality</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Typography & Descriptions */}
          <div className="w-full lg:w-7/12 flex flex-col space-y-10 relative">
            {/* Elegant Quotation Mark Background */}
            <div className="absolute -top-16 -left-8 text-brand-gold/10 font-serif text-9xl md:text-[12rem] leading-none pointer-events-none select-none">"</div>
            
            <p className="text-brand-ivory text-xl md:text-2xl font-serif leading-relaxed md:leading-[2.2rem] font-light relative z-10 first-letter:text-6xl md:first-letter:text-[5.5rem] first-letter:font-serif first-letter:text-brand-gold first-letter:float-left first-letter:mr-4 md:first-letter:mr-5 first-letter:leading-none first-letter:drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
              {description}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-full h-px bg-gradient-to-r from-brand-charcoal to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30"></div>
            </div>

            <p className="text-brand-ivory/50 text-sm md:text-base font-sans leading-loose tracking-wide md:pr-12">
              {seoParagraph}
            </p>

            {/* A small "Discover More" or purely aesthetic arrow block */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-4 text-brand-gold/70 text-[10px] md:text-xs uppercase tracking-widest font-sans">
                <span>Sai Krishna Photography</span>
                <div className="w-12 h-px bg-brand-gold/30"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
