import Button from './Button'

export default function CTABand({
  title = 'Have a system that needs to work?',
  body = 'Tell us what you’re building. You’ll hear back from an engineer — not a sales team — within one business day.',
  primary = { href: '/contact', label: 'Book a 30-minute call' },
  email = 'hello@ciphertextlabs.com',
}: {
  title?: string
  body?: string
  primary?: { href: string; label: string }
  email?: string
}) {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:pb-[120px]">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-12 rounded-band bg-ink px-6 py-12 text-mist sm:px-10 lg:px-16 lg:py-[72px]">
        <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-[18px] lg:basis-[520px]">
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-display">{title}</h2>
          <p className="text-lg leading-relaxed text-muted-dark">{body}</p>
        </div>
        <div className="flex min-w-0 flex-1 basis-[280px] flex-col gap-3 lg:max-w-[360px]">
          <Button href={primary.href} className="py-[18px] text-[17px]">{primary.label}</Button>
          <Button href={`mailto:${email}`} variant="ghost" surface="dark" className="py-[18px] font-mono text-[17px]">{email}</Button>
        </div>
      </div>
    </section>
  )
}
