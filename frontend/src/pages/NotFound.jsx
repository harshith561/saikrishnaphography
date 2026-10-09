import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';

export default function NotFound() {
  useSEO({
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
    path: '/404',
  });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-serif text-brand-gold font-light mb-4">404</h1>
      <h2 className="text-2xl font-sans text-brand-ivory uppercase tracking-widest mb-8">Page Not Found</h2>
      <p className="text-brand-ivory/60 mb-8">The link you followed may be broken, or the page may have been removed.</p>
      <a href="/" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-8 py-3 text-brand-gold tracking-widest text-sm uppercase transition-all duration-700">
        Return Home
      </a>
    </main>
  );
}
