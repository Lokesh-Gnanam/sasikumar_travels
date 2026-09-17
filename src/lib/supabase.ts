import { createClient } from '@supabase/supabase-js';
import type { BookingFormData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function saveBookingToSupabase(formData: BookingFormData) {
  if (!supabase) {
    // Supabase not configured; fallback to local handling
    return { success: false, reason: 'Supabase credentials not configured' };
  }

  try {
    const { data, error } = await supabase.from('bookings').insert([
      {
        name: formData.fullName,
        phone: formData.phone,
        pickup: formData.pickupLocation,
        drop_location: formData.dropLocation,
        journey_date: formData.journeyDate,
        return_date: formData.returnDate || null,
        vehicle: formData.vehicleType,
        trip_type: formData.tripType,
        notes: formData.notes || null,
        status: 'pending',
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Error saving booking to Supabase:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Unexpected Supabase error:', err);
    return { success: false, error: err };
  }
}
