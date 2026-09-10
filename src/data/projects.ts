import { plotImages } from '@/data/images'

export type PropertyType = 'DTCP Plot' | 'Gated DTCP Layout'

export type ProjectStatus = 'Coming Soon' | 'Ongoing' | 'Sold Out'

export type PlotStatus = 'Available' | 'Reserved' | 'Sold'

export interface NearbyPlace {
  name: string
  distance: string
  category: string
}

export interface PlotInventoryItem {
  id: string
  plotNumber: string
  sizeSqFt: number
  facing: string
  price: string
  status: PlotStatus
}

export interface Project {
  id: string
  slug: string
  name: string
  location: string
  city: string
  state: string
  type: PropertyType
  status: ProjectStatus
  approval: string
  priceFrom: string
  area: string
  plotSizes: string
  heroImage: string
  shortDescription: string
  description: string
  highlights: string[]
  amenities: string[]
  nearbyPlaces: NearbyPlace[]
  gallery: string[]
  masterPlan?: string
  lat?: number
  lng?: number
  featured: boolean
  createdAt: string
  whyLocation: string
  plotInventory: PlotInventoryItem[]
}

export const projects: Project[] = [
  {
    id: 'proj-001',
    slug: 'skyline-new-town-omr-thiruporur',
    name: 'Skyline New Town',
    location: 'OMR Thiruporur',
    city: 'Thiruporur',
    state: 'Tamil Nadu',
    type: 'DTCP Plot',
    status: 'Ongoing',
    approval: 'DTCP Approved (Sample — verify before publishing)',
    priceFrom: '₹XX / Sq.Ft',
    area: 'XX Acres (Sample)',
    plotSizes: '600 – 2400 Sq.Ft',
    heroImage: plotImages.aerialParcels,
    shortDescription:
      'DTCP plots at OMR Thiruporur. Replace with your live pricing, sizes, and approval details.',
    description:
      'Skyline New Town is our featured DTCP plotted layout on the OMR–Thiruporur corridor. Replace this copy with your verified project details. Demo figures and imagery only.',
    highlights: [
      'DTCP layout focus (verify before publishing)',
      'OMR Thiruporur connectivity',
      'Clear plot demarcation (sample)',
      'Site visit available',
    ],
    amenities: [
      'Internal roads (sample)',
      'Street lighting (sample)',
      'Drainage & water (sample)',
      'EB connection (sample)',
      'Park / open space (planned)',
      'Security (sample)',
    ],
    nearbyPlaces: [
      { name: 'OMR / Rajiv Gandhi Salai', distance: '5 mins (sample)', category: 'Connectivity' },
      { name: 'Kelambakkam', distance: '10 mins (sample)', category: 'Connectivity' },
      { name: 'SIPCOT belt', distance: '15 mins (sample)', category: 'Work' },
      { name: 'Schools (OMR)', distance: '15 mins (sample)', category: 'Education' },
      { name: 'Hospitals (OMR)', distance: '20 mins (sample)', category: 'Healthcare' },
      { name: 'Airport', distance: '45 mins (sample)', category: 'Transit' },
    ],
    gallery: [
      plotImages.approachRoad,
      plotImages.vacantLot,
      plotImages.layoutRows,
      plotImages.clearedSite,
      plotImages.flatLand,
    ],
    masterPlan: plotImages.aerialParcelsSm,
    lat: 12.7409,
    lng: 80.1961,
    featured: true,
    createdAt: '2025-11-01',
    whyLocation:
      'OMR Thiruporur corridor — sample growth pocket. Replace with your verified investment notes.',
    plotInventory: [
      {
        id: 'snt-101',
        plotNumber: 'A-101',
        sizeSqFt: 1200,
        facing: 'East',
        price: '₹XX Lakh',
        status: 'Available',
      },
      {
        id: 'snt-102',
        plotNumber: 'A-102',
        sizeSqFt: 1500,
        facing: 'North',
        price: '₹XX Lakh',
        status: 'Reserved',
      },
      {
        id: 'snt-103',
        plotNumber: 'B-201',
        sizeSqFt: 1800,
        facing: 'West',
        price: '₹XX Lakh',
        status: 'Available',
      },
    ],
  },
  {
    id: 'proj-002',
    slug: 'skyline-horizon-coming-soon',
    name: 'Skyline Horizon',
    location: 'Coming Soon',
    city: 'Tamil Nadu',
    state: 'Tamil Nadu',
    type: 'DTCP Plot',
    status: 'Coming Soon',
    approval: 'Coming Soon',
    priceFrom: '₹XX / Sq.Ft',
    area: 'XX Acres (Sample)',
    plotSizes: 'To be announced',
    heroImage: plotImages.vacantGreen,
    shortDescription: 'Next DTCP plot launch — Coming Soon. Register your interest on the home page.',
    description:
      'Skyline Horizon is a Coming Soon DTCP plot project. Share your details on the home form or WhatsApp to get launch updates. Replace with real location and specs when ready.',
    highlights: ['Coming Soon', 'DTCP plot focus', 'Early-bird interest list'],
    amenities: ['To be announced'],
    nearbyPlaces: [],
    gallery: [plotImages.approachRoadSm, plotImages.goldenField, plotImages.vacantGreenSm],
    featured: true,
    createdAt: '2026-01-12',
    whyLocation: 'Location to be announced. Register interest for updates.',
    plotInventory: [],
  },
  {
    id: 'proj-003',
    slug: 'skyline-orchard-coming-soon',
    name: 'Skyline Orchard',
    location: 'Coming Soon',
    city: 'Tamil Nadu',
    state: 'Tamil Nadu',
    type: 'DTCP Plot',
    status: 'Coming Soon',
    approval: 'Coming Soon',
    priceFrom: '₹XX / Sq.Ft',
    area: 'XX Acres (Sample)',
    plotSizes: 'To be announced',
    heroImage: plotImages.demarcatedGround,
    shortDescription: 'Another DTCP plot launch — Coming Soon. Leave your number for a callback.',
    description:
      'Skyline Orchard is a Coming Soon project. Capture leads via WhatsApp or call. Replace with real details when launched.',
    highlights: ['Coming Soon', 'DTCP plot focus', 'WhatsApp updates'],
    amenities: ['To be announced'],
    nearbyPlaces: [],
    gallery: [plotImages.vacantGreen, plotImages.flatLandSm],
    featured: true,
    createdAt: '2026-02-01',
    whyLocation: 'Location to be announced. Register interest for updates.',
    plotInventory: [],
  },
]
