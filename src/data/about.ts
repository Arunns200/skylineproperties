export interface AboutMilestone {
  year: string
  title: string
  description: string
}

export interface Leader {
  name: string
  role: string
  bio: string
  image: string
}

export const aboutContent = {
  eyebrow: 'About Skyline Properties',
  heroTitle: 'Land, planned with intention.',
  heroSubtitle:
    'Replace with your actual company story. We help families and investors find clear, well-documented DTCP plot opportunities across South India’s growth corridors.',
  storyTitle: 'Our story (placeholder)',
  story: [
    'Replace this paragraph with your founding story. Skyline Properties is a sample brand created for this website demo — not a claim of real awards, history, or scale.',
    'Replace with how you source land, work with planners, and support buyers from enquiry to registration.',
  ],
  vision:
    'Replace with your vision. To be the most trusted DTCP plot developer families choose for clear titles, fair pricing, and lasting land value.',
  mission:
    'Replace with your mission. Help buyers secure DTCP approved plots with honest documentation, guided site visits, and simple next steps — starting with Skyline New Town at OMR Thiruporur.',
  trustPoints: [
    'Clear project documentation (sample commitment — verify before publishing)',
    'Guided site visits with layout walkthroughs',
    'Transparent pricing conversations',
    'After-sale coordination support (define your actual SLA)',
  ],
  commitment:
    'Replace with your customer commitment statement. We aim to make every enquiry feel informed — never rushed.',
  milestones: [
    {
      year: 'YYYY',
      title: 'Sample milestone',
      description: 'Replace with a real company milestone. Do not invent awards.',
    },
    {
      year: 'YYYY',
      title: 'Sample milestone',
      description: 'Replace with project launch or service expansion.',
    },
    {
      year: 'YYYY',
      title: 'Sample milestone',
      description: 'Replace with community or delivery milestone.',
    },
  ] satisfies AboutMilestone[],
  leadership: [
    {
      name: 'Sample Leader Name',
      role: 'Founder / Director (Placeholder)',
      bio: 'Replace with a real bio. Avoid fabricating credentials.',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Sample Leader Name',
      role: 'Head of Projects (Placeholder)',
      bio: 'Replace with a real bio focused on planning and delivery.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
  ] satisfies Leader[],
}

export const whyInvestCards = [
  {
    title: 'Strategic locations',
    description:
      'Sample — corridors with improving connectivity and employment adjacency. Replace with your verified maps.',
  },
  {
    title: 'Infrastructure focus',
    description:
      'Sample — approach roads, utilities planning, and drainage considered early. Confirm project specifics.',
  },
  {
    title: 'Legal documentation',
    description:
      'Sample — encourage buyers to review title, layout approvals, and RERA where applicable with counsel.',
  },
  {
    title: 'Approved developments',
    description:
      'Sample — market only projects you can evidence with approvals. Replace with your compliance process.',
  },
  {
    title: 'Transparent pricing',
    description:
      'Sample — published ranges and clear inclusions. Replace with your pricing policy.',
  },
  {
    title: 'Long-term value',
    description:
      'Sample education — land and homes can support multi-year plans when due diligence is strong. Not advice.',
  },
  {
    title: 'Dedicated support',
    description:
      'Sample — enquiry to site visit to paperwork coordination. Define your actual service steps.',
  },
  {
    title: 'Guided site visits',
    description:
      'Walk the land, compare plots, and ask questions on site — the most important step before deciding.',
  },
]
