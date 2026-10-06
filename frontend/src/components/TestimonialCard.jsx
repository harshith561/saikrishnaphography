export default function TestimonialCard({ text, author, role }) {
  return (
    <div className="border border-brand-charcoal p-10 hover:border-brand-gold/30 transition-colors duration-500 ease-custom bg-brand-dark flex flex-col justify-between h-full">
      <div>
        <div className="text-brand-gold text-4xl font-serif leading-none mb-6">"</div>
        <p className="text-brand-ivory/80 text-base md:text-lg font-serif italic font-light leading-relaxed mb-8">
          {text}
        </p>
      </div>
      <div>
        <div className="w-8 h-[1px] bg-brand-gold/50 mb-4"></div>
        <h4 className="text-brand-ivory font-sans text-sm tracking-widest uppercase">
          {author}
        </h4>
        {role && (
          <p className="text-brand-ivory/50 text-xs font-sans mt-1">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}
