import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage('Please fill in your name and email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again or message on WhatsApp.');
      }
    } catch (err) {
      // If backend is not currently running or reachable
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('Could not connect to inquiry server. Please contact us directly via WhatsApp (+91 91775 88567).');
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {status === 'success' && (
        <div className="p-4 bg-brand-gold/10 border border-brand-gold/40 text-brand-ivory flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div>
            <p className="font-serif text-brand-gold font-medium">Inquiry Delivered Successfully</p>
            <p className="text-xs font-sans text-brand-ivory/80 mt-1">
              Thank you for contacting Sai Krishna Photography. We have sent a confirmation to your email and our team will get in touch with you shortly.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-950/40 border border-red-500/40 text-brand-ivory flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-serif text-red-400 font-medium">Message Could Not Be Sent</p>
            <p className="text-xs font-sans text-brand-ivory/80 mt-1">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Name *</label>
          <input 
            type="text" 
            id="name" 
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="Your Full Name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Email *</label>
          <input 
            type="email" 
            id="email" 
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="inquiryType" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Inquiry Type</label>
          <select 
            id="inquiryType" 
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors appearance-none"
          >
            <option value="" className="bg-brand-dark">Select a service...</option>
            <option value="Wedding Cinema & Photography" className="bg-brand-dark">Wedding Cinema & Photography</option>
            <option value="Pre-Wedding & Post-Wedding" className="bg-brand-dark">Pre-Wedding & Post-Wedding</option>
            <option value="Maternity & Newborn" className="bg-brand-dark">Maternity & Newborn</option>
            <option value="Family & Celebrations" className="bg-brand-dark">Family & Celebrations</option>
            <option value="Commercial & Fashion" className="bg-brand-dark">Commercial & Fashion</option>
            <option value="Other" className="bg-brand-dark">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Your Story / Event Details</label>
        <textarea 
          id="message" 
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors resize-none"
          placeholder="Tell us a little about your event, location, dates, or dream film..."
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="border border-brand-gold bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-dark px-6 sm:px-10 py-3 sm:py-4 text-brand-gold tracking-widest text-xs sm:text-sm uppercase transition-all duration-500 ease-custom w-full flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}

