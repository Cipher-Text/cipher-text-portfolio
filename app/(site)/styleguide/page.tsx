import type { Metadata } from 'next'
import Logo, { LogoMark } from '@/components/ui/Logo'
import Button, { ArrowRight } from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Eyebrow from '@/components/ui/Eyebrow'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import StatStrip from '@/components/ui/StatStrip'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import ServiceRow from '@/components/ui/ServiceRow'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQ from '@/components/ui/FAQ'
import CTABand from '@/components/ui/CTABand'
import Nav from '@/components/ui/Nav'

export const metadata: Metadata = { title: 'Styleguide', robots: { index: false, follow: false } }

const COLORS = [
  ['ink', '#0B1015', 'bg-ink'],
  ['graphite', '#121A21', 'bg-graphite'],
  ['line-dark', '#1E2A33', 'bg-line-dark'],
  ['signal', '#19B48A', 'bg-signal'],
  ['signal-deep', '#0D7E5F', 'bg-signal-deep'],
  ['slate', '#4B5A63', 'bg-slate'],
  ['muted-dark', '#B4C1C9', 'bg-muted-dark'],
  ['muted-dark-dim', '#8FA0AB', 'bg-muted-dark-dim'],
  ['mist', '#F5F7F6', 'bg-mist border border-line'],
  ['line', '#DDE3E1', 'bg-line'],
  ['line-strong', '#C3CCCA', 'bg-line-strong'],
]

