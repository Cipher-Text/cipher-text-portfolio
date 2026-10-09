import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ title: 'About', description: 'Cipher Text Lab is a small senior engineering studio building dependable software for healthcare, government, media and education.' })

const VALUES = [
  { title: 'Quality over speed', body: 'We build it right the first time, because rework costs our clients more than patience does.' },
  { title: 'Long-term thinking', body: 'Systems designed to evolve with your needs — and documented so anyone can maintain them.' },
  { title: 'Transparency', body: 'Demos every sprint, honest estimates, and bad news delivered early.' },
  { title: 'Responsibility', body: 'We stand behind everything we build, long after launch day.' },
]

const TIMELINE = [
  { year: '2020', event: 'Cipher Text Lab founded' },
  { year: '2021', event: 'First healthcare platform launched' },
  { year: '2022', event: 'Expanded into government systems' },
  { year: '2023', event: 'Media and education platforms' },
  { year: '2024', event: 'Team and infrastructure growth' },
  // TODO: real milestones
  { year: '2025', event: '[Milestone]' },
  { year: '2026 · now', event: '[Milestone]', current: true },
]

// TODO: real team members and photos
const TEAM = [
  { name: '[Founder name]', role: 'Founder & Principal Engineer' },
  { name: '[Name]', role: '[Engineering Lead]' },
  { name: '[Name]', role: '[Product Designer]' },
  { name: '[Name]', role: '[DevOps / Security]' },
]

const pad = 'px-5 sm:px-8'
const h2 = 'text-[clamp(1.875rem,4vw,2.75rem)] font-semibold tracking-heading'

export default function AboutPage() {
  return (
    <>
      <section className={`${pad} pb-14 pt-12 lg:pb-24 lg:pt-24`}>
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-12">
          <div className="flex max-w-[980px] flex-col gap-6">
            <Eyebrow>About Cipher Text Lab</Eyebrow>
            <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">We build software that people depend on.</h1>
          </div>
          <div className="flex flex-wrap gap-8 border-t border-line-strong pt-10 lg:gap-12">
            <p className="min-w-0 flex-1 basis-[300px] text-lg leading-[1.6] lg:basis-[480px] lg:text-xl">
              Cipher Text Lab started in 2020 with a simple observation: the organizations that most need dependable software — hospitals, public agencies, newsrooms — are often the ones stuck with the least reliable systems.
            </p>
            <p className="min-w-0 flex-1 basis-[300px] text-[17px] leading-[1.6] text-slate lg:basis-[480px] lg:text-lg">
              So we built a studio around the opposite approach: small senior teams, written architecture before code, security as a baseline, and a commitment to stay with the systems we ship. [Add one sentence on where you are based and who you serve.]
            </p>
          </div>
        </div>
      </section>

      <section className={`${pad} bg-ink py-16 text-mist lg:py-28`}>
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-12">
          <h2 className={h2}>What we hold ourselves to</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-px overflow-hidden rounded-card border border-line-dark bg-line-dark">
            {VALUES.map((v, i) => (
              <div key={v.title} className="flex flex-col gap-3.5 bg-ink p-8">
                <span className="font-mono text-[13px] text-signal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-h3">{v.title}</h3>
                <p className="text-base leading-relaxed text-[#9AA8B2]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${pad} py-16 lg:py-28`}>
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-12">
          <h2 className={h2}>Our journey</h2>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] border-t-2 border-ink p-0">
            {TIMELINE.map((t) => (
              <li key={t.year} className={`flex flex-col gap-2.5 pr-5 pt-6 ${t.current ? '-mt-0.5 border-t-2 border-signal' : ''}`}>
                <span className={`font-mono text-[15px] font-medium ${t.current ? 'text-signal-deep' : ''}`}>{t.year}</span>
                <span className="text-base leading-normal text-slate">{t.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${pad} pb-16 lg:pb-28`}>
        <div className="mx-auto flex max-w-container flex-col gap-10 lg:gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className={h2}>The team</h2>
            <p className="max-w-[460px] text-[17px] leading-relaxed text-slate">The people you meet in the first call are the people who build your system.</p>
          </div>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5 p-0">
            {TEAM.map((m, i) => (
              <li key={i} className="flex flex-col overflow-hidden rounded-[16px] border border-line bg-white">
                <div className="flex aspect-square items-center justify-center bg-[#E6ECEA] text-sm text-slate" aria-hidden="true">[PHOTO]</div>
                <div className="flex flex-col gap-1 p-5">
                  <span className="text-lg font-semibold">{m.name}</span>
                  <span className="text-[15px] text-slate">{m.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${pad} pb-16 lg:pb-[120px]`}>
        <div className="mx-auto flex max-w-container flex-wrap gap-5">
          <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-[18px] rounded-[20px] bg-ink p-7 text-mist sm:p-10 lg:basis-[560px] lg:p-14">
            <span className="font-mono text-[13px] uppercase text-signal">Careers</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-heading">Engineers who care about the boring parts are our favourite kind.</h2>
            {/* TODO: link to a roles page once one exists */}
            <Button href="mailto:hello@ciphertextlabs.com?subject=Careers" className="mt-2 self-start">See open roles</Button>
          </div>
          <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-[18px] rounded-[20px] border border-line bg-white p-7 sm:p-10 lg:basis-[360px] lg:p-14">
            <span className="font-mono text-[13px] uppercase text-slate">Work with us</span>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em]">Have a project in mind?</h2>
            <Button href="/contact" variant="ghost" className="mt-auto self-start !border-ink font-semibold">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
