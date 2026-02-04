import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServices, getServiceBySlug, getRelatedProjects } from '@/lib/content'
import ProjectCard from '@/components/ProjectCard'

interface ServicePageProps {
  params: Promise<{
    service: string
  }>
}

export async function generateStaticParams() {
  const services = getServices()
  return services.map((service) => ({
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  database: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  layout: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  server: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(service.projects)

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors"
          >
            &larr; Back to Services
          </Link>

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              {iconMap[service.icon] || iconMap.code}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Problem */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                The Challenge
              </h2>
              <p className="text-lg text-slate-900 leading-relaxed">
                {service.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-slate-900 leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Capabilities
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.capabilities.map((capability, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200"
              >
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {service.tech.map((tech) => (
              <span
                key={tech}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Related Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need {service.title.toLowerCase()}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
