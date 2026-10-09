import { getServices } from '@/lib/content'

/**
 * Content for the redesigned services pages.
 * Source of truth is docs/design/designs/Services.dc.html and ServiceHealthcare.dc.html.
 * Optional sections only render when present; [BRACKETS] are visible placeholders to fill in.
 */
export type ServicePage = {
  slug: string
  /** Shown on the /services index; unlisted pages keep their URL but aren't on the index */
  listed: boolean
  sector: string
  title: string
  blurb: string
  exploreLabel: string
  chips: string[]
  hero: {
    h1: string
    lede: string
    cta: string
    includesTitle?: string
    includes?: string[]
  }
  audiences?: { title: string; body: string }[]
  capabilities: { title: string; body?: string }[]
  stack: string[]
  /** Slug of the related case study (see content/projects.json) */
  caseStudy?: string
  caseStudyNote?: string
  cta?: { title: string; body?: string; label: string }
}

const DESIGNED: ServicePage[] = [
  {
    slug: 'healthcare-systems',
    listed: true,
    sector: 'HEALTHCARE',
    title: 'Healthcare systems',
    blurb:
      'Patient portals, provider tools and facility platforms with HIPAA-ready safeguards built into the architecture, not bolted on before launch.',
    exploreLabel: 'Explore healthcare systems',
    chips: ['Patient & provider portals', 'Appointments & referrals', 'EHR / FHIR integrations', 'Telehealth', 'Audit logging & access control', 'Clinical reporting'],
    hero: {
      h1: 'Healthcare software built for compliance from day one.',
      lede: 'From patient portals to facility networks, we design and build clinical platforms that protect patient data, integrate with existing systems and hold up under audit.',
      cta: 'See Open Care',
      includesTitle: 'Every healthcare engagement includes',
      includes: [
        'Compliance requirements mapped in discovery',
        'Threat model and data-flow diagram',
        'Encryption, access control, audit logs',
        'Security documentation for your auditors',
        'BAA available [confirm]',
      ],
    },
    audiences: [
      { title: 'Hospitals & clinic networks', body: 'Replace paper and phone workflows with booking, records and referrals that every facility shares.' },
      { title: 'Health-tech companies', body: 'Get to a compliant MVP fast, with an architecture that won’t need rewriting at your next funding round.' },
      { title: 'Public health programs', body: 'Registries, campaign tracking and reporting dashboards that work in the field, on any connection.' },
    ],
    capabilities: [
      { title: 'Patient portals & apps', body: 'Booking, records, results and messaging patients actually use.' },
      { title: 'Provider consoles', body: 'Schedules, patient context and notes in one fast view.' },
      { title: 'EHR & FHIR integration', body: 'Connect to existing records, labs and billing systems.' },
      { title: 'Telehealth', body: 'Secure video visits tied to the appointment and the chart.' },
      { title: 'Facility administration', body: 'Staff, rooms, services and multi-site configuration.' },
      { title: 'Clinical reporting', body: 'Operational and population dashboards with de-identified data.' },
    ],
    stack: ['Next.js', 'Spring Boot', 'PostgreSQL', 'HL7 FHIR'],
    caseStudy: 'open-care',
    caseStudyNote: 'How we connected patients, providers and facilities on one platform. [Add headline result.]',
    cta: { title: 'Planning a healthcare platform?', body: 'Ask for our healthcare security overview before the call.', label: 'Book a discovery call' },
  },
  {
    slug: 'public-platforms',
    listed: true,
    sector: 'PUBLIC SECTOR',
    title: 'Government & public platforms',
    blurb:
      'Citizen services and internal systems that are accessible, multilingual, work on low bandwidth, and come with documentation your team can maintain.',
    exploreLabel: 'Explore public platforms',
    chips: ['Citizen service portals', 'Case & workflow management', 'Bangla / English interfaces', 'Open data & transparency', 'Identity & role management', 'Handover documentation'],
    hero: {
      h1: 'Government & public platforms.',
      lede: 'Citizen services and internal systems that are accessible, multilingual, work on low bandwidth, and come with documentation your team can maintain.',
      cta: 'See our work',
    },
    capabilities: [
      { title: 'Citizen service portals' },
      { title: 'Case & workflow management' },
      { title: 'Bangla / English interfaces' },
      { title: 'Open data & transparency' },
      { title: 'Identity & role management' },
      { title: 'Handover documentation' },
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    slug: 'data-platforms',
    listed: true,
    sector: 'DATA & MEDIA',
    title: 'Data & content platforms',
    blurb:
      'Headless CMS, newsroom tooling and data pipelines that keep publishing fast and information consistent across web, app and social.',
    exploreLabel: 'Explore data platforms',
    chips: ['Headless CMS', 'Editorial workflows', 'Data ingestion & ETL', 'Search & archives', 'Multi-channel publishing', 'Public APIs'],
    hero: {
      h1: 'Data & content platforms.',
      lede: 'Headless CMS, newsroom tooling and data pipelines that keep publishing fast and information consistent across web, app and social.',
      cta: 'See our work',
    },
    capabilities: [
      { title: 'Headless CMS' },
      { title: 'Editorial workflows' },
      { title: 'Data ingestion & ETL' },
      { title: 'Search & archives' },
      { title: 'Multi-channel publishing' },
      { title: 'Public APIs' },
    ],
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    caseStudy: 'news-platform',
  },
  {
    slug: 'dashboards-portals',
    listed: true,
    sector: 'OPERATIONS',
    title: 'Dashboards & portals',
    blurb:
      'Admin consoles, reporting and self-service portals that turn operational data into decisions — fast to load, clear to read, safe to share.',
    exploreLabel: 'Explore dashboards',
    chips: ['KPI & executive dashboards', 'Admin back-offices', 'Member & partner portals', 'Scheduled reports & exports', 'Role-based views', 'Maps & geospatial views'],
    hero: {
      h1: 'Dashboards & portals.',
      lede: 'Admin consoles, reporting and self-service portals that turn operational data into decisions — fast to load, clear to read, safe to share.',
      cta: 'See our work',
    },
    capabilities: [
      { title: 'KPI & executive dashboards' },
      { title: 'Admin back-offices' },
      { title: 'Member & partner portals' },
      { title: 'Scheduled reports & exports' },
      { title: 'Role-based views' },
      { title: 'Maps & geospatial views' },
    ],
    stack: ['React', 'Next.js', 'Chart.js'],
    caseStudy: 'alumni-portal',
  },
]

/** Pre-redesign service URLs that aren't in the new design. Kept so no URL breaks. */
function legacyPages(): ServicePage[] {
  const designed = new Set(DESIGNED.map((s) => s.slug))
  return getServices()
    .filter((s) => !designed.has(s.slug))
    .map((s) => ({
      slug: s.slug,
      listed: false,
      sector: s.title.toUpperCase(),
      title: s.title,
      blurb: s.description,
      exploreLabel: `Explore ${s.title.toLowerCase()}`,
      chips: s.capabilities,
      hero: { h1: s.title, lede: s.solution, cta: 'See our work' },
      capabilities: s.capabilities.map((title) => ({ title })),
      stack: s.tech,
      caseStudy: s.projects[0],
    }))
}

export function getServicePages(): ServicePage[] {
  return [...DESIGNED, ...legacyPages()]
}

export function getListedServices(): ServicePage[] {
  return getServicePages().filter((s) => s.listed)
}

export function getServicePage(slug: string): ServicePage | undefined {
  return getServicePages().find((s) => s.slug === slug)
}
