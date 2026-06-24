import villaBlue from "@/assets/villa-blue.asset.json";
import villaWhite from "@/assets/villa-white.asset.json";
import villaRender from "@/assets/villa-render.asset.json";
import townhouses from "@/assets/townhouses.asset.json";
import siteScaffold1 from "@/assets/site-scaffold-1.asset.json";
import siteScaffold2 from "@/assets/site-scaffold-2.asset.json";
import house from '@/assets/images/file_14.jpeg'
import house_2 from '@/assets/images/file_5.jpeg'
import house_3 from '@/assets/images/file_8.jpeg'
import verification from '@/assets/images/verification.jpg'
import investment from '@/assets/images/file_1.jpeg'
import riverpark from '@/assets/images/21.jpeg'
import riverpark_1 from '@/assets/images/file_20.jpeg'
import riverpark_2 from '@/assets/images/25.jpeg'
import riverpark_3 from '@/assets/images/22.jpeg'
import riverpark_4 from '@/assets/images/23.jpeg'
import riverpark_5 from '@/assets/images/24.jpeg'
import agodi from '@/assets/images/file_14.jpeg'
import agodi_2 from '@/assets/images/file_2.jpeg'
import agodi_3 from '@/assets/images/file_10.jpeg'
import carlton from '@/assets/images/file_17.jpeg'
import carlton_2 from '@/assets/images/file_11.jpeg'
import carlton_3 from '@/assets/images/file_9.jpeg'
import carlton_4 from '@/assets/images/file_13.jpeg'


export const media = {
  villaBlue: villaBlue.url,
  villaWhite: villaWhite.url,
  villaRender: villaRender.url,
  townhouses: townhouses.url,
  siteScaffold1: siteScaffold1.url,
  siteScaffold2: siteScaffold2.url,
};

