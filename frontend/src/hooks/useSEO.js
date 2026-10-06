import { useEffect } from 'react';

const SITE_NAME = 'Sai Krishna Photography';
const BASE_URL = 'https://saikrishnaphotography.com';
const DEFAULT_IMAGE = '/favicon.webp';

/**
 * Comprehensive SEO hook – updates document <head> on every page navigation.
 *
 * @param {Object} opts
 * @param {string}  opts.title       – Page-specific title (appended with site name)
 * @param {string}  opts.description – Meta description (≤160 chars recommended)
 * @param {string}  [opts.keywords]  – Comma-separated keywords
 * @param {string}  [opts.path]      – URL path for canonical / OG (e.g. '/services/wedding')
 * @param {string}  [opts.image]     – OG / Twitter image path (defaults to favicon)
 * @param {string}  [opts.type]      – OG type (default 'website')
 * @param {Object}  [opts.jsonLd]    – Custom JSON-LD structured data object
 */
export function useSEO({
  title,
  description,
  keywords = '',
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd = null,
} = {}) {
  useEffect(() => {
    // ---------- Title ----------
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Premium Wedding & Event Photography`;
    document.title = fullTitle;

    // ---------- Helper: upsert a <meta> tag ----------
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ---------- Primary meta ----------
    const desc =
      description ||
      'Sai Krishna Photography – 30 Years of Capturing Life\'s Most Precious Moments. Premium wedding, maternity, family, and event photography in Vijayawada.';
    setMeta('name', 'description', desc);
    setMeta('name', 'title', fullTitle);

    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    // ---------- Canonical ----------
    const canonicalUrl = `${BASE_URL}${path}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // ---------- Open Graph ----------
    const ogImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', SITE_NAME);

    // ---------- Twitter Card ----------
    setMeta('property', 'twitter:card', 'summary_large_image');
    setMeta('property', 'twitter:url', canonicalUrl);
    setMeta('property', 'twitter:title', fullTitle);
    setMeta('property', 'twitter:description', desc);
    setMeta('property', 'twitter:image', ogImage);

    // ---------- JSON-LD Structured Data ----------
    const JSONLD_ID = 'seo-jsonld';
    let scriptEl = document.getElementById(JSONLD_ID);

    const structuredData = jsonLd || {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      image: ogImage,
      description: desc,
      url: canonicalUrl,
      telephone: '+919848448139',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A.COLONY CENTER, brilliants convent street, Gudurupadu',
        addressLocality: 'Ibrahimpatnam, Vijayawada',
        addressRegion: 'Andhra Pradesh',
        postalCode: '521456',
        addressCountry: 'IN',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        reviewCount: '100',
      },
      priceRange: '₹₹',
    };

    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = JSONLD_ID;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(structuredData);

    // ---------- Cleanup: remove JSON-LD on unmount ----------
    return () => {
      const el = document.getElementById(JSONLD_ID);
      if (el) el.remove();
    };
  }, [title, description, keywords, path, image, type, jsonLd]);
}
