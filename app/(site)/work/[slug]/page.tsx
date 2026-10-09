import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Tag from '@/components/ui/Tag'
import { ArrowRight } from '@/components/ui/Button'
import { getProjects } from '@/lib/content'
import { getCaseStudy, getNextProject } from '@/lib/case-studies'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return { title: 'Case study not found' }
  return { title: cs.project.title, description: cs.project.description }
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-signal-deep">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Row({ title, children, last = false }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-4 py-8 lg:gap-8 lg:py-10 ${last ? '' : 'border-b border-line'}`}>
      <h2 className="min-w-0 flex-[0_1_320px] text-2xl font-semibold tracking-[-0.02em] lg:text-[28px]">{title}</h2>
      <div className="min-w-0 flex-1 basis-[300px] lg:basis-[560px]">{children}</div>
    </div>
  )
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()
  const { project } = cs
  const next = getNextProject(slug)
  const live = project.status.toLowerCase() === 'live'

  const meta = [
    ['Client', cs.client],
    ['Timeline', cs.timeline],
    ['Our role', cs.role],
    ['Stack', project.tech.slice(0, 3).join(' · ')],
  ]

  return (
    <>
      <section className="px-5 pb-12 pt-10 sm:px-8 lg:pb-[72px] lg:pt-16">
        <div className="mx-auto flex max-w-container flex-col gap-8 lg:gap-10">
          <Link href="/work" className="flex min-h-[44px] items-center self-start font-mono text-[13px] text-slate hover:text-ink">
            ← All work / {project.category.replace(/ (Platform|CMS)$/, '')}
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-8 lg:gap-12">
            <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-5 lg:basis-[640px]">
              <div className="flex flex-wrap gap-2">
                <Tag variant="solid">{project.category}</Tag>
                {live && <Tag variant="live">Live</Tag>}
              </div>
              <h1 className="text-h1">{cs.h1}</h1>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-control border border-ink px-[22px] py-3.5 text-base font-semibold hover:bg-ink hover:text-mist"
              >
                Visit live site <ArrowRight />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] border-y border-line-strong">
            {meta.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5 py-5 pr-5">
                <dt className="font-mono text-xs uppercase text-slate">{k}</dt>
                <dd className="m-0 text-[17px] font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Hero visual — replace the dashed panel with a real screenshot */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-container rounded-[20px] bg-ink px-4 pt-6 sm:px-8 sm:pt-10 lg:px-14 lg:pt-14">
          <div aria-hidden="true" className="flex min-h-[320px] gap-5 rounded-t-xl bg-white p-4 sm:p-6 lg:min-h-[440px]">
            <div className="hidden w-[200px] shrink-0 flex-col gap-2.5 md:flex">
              <div className="h-6 w-[110px] rounded bg-ink" />
              <div className="h-9 rounded-md bg-[#EEF1F0]" />
              {[0, 1, 2].map((i) => <div key={i} className="h-9 rounded-md border border-line" />)}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3.5">
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2].map((i) => <div key={i} className="h-[72px] rounded-control border border-line lg:h-[90px]" />)}
                <div className="h-[72px] rounded-control bg-signal lg:h-[90px]" />
              </div>
              <div className="flex min-h-[200px] flex-1 items-center justify-center rounded-control border border-dashed border-line-strong p-4 text-center text-sm text-slate lg:min-h-[240px]">
                {cs.screenshotLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-14 sm:px-8 lg:pt-24">
        <div className="mx-auto grid max-w-container grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
          {cs.results.map((r) => (
            <div key={r.label} className="flex flex-col gap-2 rounded-card border border-line bg-white p-7">
              <span className="text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-heading">{r.value}</span>
              <span className="text-[15px] text-slate">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-container border-t border-line-strong">
          <Row title="The challenge">
            <p className="text-[17px] leading-[1.65] text-[#26323A] lg:text-[19px]">{project.problem}</p>
          </Row>
          <Row title="What we built" last={!cs.security}>
            <div className="flex flex-col gap-6">
              <p className="text-[17px] leading-[1.65] text-[#26323A] lg:text-[19px]">{project.solution}</p>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3 p-0">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-[10px] border border-line bg-white p-4 text-base leading-normal">
                    <Check />{f}
                  </li>
                ))}
              </ul>
            </div>
          </Row>
          {cs.security && (
            <Row title="Security & compliance" last>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3 p-0">
                {cs.security.map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-[10px] border border-line bg-white p-4 text-[17px] leading-normal">
                    <Check />{s}
                  </li>
                ))}
              </ul>
            </Row>
          )}
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:pb-24">
        <figure className="mx-auto m-0 flex max-w-container flex-col gap-7 rounded-[20px] bg-ink p-6 text-mist sm:p-10 lg:p-16">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="text-signal">
            <path d="M6 20c0-5 2-9 6-11l1.5 2.2C11 12.600 10.200 14.200 10 16h4v8H6v-4zm13 0c0-5 2-9 6-11l1.500 2.200C24 12.600 23.200 14.200 23 16h4v8h-8v-4z" fill="currentColor" />
          </svg>
          <blockquote className="m-0 max-w-[980px] text-2xl font-medium leading-[1.3] tracking-[-0.02em] lg:text-[34px]">{cs.testimonial.quote}</blockquote>
          <figcaption className="text-base text-muted-dark">{cs.testimonial.by}</figcaption>
        </figure>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-[120px]">
        <div className="mx-auto flex max-w-container flex-wrap gap-5">
          {next && (
            <Link href={`/work/${next.slug}`} className="flex min-w-0 flex-1 basis-[300px] items-center justify-between gap-6 rounded-[16px] border border-line bg-white p-7 transition-colors hover:border-ink lg:basis-[480px] lg:p-9">
              <span className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase text-slate">Next case study</span>
                <span className="text-2xl font-semibold tracking-[-0.02em] lg:text-[26px]">{next.title}</span>
              </span>
              <ArrowRight />
            </Link>
          )}
          <Link href="/contact" className="flex min-w-0 flex-1 basis-[300px] items-center justify-between gap-6 rounded-[16px] bg-signal p-7 text-ink transition-colors hover:bg-signal-deep hover:text-white lg:basis-[480px] lg:p-9">
            <span className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase">Building something similar?</span>
              <span className="text-2xl font-semibold tracking-[-0.02em] lg:text-[26px]">Talk to an engineer</span>
            </span>
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
