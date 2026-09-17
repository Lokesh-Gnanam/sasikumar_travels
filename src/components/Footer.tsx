import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { businessConfig } from '../config/business';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101820] text-white border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="inline-block">
              <img
                src={businessConfig.logo.path}
                alt={businessConfig.logo.alt}
                className="h-12 w-auto object-contain bg-white/95 p-1.5 rounded"
              />
            </a>
            <p className="text-slate-300 font-medium italic text-base border-l-2 border-[#F5B700] pl-3">
              "{businessConfig.tagline}"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-sans pr-4">
              Premium travel &amp; tourist vehicle booking agency based in Tiruvannamalai, Tamil Nadu. Providing cars, SUVs, Tempo Travellers and tourist buses with professional drivers.
            </p>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-[#F5B700] uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#F5B700] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#vehicles" onClick={(e) => handleNavClick(e, '#vehicles')} className="hover:text-[#F5B700] transition-colors">
                  Vehicles Fleet
                </a>
              </li>
              <li>
                <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')} className="hover:text-[#F5B700] transition-colors">
                  Request Booking
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-[#F5B700] transition-colors">
                  Tour Gallery
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#F5B700] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#F5B700] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-[#F5B700] uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
                <span>{businessConfig.location.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5B700] shrink-0" />
                <a href={`tel:${businessConfig.contact.phone}`} className="hover:text-[#F5B700] transition-colors">
                  {businessConfig.contact.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F5B700] shrink-0" />
                <a href={`mailto:${businessConfig.contact.email}`} className="hover:text-[#F5B700] transition-colors">
                  {businessConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-extrabold text-[#F5B700] uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={businessConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 hover:bg-[#F5B700] text-white hover:text-[#101820] rounded-md transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={businessConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 hover:bg-[#F5B700] text-white hover:text-[#101820] rounded-md transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={businessConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 hover:bg-[#F5B700] text-white hover:text-[#101820] rounded-md transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Sasi Kumar Travels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Tiruvannamalai, Tamil Nadu, India</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-[#F5B700] text-white hover:text-[#101820] rounded transition-colors flex items-center gap-1 font-semibold"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
