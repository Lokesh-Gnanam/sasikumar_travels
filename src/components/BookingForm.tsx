import React, { useState } from 'react';
import { Send, Calendar, User, Phone, MapPin, Car, ShieldAlert, Loader2, Info } from 'lucide-react';
import { BookingFormData, TripType, VehicleSeatingType } from '../types';
import { processBookingWhatsApp } from '../lib/whatsapp';
import { saveBookingToSupabase } from '../lib/supabase';

interface BookingFormProps {
  onShowToast: (type: 'success' | 'error' | 'warning' | 'info', title: string, message: string) => void;
  selectedVehicle?: string | null;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onShowToast, selectedVehicle }) => {
  const initialFormState: BookingFormData = {
    fullName: '',
    phone: '',
    pickupLocation: 'Tiruvannamalai',
    dropLocation: '',
    journeyDate: '',
    returnDate: '',
    vehicleType: (selectedVehicle as VehicleSeatingType) || '7 Seater',
    tripType: 'Outstation',
    notes: '',
  };

  const [formData, setFormData] = useState<BookingFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Update vehicleType if parent component changes selected vehicle
  React.useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicleType: selectedVehicle as VehicleSeatingType }));
    }
  }, [selectedVehicle]);

  const vehicleOptions: VehicleSeatingType[] = [
    '4 Seater',
    '7 Seater',
    '9 Seater',
    '12 Seater',
    '14 Seater',
    '18 Seater',
    '21 Seater',
    '25 Seater',
    '54 Seater',
  ];

  const tripTypes: TripType[] = ['One Way', 'Round Trip', 'Local', 'Outstation'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      onShowToast('warning', 'Validation Error', 'Please enter your name.');
      return false;
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      onShowToast('warning', 'Validation Error', 'Please enter a valid phone number.');
      return false;
    }

    if (!formData.pickupLocation.trim()) {
      onShowToast('warning', 'Validation Error', 'Please enter your pickup location.');
      return false;
    }

    if (!formData.dropLocation.trim()) {
      onShowToast('warning', 'Validation Error', 'Please enter your drop location.');
      return false;
    }

    if (!formData.journeyDate) {
      onShowToast('warning', 'Validation Error', 'Please select your journey date.');
      return false;
    }

    if (!formData.vehicleType) {
      onShowToast('warning', 'Validation Error', 'Please select a vehicle.');
      return false;
    }

    if (!formData.tripType) {
      onShowToast('warning', 'Validation Error', 'Please select your trip type.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Optional Supabase saving
      await saveBookingToSupabase(formData);

      // WhatsApp dispatch / click-to-chat
      const result = await processBookingWhatsApp(formData);

      if (result.success) {
        // Success Notification
        onShowToast(
          'success',
          'Booking Request Sent!',
          result.mode === 'API'
            ? 'Your booking details have been sent to SASI KUMAR TRAVELS.'
            : 'WhatsApp opened with your booking details. We will contact you shortly.'
        );

        // Reset form ONLY on confirmed success
        setFormData({
          fullName: '',
          phone: '',
          pickupLocation: 'Tiruvannamalai',
          dropLocation: '',
          journeyDate: '',
          returnDate: '',
          vehicleType: '7 Seater',
          tripType: 'Outstation',
          notes: '',
        });
      } else {
        throw new Error('Processing failed');
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      // Keep form fields on error
      onShowToast(
        'error',
        'Booking Failed',
        'Unable to send your booking request. Please try again or contact us on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get current date string for min date in picker
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#FAFAF8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5B700] uppercase bg-[#101820] px-4 py-1.5 rounded-sm inline-block mb-3">
            QUICK &amp; EASY BOOKING
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101820] tracking-tight uppercase">
            Request a Booking
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto">
            Fill in your travel details and we will get back to you with availability and final fare.
          </p>
        </div>

        {/* Driver Requirement Policy Banner */}
        <div className="mb-6 bg-[#101820] text-white p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-3 border-l-4 border-[#F5B700] shadow-md">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-[#F5B700] shrink-0" />
            <div>
              <span className="font-bold text-[#F5B700] block text-sm sm:text-base">
                ALL VEHICLES PROVIDED WITH DRIVER
              </span>
              <span className="text-xs sm:text-sm text-slate-300">
                Self-drive vehicles are strictly not available. Relax and let our expert drivers guide your journey.
              </span>
            </div>
          </div>
          <span className="text-xs bg-[#F5B700] text-[#101820] font-extrabold px-3 py-1 rounded shrink-0 uppercase tracking-wider">
            NO SELF DRIVE
          </span>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-lg shadow-xl border border-[#E5E7EB] p-6 sm:p-10 relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-[#101820] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Arun Kumar"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#101820] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label htmlFor="pickupLocation" className="block text-sm font-bold text-[#101820] mb-2">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g. Tiruvannamalai Railway Station"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition"
                  />
                </div>
              </div>

              {/* Drop Location */}
              <div>
                <label htmlFor="dropLocation" className="block text-sm font-bold text-[#101820] mb-2">
                  Drop Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-red-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    id="dropLocation"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    placeholder="e.g. Chennai Airport / Bangalore / Local Girivalam"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition"
                  />
                </div>
              </div>

              {/* Journey Date */}
              <div>
                <label htmlFor="journeyDate" className="block text-sm font-bold text-[#101820] mb-2">
                  Journey Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-5 h-5 text-[#F5B700] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    id="journeyDate"
                    name="journeyDate"
                    min={todayStr}
                    value={formData.journeyDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition"
                  />
                </div>
              </div>

              {/* Return Date (Optional) */}
              <div>
                <label htmlFor="returnDate" className="block text-sm font-bold text-[#101820] mb-2">
                  Return Date <span className="text-xs text-slate-500 font-normal">(Optional for Round Trip)</span>
                </label>
                <div className="relative">
                  <Calendar className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    min={formData.journeyDate || todayStr}
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition"
                  />
                </div>
              </div>

              {/* Vehicle Type Dropdown */}
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-bold text-[#101820] mb-2">
                  Vehicle Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Car className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition appearance-none cursor-pointer"
                  >
                    {vehicleOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Trip Type Dropdown */}
              <div>
                <label htmlFor="tripType" className="block text-sm font-bold text-[#101820] mb-2">
                  Trip Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="tripType"
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition cursor-pointer"
                >
                  {tripTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-bold text-[#101820] mb-2">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Specify preferred pickup time, luggage requirements, AC preferences, or special requests..."
                className="w-full p-4 bg-[#FAFAF8] border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700] text-sm text-[#101820] font-medium outline-none transition resize-none"
              />
            </div>

            {/* Fare notice */}
            <div className="flex items-start gap-2 text-xs text-[#4B5563] bg-[#FAFAF8] p-3 rounded border border-[#E5E7EB]">
              <Info className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
              <span>
                Note: Rates vary depending on distance, trip type, travel date, toll charges, and driver bata. Our team will send you the final guaranteed all-inclusive price quote upon receiving your request.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-[#F5B700] hover:bg-[#e0a700] text-[#101820] font-extrabold text-lg py-4 px-8 rounded-md transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin text-[#101820]" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Request Booking</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
