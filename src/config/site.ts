export const siteConfig = {
  name: 'Skyline Properties',
  legalName: 'Skyline Properties Pvt. Ltd. (Replace with your legal entity)',
  tagline: 'LAND BEYOND LIMITS',
  description:
    'Replace with your actual company description. Skyline Properties focuses on DTCP plotted developments — clear layouts, documented approvals, and site-visit-led buying across Chennai growth corridors including OMR Thiruporur.',
  url: 'https://skylineproperties.example.com',
  locale: 'en_IN',
  phone: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  whatsapp: '+919000000000',
  whatsappHref: 'https://wa.me/919000000000',
  email: 'hello@skylineproperties.example.com',
  emailHref: 'mailto:hello@skylineproperties.example.com',
  address: {
    line1: 'Replace with your actual office address',
    line2: 'Sample Suite, OMR Corridor',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600000',
    country: 'India',
  },
  officeHours: 'Mon–Sat · 10:00 AM – 6:30 PM IST (Sample hours — replace)',
  logo: {
    src: '/images/logo/skyline-properties-logo.png',
    width: 900,
    height: 504,
  },
  colors: {
    navy: '#0B2C5E',
    lime: '#8CC63F',
    mist: '#EEF2F6',
    stone: '#F7F8F6',
    sand: '#D9D3C6',
    ink: '#0B2C5E',
    muted: '#5A6B76',
    accent: '#8CC63F',
  },
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
  },
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Mission & Vision', href: '/mission-vision' },
  ],
  cta: {
    bookVisit: 'Book Free Site Visit',
    explore: 'Our Plots',
    enquire: 'Enquire Now',
    whatsapp: 'WhatsApp',
  },
  hero: {
    eyebrow: 'DTCP Approved Plots',
    supporting:
      'Leave your details — we will connect on WhatsApp or call you back about DTCP plots.',
    formSubtitle: 'Name and phone required. We confirm your visit on WhatsApp or a call.',
  },
  placeholderNote:
    'Demo site for Skyline Properties DTCP plots. Replace phone, WhatsApp, and project data in site config.',
} as const

export type SiteConfig = typeof siteConfig
