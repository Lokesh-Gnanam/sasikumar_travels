import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/business';

export const ContactCTA: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const targetWhatsAppNumber = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const prefilledEnquiry = encodeURIComponent(
    `Hello SASI KUMAR TRAVELS, I would like to enquiry about vehicle availability and fare.`
  );
  const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${prefilledEnquiry}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#101820] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-[#101820] to-slate-950 border-2 border-[#F5B700]/40 rounded-2xl p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5B700] uppercase bg-[#F5B700]/10 border border-[#F5B700]/30 px-3.5 py-1.5 rounded-sm inline-block mb-4">
                FAST &amp; RELIABLE RESPONSE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-tight text-white mb-4">
                Planning Your Next Journey?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-sans">
                Tell us your travel plans and we'll help you choose the right vehicle for your family or group tour at the best competitive price.
              </p>

              {/* Quick Info Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 mb-8">
                <div className="flex items-center gap-3 bg-slate-900/90 p-3.5 rounded-md border border-slate-800">
                  <MapPin className="w-5 h-5 text-[#F5B700] shrink-0" />
                  <span>Office: Tiruvannamalai, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/90 p-3.5 rounded-md border border-slate-800">
                  <Clock className="w-5 h-5 text-[#F5B700] shrink-0" />
                  <span>24/7 Phone &amp; WhatsApp Support</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/90 p-3.5 rounded-md border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Sanitized Vehicles &amp; Safe Drivers</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/90 p-3.5 rounded-md border border-slate-800">
                  <Calendar className="w-5 h-5 text-[#F5B700] shrink-0" />
                  <span>Instant Spot Booking Available</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons Stack */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Button 1: Book Your Ride */}
              <a
                href="#booking"
                onClick={handleScrollToBooking}
                className="w-full flex items-center justify-center gap-3 bg-[#F5B700] hover:bg-[#e0a700] text-[#101820] font-extrabold text-lg py-4 px-6 rounded-lg transition-all duration-200 shadow-xl hover:shadow-yellow-500/20 active:scale-98 cursor-pointer uppercase tracking-wider"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Ride</span>
              </a>

              {/* Button 2: Chat on WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-lg py-4 px-6 rounded-lg transition-all duration-200 shadow-xl active:scale-98 cursor-pointer uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Button 3: Call Now */}
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-extrabold text-lg py-4 px-6 rounded-lg transition-all duration-200 shadow-lg active:scale-98 cursor-pointer uppercase tracking-wider"
              >
                <Phone className="w-5 h-5 text-[#F5B700]" />
                <span>Call Now ({businessConfig.contact.displayPhone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
