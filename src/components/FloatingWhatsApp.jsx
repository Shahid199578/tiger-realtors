import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href="https://wa.me/+918743910094?text=Hello%20Tiger%20Realtors!%20I'm%20interested%20in%20your%20property%20services%20in%20Gaur%20City."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with Tiger Realtors on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
}
