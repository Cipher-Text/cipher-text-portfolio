import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import CTABand from '@/components/ui/CTABand'
import { getProjects } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ title: 'Work', description: 'A selection of projects that showcase our approach to building reliable, scalable software for healthcare, governance, and data platforms.' })

export default function WorkPage() {
  const projects = getProjects()

  return (
    <>
      <section className="px-5 pb-12 pt-14 sm:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto flex max-w-container flex-wrap items-end justify-between gap-8 lg:gap-12">
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6 lg:basis-[720px]">
            <Eyebrow>Work</Eyebrow>
            <h1 className="text-h1">Live systems, real users, measurable outcomes.</h1>
          </div>
          <p className="min-w-0 flex-1 basis-[300px] text-lg leading-relaxed text-slate">
            A selection of projects that showcase our approach to building reliable, scalable software for healthcare, governance, and data platforms.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-[120px]">
        <div className="mx-auto grid max-w-container grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-5">
          {projects.map((p) => (
            <CaseStudyCard
              key={p.slug}
              href={`/work/${p.slug}`}
              meta={`${p.category.toUpperCase()} · ${p.status.toUpperCase()}`}
              title={p.title}
              summary={p.description}
              headingLevel="h2"
            />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
