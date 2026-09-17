import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, MapPin, Bus, Tag, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-7 h-7 text-[#101820]" />,
      title: 'Experienced Drivers',
      description:
        'Professional, polite, and safe drivers who know every highway and temple route across Tamil Nadu and South India.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#101820]" />,
      title: 'Clean & Comfortable Vehicles',
      description:
        'Every vehicle in our fleet is thoroughly sanitized, air-conditioned, and serviced regularly for smooth travel.',
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#101820]" />,
      title: 'Local & Outstation Trips',
      description:
        'Whether it is local Girivalam darshan in Tiruvannamalai or long outstation journeys to Chennai, Bangalore, or Kanyakumari.',
    },
    {
      icon: <Bus className="w-7 h-7 text-[#101820]" />,
      title: 'Multiple Vehicle Options',
      description:
        'Choose from 4-seater sedans, 7-seater Innova SUVs, 12-18 seater Tempo Travellers up to 54-seater luxury buses.',
    },
    {
      icon: <Tag className="w-7 h-7 text-[#101820]" />,
      title: 'Tiruvannamalai Local Discounts',
      description:
        'Special discounted pricing for local residents, devotees, and local Tiruvannamalai temple travel packages.',
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#101820]" />,
      title: 'Family & Group Tours',
      description:
        'Transparent pricing, no hidden surprises, and 24/7 travel assistance for stress-free family & group tours.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#101820] text-white relative overflow-hidden">
      {/* Decorative accent grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F5B700_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5B700] uppercase bg-[#FAFAF8]/10 border border-[#F5B700]/30 px-4 py-1.5 rounded-sm inline-block mb-3">
            YOUR TRUSTED TRAVEL PARTNER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-white">
            WHY CHOOSE <span className="text-[#F5B700]">SASI KUMAR TRAVELS</span>
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-medium">
            Reliable. Comfortable. Always with you.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-slate-900/80 border border-slate-800 rounded-lg p-8 hover:border-[#F5B700] transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              {/* Yellow Circular Icon Accent */}
              <div className="w-14 h-14 rounded-full bg-[#F5B700] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#F5B700] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
