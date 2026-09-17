import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { VehicleFleet } from './components/VehicleFleet';
import { ImportantBookingInfo } from './components/ImportantBookingInfo';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TourMemories } from './components/TourMemories';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ToastNotification } from './components/ToastNotification';
import { ToastMessage, ToastType } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleShowToast = (type: ToastType, title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 5);
    setToasts((prev) => [...prev, { id, type, title, message }]);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectVehicle = (vehicleSeating: string) => {
    setSelectedVehicle(vehicleSeating);
    handleShowToast(
      'info',
      'Vehicle Selected',
      `Selected ${vehicleSeating} in the booking form.`
    );
  };

  // Scroll listener to update active section in header
  useEffect(() => {
    const sections = ['home', 'vehicles', 'booking', 'gallery', 'about', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111] flex flex-col font-sans">
      {/* Toast Notification Container (Top Right) */}
      <ToastNotification toasts={toasts} onDismiss={handleDismissToast} />

      {/* Header / Sticky Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Booking Section */}
        <BookingForm onShowToast={handleShowToast} selectedVehicle={selectedVehicle} />

        {/* 3. Vehicle Fleet Section */}
        <VehicleFleet onSelectVehicle={handleSelectVehicle} />

        {/* 4. Important Booking Information */}
        <ImportantBookingInfo />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Tour Memories Section */}
        <TourMemories />

        {/* 7. Contact CTA Section */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
