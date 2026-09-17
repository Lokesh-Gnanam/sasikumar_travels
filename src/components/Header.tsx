import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Vehicles', href: '#vehicles', id: 'vehicles' },
    { label: 'Booking', href: '#booking', id: 'booking' },
    { label: 'Tour Gallery', href: '#gallery', id: 'gallery' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-md border-b border-[#E5E7EB] py-2'
          : 'border-b border-[#E5E7EB]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center group">
          <img
            src={businessConfig.logo.path}
            alt={businessConfig.logo.alt}
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-[#101820]' : 'text-[#4B5563] hover:text-[#101820]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F5B700] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Phone Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${businessConfig.contact.phone}`}
            className="hidden sm:inline-flex items-center gap-2 bg-[#F5B700] hover:bg-[#e0a700] text-[#101820] font-bold px-4 py-2.5 rounded-md text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            aria-label={`Call Sasi Kumar Travels at ${businessConfig.contact.displayPhone}`}
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>{businessConfig.contact.displayPhone}</span>
          </a>

          {/* Mobile Phone Icon Button */}
          <a
            href={`tel:${businessConfig.contact.phone}`}
            className="sm:hidden flex items-center justify-center bg-[#F5B700] text-[#101820] p-2.5 rounded-md shadow-sm"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5 fill-current" />
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#101820] hover:bg-[#FAFAF8] rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FAFAF8] text-[#101820] border-l-4 border-[#F5B700]'
                      : 'text-[#4B5563] hover:bg-[#FAFAF8] hover:text-[#101820]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-[#E5E7EB]">
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B700] text-[#101820] font-bold py-3 rounded-md text-base shadow"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {businessConfig.contact.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
