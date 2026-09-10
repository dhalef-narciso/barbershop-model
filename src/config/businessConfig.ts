/**
 * CENTRAL BUSINESS CONFIGURATION
 * 
 * Update this file to modify all contact information, prices, address, hours,
 * and external links across the entire barbershop website.
 * 
 * Unconfirmed items use explicit placeholders like "[Confirm address]".
 */

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  popular?: boolean;
}

export interface OpeningHourItem {
  days: string;
  hours: string;
  isClosed?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role?: string;
  review: string;
  rating: number;
  source: 'Google' | 'Verified Client';
  date?: string;
}

export const businessConfig = {
  // Core Business Identity
  businessName: "Apex Barbershop",
  brandWord1: "APEX",
  brandWord2: "BARBERSHOP",
  tagline: "Sharp Cuts. Clean Fades. Proper Attention to Detail.",
  subTagline: "Precision, style, professionalism and close attention to detail.",
  ownerName: "Alex Vance",
  ownerTitle: "Owner & Master Barber",
  locationCountry: "Demo",
  
  // Contact & Booking Details
  contact: {
    // Visible formatted phone number for display
    phoneDisplay: "(00) 00000-0000",
    // Clean raw phone for tel: links
    phoneRaw: "",
    
    // Visible formatted WhatsApp number
    whatsappDisplay: "(Demo / Inativo)",
    // WhatsApp international phone without '+' or spaces
    // Empty in demonstration mode to avoid contacting any real number
    whatsappNumber: "",
    
    // Default pre-filled message for general booking inquiries
    defaultBookingMessage: "Hi Apex Barbershop, I’d like to book an appointment. What times are available?",
    
    // Address Details
    address: {
      street: "Avenida Principal, 123",
      area: "Centro",
      country: "Demonstration",
      eircode: "00000-000",
      // Display string combining available address parts
      fullDisplay: "Avenida Central, 123 - Demonstração",
      // Google Maps search / navigation URL
      googleMapsUrl: "https://maps.google.com/?q=Barbershop",
      // Embedded map coordinates or place search
      mapEmbedQuery: "Barbershop",
    },
    
    // Social & Web Links
    instagram: {
      handle: "@apexbarbershop.demo",
      url: "https://www.instagram.com",
    },
    
    // Optional direct booking link if an external system is added in the future (e.g. Fresha/Booksy)
    externalBookingUrl: "",
  },
  
  // Opening Hours Schedule
  openingHours: [
    { days: "Monday – Wednesday", hours: "09:00 – 19:00", isClosed: false },
    { days: "Thursday – Friday", hours: "09:00 – 20:00", isClosed: false },
    { days: "Saturday", hours: "08:30 – 18:00", isClosed: false },
    { days: "Sunday", hours: "Closed", isClosed: true },
  ] as OpeningHourItem[],

  // Trust Highlights / Value Propositions
  trustHighlights: [
    { title: "Precision Cuts", desc: "Clean lines and seamless gradient fades." },
    { title: "Personal Service", desc: "Tailored to your individual style." },
    { title: "Professional Finish", desc: "Sharp styling and premium grooming." },
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      id: "personal-attention",
      title: "Personal Attention",
      description: "Your haircut is shaped around you—not rushed through.",
    },
    {
      id: "detailed-finish",
      title: "Detailed Finish",
      description: "Clean lines, balanced fades and careful finishing.",
    },
    {
      id: "relaxed-atmosphere",
      title: "Relaxed Atmosphere",
      description: "Professional service in a comfortable environment.",
    },
    {
      id: "easy-booking",
      title: "Easy Booking",
      description: "Contact the barbershop directly through our booking channels.",
    },
  ],

  // Service Offerings
  services: [
    {
      id: "skin-fade",
      name: "Skin Fade",
      description: "A clean, seamless fade finished with sharp detailing.",
      duration: "45 min",
      price: "Ask for price",
      popular: true,
    },
    {
      id: "classic-cut",
      name: "Classic Haircut",
      description: "A tailored cut designed around your style and hair type.",
      duration: "40 min",
      price: "Ask for price",
      popular: false,
    },
    {
      id: "haircut-beard",
      name: "Haircut & Beard",
      description: "A complete grooming service for a balanced, polished look.",
      duration: "60 min",
      price: "Ask for price",
      popular: true,
    },
    {
      id: "beard-trim",
      name: "Beard Trim & Shape",
      description: "Clean lines, controlled length and a professional finish.",
      duration: "30 min",
      price: "Ask for price",
      popular: false,
    },
    {
      id: "kids-cut",
      name: "Kids’ Haircut",
      description: "Patient, comfortable and carefully finished.",
      duration: "30 min",
      price: "Ask for price",
      popular: false,
    },
    {
      id: "restyle",
      name: "Restyle",
      description: "A fresh new look with personal guidance from your barber.",
      duration: "50 min",
      price: "Ask for price",
      popular: false,
    },
  ] as ServiceItem[],

  // Portfolio / Visual Gallery items
  portfolio: [
    {
      id: "cut-1",
      title: "Precision Mid Skin Fade",
      category: "Skin Fade",
      image: "/images/portfolio-skin-fade.jpg",
      alt: "Close up of a precision skin fade haircut at Apex Barbershop",
      featured: true,
    },
    {
      id: "cut-2",
      title: "Tailored Scissor Cut & Style",
      category: "Classic Cut",
      image: "/images/portfolio-classic-cut.jpg",
      alt: "Classic tailored men's haircut with clean side part",
      featured: true,
    },
    {
      id: "cut-3",
      title: "Sculpted Beard & Sharp Fade",
      category: "Beard Styling",
      image: "/images/portfolio-beard-styling.jpg",
      alt: "Crisp beard line up and fade grooming by Master Barber",
      featured: true,
    },
    {
      id: "cut-4",
      title: "Modern Textured French Crop",
      category: "Textured Crop",
      image: "/images/portfolio-textured-crop.jpg",
      alt: "Contemporary textured crop haircut with low skin fade",
      featured: false,
    },
    {
      id: "cut-5",
      title: "Clean Taper Fade & Natural Top",
      category: "Taper Fade",
      image: "/images/portfolio-taper-fade.jpg",
      alt: "Clean tapered neckline and temple fade at Apex Barbershop",
      featured: false,
    },
    {
      id: "cut-6",
      title: "Full Style & Hair Transformation",
      category: "Restyle",
      image: "/images/portfolio-restyle.jpg",
      alt: "Complete restyle transformation haircut",
      featured: false,
    },
  ] as PortfolioItem[],

  // Client Testimonials
  testimonials: {
    enabled: false,
    averageRating: 5.0,
    totalReviews: "50+",
    items: [
      {
        id: "review-1",
        author: "[Client Name]",
        role: "Regular Client",
        review: "[Verified review placeholder: Best fade and attention to detail in the area. Top barber with unmatched precision.]",
        rating: 5,
        source: "Google",
        date: "Recent",
      },
      {
        id: "review-2",
        author: "[Client Name]",
        role: "Regular Client",
        review: "[Verified review placeholder: Sharp cuts every single visit. Unrushed, professional and great atmosphere.]",
        rating: 5,
        source: "Google",
        date: "Recent",
      },
      {
        id: "review-3",
        author: "[Client Name]",
        role: "Regular Client",
        review: "[Verified review placeholder: Always takes the time to get the lines perfect. Highly recommended.]",
        rating: 5,
        source: "Google",
        date: "Recent",
      },
    ] as TestimonialItem[],
  },

  // Developer credit
  credit: {
    text: "Website by Dhalef",
    url: "https://dhalef.com",
  }
};

/**
 * Generate a WhatsApp booking link or demo anchor.
 * In demo mode, this returns an anchor so no real phone number is ever called.
 */
export function getWhatsAppBookingUrl(_serviceName?: string): string {
  return "#demo-booking";
}

/**
 * Generate phone call URI or demo anchor.
 */
export function getPhoneCallUrl(): string {
  return "#demo-phone";
}
