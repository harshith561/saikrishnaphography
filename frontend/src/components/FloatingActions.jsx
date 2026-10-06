import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const services = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Maternity Session",
  "Family Portraits",
  "Birthday Coverage",
  "Studio Session",
  "Commercial Shoot",
  "Drone Services",
  "Packages Inquiry"
];

export default function FloatingActions() {
  const [showMenu, setShowMenu] = useState(false);

  const getWhatsAppLink = (service) => {
    const text = `Hello, I want to know about ${service}.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3 sm:gap-4">
      
      {/* WhatsApp Menu & Button Container */}
      <div className="relative flex flex-col items-end">
        {/* Popup Menu */}
        <div 
          className={`absolute bottom-full mb-4 right-0 bg-brand-charcoal border border-brand-gold/20 shadow-2xl rounded-2xl p-4 w-64 transform transition-all duration-300 origin-bottom-right ${
            showMenu ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
          }`}
        >
          <h4 className="text-brand-ivory font-serif text-lg mb-3 pb-2 border-b border-brand-gold/20">How can we help?</h4>
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto custom-scrollbar pr-2">
            {services.map((service, index) => (
              <a 
                key={index}
                href={getWhatsAppLink(service)}
                target="_blank"
                rel="noreferrer"
                className="text-brand-ivory/80 text-sm font-sans py-2 px-3 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-3 h-3" />
                {service}
              </a>
            ))}
          </div>
        </div>

        {/* WhatsApp Button — click toggles menu */}
        <button
          aria-label="Open WhatsApp menu"
          onClick={() => setShowMenu(!showMenu)}
          className="w-11 h-11 sm:w-14 sm:h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="text-white sm:w-7 sm:h-7" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </button>
      </div>

      {/* Instagram Button */}
      <a 
        href="https://instagram.com/saikrishnaphotography"
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white sm:w-7 sm:h-7">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </a>

    </div>
  );
}
