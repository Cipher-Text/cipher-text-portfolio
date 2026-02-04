import type { Metadata } from 'next'
import Link from 'next/link'
import { getAboutConfig } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about CipherText - our story, philosophy, and the team behind the work.',
}

export default function AboutPage() {
  const about = getAboutConfig()

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Us
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {about.story}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Our Philosophy
          </h2>

          <ul className="space-y-4 max-w-3xl">
            {about.philosophy.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              From the Founder
            </h2>

            <blockquote className="bg-white rounded-xl border border-slate-200 p-8">
              <p className="text-lg text-slate-700 leading-relaxed italic mb-6">
                &ldquo;{about.founder.note}&rdquo;
              </p>
              <footer className="text-slate-600 font-medium">
                &mdash; {about.founder.name}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
            Our Journey
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-200" />

              <div className="space-y-8">
                {about.timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    {/* Circle */}
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                      }`}
                    >
                      <div className="bg-white rounded-lg border border-slate-200 p-4">
                        <span className="text-sm font-bold text-blue-600">
                          {item.year}
                        </span>
                        <p className="text-slate-700 mt-1">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for interesting projects and great people to work with.
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
