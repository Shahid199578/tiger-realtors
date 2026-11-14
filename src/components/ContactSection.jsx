import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'buy',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your name and phone number.');
      return;
    }

    const serviceLabels = {
      buy: 'Property Purchase / Sale',
      rent: 'Rental Property',
      interior: 'Turnkey Interior Design',
      maintenance: 'Property Maintenance & Care',
      commercial: 'Commercial Retail / Office'
    };

    const text = `Hi Tiger Realtors!
• Full Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}
• Service Needed: ${serviceLabels[formData.service] || formData.service}
• Requirement: ${formData.message.trim() || 'Please share available options.'}`;

    window.open(`https://wa.me/+918743910094?text=${encodeURIComponent(text)}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: 'buy', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-12 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-500/15 text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-blue-400/20">
            <Phone className="w-3 h-3" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Get in Touch with Tiger Realtors
          </h2>
          <p className="mt-1 text-slate-400 text-xs sm:text-sm">
            Visit our Galaxy Plaza office or send us a quick WhatsApp inquiry.
          </p>
        </div>

        {/* 2-Column Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Compact Info & Map (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 4 Compact Cards in 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Office */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Visit Our Office</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                    Shop No FFK3, Galaxy Plaza, Gaur City 1, Sector 4, Noida Extension
                  </p>
                </div>
              </div>

              {/* Call & WhatsApp */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Call & WhatsApp</h4>
                  <a
                    href="tel:+918743910094"
                    className="text-[11px] font-semibold text-slate-200 hover:text-amber-400 transition-colors block mt-0.5"
                  >
                    +91 87439 10094
                  </a>
                  <a
                    href="https://wa.me/+918743910094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-400 hover:underline block"
                  >
                    WhatsApp Chat &rarr;
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs text-white">Email Us</h4>
                  <a
                    href="mailto:kmail.tolexo1@gmail.com"
                    className="text-[11px] text-slate-300 hover:text-amber-400 transition-colors block mt-0.5 truncate"
                  >
                    kmail.tolexo1@gmail.com
                  </a>
                </div>
              </div>

              {/* Timing */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Office Hours</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                    Open 7 Days: 9:30 AM – 8:30 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Box */}
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900/90">
              <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5 text-[11px]">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  Galaxy Plaza Office
                </span>
                <a
                  href="https://maps.google.com/?q=Tiger+Realtors+Galaxy+Plaza+Gaur+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 text-[11px] transition-colors"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <iframe
                title="Tiger Realtors Gaur City Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.225328940415!2d77.42035791516069!3d28.611982070031026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0197a2bc2b%3A0x5cdccc9d03fd9e63!2sTiger%20Realtors!5e0!3m2!1sen!2sin!4v1694624501234!5m2!1sen!2sin"
                width="100%"
                height="170"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-44"
              />
            </div>

          </div>

          {/* Right Column: Compact Form (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/95 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-xl">
            <div className="mb-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Quick Property Inquiry
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Share your requirement for instant WhatsApp updates & pricing.
              </p>
            </div>

            {submitted && (
              <div className="mb-3 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Opening WhatsApp...</p>
                  <p className="text-[11px] text-slate-300">Your message is prepared. We will assist you immediately.</p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-3 p-2.5 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-200 flex items-center gap-2 text-xs">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: Full Name & Phone in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full bg-slate-950/80 text-white border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-400 transition-all placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    required
                    className="w-full bg-slate-950/80 text-white border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-400 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Required Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-950/80 text-white border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-400 transition-all cursor-pointer font-medium"
                >
                  <option value="buy">Property Purchase (Buy Flat / Villa)</option>
                  <option value="rent">Rental (Looking for Flat / Tenant)</option>
                  <option value="interior">Turnkey Interior Design</option>
                  <option value="maintenance">Property Maintenance & Care</option>
                  <option value="commercial">Commercial Retail / Office</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Specific Requirements or Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  placeholder="e.g. Looking for a 3 BHK in Gaur City 2, ready to move..."
                  className="w-full bg-slate-950/80 text-white border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-400 transition-all placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-2.5 px-4 rounded-lg text-xs shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.01] cursor-pointer mt-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send WhatsApp Inquiry Now</span>
              </button>
            </form>

            <p className="text-[10px] text-center text-slate-500 mt-2.5">
              🔒 Your details are secure. Instant direct response on WhatsApp.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