function Block({ id, title, children, dark = false }: { id: string; title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`px-5 py-14 sm:px-8 ${dark ? 'bg-ink text-mist' : ''}`}>
      <div className="mx-auto flex max-w-container flex-col gap-8">
        <h2 className={`border-b pb-3 font-mono text-label uppercase ${dark ? 'border-line-dark text-muted-dark-dim' : 'border-line text-slate'}`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function Styleguide() {
  return (
    <>
      <Block id="intro" title="Cipher Text Lab · Styleguide · Phase 1">
        <h1 className="text-h1">Design system</h1>
        <p className="max-w-[560px] text-lg text-slate">Tokens and shared components. Not indexed. Header above is the dark Nav; the light variant is shown below.</p>
      </Block>

      <Block id="color" title="Color">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {COLORS.map(([name, hex, cls]) => (
            <div key={name} className="flex flex-col gap-2">
              <div className={`h-24 rounded-xl ${cls}`} />
              <span className="text-[15px] font-semibold">{name}</span>
              <span className="font-mono text-[13px] text-slate">{hex}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block id="type" title="Typography">
        <div className="flex flex-col gap-6">
          <p className="text-h1">H1 — Software for systems that can’t afford to fail.</p>
          <p className="text-h2">H2 — One team from first sketch to production.</p>
          <p className="text-h3">H3 — Understand the problem</p>
          <p className="text-lg">Body 18 — Geist 400. We design, build and operate dependable platforms.</p>
          <p className="text-base">Body 16 — Geist 400. Secondary copy sits in slate on light surfaces.</p>
          <p className="font-mono text-label uppercase text-signal-deep">Label 13 — Geist Mono, uppercase, 0.08em</p>
          <p className="font-mono text-sm text-slate">Next.js · Spring Boot · PostgreSQL</p>
        </div>
      </Block>

      <Block id="logo" title="Logo">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex h-56 items-center justify-center rounded-card-lg border border-line bg-white"><Logo variant="on-light" size={48} /></div>
          <div className="flex h-56 items-center justify-center rounded-card-lg bg-ink"><Logo variant="on-dark" size={48} /></div>
          <div className="flex h-56 items-end justify-center gap-7 rounded-card-lg bg-signal pb-16"><LogoMark size={96} /><LogoMark size={48} /><LogoMark size={24} /></div>
        </div>
      </Block>

      <Block id="buttons" title="Button · Tag · Eyebrow">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary action <ArrowRight /></Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" href="/contact">As link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="solid">Healthcare</Tag>
          <Tag variant="outline">Outline</Tag>
          <Tag variant="live">Live</Tag>
          <Tag variant="stack">Next.js</Tag>
          <Tag variant="stack">Spring Boot</Tag>
        </div>
        <div className="flex flex-col gap-3">
          <Eyebrow>What we do</Eyebrow>
          <Eyebrow dot>Software engineering studio</Eyebrow>
        </div>
      </Block>

      <Block id="buttons-dark" title="On dark" dark>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Book a discovery call <ArrowRight /></Button>
          <Button variant="secondary" surface="dark">Secondary</Button>
          <Button variant="ghost" surface="dark">See our work</Button>
        </div>
        <Eyebrow surface="dark">Engineering standards</Eyebrow>
        <StatStrip
          stats={[
            { value: '5+ yrs', label: 'Building production software since 2020' },
            { value: '20+', label: 'Systems shipped and in use' },
            { value: '99.9%', label: 'Uptime target on managed platforms' },
            { value: '4', label: 'Sectors: health, public, media, education' },
          ]}
        />
      </Block>

      <Block id="headers" title="SectionHeader · Card · ServiceRow">
        <SectionHeader eyebrow="What we do" title="One team from first sketch to production — and after." link={{ href: '/services', label: 'All services' }} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card href="/services">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-ink text-mist"><ArrowRight /></span>
              <span className="font-mono text-[13px] text-slate">01</span>
            </div>
            <h3 className="text-h3">Healthcare systems</h3>
            <p className="flex-grow text-base leading-relaxed text-slate">HIPAA-ready architecture: encryption, access control and audit trails by default.</p>
            <span className="font-mono text-xs text-slate">Next.js · Spring Boot · PostgreSQL</span>
          </Card>
          <Card surface="dark">
            <span className="font-mono text-[13px] text-signal">[ Auditable ]</span>
            <h3 className="text-h3">Immutable audit logs</h3>
            <p className="text-[15px] text-muted-dark-dim">Who saw what, and when.</p>
          </Card>
        </div>
        <div className="max-w-md border-t border-line-strong">
          <ServiceRow href="/services" index="01" title="Healthcare systems" />
          <ServiceRow href="/services" index="02" title="Government & public platforms" />
        </div>
      </Block>

      <Block id="cards" title="CaseStudyCard">
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudyCard href="/work/news-platform" meta="MEDIA CMS · LIVE" title="News & Content Platform" summary="A newsroom CMS that takes stories from draft to publish. [Add outcome.]" />
          <CaseStudyCard href="/work/alumni-portal" meta="EDUCATION · LIVE" title="Alumni Management System" summary="Alumni engagement, events and giving. [Add outcome.]" />
        </div>
      </Block>

      <Block id="process" title="ProcessSteps">
        <ProcessSteps
          steps={[
            { label: 'Discover', title: 'Understand the problem', body: 'Workshops, compliance requirements mapped up front, a written scope.' },
            { label: 'Architect', title: 'Design the system', body: 'Clickable prototypes plus an architecture document.' },
            { label: 'Build', title: 'Ship in increments', body: 'Two-week sprints with working demos and code review.' },
            { label: 'Operate', title: 'Run it with you', body: 'Monitoring, backups and support — or a clean handover.' },
          ]}
        />
      </Block>

      <Block id="faq" title="FAQ">
        <div className="max-w-[800px]">
          <FAQ
            items={[
              { q: 'Do you sign a BAA?', a: '[Answer — confirm with the team before publishing.]' },
              { q: 'Who owns the code?', a: '[Answer — confirm with the team before publishing.]' },
            ]}
          />
        </div>
      </Block>

      <Block id="nav" title="Nav (light variant)">
        <div className="overflow-hidden rounded-card border border-line">
          <Nav variant="light" />
        </div>
      </Block>

      <div className="pt-14">
        <CTABand />
      </div>
    </>
  )
}
