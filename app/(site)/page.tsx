import type { Metadata } from 'next'
import Link from 'next/link'
import Button, { ArrowRight } from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Eyebrow from '@/components/ui/Eyebrow'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import StatStrip from '@/components/ui/StatStrip'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import ProcessSteps from '@/components/ui/ProcessSteps'
import CTABand from '@/components/ui/CTABand'
import { pageMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site-url'

export const metadata: Metadata = pageMetadata({
  title: 'Cipher Text Lab — Software for systems that can’t afford to fail',
  absolute: true,
  description:
    'We design, build and operate dependable platforms for healthcare providers, public institutions and data-driven organizations.',
})

const ARCHITECTURE = [
  { n: '01 · INTERFACE', title: 'Patient & provider portals', stack: ['Next.js', 'React'] },
  { n: '02 · SERVICES', title: 'Scheduling, records, billing APIs', stack: ['Spring Boot'] },
  { n: '03 · DATA', title: 'Encrypted clinical store + audit log', stack: ['PostgreSQL'] },
  { n: '04 · OPERATE', title: 'Monitoring, backups, on-call', stack: ['[CLOUD]'], active: true },
]

const SERVICES = [
  { href: '/services/healthcare-systems', title: 'Healthcare systems', body: 'Patient, provider and facility platforms built on HIPAA-ready architecture: encryption, access control and audit trails by default.', stack: 'Next.js · Spring Boot · PostgreSQL' },
  { href: '/services', title: 'Government & public platforms', body: 'Citizen-facing services and internal tools that are accessible, multilingual and built to be handed over and maintained.', stack: 'React · Spring Boot · PostgreSQL' },
  { href: '/services/data-platforms', title: 'Data & content platforms', body: 'Headless CMS, newsroom tools and data pipelines that keep publishing fast and information consistent across channels.', stack: 'Next.js · Node.js · MongoDB' },
  { href: '/services/dashboards-portals', title: 'Dashboards & portals', body: 'Admin consoles, reporting and self-service portals that turn operational data into decisions people can act on.', stack: 'React · Next.js · Chart.js' },
]

const STANDARDS = [
  { tag: '[ HIPAA-ready ]', title: 'PHI encrypted at rest and in transit', body: 'BAA support, role-based access, minimum-necessary data access.' },
  { tag: '[ Auditable ]', title: 'Immutable audit logs', body: 'Who saw what, and when — traceable for every record.' },
  { tag: '[ Accessible ]', title: 'WCAG 2.2 AA interfaces', body: 'Keyboard, screen reader and low-bandwidth friendly.' },
  { tag: '[ Observable ]', title: 'CI/CD, monitoring, backups', body: 'Automated tests on every merge; restore drills on schedule.' },
]

const STEPS = [
  { label: 'Discover', title: 'Understand the problem', body: 'Workshops with your team and users, compliance requirements mapped up front, a written scope with fixed milestones.' },
  { label: 'Architect', title: 'Design the system', body: 'UX prototypes you can click, plus an architecture document covering data, security and scale before code is written.' },
  { label: 'Build', title: 'Ship in increments', body: 'Two-week sprints with working demos, code review on every change, automated tests and a staging site you can use.' },
  { label: 'Operate', title: 'Run it with you', body: 'Monitoring, backups and support agreements after launch — or a clean handover with docs your own team can own.' },
]

const section = 'px-5 py-16 sm:px-8 lg:py-[120px]'
const inner = 'mx-auto flex max-w-container flex-col gap-10 lg:gap-14'

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cipher Text Lab',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: 'hello@ciphertextlabs.com',
  description: 'Software engineering studio building dependable platforms for healthcare, government and data-driven organizations.',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />
      {/* Hero */}
      <section className="bg-ink px-5 pb-16 pt-14 text-mist sm:px-8 lg:pb-[120px] lg:pt-[112px]">
        <div className="mx-auto flex max-w-container flex-wrap items-center gap-12 lg:gap-16">
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-7 lg:basis-[520px]">
            <Eyebrow dot surface="dark">Software engineering studio</Eyebrow>
            <h1 className="text-h1">Software for systems that can’t afford to fail.</h1>
            <p className="max-w-[560px] text-[17px] leading-[1.55] text-muted-dark lg:text-xl">
              We design, build and operate dependable platforms for healthcare providers, public institutions and data-driven organizations — engineered to pass audits, scale with demand and stay maintainable for years.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" className="px-[26px] py-4">Book a discovery call <ArrowRight /></Button>
              <Button href="/work" variant="ghost" surface="dark" className="px-[26px] py-4">See our work</Button>
            </div>
          </div>

          <div className="min-w-0 flex-1 basis-[320px] overflow-hidden rounded-[16px] border border-line-dark bg-graphite lg:basis-[440px]">
            <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5 font-mono text-[13px] text-muted-dark-dim">
              <span>open-care / architecture</span>
              <span className="flex items-center gap-2 text-[#C9D3D9]"><span className="h-[7px] w-[7px] rounded-full bg-signal" aria-hidden="true" />production</span>
            </div>
            <div className="flex flex-col gap-2.5 p-5">
              {ARCHITECTURE.map((l) => (
                <div key={l.n} className={`flex flex-wrap items-center justify-between gap-3 rounded-[10px] border px-[18px] py-4 ${l.active ? 'border-signal' : 'border-[#26343E]'}`}>
                  <div className="flex flex-col gap-1">
                    <span className={`font-mono text-xs ${l.active ? 'text-signal' : 'text-muted-dark-dim'}`}>{l.n}</span>
                    <span className="text-base font-medium">{l.title}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {l.stack.map((s) => (
                      <span key={s} className="rounded-[5px] bg-[#1A252E] px-[9px] py-[5px] font-mono text-xs text-[#C9D3D9]">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-container lg:mt-24">
          <StatStrip
            stats={[
              { value: '5+ yrs', label: 'Building production software since 2020' },
              { value: '20+', label: 'Systems shipped and in use' },
              { value: '99.9%', label: 'Uptime target on managed platforms' },
              { value: '4', label: 'Sectors: health, public, media, education' },
            ]}
          />
        </div>
      </section>

      {/* Clients */}
      <section aria-label="Clients" className="border-b border-line bg-white px-5 py-12 sm:px-8 lg:py-14">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-8">
          <span className="font-mono text-label uppercase text-slate">Trusted by teams at</span>
          {/* TODO: replace placeholders with real client logos */}
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex h-11 w-[148px] items-center justify-center rounded-md border border-dashed border-line-strong text-[13px] text-slate">[CLIENT LOGO]</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={section}>
        <div className={inner}>
          <SectionHeader eyebrow="What we do" title="One team from first sketch to production — and after." link={{ href: '/services', label: 'All services' }} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-5">
            {SERVICES.map((s, i) => (
              <Card key={s.title} href={s.href} className="min-h-[300px] lg:min-h-[340px]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-ink font-mono text-sm text-signal" aria-hidden="true">{'>_'}</span>
                  <span className="font-mono text-[13px] text-slate">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-h3">{s.title}</h3>
                <p className="flex-grow text-base leading-relaxed text-slate">{s.body}</p>
                <span className="font-mono text-xs text-slate">{s.stack}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className={`${section} border-y border-line bg-white`}>
        <div className={inner}>
          <SectionHeader eyebrow="Selected work" title="Live systems, real users, measurable outcomes." link={{ href: '/work', label: 'All case studies' }} />

          <Link href="/work/open-care" className="flex flex-wrap overflow-hidden rounded-card-lg border border-line bg-mist transition-colors hover:border-ink">
            <div className="flex min-w-0 flex-1 basis-[320px] flex-col justify-between gap-6 p-6 sm:p-8 lg:basis-[440px] lg:p-12">
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-wrap gap-2"><Tag variant="solid">Healthcare</Tag><Tag variant="live">Live</Tag></div>
                <h3 className="text-[32px] font-semibold tracking-heading lg:text-[40px]">Open Care</h3>
                <p className="text-lg leading-relaxed text-slate">A healthcare ecosystem connecting patients, providers and facilities — appointments, records and referrals in one place.</p>
              </div>
              {/* TODO: real metrics — never invent numbers */}
              <div className="grid grid-cols-2 gap-4 border-t border-line pt-6">
                <div className="flex flex-col gap-1"><span className="text-[28px] font-semibold tracking-[-0.02em]">[METRIC]</span><span className="text-sm text-slate">[e.g. active patients]</span></div>
                <div className="flex flex-col gap-1"><span className="text-[28px] font-semibold tracking-[-0.02em]">[METRIC]</span><span className="text-sm text-slate">[e.g. facilities onboarded]</span></div>
              </div>
              <span className="flex items-center gap-2 text-base font-semibold">Read the case study <ArrowRight /></span>
            </div>
            <div aria-hidden="true" className="hidden min-w-0 flex-1 basis-[560px] items-end bg-ink pl-12 pt-12 md:flex">
              <div className="flex min-h-[360px] w-full gap-4 rounded-tl-xl bg-mist p-5">
                <div className="flex w-[140px] shrink-0 flex-col gap-2.5">
                  <div className="h-[22px] w-[90px] rounded bg-ink" />
                  <div className="h-8 rounded-md bg-line" />
                  {[0, 1, 2].map((i) => <div key={i} className="h-8 rounded-md border border-line bg-white" />)}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="h-[72px] rounded-control border border-line bg-white" />
                    <div className="h-[72px] rounded-control border border-line bg-white" />
                    <div className="h-[72px] rounded-control bg-signal" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 rounded-control border border-line bg-white p-3.5">
                    <div className="h-3 w-2/5 rounded-[3px] bg-line-strong" />
                    {['100%', '100%', '80%', '100%', '65%'].map((w, i) => <div key={i} className="h-2.5 rounded-[3px] bg-[#EEF1F0]" style={{ width: w }} />)}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-5">
            <CaseStudyCard
              href="/work/news-platform"
              meta="MEDIA CMS · LIVE"
              title="News & Content Platform"
              summary="A newsroom CMS that takes stories from draft to publish across web and social. [Add outcome, e.g. publish time cut by X%.]"
              preview={
                <div aria-hidden="true" className="flex h-full w-full flex-col gap-2.5 rounded-t-[10px] border border-b-0 border-line bg-white p-[18px]">
                  <div className="h-3.5 w-[120px] rounded-[3px] bg-ink" />
                  <div className="grid flex-1 grid-cols-3 gap-2.5">{[0, 1, 2].map((i) => <div key={i} className="rounded-md bg-[#EEF1F0]" />)}</div>
                </div>
              }
            />
            <CaseStudyCard
              href="/work/alumni-portal"
              meta="EDUCATION · LIVE"
              title="Alumni Management System"
              summary="Alumni engagement, events and fundraising with Stripe-powered giving. [Add outcome, e.g. members registered.]"
              preview={
                <div aria-hidden="true" className="flex h-full w-full gap-3 rounded-t-[10px] border border-b-0 border-line bg-white p-[18px]">
                  <div className="h-16 w-16 shrink-0 rounded-full bg-[#EEF1F0]" />
                  <div className="flex flex-1 flex-col gap-2.5">
                    <div className="h-3.5 w-3/5 rounded-[3px] bg-ink" />
                    <div className="h-2.5 rounded-[3px] bg-[#EEF1F0]" />
                    <div className="h-2.5 w-[70%] rounded-[3px] bg-[#EEF1F0]" />
                    <div className="mt-2 h-9 w-[140px] rounded-md bg-signal" />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className={section}>
        <div className={inner}>
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-h2">A clear process, so there are no surprises in month six.</h2>
          </div>
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className={`${section} bg-ink text-mist`}>
        <div className="mx-auto flex max-w-container flex-wrap gap-12 lg:gap-16">
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-5 lg:basis-[400px]">
            <Eyebrow surface="dark">Engineering standards</Eyebrow>
            <h2 className="text-h2">Security and reliability aren’t add-ons. They’re the baseline.</h2>
            <p className="text-lg leading-relaxed text-muted-dark">Every system we deliver ships with the same non-negotiables. Ask us for our security overview and sample architecture docs.</p>
            <Button href="/contact" variant="ghost" surface="dark" className="mt-2 self-start">Request security overview</Button>
          </div>
          <div className="grid min-w-0 flex-1 basis-[320px] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px self-start overflow-hidden rounded-card border border-line-dark bg-line-dark lg:basis-[560px]">
            {STANDARDS.map((s) => (
              <div key={s.tag} className="flex flex-col gap-2.5 bg-ink p-7">
                <span className="font-mono text-[13px] text-signal">{s.tag}</span>
                <span className="text-lg font-medium">{s.title}</span>
                <span className="text-[15px] leading-[1.55] text-[#9AA8B2]">{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className={section}>
        <div className="mx-auto flex max-w-container flex-wrap items-center gap-12 lg:gap-16">
          {/* TODO: founder photo */}
          <div className="flex aspect-[4/5] w-full min-w-0 max-w-[380px] flex-[0_1_380px] items-center justify-center rounded-card-lg border border-dashed border-line-strong bg-[#E6ECEA] text-sm text-slate">[FOUNDER PHOTO]</div>
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-7 lg:basis-[520px]">
            <Eyebrow>From the founder</Eyebrow>
            <blockquote className="m-0 text-2xl font-medium leading-[1.3] tracking-[-0.02em] lg:text-[32px]">
              “Healthcare, government and data platforms need dependable systems more than most. Every project we take on, we build as if we were the ones relying on it.”
            </blockquote>
            <div className="flex flex-col gap-1">
              <span className="text-[17px] font-semibold">[Founder full name]</span>
              <span className="text-[15px] text-slate">Founder & Principal Engineer, Cipher Text Lab</span>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-line pt-7">
              <Button href="/about" variant="ghost" className="!min-h-[44px] !px-[18px] !py-3 text-[15px]">Meet the team</Button>
              <Button href="/about" variant="ghost" className="!min-h-[44px] !px-[18px] !py-3 text-[15px]">Careers</Button>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
