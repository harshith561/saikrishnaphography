import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "sai vijaya",
    badge: "Local Guide Level 6",
    text: "Sai krishna studio, Mr Srinivas was engaged for my daughter marrige. The photo and xameras were excellent quality. Srinivas was was patient ahd cooperative and the product was a life time memory for me and my family. Thank you Srinivas garu.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW1PfOh01-luKucDTXx35ODMMrjpQt8JZg4oS--DiIvr0E5GHcv=w90-h90-p-rp-mo-ba12-br100",
    link: null
  },
  {
    id: 2,
    name: "Praveena 24D5806",
    badge: null,
    text: "Saikrishna photography is the one of the finest photography studio I have ever seen in Ibrahimpatnam. So kind and genuine to words the client. It has been an amazing experience to have the pre wedding shoot done through saikrishna photography. They are very professional throughout the shoot and made us feel comfortable",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX8BmWJc-CEbbDImklsoCe702VqnXFIvhm_XJGe1S2TLMBJEtyhXw=w90-h90-p-rp-mo-br100",
    link: "https://www.google.com/maps/contrib/107864192326908879361/reviews?hl=en-IN"
  },
  {
    id: 3,
    name: "Lokanath Panigrahi",
    badge: null,
    text: "Saikrishna digital photo studio team was Very hardworking!! Amazing work!!! I Loved their Creativity! I had Visited so many events in which photo shoots were handled by Saikrishna studio . Thank you so much for giving such good photos. Keep doing such great work. Highly Professional work.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUwX7fuAJIDUWA5IbU33QwthN9KV9W-OAETZD2s7ZbR9Mn-0z3C=w90-h90-p-rp-mo-ba12-br100",
    link: "https://www.google.com/maps/contrib/108595231955825951937/reviews?hl=en-IN"
  },
  {
    id: 4,
    name: "Kandrakota Dharma Teja",
    badge: null,
    text: "Our family knew it was very important to have beautiful photos for future memories of my brothers wedding leading up to our big day. We are so happy we decided to have Ramu garu to capture my brother's wedding as the photos turned out amazing! He was extremely flexible in working with us.Thank u so much Saikrishna digital photo studio.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVYBr7kQfRrBBbDxd1RO-L2zmoZiczoKuEo-ihsuNB3KVIThwyp=w90-h90-p-rp-mo-br100",
    link: "https://www.google.com/maps/contrib/115608594327018077574/reviews?hl=en-IN"
  },
  {
    id: 5,
    name: "Ramesh Reddy",
    badge: null,
    text: "Absolutely loved the candid shots! They captured the essence of our wedding perfectly. The team is very professional and the album quality is top-notch. Highly recommended!",
    image: "https://ui-avatars.com/api/?name=Ramesh+Reddy&background=0D8ABC&color=fff",
    link: null
  },
  {
    id: 6,
    name: "Swathi",
    badge: "Local Guide Level 4",
    text: "The maternity shoot was a breeze! They made me feel so comfortable and the pictures turned out magical. Thank you Sai Krishna Photography for these lifelong memories.",
    image: "https://ui-avatars.com/api/?name=Swathi&background=F59E0B&color=fff",
    link: null
  }
];

export default function HomeReviews() {
  return (
    <section className="bg-brand-dark py-32 border-t border-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ivory font-light">Client Love</h2>
            <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span className="text-black font-bold text-xs tracking-wide">REVIEWS</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
            ))}
          </div>
          <p className="text-brand-ivory/60 font-sans text-sm md:text-base max-w-2xl mx-auto">
            Real stories and experiences from the families who trusted us to capture their most precious moments.
          </p>
        </div>
      </div>

      {/* Full-width Horizontal Auto-Scroll Container */}
      <div className="overflow-hidden relative pb-12 w-full">
          {/* Optional Gradient Fades for edges */}
          <div className="absolute top-0 bottom-12 left-0 w-12 md:w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-12 right-0 w-12 md:w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...reviews, ...reviews].map((review, index) => {
              const CardWrapper = review.link ? 'a' : 'div';
              const wrapperProps = review.link ? { href: review.link, target: "_blank", rel: "noreferrer", className: "block group cursor-pointer h-full" } : { className: "block group h-full" };
              
              return (
                <div 
                  key={`${review.id}-${index}`}
                  className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 h-auto"
                >
                <CardWrapper {...wrapperProps}>
                <div className="bg-brand-charcoal/20 border border-brand-charcoal hover:border-brand-gold/50 transition-colors p-8 rounded-xl h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover border border-brand-gold/30"
                    />
                    <div>
                      <h4 className="text-brand-ivory font-bold text-sm">{review.name}</h4>
                      {review.badge && (
                        <p className="text-brand-ivory/50 text-xs mt-0.5">{review.badge}</p>
                      )}
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-ivory/80 text-sm font-sans leading-relaxed flex-grow">
                    "{review.text}"
                  </p>
                  
                  {review.link && (
                    <div className="mt-6 text-brand-gold text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                      View on Google <span className="text-lg leading-none">→</span>
                    </div>
                  )}
                </div>
                </CardWrapper>
                </div>
              );
            })}
          </motion.div>
      </div>
    </section>
  );
}
