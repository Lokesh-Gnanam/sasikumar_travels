import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, ShieldAlert, Tag, Calendar, AlertCircle, ArrowRight, Check } from 'lucide-react';
import { vehicleFleet } from '../config/business';
import type { VehicleOption } from '../config/business';

interface VehicleFleetProps {
  onSelectVehicle: (vehicleSeating: string) => void;
}

export const VehicleFleet: React.FC<VehicleFleetProps> = ({ onSelectVehicle }) => {
  const handleBookVehicle = (seating: string) => {
    onSelectVehicle(seating);
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vehicles" className="py-16 sm:py-24 bg-white text-[#101820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5B700] uppercase bg-[#101820] px-4 py-1.5 rounded-sm inline-block mb-3">
            OUR VEHICLE FLEET
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#101820]">
            Choose Your Ride
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5563]">
            Well-maintained vehicles for a comfortable and safe journey across Tiruvannamalai and South India.
          </p>
        </div>

        {/* DRIVER REQUIREMENT WARNING BANNER */}
        <div className="mb-12 bg-[#101820] text-white rounded-lg p-6 border-l-8 border-[#F5B700] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F5B700] text-[#101820] rounded-md shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-xl font-extrabold text-white">ALL VEHICLES INCLUDE A DRIVER</h3>
                <span className="bg-[#F5B700] text-[#101820] font-black text-xs px-2.5 py-1 rounded uppercase tracking-wider">
                  DRIVER MUST BE PROVIDED
                </span>
                <span className="bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded uppercase tracking-wider">
                  NO SELF DRIVING
                </span>
              </div>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                For your safety and comfort, all SASI KUMAR TRAVELS vehicles are operated by experienced, licensed, and courteous professional drivers. <strong className="text-white">Self-drive vehicles are not available.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {vehicleFleet.map((vehicle: VehicleOption, index: number) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-[#FAFAF8] rounded-lg overflow-hidden border border-[#E5E7EB] hover:border-[#F5B700] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - ${vehicle.seating}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#101820]/90 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded flex items-center gap-1.5 border border-slate-700">
                    <Users className="w-3.5 h-3.5 text-[#F5B700]" />
                    <span>{vehicle.seating}</span>
                  </div>
                  {vehicle.popular && (
                    <div className="absolute top-3 left-3 bg-[#F5B700] text-[#101820] font-black text-xs uppercase px-2.5 py-1 rounded shadow">
                      MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-xs font-bold text-[#F5B700] uppercase tracking-wider block mb-1">
                    {vehicle.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#101820] mb-3">
                    {vehicle.name}
                  </h3>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-[#E5E7EB]">
                    {vehicle.perKm ? (
                      <>
                        <span className="text-3xl font-extrabold text-[#101820]">
                          {vehicle.rate}
                        </span>
                        <span className="text-sm font-semibold text-[#4B5563]">/ km</span>
                        <span className="text-xs text-slate-400 ml-auto">(Starting rate)</span>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl font-extrabold text-[#101820]">
                          Contact for Quote
                        </span>
                        <span className="text-xs text-slate-400 ml-auto">(Package fare)</span>
                      </>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 text-sm text-[#4B5563]">
                    {vehicle.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book Action Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => handleBookVehicle(vehicle.seating)}
                  className="w-full flex items-center justify-center gap-2 bg-[#101820] hover:bg-[#F5B700] text-white hover:text-[#101820] font-bold py-3 px-4 rounded-md transition-all duration-200 cursor-pointer shadow group-hover:shadow-md"
                >
                  <span>Book {vehicle.seating}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FARE CONDITIONS & POLICIES GRID */}
        <div className="bg-[#FAFAF8] rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
          <h3 className="text-2xl font-extrabold text-[#101820] mb-6 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-[#F5B700]" />
            <span>Important Fare &amp; Booking Conditions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Fare variation */}
            <div className="bg-white p-5 rounded-md border border-[#E5E7EB]">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-[#101820]">
                <Tag className="w-5 h-5 text-[#F5B700]" />
                <h4>Fare Pricing Notice</h4>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Rates listed are starting reference rates. Final price varies depending on trip type, travel date, vehicle model, distance, and pickup location.
              </p>
            </div>

            {/* 2. Local Tiruvannamalai Discount */}
            <div className="bg-white p-5 rounded-md border border-[#E5E7EB]">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-[#101820]">
                <Tag className="w-5 h-5 text-emerald-600" />
                <h4>Local Tiruvannamalai Discount</h4>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Special discounts may be available for local temple trips, Girivalam tours, and local rides within Tiruvannamalai town.
              </p>
            </div>

            {/* 3. Extra Pickup Charge */}
            <div className="bg-white p-5 rounded-md border border-[#E5E7EB]">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-[#101820]">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h4>Extra Pickup Charges</h4>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Additional nominal pickup charges may apply for long-distance or remote rural pickup locations outside central Tiruvannamalai.
              </p>
            </div>

            {/* 4. Festival & Peak Season */}
            <div className="bg-white p-5 rounded-md border border-[#E5E7EB]">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-[#101820]">
                <Calendar className="w-5 h-5 text-purple-600" />
                <h4>Festival &amp; Peak Season</h4>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Fares may vary during major Tiruvannamalai festivals (such as Karthigai Deepam), holidays, and peak tourism seasons.
              </p>
            </div>

            {/* 5. Other Charges */}
            <div className="bg-white p-5 rounded-md border border-[#E5E7EB]">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-[#101820]">
                <Fuel className="w-5 h-5 text-blue-600" />
                <h4>Tolls, Bata &amp; Parking</h4>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Driver bata, toll plaza charges, parking fees, and state entry permit taxes are charged separately or included in package quotation.
              </p>
            </div>

            {/* 6. One-Day Trips */}
            <div className="bg-white p-5 rounded-md border border-[#E5E7EB]">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-[#101820]">
                <Users className="w-5 h-5 text-[#F5B700]" />
                <h4>One-Day Trips &amp; Packages</h4>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                One-day temple tours, Pondicherry trips, Vellore Golden Temple tours, and custom holiday packages are priced separately upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
