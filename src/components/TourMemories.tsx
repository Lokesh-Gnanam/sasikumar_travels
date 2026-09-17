import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin, Camera } from 'lucide-react';
import { businessConfig } from '../config/business';

export const TourMemories: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{
    url: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const galleryItems = businessConfig.images.gallery;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAFAF8] text-[#101820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5B700] uppercase bg-[#101820] px-4 py-1.5 rounded-sm inline-block mb-3">
            OUR JOURNEY TOGETHER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#101820]">
            Tour Memories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5563]">
            Some moments from our past trips with happy travelers across Tiruvannamalai and South India.
          </p>
        </div>

        {/* Responsive Gallery Grid & Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x md:grid md:grid-cols-3 md:pb-0 scrollbar-none">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setActiveImage(item)}
              className="snap-center shrink-0 w-[80vw] sm:w-[60vw] md:w-auto cursor-pointer group bg-white rounded-lg overflow-hidden border border-[#E5E7EB] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-[#F5B700]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#F5B700] font-bold uppercase mb-1">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Memory #{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-700 cursor-default"
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer border border-slate-700"
                  aria-label="Close image lightbox"
                >
                  <X className="w-6 h-6 text-[#F5B700]" />
                </button>

                <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
                  <img
                    src={activeImage.url}
                    alt={activeImage.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="p-6 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#F5B700] text-xs font-bold uppercase mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>Sasi Kumar Travels Journey</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">
                      {activeImage.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-1">
                      {activeImage.subtitle}
                    </p>
                  </div>
                  <a
                    href="#booking"
                    onClick={() => setActiveImage(null)}
                    className="bg-[#F5B700] text-[#101820] font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#e0a700] transition-colors shrink-0 text-center"
                  >
                    Book Similar Trip
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
