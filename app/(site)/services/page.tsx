import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import FAQ from '@/components/ui/FAQ'
import CTABand from '@/components/ui/CTABand'
import { ArrowRight } from '@/components/ui/Button'
import { getListedServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Healthcare, public-sector, data and dashboard platforms — product design, architecture, build and operations from one accountable team.',
}

const ENGAGEMENTS = [
  { tag: 'PROJECT', title: 'Fixed-scope build', body: 'A defined product with milestones, a fixed price per phase, and a working demo every two weeks.', best: 'Best for: new platforms, rebuilds' },
  { tag: 'TEAM · MOST CHOSEN', title: 'Dedicated team', body: 'A cross-functional squad — engineers, designer, lead — embedded with your roadmap on a monthly basis.', best: 'Best for: evolving products, long programs', featured: true },
  { tag: 'OPERATE', title: 'Support & operations', body: 'Monitoring, security patching, backups and fixes for systems we built — or ones we inherit after an audit.', best: 'Best for: live systems that must stay up' },
]

// TODO: answers to be written by the team — keep the placeholder until confirmed
const FAQS = [
  { q: 'How long does a typical project take?', a: '[Most first releases ship in X–Y months. Discovery takes two to three weeks and produces a fixed plan.]' },
  { q: 'Do you sign BAAs and NDAs?', a: '[Answer to be confirmed.]' },
  { q: 'Who owns the code?', a: '[Answer to be confirmed.]' },
  { q: 'Can you take over an existing system?', a: '[Answer to be confirmed.]' },
  { q: 'Which time zones do you work in?', a: '[Answer to be confirmed.]' },
]

export default function ServicesPage() {
  const services = getListedServices()

  return (
    <>
      <section className="px-5 pb-12 pt-14 sm:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto flex max-w-container flex-wrap items-end justify-between gap-8 lg:gap-12">
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6 lg:basis-[720px]">
            <Eyebrow>Services</Eyebrow>
            <h1 className="text-h1">Engineering for sectors where reliability is the requirement.</h1>
          </div>
          <p className="min-w-0 flex-1 basis-[300px] text-lg leading-relaxed text-slate">
            We take ownership end to end — product design, architecture, build and operations — so you work with one accountable team instead of four vendors.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-[120px]">
        <div className="mx-auto flex max-w-container flex-col gap-5">
          {services.map((s, i) => (
            <article key={s.slug} className="flex flex-wrap gap-8 rounded-card-lg border border-line bg-white p-6 sm:p-8 lg:gap-12 lg:p-12">
              <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-[18px] lg:basis-[420px]">
                <span className="font-mono text-[13px] text-slate">{String(i + 1).padStart(2, '0')} / {s.sector}</span>
                <h2 className="text-[28px] font-semibold tracking-heading lg:text-4xl">{s.title}</h2>
                <p className="text-[17px] leading-relaxed text-slate">{s.blurb}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-2 inline-flex min-h-[44px] items-center gap-2 self-start border-b border-ink text-base font-semibold hover:border-signal-deep hover:text-signal-deep"
                >
                  {s.exploreLabel} <ArrowRight />
                </Link>
              </div>
              <ul className="m-0 grid min-w-0 flex-1 basis-[300px] list-none grid-cols-1 content-start gap-3 p-0 sm:grid-cols-2 lg:basis-[520px]">
                {s.chips.map((c) => (
                  <li key={c} className="rounded-[10px] bg-mist p-4 text-base">{c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-mist sm:px-8 lg:py-[120px]">
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-14">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow surface="dark">How to work with us</Eyebrow>
            <h2 className="text-h2">Three ways to engage. Same standards in each.</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {ENGAGEMENTS.map((e) => (
              <div key={e.title} className={`flex flex-col gap-[18px] rounded-[16px] border bg-graphite p-7 lg:p-9 ${e.featured ? 'border-signal' : 'border-line-dark'}`}>
                <span className={`font-mono text-[13px] ${e.featured ? 'text-signal' : 'text-muted-dark-dim'}`}>{e.tag}</span>
                <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{e.title}</h3>
                <p className="flex-grow text-base leading-relaxed text-muted-dark">{e.body}</p>
                <span className="border-t border-line-dark pt-4 text-sm text-muted-dark-dim">{e.best}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="mx-auto flex max-w-container flex-wrap gap-10 lg:gap-16">
          <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-4 self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-heading">What clients ask before we start.</h2>
          </div>
          <div className="min-w-0 flex-1 basis-[320px] lg:basis-[640px]">
            <FAQ items={FAQS} openFirst />
          </div>
        </div>
      </section>

      <CTABand tone="signal" title="Not sure which fits? Start with a 30-minute call." body={null} email={null} primary={{ href: '/contact', label: 'Talk to an engineer' }} />
    </>
  )
}
