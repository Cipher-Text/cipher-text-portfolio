import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import ContactFormPanel from '@/components/ui/ContactFormPanel'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us what you’re building. An engineer will reply within one business day.',
}

const STEPS = [
  { title: 'We read and reply', body: 'Within one business day, with questions or a time to talk.' },
  { title: '30-minute discovery call', body: 'Goals, constraints, compliance needs. NDA first if you prefer.' },
  { title: 'Written proposal', body: 'Scope, team, timeline and price — usually within a week.' },
]

const EMAIL = 'hello@ciphertextlabs.com'

export default function ContactPage() {
  return (
    <section className="px-5 pb-16 pt-12 sm:px-8 lg:pb-[120px] lg:pt-20">
      <div className="mx-auto flex max-w-container flex-wrap items-start gap-12 lg:gap-16">
        <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.04] tracking-display">Tell us what you’re building.</h1>
            <p className="text-lg leading-relaxed text-slate">An engineer — not a sales team — will reply within one business day.</p>
          </div>

          <ol className="m-0 flex list-none flex-col border-t border-line-strong p-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5 border-b border-line py-[22px]">
                <span className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[17px] font-semibold">{s.title}</span>
                  <span className="text-[15px] leading-normal text-slate">{s.body}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-3.5">
            <a href={`mailto:${EMAIL}`} className="flex min-h-[44px] items-center self-start font-mono text-[17px] hover:text-signal-deep">{EMAIL}</a>
            {/* TODO: real phone and location */}
            <span className="text-[15px] text-slate">[Phone] · [City, Country]</span>
            {/* TODO: point at a booking link (Cal.com etc.) when one exists */}
            <a
              href={`mailto:${EMAIL}?subject=Discovery%20call`}
              className="inline-flex min-h-[44px] items-center self-start rounded-control border border-ink px-5 py-3.5 text-[15px] font-semibold hover:bg-ink hover:text-mist"
            >
              Or book a call directly →
            </a>
          </div>
        </div>

        <div className="min-w-0 flex-1 basis-[320px] rounded-[20px] border border-line bg-white p-6 sm:p-8 lg:basis-[560px] lg:p-11">
          <ContactFormPanel />
        </div>
      </div>
    </section>
  )
}