export const projects = [
  {
    id: "AH-2023-019",
    slug: "kolapo",
    name: "Kolapo Ishola Estate",
    location: "Akobo, Ibadan",
    type: "Luxury Detached Villas",
    status: "Completed",
    completion: 100,
    price: "₦85M+",
    badge: "PREMIUM",
    image: house_2,

    overview:
      "Kolapo Ishola Estate is a premium residential development designed for discerning homeowners and diaspora investors seeking a secure, well-planned community in Ibadan.",

    availableUnits: [
      "4 Bedroom Detached Villas",
      "5 Bedroom Detached Villas",
      "Serviced Residential Plots",
    ],

    pricing: "Starting from ₦85,000,000",

    paymentPlan:
      "30% initial deposit with balance spread over 12 months.",

    titleStatus: "Governor's Consent",

    developmentStage: "Completed",

    completionTimeline: "Delivered",

    photos: [house_2, house_3, house],

    videos: [],

    features: [
      "24/7 Security",
      "Paved Roads",
      "Drainage Infrastructure",
      "Street Lighting",
      "Recreational Spaces",
    ],
  },

  {
    id: "AH-2024-051",
    slug: "carlton",
    name: "Carlton Gate Extension",
    location: "Lekki Phase 1, Lagos",
    type: "Fully Serviced Estate",
    status: "Selling Fast",
    completion: 88,
    price: "₦145M+",
    badge: "SELLING FAST",
    image: carlton,

    overview:
      "Carlton Gate Extension offers premium serviced plots and modern residences in one of Lagos' most desirable investment corridors.",

    availableUnits: [
      "300sqm Plots",
      "500sqm Plots",
      "3 Bedroom Terraces",
    ],

    pricing: "Starting from ₦145,000,000",

    paymentPlan:
      "Flexible installment plan available over 18 months.",

    titleStatus: "Certificate of Occupancy (C of O)",

    developmentStage: "Infrastructure Ongoing",

    completionTimeline: "Q2 2027",

    photos: [carlton, carlton_2, carlton_3, carlton_4],

    videos: [],

    features: [
      "Gated Community",
      "Reliable Power",
      "Water Supply",
      "Landscaped Environment",
      "Smart Security",
    ],
  },

  {
    id: "AH-2024-082",
    slug: "rayfield",
    name: "Rayfield Development",
    location: "Monatan, Ibadan",
    type: "Luxury Detached Villas",
    status: "Ongoing",
    completion: 64,
    price: "₦420M+",
    badge: "FLAGSHIP",
    image: house_3,

    overview:
      "A flagship luxury development delivering contemporary architecture, premium finishes, and long-term investment value.",

    availableUnits: [
      "5 Bedroom Smart Villas",
      "Luxury Duplexes",
    ],

    pricing: "Starting from ₦420,000,000",

    paymentPlan:
      "40% deposit and milestone-based construction payments.",

    titleStatus: "Registered Deed of Assignment",

    developmentStage: "Superstructure Stage",

    completionTimeline: "Q4 2027",

    photos: [house_2, house_3, house],

    videos: [],

    features: [
      "Smart Home Integration",
      "Swimming Pool",
      "Clubhouse",
      "Premium Finishes",
      "Private Parking",
    ],
  },

  {
    id: "AH-2024-081",
    slug: "agodi",
    name: "Agodi Estate",
    location: "Agodi, Ibadan",
    type: "Luxury Detached Villas",
    status: "Ongoing",
    completion: 64,
    price: "₦420M+",
    badge: "FLAGSHIP",
    image: agodi,

    overview:
      "Agodi Estate combines modern living with strategic positioning, making it ideal for both owner-occupiers and investors.",

    availableUnits: [
      "4 Bedroom Duplexes",
      "5 Bedroom Duplexes",
    ],

    pricing: "Starting from ₦420,000,000",

    paymentPlan:
      "Flexible payment spread across construction milestones.",

    titleStatus: "Governor's Consent",

    developmentStage: "Finishing Stage",

    completionTimeline: "Q1 2027",

    photos: [agodi, agodi_2, agodi_3],

    videos: [],

    features: [
      "Estate Security",
      "Children's Park",
      "Road Network",
      "Water Treatment",
      "Green Areas",
    ],
  },

  {
    id: "AH-2025-008",
    slug: "riverpark",
    name: "Riverpark Estate",
    location: "Lugbe, Abuja",
    type: "Semi-Detached Duplexes",
    status: "Completed",
    completion: 100,
    price: "₦65M+",
    badge: "NEW",
    image: riverpark,

    overview:
      "Riverpark Estate offers modern family homes in Abuja with excellent accessibility, infrastructure, and investment potential.",

    availableUnits: [
      "3 Bedroom Duplexes",
      "4 Bedroom Duplexes",
    ],

    pricing: "Starting from ₦65,000,000",

    paymentPlan:
      "Outright purchase or 12-month installment option.",

    titleStatus: "Certificate of Occupancy (C of O)",

    developmentStage: "Completed",

    completionTimeline: "Delivered",

    photos: [riverpark,  riverpark_2, riverpark_3, riverpark_4, riverpark_5, riverpark_1,],

    videos: [],

    features: [
      "24/7 Security",
      "Road Infrastructure",
      "Power Backup",
      "Shopping Area",
      "Recreational Facilities",
    ],
  },
];

export const home_services = [
  {
    title: "Property Sales",
    blurb:
      "Verified land and luxury residences in Nigeria's most prestigious postcodes.",
    cta: "View Listings",
  },
  {
    title: "Build-For-Me",
    blurb:
      "We help you design, build, monitor, and complete your home in Nigeria while you live abroad.",
    cta: "Explore Journey",
    featured: true,
  },
  {
    title: "Estate Development",
    blurb:
      "End-to-end estate development services for diaspora investors.",
    cta: "Learn More",
  },
  {
    title: "Property Management",
    blurb:
      "High-yield short-let and rental management for diaspora investors.",
    cta: "Learn More",
  },
  {
    title: "Property Verification",
    blurb:
      "Legal and title verification for land and property acquisitions in Nigeria.",
    cta: "Learn More",
  },
  {
    title: "Investment Advisory",
    blurb:
      "Data-driven insights to help you build a resilient, high-yield portfolio. +15-20% PA yield potential.",
    cta: "Learn More",
  },
];

