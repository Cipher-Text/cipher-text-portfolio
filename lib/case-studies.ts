import { getProjects, type Project } from '@/lib/content'

/**
 * Case study view-model. Real copy comes from content/projects.json;
 * everything the design needs that we don't have yet is a visible [BRACKET] placeholder.
 * Never invent numbers — fill these in from the client.
 */
export type CaseStudy = {
  project: Project
  h1: string
  client: string
  timeline: string
  role: string
  results: { value: string; label: string }[]
  /** Optional; only shown when there are real, confirmed claims */
  security?: string[]
  screenshotLabel: string
  testimonial: { quote: string; by: string }
}

type Override = Partial<Omit<CaseStudy, 'project'>>

const PLACEHOLDER_RESULTS = [
  { value: '[X]', label: '[Metric 1]' },
  { value: '[X]', label: '[Metric 2]' },
  { value: '[X%]', label: '[Metric 3]' },
  { value: '[X%]', label: '[Metric 4]' },
]

const OVERRIDES: Record<string, Override> = {
  'open-care': {
    h1: 'Open Care: one connected system for patients, providers and facilities.',
    role: 'UX, architecture, build, operations',
    results: [
      { value: '[X]', label: '[Patients registered]' },
      { value: '[X]', label: '[Facilities connected]' },
      { value: '[X%]', label: '[Faster appointment booking]' },
      { value: '[X%]', label: '[Measured uptime, last 12 months]' },
    ],
    // From the design spec; confirm these before launch.
    security: [
      'AES-256 at rest, TLS 1.2+ in transit',
      'Role-based access with audit trail',
      '[BAA / assessment details]',
      'Automated backups, tested restores',
    ],
    screenshotLabel: '[PRODUCT SCREENSHOT — provider dashboard]',
  },
}

function build(project: Project): CaseStudy {
  const o = OVERRIDES[project.slug] ?? {}
  return {
    project,
    h1: o.h1 ?? `${project.title}: ${project.description.charAt(0).toLowerCase()}${project.description.slice(1)}.`,
    client: o.client ?? '[Client / organization]',
    timeline: o.timeline ?? '[e.g. 9 months]',
    role: o.role ?? '[Our role]',
    results: o.results ?? PLACEHOLDER_RESULTS,
    security: o.security,
    screenshotLabel: o.screenshotLabel ?? '[PRODUCT SCREENSHOT]',
    testimonial: o.testimonial ?? {
      quote: '[Client testimonial — one or two sentences on the outcome, in their words.]',
      by: '[Name], [Title], [Organization]',
    },
  }
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const project = getProjects().find((p) => p.slug === slug)
  return project ? build(project) : undefined
}

/** The next project in content order, wrapping around. */
export function getNextProject(slug: string): Project | undefined {
  const all = getProjects()
  const i = all.findIndex((p) => p.slug === slug)
  return i === -1 ? undefined : all[(i + 1) % all.length]
}
