import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.webp';

export default function Navigation() {
  const { scrollY } = useScroll();
  const bgColor = useTransform(scrollY, [0, 100], ['rgba(6, 6, 6, 0)', 'rgba(6, 6, 6, 0.6)']);
  const blurEffect = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(16px)']);
  const borderColor = useTransform(scrollY, [0, 100], ['rgba(185, 138, 78, 0)', 'rgba(185, 138, 78, 0.2)']);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: bgColor,
          backdropFilter: blurEffect,
          WebkitBackdropFilter: blurEffect,
          borderBottom: useTransform(borderColor, v => `1px solid ${v}`),
        }}
        className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Sai Krishna Photography"
              className="h-15 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-brand-ivory/80 text-xs font-sans tracking-widest uppercase">
            <Link id="nav-link-home" to="/" className="hover:text-brand-gold transition-colors">The Studio</Link>
            <Link id="nav-link-about" to="/about" className="hover:text-brand-gold transition-colors">About</Link>
            <Link id="nav-link-portfolio" to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link>
            <div className="relative group py-4 -my-4 flex items-center">
              <Link id="nav-link-services" to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
              <div className="absolute left-0 top-full w-56 bg-brand-charcoal border border-brand-gold/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="flex flex-col py-2 text-[10px]">
                  <Link to="/services/wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Weddings</Link>
                  <Link to="/services/pre-wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Pre-Wedding</Link>
                  <Link to="/services/post-wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Post-Wedding</Link>
                  <Link to="/services/videography" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Videography</Link>
                  <Link to="/services/maternity" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Maternity</Link>
                  <Link to="/services/family" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Family</Link>
                  <Link to="/services/birthday" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Birthday</Link>
                  <Link to="/services/event" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Event</Link>
                  <Link to="/services/studio" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Studio</Link>
                  <Link to="/services/commercial" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Commercial</Link>
                  <Link to="/services/drone" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Drone</Link>
                  <Link to="/packages" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Packages</Link>
                  <Link to="/services" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors italic border-t border-brand-gold/10 mt-1 pt-3">View All</Link>
                </div>
              </div>
            </div>
            <Link id="nav-link-book" to="/contact" className="hover:text-brand-gold transition-colors">Book Session</Link>
          </div>

          {/* Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          >
            <span className={`block w-6 h-[1.5px] bg-brand-ivory transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-brand-ivory transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-brand-ivory transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl flex flex-col pt-20 pb-10 px-6 overflow-y-auto md:hidden"
          >
            <nav className="flex flex-col gap-1 mt-4">
              <Link to="/" className="text-brand-ivory font-serif text-2xl py-4 border-b border-brand-charcoal hover:text-brand-gold transition-colors">
                The Studio
              </Link>
              <Link to="/about" className="text-brand-ivory font-serif text-2xl py-4 border-b border-brand-charcoal hover:text-brand-gold transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-brand-ivory font-serif text-2xl py-4 border-b border-brand-charcoal hover:text-brand-gold transition-colors">
                Portfolio
              </Link>

              {/* Services Accordion */}
              <div className="border-b border-brand-charcoal">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between text-brand-ivory font-serif text-2xl py-4 hover:text-brand-gold transition-colors text-left"
                >
                  Services
                  <span className={`text-brand-gold text-xl transition-transform duration-300 ${servicesOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 pl-4 flex flex-col gap-1">
                        {[
                          ['Weddings', '/services/wedding'],
                          ['Pre-Wedding', '/services/pre-wedding'],
                          ['Post-Wedding', '/services/post-wedding'],
                          ['Videography', '/services/videography'],
                          ['Maternity', '/services/maternity'],
                          ['Family', '/services/family'],
                          ['Birthday', '/services/birthday'],
                          ['Event', '/services/event'],
                          ['Studio', '/services/studio'],
                          ['Commercial', '/services/commercial'],
                          ['Drone', '/services/drone'],
                          ['Packages', '/packages'],
                        ].map(([label, path]) => (
                          <Link key={path} to={path} className="text-brand-ivory/70 font-sans text-sm tracking-widest uppercase py-2 hover:text-brand-gold transition-colors">
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact" className="text-brand-ivory font-serif text-2xl py-4 border-b border-brand-charcoal hover:text-brand-gold transition-colors">
                Book Session
              </Link>
            </nav>

            <div className="mt-auto pt-8">
              <p className="text-brand-ivory/30 text-xs font-sans tracking-widest uppercase">Sai Krishna Photography · Est. 1996</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
