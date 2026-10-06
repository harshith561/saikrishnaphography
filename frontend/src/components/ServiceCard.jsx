import { hideOnError } from '../data/photos';

export default function ServiceCard({ service }) {
  return (
    <a 
      href={service.path} 
      className="group block relative overflow-hidden bg-brand-charcoal/20 border border-brand-charcoal hover:border-brand-gold/50 transition-colors duration-500 ease-custom aspect-[3/4] flex flex-col justify-end p-8"
    >
      {service.image && (
        <img 
          src={service.image} 
          alt={service.title}
          onError={hideOnError}
          className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-custom"
        />
      )}
      <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500 z-0"></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#060606_10%,transparent_100%)] z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-custom">
        <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-3">
          {service.title}
        </h3>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-ivory font-light mb-4">
          {service.heading}
        </h2>
        <p className="text-brand-ivory/60 text-sm font-sans line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {service.description}
        </p>
      </div>
    </a>
  );
}
