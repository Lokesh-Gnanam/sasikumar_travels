export type TripType = 'One Way' | 'Round Trip' | 'Local' | 'Outstation';

export type VehicleSeatingType =
  | '4 Seater'
  | '7 Seater'
  | '9 Seater'
  | '12 Seater'
  | '14 Seater'
  | '18 Seater'
  | '21 Seater'
  | '25 Seater'
  | '54 Seater';

export interface BookingFormData {
  fullName: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  journeyDate: string;
  returnDate: string;
  vehicleType: VehicleSeatingType;
  tripType: TripType;
  notes: string;
}

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

export interface BookingResult {
  success: boolean;
  mode: 'API' | 'CLICK_TO_CHAT';
  message: string;
}
