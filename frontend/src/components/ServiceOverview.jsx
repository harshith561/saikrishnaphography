export default function ServiceOverview({ title, description, description2 }) {
  const seoParagraph = description2 || `As the most trusted and best photography studio in Vijayawada, Sai Krishna Photography brings over three decades of creative legacy to every shoot. Recognized as a premier luxury studio in Andhra Pradesh, we combine state-of-the-art cinematic equipment with an unparalleled artistic vision. Whether you are looking for the best photographers in Vijayawada or a high-end visual storytelling team, we are committed to delivering world-class excellence and preserving your legacy for generations to come.`;

  return (
    <section className="relative w-full bg-brand-dark py-20 md:py-32 overflow-hidden border-b border-brand-charcoal">
      {/* Decorative Glows & Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute -left-[10%] top-1/4 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Left Column - Title */}
          <div className="w-full md:w-5/12 flex flex-col pt-2">
            <div className="w-12 h-[2px] bg-brand-gold mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-gold font-light leading-[1.2] tracking-wide relative">
              {title}
            </h2>
          </div>
          
          {/* Right Column - Typography & Descriptions */}
          <div className="w-full md:w-7/12 flex flex-col space-y-8">
            <p className="text-brand-ivory text-lg md:text-xl font-sans leading-relaxed md:leading-[2rem] font-light relative first-letter:text-5xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-brand-gold first-letter:float-left first-letter:mr-4 md:first-letter:mr-5 first-letter:leading-none">
              {description}
            </p>
            <div className="w-1/3 h-[1px] bg-brand-charcoal"></div>
            <p className="text-brand-ivory/60 text-sm md:text-base font-sans leading-relaxed tracking-wide">
              {seoParagraph}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
