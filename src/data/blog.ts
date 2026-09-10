import { plotImages } from '@/data/images'

export type BlogCategory =
  | 'Real Estate'
  | 'Investment'
  | 'Locations'
  | 'Property Guide'
  | 'Company News'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  category: BlogCategory
  author: string
  publishedAt: string
  readTime: string
  coverImage: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'how-to-evaluate-a-plotted-development',
    title: 'How to Evaluate a Plotted Development (Sample Guide)',
    excerpt:
      'Replace with your editorial. A practical checklist for approvals, layout quality, connectivity, and long-term livability.',
    content: [
      'This is placeholder educational content for Skyline Properties. Replace every paragraph with your verified guidance before publishing.',
      'Start with approvals and clear title. Ask for layout plans, approach road status, and utility commitments in writing.',
      'Walk the site at different times of day. Note drainage slopes, neighbouring developments, and noise sources.',
      'Compare price per square foot against similar micro-markets, not just city averages.',
    ],
    category: 'Property Guide',
    author: 'Skyline Properties Editorial (Sample)',
    publishedAt: '2026-01-18',
    readTime: '6 min',
    coverImage: plotImages.approachRoad,
    featured: true,
  },
  {
    id: 'b2',
    slug: 'chennai-growth-corridors-to-watch',
    title: 'Chennai Growth Corridors to Watch (Sample)',
    excerpt:
      'Replace with researched insights. An overview of southern and western corridors often discussed by plot buyers and investors.',
    content: [
      'Placeholder market commentary only — not financial advice. Replace with sourced data and maps.',
      'Southern corridors frequently benefit from highway upgrades and industrial spillover.',
      'Always validate infrastructure timelines with official sources before making decisions.',
    ],
    category: 'Locations',
    author: 'Skyline Properties Research (Sample)',
    publishedAt: '2026-02-02',
    readTime: '5 min',
    coverImage: plotImages.aerialParcels,
    featured: true,
  },
  {
    id: 'b3',
    slug: 'site-visit-checklist-for-first-time-buyers',
    title: 'Site Visit Checklist for First-Time Buyers',
    excerpt:
      'Replace with your checklist. Questions to ask on-site about boundaries, amenities, and payment schedules.',
    content: [
      'Bring a printed layout and mark plots of interest before you arrive.',
      'Confirm facing, setbacks, and road width on the ground — not only on paper.',
      'Ask what is completed today versus promised later, and how it is contractually captured.',
    ],
    category: 'Real Estate',
    author: 'Skyline Properties Team (Sample)',
    publishedAt: '2025-12-10',
    readTime: '4 min',
    coverImage: plotImages.vacantLot,
    featured: false,
  },
  {
    id: 'b4',
    slug: 'thinking-long-term-with-land',
    title: 'Thinking Long-Term with Land Investments',
    excerpt:
      'Replace with your investment education. Holding periods, liquidity, and due diligence essentials.',
    content: [
      'Land can complement a portfolio, but it is not automatically liquid or risk-free.',
      'Understand exit options, local demand drivers, and carrying costs before you commit.',
      'This article is sample content and should not be treated as investment advice.',
    ],
    category: 'Investment',
    author: 'Skyline Properties Editorial (Sample)',
    publishedAt: '2025-11-22',
    readTime: '7 min',
    coverImage: plotImages.vacantGreen,
    featured: false,
  },
  {
    id: 'b5',
    slug: 'welcome-to-skyline-properties',
    title: 'Welcome to Skyline Properties — Company News Placeholder',
    excerpt:
      'Replace with a real announcement. Introducing our sample brand presence and commitment to clarity.',
    content: [
      'Skyline Properties is a placeholder brand for this demo website. Swap this post for genuine company news.',
      'Our focus in this sample narrative is transparent documentation, site visits, and thoughtful plot layouts.',
    ],
    category: 'Company News',
    author: 'Skyline Properties (Sample)',
    publishedAt: '2025-10-01',
    readTime: '3 min',
    coverImage: plotImages.flatLand,
    featured: false,
  },
]

export const blogCategories: BlogCategory[] = [
  'Real Estate',
  'Investment',
  'Locations',
  'Property Guide',
  'Company News',
]
