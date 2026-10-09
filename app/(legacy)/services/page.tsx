import type { Metadata } from 'next'
import Link from 'next/link'
import { getServices } from '@/lib/content'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-stack software engineering services for healthcare, governance, and data-driven platforms.',
}

export default function ServicesPage() {
  const services = getServices()

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              End-to-end software engineering for organizations that need reliable, scalable digital systems. From initial architecture to production deployment and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure what you need?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and figure out the best approach together.
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
