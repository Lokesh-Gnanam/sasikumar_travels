import { businessConfig } from '../config/business';
import { BookingFormData, BookingResult } from '../types';

export function formatWhatsAppMessage(formData: BookingFormData): string {
  const returnDateText = formData.returnDate ? formData.returnDate : 'Not specified';
  const notesText = formData.notes.trim() ? formData.notes.trim() : 'None';

  return `NEW BOOKING REQUEST
SASI KUMAR TRAVELS

Customer Details
------------------------
Name: ${formData.fullName}
Phone: ${formData.phone}

Trip Details
------------------------
Pickup: ${formData.pickupLocation}
Drop: ${formData.dropLocation}
Journey Date: ${formData.journeyDate}
Return Date: ${returnDateText}

Vehicle: ${formData.vehicleType}
Trip Type: ${formData.tripType}

Additional Notes:
${notesText}

Please contact the customer to confirm availability and final fare.`;
}

export async function processBookingWhatsApp(formData: BookingFormData): Promise<BookingResult> {
  const message = formatWhatsAppMessage(formData);
  const targetNumber = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');

  const apiToken = import.meta.env.VITE_WHATSAPP_API_TOKEN;
  const phoneNumberId = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER_ID;

  // MODE A: If WhatsApp Business API credentials exist
  if (apiToken && phoneNumberId) {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: targetNumber,
            type: 'text',
            text: { body: message },
          }),
        }
      );

      if (response.ok) {
        return {
          success: true,
          mode: 'API',
          message: 'Your booking details have been sent to SASI KUMAR TRAVELS.',
        };
      }
    } catch (err) {
      console.warn('WhatsApp API delivery failed, falling back to click-to-chat:', err);
    }
  }

  // MODE B: Click-to-chat fallback
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedText}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  return {
    success: true,
    mode: 'CLICK_TO_CHAT',
    message: 'WhatsApp opened with your booking details.',
  };
}
