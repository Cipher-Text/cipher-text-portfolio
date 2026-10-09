import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import Tag from '@/components/ui/Tag'
import ProcessSteps from '@/components/ui/ProcessSteps'
import CTABand from '@/components/ui/CTABand'
import { getTechConfig } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Our technology stack, engineering principles, and development process.',
}

const GROUPS = [
  ['Frontend', 'frontend'],
  ['Backend', 'backend'],
  ['Infrastructure', 'infrastructure'],
] as const

export default function TechnologyPage() {
  const tech = getTechConfig()

  return (
    <>
      <section className="px-5 pb-12 pt-14 sm:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto flex max-w-container flex-wrap items-end justify-between gap-8 lg:gap-12">
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6 lg:basis-[720px]">
            <Eyebrow>Technology</Eyebrow>
            <h1 className="text-h1">Modern, proven tools. Chosen to last.</h1>
          </div>
          <p className="min-w-0 flex-1 basis-[300px] text-lg leading-relaxed text-slate">
            We use modern, proven technologies to build software that scales, performs, and lasts. Here’s our stack and the principles that guide our engineering decisions.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-container flex-col gap-10">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-heading">Our stack</h2>
          <div className="border-t border-line-strong">
            {GROUPS.map(([title, key]) => (
              <div key={key} className="flex flex-wrap items-start gap-4 border-b border-line py-7 lg:gap-8">
                <h3 className="min-w-0 flex-[0_1_240px] font-mono text-label uppercase text-slate">{title}</h3>
                <ul className="m-0 flex min-w-0 flex-1 basis-[300px] list-none flex-wrap gap-2 p-0">
                  {tech.stack[key].map((t) => (
                    <li key={t.name}><Tag variant="stack" className="px-3.5 py-2 text-[13px]">{t.name}</Tag></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-mist sm:px-8 lg:py-28">
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-12">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow surface="dark">Engineering principles</Eyebrow>
            <h2 className="text-h2">The values that guide every technical decision.</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded-card border border-line-dark bg-line-dark">
            {tech.principles.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-3 bg-ink p-7">
                <span className="font-mono text-[13px] text-signal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-h3">{p.title}</h3>
                <p className="text-[15px] leading-[1.55] text-[#9AA8B2]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-28">
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-12">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow>Our process</Eyebrow>
            <h2 className="text-h2">A structured approach to building software that delivers results.</h2>
          </div>
          <ProcessSteps steps={tech.process.map((s) => ({ label: s.step, body: s.description }))} />
        </div>
      </section>

      <CTABand />
    </>
  )
}
