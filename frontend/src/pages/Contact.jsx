import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useSEO({
    title: 'Contact Us – Book Your Photography Session',
    description: 'Book your premium photography session with Sai Krishna Photography in Vijayawada. Visit our Ibrahimpatnam studio or send an inquiry for weddings, events & more.',
    keywords: 'book photographer Vijayawada, photography studio contact, wedding photography booking, Sai Krishna Photography address, Ibrahimpatnam studio, photography inquiry',
    path: '/contact',
    image: '/photos/studio/3.jpg',
  });

  return (
    <main className="bg-brand-dark min-h-screen pb-32">
      <PageHero
        heading="Let's Create Something Timeless"
        subheading="Visit or Book Us"
        minHeight="min-h-[78vh]"
        image="/photos/studio/3.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

          {/* Form Side */}
          <div>
            <h2 className="text-3xl font-serif text-brand-ivory font-light mb-8">Send an Inquiry</h2>
            <ContactForm />
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-4">Our Studio</h3>
              <p className="text-brand-ivory/80 font-sans leading-relaxed text-sm">
                A.COLONY CENTER, brilliants convent street<br />
                Ibrahimpatnam, Vijayawada<br />
                Gudurupadu, Andhra Pradesh 521456<br />
                India
              </p>
            </div>

            <div>
              <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-4">Direct Contact</h3>
              <p className="text-brand-ivory/80 font-sans leading-relaxed text-sm mb-2">
                <a href="mailto:hello@saikrishnaphotography.com" className="hover:text-brand-gold transition-colors">hello@saikrishnaphotography.com</a>
              </p>
              <p className="text-brand-ivory/80 font-sans leading-relaxed text-sm">
                <a href="tel:+919848448139" className="hover:text-brand-gold transition-colors">+91 98484 48139</a>
              </p>
            </div>

            <div className="aspect-video bg-brand-charcoal/40 border border-brand-charcoal overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.6048896650764!2d80.52459739999999!3d16.5963842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ec0cdc4d62af%3A0x411abb83e6e79c5b!2sSai%20Krishna%20Photography!5e0!3m2!1sen!2sin!4v1791188626405!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Studio Location"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
