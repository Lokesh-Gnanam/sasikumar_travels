import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ShieldCheck, Users, Car, MessageCircle, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/business';

export const Hero: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const targetWhatsAppNumber = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const prefilledEnquiry = encodeURIComponent(
    `Hello SASI KUMAR TRAVELS, I would like to enquire about vehicle availability and fare.`
  );
  const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${prefilledEnquiry}`;

  return (
    <section id="home" className="relative bg-[#101820] text-white min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={businessConfig.images.heroBg}
          alt="Tiruvannamalai Travel with Sasi Kumar Travels"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        {/* Gradient Overlay for high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101820]/95 via-[#101820]/80 to-[#101820]/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">
          {/* Small Uppercase Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#F5B700]/15 border border-[#F5B700]/40 px-3.5 py-1.5 rounded-sm mb-6"
          >
            <MapPin className="w-4 h-4 text-[#F5B700]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F5B700]">
              TIRUVANNAMALAI'S TRUSTED TRAVEL PARTNER
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 uppercase"
          >
            <span className="text-white block">SASI KUMAR</span>
            <span className="text-[#F5B700] block mt-1">TRAVELS</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-slate-200 italic mb-8 border-l-4 border-[#F5B700] pl-4"
          >
            "{businessConfig.tagline}"
          </motion.p>

          {/* Service Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-sm font-medium"
          >
            <div className="flex items-center gap-2 bg-[#101820]/80 backdrop-blur-sm border border-slate-700/60 p-2.5 rounded-sm">
              <Car className="w-4 h-4 text-[#F5B700] shrink-0" />
              <span>Local Trips</span>
            </div>
            <div className="flex items-center gap-2 bg-[#101820]/80 backdrop-blur-sm border border-slate-700/60 p-2.5 rounded-sm">
              <Calendar className="w-4 h-4 text-[#F5B700] shrink-0" />
              <span>Outstation Trips</span>
            </div>
            <div className="flex items-center gap-2 bg-[#101820]/80 backdrop-blur-sm border border-slate-700/60 p-2.5 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-[#F5B700] shrink-0" />
              <span>Family Tours</span>
            </div>
            <div className="flex items-center gap-2 bg-[#101820]/80 backdrop-blur-sm border border-slate-700/60 p-2.5 rounded-sm">
              <Users className="w-4 h-4 text-[#F5B700] shrink-0" />
              <span>Group Bookings</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <a
              href="#booking"
              onClick={handleScrollToBooking}
              className="inline-flex items-center justify-center gap-3 bg-[#F5B700] hover:bg-[#e0a700] text-[#101820] font-bold text-base px-8 py-4 rounded-md transition-all duration-200 shadow-lg hover:shadow-yellow-500/20 active:scale-98"
            >
              <span>BOOK YOUR RIDE</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#101820]/90 hover:bg-[#101820] border-2 border-[#F5B700] text-white hover:text-[#F5B700] font-bold text-base px-8 py-4 rounded-md transition-all duration-200 shadow-md active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-[#F5B700]" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </motion.div>

          {/* Location Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 text-slate-300 text-sm border-t border-slate-700/50 pt-4"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F5B700]"></span>
            </span>
            <span className="font-semibold text-white">Based in Tiruvannamalai</span>
            <span className="text-slate-400">• Services across Tamil Nadu & South India</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
