import { plotImages } from '@/data/images'

export interface Location {
  id: string
  slug: string
  name: string
  region: string
  state: string
  shortDescription: string
  description: string
  highlights: string[]
  image: string
  investmentNotes: string
  featured: boolean
}

export const locations: Location[] = [
  {
    id: 'loc-omr-thiruporur',
    slug: 'omr-thiruporur',
    name: 'OMR Thiruporur',
    region: 'OMR Corridor',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Sample OMR–Thiruporur belt for DTCP plotted layouts near IT and industrial demand.',
    description:
      'Replace with verified insights. OMR Thiruporur is presented as a sample DTCP plot market along Rajiv Gandhi Salai.',
    highlights: [
      'OMR / IT corridor adjacency (sample)',
      'Industrial & SIPCOT proximity (sample)',
      'Growing DTCP plot demand (sample)',
    ],
    image: plotImages.aerialParcels,
    investmentNotes: 'Sample note — corridor thesis only; not financial advice.',
    featured: true,
  },
  {
    id: 'loc-chennai',
    slug: 'chennai',
    name: 'Chennai',
    region: 'Metropolitan',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Urban-fringe DTCP plot demand near employment hubs.',
    description:
      'Replace with verified insights. Chennai is a sample primary market for DTCP plotted extensions.',
    highlights: [
      'IT & industrial corridors (sample)',
      'Road network expansion (sample)',
      'Education & healthcare density (sample)',
    ],
    image: plotImages.openAcreage,
    investmentNotes: 'Sample — urban fringe plot demand. Replace with research.',
    featured: true,
  },
  {
    id: 'loc-pondicherry',
    slug: 'pondicherry',
    name: 'Pondicherry',
    region: 'Coastal Corridor',
    state: 'Puducherry',
    shortDescription:
      'Replace with your notes. Sample market for DTCP / plotted land near the coastal belt.',
    description:
      'Replace with verified content. Pondicherry is shown for plotted land demand — imagery is vacant parcels, not beaches or villas.',
    highlights: ['Weekend-plot demand (sample)', 'Highway access (sample)', 'Leisure adjacency (sample)'],
    image: plotImages.vacantGreen,
    investmentNotes: 'Sample leisure + land narrative. Verify before publishing.',
    featured: true,
  },
  {
    id: 'loc-auroville',
    slug: 'auroville',
    name: 'Auroville',
    region: 'Experimental Township',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Low-density DTCP-oriented parcels near Auroville.',
    description:
      'Replace with verified content. Sample eco-conscious plot corridor — open land imagery only.',
    highlights: ['Low-density living (sample)', 'Large plot sizes (sample)'],
    image: plotImages.demarcatedGround,
    investmentNotes: 'Sample niche plot market. Confirm legal constraints before marketing.',
    featured: true,
  },
  {
    id: 'loc-chengalpattu',
    slug: 'chengalpattu',
    name: 'Chengalpattu',
    region: 'Growth Corridor',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Emerging DTCP plot belt south of Chennai.',
    description:
      'Replace with verified content. Sample plotted corridor with highway connectivity.',
    highlights: ['Highway access (sample)', 'Industrial adjacency (sample)', 'Affordable plots vs city core (sample)'],
    image: plotImages.approachRoad,
    investmentNotes: 'Sample growth-corridor thesis — replace with data.',
    featured: true,
  },
  {
    id: 'loc-kanchipuram',
    slug: 'kanchipuram',
    name: 'Kanchipuram',
    region: 'Heritage Town',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Heritage city with residential DTCP plot extensions.',
    description:
      'Replace with verified content. Sample blend of cultural tourism and residential plot demand.',
    highlights: ['Temple-town identity (sample)', 'Residential plot extensions (sample)'],
    image: plotImages.meadowParcel,
    investmentNotes: 'Sample — cultural + residential mix. Verify micro-markets.',
    featured: false,
  },
  {
    id: 'loc-tiruvallur',
    slug: 'tiruvallur',
    name: 'Tiruvallur',
    region: 'Western Corridor',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Western Chennai expansion for plotted land.',
    description:
      'Replace with verified content. Sample western corridor for DTCP / plotted parcels.',
    highlights: ['Industrial parks nearby (sample)', 'Road connectivity (sample)'],
    image: plotImages.clearedSite,
    investmentNotes: 'Sample western-corridor narrative — replace.',
    featured: false,
  },
  {
    id: 'loc-other',
    slug: 'other',
    name: 'Other Locations',
    region: 'Pan-Tamil Nadu',
    state: 'Tamil Nadu',
    shortDescription:
      'Replace with your notes. Additional micro-markets for DTCP plots on request.',
    description:
      'Replace with your coverage map. Emerging pockets not listed separately.',
    highlights: ['Custom land sourcing (sample)', 'Off-market parcels (sample)'],
    image: plotImages.flatLand,
    investmentNotes: 'Contact the team for sample enquiries outside listed cities.',
    featured: false,
  },
]
