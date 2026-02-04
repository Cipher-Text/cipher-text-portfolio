import siteData from '@/content/site.json'
import projectsData from '@/content/projects.json'
import servicesData from '@/content/services.json'
import productsData from '@/content/products.json'
import techData from '@/content/tech.json'
import aboutData from '@/content/about.json'
import contactData from '@/content/contact.json'

// Type definitions
export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  tagline: string
  email: string
  phone: string
  nav: NavItem[]
  cta: {
    primary: string
    secondary: string
  }
}

export interface Project {
  slug: string
  title: string
  category: string
  description: string
  featured: boolean
  thumbnail: string
  problem: string
  solution: string
  features: string[]
  tech: string[]
  status: string
  link?: string
}

export interface Service {
  slug: string
  title: string
  icon: string
  description: string
  problem: string
  solution: string
  capabilities: string[]
  tech: string[]
  projects: string[]
}

export interface Product {
  name: string
  description: string
  status: string
  link: string | null
  image: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface TechStack {
  frontend: TechItem[]
  backend: TechItem[]
  infrastructure: TechItem[]
}

export interface Principle {
  title: string
  description: string
}

export interface ProcessStep {
  step: string
  description: string
}

export interface TechConfig {
  stack: TechStack
  principles: Principle[]
  process: ProcessStep[]
}

export interface TimelineEvent {
  year: string
  event: string
}

export interface Founder {
  name: string
  note: string
}

export interface AboutConfig {
  story: string
  philosophy: string[]
  founder: Founder
  timeline: TimelineEvent[]
}

export interface FormField {
  name: string
  label: string
  type: string
  required: boolean
  options?: string[]
}

export interface ContactConfig {
  intro: string
  email: string
  phone: string
  whatsapp: string
  form: {
    fields: FormField[]
  }
}

// Content loader functions
export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig
}

export function getProjects(): Project[] {
  return projectsData.projects as Project[]
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter(project => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find(project => project.slug === slug)
}

export function getServices(): Service[] {
  return servicesData.services as Service[]
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getServices().find(service => service.slug === slug)
}

export function getProducts(): Product[] {
  return productsData.products as Product[]
}

export function getTechConfig(): TechConfig {
  return techData as TechConfig
}

export function getAboutConfig(): AboutConfig {
  return aboutData as AboutConfig
}

export function getContactConfig(): ContactConfig {
  return contactData as ContactConfig
}

// Helper function to get related projects for a service
export function getRelatedProjects(projectSlugs: string[]): Project[] {
  const projects = getProjects()
  return projects.filter(project => projectSlugs.includes(project.slug))
}
