import type { MetadataRoute } from 'next'
import { getProjects } from '@/lib/content'
import { getServicePages } from '@/lib/services'
import { SITE_URL } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/work', '/products', '/technology', '/about', '/contact']
  const services = getServicePages().map((s) => `/services/${s.slug}`)
  const work = getProjects().map((p) => `/work/${p.slug}`)
  return [...pages, ...services, ...work].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.split('/').length > 2 ? 0.6 : 0.8,
  }))
}
