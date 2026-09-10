export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  quote: string
  avatar: string
  project?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sample Client — Ananya R.',
    role: 'DTCP plot buyer (Placeholder)',
    location: 'Chennai',
    quote:
      'Replace with a real testimonial. Clear plot walkthrough and WhatsApp follow-up made the process simple.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    project: 'Skyline New Town',
  },
]