export const services = [
  {
    title: "Property Sales",
    blurb:
      `Guaranteed Home Ownership Without Stress. We build residential houses for sale to clients via direct full payment option or off-plan home sells to diaspora buyers.
We also help clients buy verified and strategically located properties in Nigeria.`,
    cta: "View Listings",
    list: [
      "	Residential plots",
      "Commercial plots",
      "Estate plots",
      "Apartments",
      "Luxury homes",
      "Investment properties"
    ],
    img: house_2,
  },

  {
    title: "Property Development",
    blurb:
      `We develop premium residential estates and housing schemes targeted at diaspora investors and homeowners.`,
    cta: "Learn More",
    list: [
      "Estate development",
      "Off-plan housing",
      "Semi-detached homes",
      "Terraces",
      "Apartments",
      "Retirement homes",
      "Investment housing schemes"
    ],
    img: house,
  },
  {
    title: "Property Management & Site Supervision",
    blurb:
      "We provide professional oversight for clients who already own land or have ongoing projects.",
    cta: "Learn More",
    list: [
      "Cost control",
      "Schedule tracking",
      "Contractor management",
      "Site inspection",
      "Material verification",
      "Quality assurance",
      "Progress reporting"
    ],
    img: house_3,
  },
  {
    title: "Property Documentation and Verification",
    blurb:
      "We protect clients from fraudulent and defective property transactions.",
    cta: "Learn More",
    list: [
      "Land title verification",
      "Survey review",
      "Deed documentation",
      "Governor’s Consent support",
      "Legal advisory coordination",
      "Property purchase documentation"
    ],
    img: verification,
  },
  {
    title: "Real Estate Investment Advisory",
    blurb:
      "We guide clients toward profitable and sustainable real estate investment decisions.",
    cta: "Learn More",
    list: [
      "Market analysis",
      "Location advisory",
      "ROI projection",
      "Investment planning",
      "Portfolio growth strategy",
      "Rental income advisory"
    ],
    img: riverpark,
  },
];

export const articles = [
  {
    id: "ART-001",
    slug: "building-remotely-guide",
    featured: true,

    tag: "FEATURED GUIDE",
    category: "Construction Tips",

    title:
      "Building Remotely: A Complete Guide to Long-Distance Project Management",

    excerpt:
      "Everything diaspora homeowners should know about milestones, contractor accountability, escrow payments, and project verification.",

    author: "Ayinde Homes Editorial Team",

    authorRole: "Project Delivery & Construction",

    publishedAt: "May 18, 2025",

    minutes: 12,

    image: riverpark,

    seoTitle:
      "Building a Home in Nigeria While Abroad | Ayinde Homes",

    seoDescription:
      "Learn how Nigerians in the diaspora can successfully build homes remotely with transparency and accountability.",

    content: [
      {
        heading: "Why Remote Construction Often Fails",
        body: `
Many Nigerians abroad dream of owning a home back home but struggle with poor contractor accountability, inconsistent reporting, and project delays.

Without structured oversight, projects often exceed budget, miss timelines, and fail quality inspections.
        `,
      },

      {
        heading: "Start With Verified Documentation",
        body: `
Before construction begins, ensure land titles, surveys, allocation letters, and approvals have been independently verified.

Legal due diligence is the foundation of a successful project.
        `,
      },

      {
        heading: "Establish Clear Milestones",
        body: `
Every project should be divided into measurable stages:

• Foundation
• Ground Floor Structure
• Roofing
• Mechanical & Electrical
• Finishes
• Handover

Payments should be linked to milestone completion rather than arbitrary dates.
        `,
      },

      {
        heading: "Demand Visual Evidence",
        body: `
Diaspora clients should receive periodic drone footage, site photos, videos, and written reports.

Visual reporting creates transparency and reduces uncertainty.
        `,
      },

      {
        heading: "Final Thoughts",
        body: `
Remote construction can be successful when supported by verified professionals, structured reporting, and transparent financial controls.

The key is replacing trust-based management with process-based management.
        `,
      },
    ],
  },

  {
    id: "ART-002",
    slug: "genuine-c-of-o-guide",

    tag: "LEGAL & TITLES",
    category: "Legal & Titles",

    title:
      "What a Genuine Certificate of Occupancy Looks Like in 2025",

    excerpt:
      "Learn how to verify a Certificate of Occupancy and avoid common land title fraud schemes.",

    author: "Ayinde Homes Legal Advisory Desk",

    authorRole: "Property Documentation",

    publishedAt: "June 2, 2025",

    minutes: 7,

    image: riverpark_1,

    featured: false,

    seoTitle:
      "How to Verify a Certificate of Occupancy in Nigeria",

    seoDescription:
      "A practical guide for diaspora investors on verifying land titles and property ownership.",

    content: [
      {
        heading: "Understanding a Certificate of Occupancy",
        body: `
A Certificate of Occupancy confirms the government's recognition of a holder's right to occupy land.

However, possessing a C of O alone does not eliminate the need for due diligence.
        `,
      },

      {
        heading: "Common Red Flags",
        body: `
Watch for:

• Altered signatures
• Missing survey references
• Mismatched property descriptions
• Unregistered transactions
        `,
      },

      {
        heading: "Verification Process",
        body: `
Always conduct searches at the relevant land registry and engage qualified legal professionals before purchase.
        `,
      },
    ],
  },
];

