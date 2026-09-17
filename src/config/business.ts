export interface VehicleOption {
  id: string;
  name: string;
  category: string;
  seating: string;
  rate: string;
  perKm: boolean;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    whatsappNumber: string; // Centralized WhatsApp Number
    email: string;
    displayPhone: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  logo: {
    path: string;
    alt: string;
  };
  images: {
    heroBg: string;
    vehicles: Record<string, string>;
    gallery: Array<{ id: string; url: string; title: string; subtitle: string }>;
  };
  policies: {
    driverProvided: boolean;
    selfDriveAvailable: boolean;
    additionalCharges: string[];
    disclaimers: string[];
  };
}

// Environment variable overrides with fallback placeholders
const envWhatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210";
const envPhone = import.meta.env.VITE_PHONE_NUMBER || "+91 XXXXX XXXXX";

export const businessConfig: BusinessConfig = {
  businessName: "SASI KUMAR TRAVELS",
  tagline: "Your Journey, Our Responsibility",
  location: {
    city: "Tiruvannamalai",
    state: "Tamil Nadu",
    country: "India",
    fullAddress: "Tiruvannamalai, Tamil Nadu, India",
  },
  contact: {
    phone: envPhone,
    whatsappNumber: envWhatsappNumber,
    email: "sasikumartravels@gmail.com",
    displayPhone: envPhone,
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  logo: {
    path: "/sasi-travels-logo.png",
    alt: "SASI KUMAR TRAVELS Logo",
  },
  images: {
    heroBg: "/images/hero-bg.png",
    vehicles: {
      "4-seater": "/images/car-4seater.png",
      "7-seater": "/images/suv-7seater.png",
      "9-seater": "/images/tempo-12seater.png",
      "12-seater": "/images/tempo-12seater.png",
      "14-seater": "/images/tempo-12seater.png",
      "18-seater": "/images/tempo-12seater.png",
      "21-seater": "/images/minibus-25seater.png",
      "25-seater": "/images/minibus-25seater.png",
      "54-seater": "/images/bus-54seater.png",
    },
    gallery: [
      {
        id: "mem-1",
        url: "/images/gallery-family.png",
        title: "Family Pilgrimage Tour",
        subtitle: "Happy moments visiting Tiruvannamalai Arunachaleswarar Temple",
      },
      {
        id: "mem-2",
        url: "/images/gallery-group.png",
        title: "Outstation Group Trip",
        subtitle: "Group travelers enjoying a comfortable Tempo Traveller ride",
      },
      {
        id: "mem-3",
        url: "/images/gallery-temple.png",
        title: "Tiruvannamalai Darshan",
        subtitle: "Sacred Annamalai Hill view and temple tour experience",
      },
      {
        id: "mem-4",
        url: "/images/hero-bg.png",
        title: "Tamil Nadu Coastal Tour",
        subtitle: "Scenic highway travel with experienced professional drivers",
      },
      {
        id: "mem-5",
        url: "/images/minibus-25seater.png",
        title: "Marriage Group Transport",
        subtitle: "25-Seater luxury bus for wedding functions and family events",
      },
      {
        id: "mem-6",
        url: "/images/bus-54seater.png",
        title: "College & Corporate Trip",
        subtitle: "54-Seater tourist coach for large group excursions",
      },
    ],
  },
  policies: {
    driverProvided: true,
    selfDriveAvailable: false,
    additionalCharges: [
      "Driver bata is charged separately per day/night.",
      "Toll charges and parking fees are extra at actuals.",
      "State entry permit charges apply for inter-state outstation trips.",
      "Fuel charges included in package rate or calculated according to distance.",
    ],
    disclaimers: [
      "Rates listed are starting reference rates only.",
      "Final fare may vary depending on trip type, vehicle chosen, date of travel, total distance and pickup location.",
      "One-day trips and special packages are priced separately.",
      "Fares may vary during local festivals (such as Karthigai Deepam), holidays, and peak travel periods.",
    ],
  },
};

export const vehicleFleet: VehicleOption[] = [
  {
    id: "car-4",
    name: "Compact Car / Sedan",
    category: "Car",
    seating: "4 Seater",
    rate: "₹15",
    perKm: true,
    image: businessConfig.images.vehicles["4-seater"],
    features: ["AC & Music System", "Clean Interiors", "Ideal for Small Families", "Pushback Comfortable Seats"],
  },
  {
    id: "suv-7",
    name: "SUV / MUV (Innova / Ertiga)",
    category: "SUV / MUV",
    seating: "7 Seater",
    rate: "₹15",
    perKm: true,
    popular: true,
    image: businessConfig.images.vehicles["7-seater"],
    features: ["Dual AC Units", "Extra Luggage Space", "Comfortable Long Distance", "Professional Experienced Driver"],
  },
  {
    id: "suv-9",
    name: "Large SUV / Cruiser",
    category: "Large SUV",
    seating: "9 Seater",
    rate: "₹19",
    perKm: true,
    image: businessConfig.images.vehicles["9-seater"],
    features: ["Spacious Seating", "High Ground Clearance", "Great for Temple Tours", "Luggage Carrier"],
  },
  {
    id: "tempo-12",
    name: "Tempo Traveller",
    category: "Tempo Traveller",
    seating: "12 Seater",
    rate: "₹19",
    perKm: true,
    popular: true,
    image: businessConfig.images.vehicles["12-seater"],
    features: ["Pushback Luxury Seats", "Roof AC Vents", "LED TV & Sound System", "Spacious Aisle"],
  },
  {
    id: "tempo-14",
    name: "Tempo Traveller",
    category: "Tempo Traveller",
    seating: "14 Seater",
    rate: "₹19",
    perKm: true,
    image: businessConfig.images.vehicles["14-seater"],
    features: ["Reclining Seats", "First Aid & Safety Kit", "Mobile Charging Points", "Wide Windows"],
  },
  {
    id: "traveller-18",
    name: "Executive Traveller",
    category: "Traveller",
    seating: "18 Seater",
    rate: "₹19",
    perKm: true,
    image: businessConfig.images.vehicles["18-seater"],
    features: ["Heavy Duty AC", "Spacious Interior", "Smooth Suspension", "Ample Boot Space"],
  },
  {
    id: "minibus-21",
    name: "Tourist Mini Bus",
    category: "Mini Bus",
    seating: "21 Seater",
    rate: "Contact",
    perKm: false,
    image: businessConfig.images.vehicles["21-seater"],
    features: ["Air Conditioned", "Individual Reclining Seats", "Group Tour Specialist", "Experienced Driver"],
  },
  {
    id: "minibus-25",
    name: "Luxury Mini Bus",
    category: "Mini Bus",
    seating: "25 Seater",
    rate: "Contact",
    perKm: false,
    image: businessConfig.images.vehicles["25-seater"],
    features: ["Deluxe Interior", "Microphone System", "High Roof Standing Comfort", "Great for Marriage Parties"],
  },
  {
    id: "bus-54",
    name: "Luxury Tourist Coach",
    category: "Bus",
    seating: "54 Seater",
    rate: "Contact",
    perKm: false,
    image: businessConfig.images.vehicles["54-seater"],
    features: ["2x2 Reclining Luxury Seats", "Air Suspension Comfort", "Massive Luggage Bay", "Ideal for School/College/Corporate"],
  },
];
