import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-charcoal pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
        {/* Brand & Address */}
        <div className="md:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <img
              src={logo}
              alt="Sai Krishna Photography"
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-brand-ivory/60 text-sm font-sans leading-relaxed mb-6">
            30 years of capturing life's most precious moments with documentary realism and timeless elegance.
          </p>
          <div className="text-brand-ivory/40 text-xs font-sans uppercase tracking-widest space-y-2">
            <p>
              A.COLONY CENTER, Brilliants Convent Street,
              <br />
              Ibrahimpatnam, Vijayawada,
              <br />
              Andhra Pradesh 521456
            </p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-1 md:ml-auto">
          <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-6">Studio</h3>
          <ul className="space-y-4 text-brand-ivory/70 text-sm font-sans">
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/reviews" className="hover:text-brand-gold transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-1">
          <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-6">Services</h3>
          <ul className="space-y-4 text-brand-ivory/70 text-sm font-sans">
            <li><Link to="/services/wedding" className="hover:text-brand-gold transition-colors">Weddings</Link></li>
            <li><Link to="/services/pre-wedding" className="hover:text-brand-gold transition-colors">Pre-Wedding</Link></li>
            <li><Link to="/services/maternity" className="hover:text-brand-gold transition-colors">Maternity</Link></li>
            <li><Link to="/packages" className="hover:text-brand-gold transition-colors">Packages</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors italic">View All</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="md:col-span-1">
          <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-6">Connect</h3>
          <ul className="space-y-4 text-brand-ivory/70 text-sm font-sans mb-8">
            <li><a href="mailto:hello@saikrishnaphotography.com" className="hover:text-brand-gold transition-colors">hello@saikrishnaphotography.com</a></li>
            <li><a href="tel:+919848448139" className="hover:text-brand-gold transition-colors">+91 98484 48139</a></li>
          </ul>

          {/* Baby Shine Promo in Footer */}
          <div className="mt-8 p-4 border border-brand-gold/20 bg-brand-charcoal/20">
            <h4 className="text-brand-ivory text-xs font-serif mb-2">Looking for Newborn Photography?</h4>
            <a
              href="https://babyshine.saikrishnaphotography.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold text-xs font-sans uppercase tracking-widest hover:text-brand-ivory transition-colors"
            >
              Visit Baby Shine Studio →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 border-t border-brand-charcoal/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-ivory/40 text-xs font-sans tracking-widest uppercase">
          © {currentYear} Sai Krishna Photography. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-brand-ivory/40 text-xs font-sans tracking-widest uppercase">
          <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
          <a href="#" className="hover:text-brand-gold transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
