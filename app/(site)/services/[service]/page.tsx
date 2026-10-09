import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button, { ArrowRight } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import CTABand from '@/components/ui/CTABand'
import { getProjectBySlug } from '@/lib/content'
import { getServicePage, getServicePages } from '@/lib/services'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ service: string }> }

export function generateStaticParams() {
  return getServicePages().map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params
  const page = getServicePage(service)
  if (!page) return { title: 'Service not found' }
  return pageMetadata({ title: page.title, description: page.hero.lede })
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-signal">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params
  const page = getServicePage(service)
  if (!page) notFound()

  const project = page.caseStudy ? getProjectBySlug(page.caseStudy) : undefined
  const sectionPad = 'px-5 py-14 sm:px-8 lg:py-28'

  return (
    <>
      <section className="bg-ink px-5 pb-16 pt-10 text-mist sm:px-8 lg:pb-28 lg:pt-16">
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-10">
          <Link href="/services" className="flex min-h-[44px] items-center self-start font-mono text-[13px] text-muted-dark-dim hover:text-mist">
            ← Services / {page.title}
          </Link>
          <div className="flex flex-wrap items-start gap-12 lg:gap-16">
            <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6 lg:basis-[560px]">
              <h1 className="text-h1">{page.hero.h1}</h1>
              <p className="max-w-[580px] text-[17px] leading-[1.55] text-muted-dark lg:text-xl">{page.hero.lede}</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contact" className="px-[26px] py-4">Discuss your project</Button>
                <Button href={project ? `/work/${project.slug}` : '/work'} variant="ghost" surface="dark" className="px-[26px] py-4">
                  {page.hero.cta}
                </Button>
              </div>
            </div>
            {page.hero.includes && (
              <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-[18px] rounded-[16px] border border-line-dark bg-graphite p-6 lg:basis-[380px] lg:p-8">
                <span className="font-mono text-[13px] uppercase text-signal">{page.hero.includesTitle}</span>
                <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                  {page.hero.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-normal"><Check />{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {page.audiences && (
        <section className={`${sectionPad} pb-0 lg:pb-0`}>
          <div className="mx-auto flex max-w-container flex-col gap-10">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-heading">Who we build for</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
              {page.audiences.map((a) => (
                <div key={a.title} className="flex flex-col gap-3 rounded-card border border-line bg-white p-8">
                  <h3 className="text-h3">{a.title}</h3>
                  <p className="text-base leading-relaxed text-slate">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={sectionPad}>
        <div className="mx-auto flex max-w-container flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-heading">Capabilities</h2>
            <span className="font-mono text-[13px] text-slate">{page.stack.join(' · ')}</span>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] border-t border-line-strong p-0">
            {page.capabilities.map((c, i) => (
              <li key={c.title} className="flex gap-5 border-b border-line py-7 pr-7">
                <span className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  {c.body && <p className="text-base leading-relaxed text-slate">{c.body}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {project && (
        <section className="px-5 pb-14 sm:px-8 lg:pb-28">
          <Link
            href={`/work/${project.slug}`}
            className="mx-auto flex max-w-container flex-wrap overflow-hidden rounded-card-lg border border-line bg-white transition-colors hover:border-ink"
          >
            <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-4 p-6 sm:p-8 lg:basis-[480px] lg:p-12">
              <Eyebrow>Related case study</Eyebrow>
              <h2 className="text-[28px] font-semibold tracking-heading lg:text-4xl">{project.title}</h2>
              <p className="text-[17px] leading-relaxed text-slate">{page.caseStudyNote ?? project.description}</p>
              <span className="mt-2 flex items-center gap-2 text-base font-semibold">Read the case study <ArrowRight /></span>
            </div>
            <div aria-hidden="true" className="hidden min-h-[280px] min-w-0 flex-1 basis-[480px] items-end bg-ink pl-10 pt-10 md:flex">
              <div className="flex h-full min-h-[240px] w-full flex-col gap-2.5 rounded-tl-[10px] bg-mist p-4">
                <div className="h-3.5 w-[100px] rounded-[3px] bg-ink" />
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="h-[60px] rounded-md border border-line bg-white" />
                  <div className="h-[60px] rounded-md border border-line bg-white" />
                  <div className="h-[60px] rounded-md bg-signal" />
                </div>
                <div className="flex-1 rounded-md border border-line bg-white" />
              </div>
            </div>
          </Link>
        </section>
      )}

      <CTABand
        title={page.cta?.title ?? 'Have a system that needs to work?'}
        body={page.cta ? (page.cta.body ?? null) : undefined}
        primary={{ href: '/contact', label: page.cta?.label ?? 'Book a 30-minute call' }}
        email={page.cta ? null : undefined}
      />
    </>
  )
}
