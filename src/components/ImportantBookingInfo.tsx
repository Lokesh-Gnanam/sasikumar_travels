import React from 'react';
import { ShieldAlert, Fuel, MapPin, Tag, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const ImportantBookingInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5B700] uppercase bg-[#101820] px-4 py-1.5 rounded-sm inline-block mb-3">
            TRANSPARENT POLICIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-[#101820]">
            Important Booking Information
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4B5563]">
            We believe in complete transparency with our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Driver Policy */}
          <div className="bg-[#FAFAF8] p-6 rounded-lg border-2 border-[#101820] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#101820] text-[#F5B700] rounded-md flex items-center justify-center mb-4">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#101820] mb-2 uppercase">
                Driver Required
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                All vehicles are provided with a dedicated, experienced driver. <strong>Self-drive rental is strictly not available.</strong>
              </p>
            </div>
            <span className="inline-block bg-red-100 text-red-800 text-[11px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider text-center">
              NO SELF DRIVING
            </span>
          </div>

          {/* Card 2: Local Discounts */}
          <div className="bg-[#FAFAF8] p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-700 text-white rounded-md flex items-center justify-center mb-4">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#101820] mb-2 uppercase">
                Tiruvannamalai Discount
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                Special discounts may be available for local trips, Girivalam tours, and temple visits within Tiruvannamalai town.
              </p>
            </div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider text-center">
              LOCAL OFFER
            </span>
          </div>

          {/* Card 3: Other Charges */}
          <div className="bg-[#FAFAF8] p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-700 text-white rounded-md flex items-center justify-center mb-4">
                <Fuel className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#101820] mb-2 uppercase">
                Tolls &amp; Driver Bata
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                Driver bata, highway tolls, parking fees, and interstate permit taxes are calculated separately or included in package quote.
              </p>
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 text-[11px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider text-center">
              CLEAR PRICING
            </span>
          </div>

          {/* Card 4: Peak Season & One-day Trips */}
          <div className="bg-[#FAFAF8] p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-700 text-white rounded-md flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#101820] mb-2 uppercase">
                One-Day &amp; Festival Rates
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                Fares may vary during major festival periods (Karthigai Deepam) and one-day packages are quoted individually.
              </p>
            </div>
            <span className="inline-block bg-purple-100 text-purple-800 text-[11px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider text-center">
              CUSTOM PACKAGES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
