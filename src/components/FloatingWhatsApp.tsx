import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const targetWhatsAppNumber = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const prefilledEnquiry = encodeURIComponent(
    `Hello SASI KUMAR TRAVELS, I would like to enquire about vehicle availability and fare.`
  );
  const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${prefilledEnquiry}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Sasi Kumar Travels"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>

      <MessageCircle className="w-6 h-6 fill-current text-white shrink-0" />

      <span className="hidden sm:inline font-bold text-sm tracking-wide pr-1">
        WhatsApp Enquiry
      </span>
    </a>
  );
};
