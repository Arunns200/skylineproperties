export const siteConfig = {
  name: 'Skyline Properties',
  legalName: 'Skyline Properties Pvt. Ltd. (Replace with your legal entity)',
  tagline: 'DTCP approved plots, planned for clarity',
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
  colors: {
    forest: '#0c2e24',
    forestLight: '#164a3a',
    sage: '#3d6b5a',
    mist: '#e8efe9',
    stone: '#f4f6f4',
    sand: '#d9cfc0',
    ink: '#14201c',
    muted: '#5c6b64',
    accent: '#b08d57',
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
    bookVisit: 'Get Details',
    explore: 'Our Plots',
    enquire: 'Enquire Now',
    whatsapp: 'WhatsApp',
  },
  placeholderNote:
    'Demo site for Skyline Properties DTCP plots. Replace phone, WhatsApp, and project data in site config.',
} as const

export type SiteConfig = typeof siteConfig
