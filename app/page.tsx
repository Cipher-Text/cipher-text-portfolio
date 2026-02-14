import Link from 'next/link'
import { getSiteConfig, getFeaturedProjects, getServices } from '@/lib/content'
import ProjectCard from '@/components/ProjectCard'
import ServiceCard from '@/components/ServiceCard'

export default function HomePage() {
  const site = getSiteConfig()
  const featuredProjects = getFeaturedProjects()
  const services = getServices().slice(0, 4)

  const metrics = [
    { value: '5+', label: 'Years' },
    { value: '20+', label: 'Systems Built' },
    { value: '99.9%', label: 'Uptime' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {site.tagline}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Building software that works, scales, and lasts. We specialize in healthcare systems, government platforms, and data-driven applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors"
              >
                {site.cta.primary} 
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-medium border border-slate-200 hover:text-primary-400 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {site.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              End-to-end software engineering for organizations that need reliable digital systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-accent font-medium hover:text-accent-dark transition-colors"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recent projects that demonstrate our approach to building reliable software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-800 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-primary-700">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build something reliable?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and how we can help you create software that lasts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