export const documents = [
  { name: "Survey Plan", type: "PDF", size: "4.2 MB", status: "Verified" },
  { name: "Deed of Assignment", type: "PDF", size: "1.8 MB", status: "Verified" },
  { name: "Architectural Drawings — Rev C", type: "ZIP", size: "62 MB", status: "Verified" },
  { name: "Bill of Quantities — Phase 2", type: "XLSX", size: "740 KB", status: "Pending Review" },
  { name: "Governor's Consent", type: "PDF", size: "920 KB", status: "Verified" },
  { name: "Insurance Certificate", type: "PDF", size: "310 KB", status: "Verified" },
];

export const changeRequests = [
  {
    id: "CR-018",
    title: "Upgrade master suite flooring to Italian marble",
    submitted: "Oct 18, 2024",
    status: "Approved",
    cost: "+ ₦4.8M",
  },
  {
    id: "CR-019",
    title: "Re-orient pool to south-east aspect",
    submitted: "Oct 22, 2024",
    status: "In Review",
    cost: "+ ₦1.2M",
  },
  {
    id: "CR-020",
    title: "Add solar inverter capacity (15kVA → 25kVA)",
    submitted: "Oct 24, 2024",
    status: "Pending Quote",
    cost: "TBC",
  },
];

export const timeline = [
  {
    date: "Oct 24, 2024",
    time: "09:15 AM WAT",
    title: "Level 6 slab pour completed",
    body: "Continuous pour of 142 m³ concrete completed without seam. Curing in progress; 7-day cube test scheduled.",
    status: "Completed",
    tag: "STRUCTURAL",
  },
  {
    date: "Oct 22, 2024",
    time: "04:30 PM WAT",
    title: "Site weather delay",
    body: "Crane operations suspended due to winds exceeding 38 km/h. Site secured at 16:00 — no impact to critical path.",
    status: "Resolved",
    tag: "OPERATIONS",
  },
  {
    date: "Oct 21, 2024",
    time: "11:20 AM WAT",
    title: "Steel delivery received",
    body: "L6 beam batch #882 received, inventoried and stored under cover. No damage reported. Mill certificates filed.",
    status: "Verified",
    tag: "LOGISTICS",
  },
  {
    date: "Oct 18, 2024",
    time: "02:00 PM WAT",
    title: "Client walkthrough — virtual",
    body: "45-minute HD walkthrough conducted with client (London). Three minor finish changes captured as CR-018.",
    status: "Logged",
    tag: "CLIENT",
  },
];
