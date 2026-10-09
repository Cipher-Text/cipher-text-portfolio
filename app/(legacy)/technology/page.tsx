import type { Metadata } from 'next'
import { getTechConfig } from '@/lib/content'
import TechStack from '@/components/TechStack'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Our technology stack, engineering principles, and development process.',
}

export default function TechnologyPage() {
  const tech = getTechConfig()

  const principleIcons: Record<string, React.ReactNode> = {
    Scalability: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Security: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Maintainability: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Performance: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technology
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We use modern, proven technologies to build software that scales, performs, and lasts. Here&apos;s our stack and the principles that guide our engineering decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
            Our Stack
          </h2>

          <div className="space-y-12">
            <TechStack items={tech.stack.frontend} title="Frontend" />
            <TechStack items={tech.stack.backend} title="Backend" />
            <TechStack items={tech.stack.infrastructure} title="Infrastructure" />
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Engineering Principles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The values that guide every technical decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tech.principles.map((principle) => (
              <FeatureCard
                key={principle.title}
                title={principle.title}
                description={principle.description}
                icon={principleIcons[principle.title]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to building software that delivers results
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />

            <div className="space-y-12">
              {tech.process.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {step.step}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="hidden md:flex w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white font-bold flex-shrink-0 z-10">
                    {index + 1}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
