import type { ReactNode } from 'react'
import Link from 'next/link'
import Eyebrow from './Eyebrow'

export default function SectionHeader({
  eyebrow,
  title,
  link,
  surface = 'light',
}: {
  eyebrow: string
  title: ReactNode
  link?: { href: string; label: string }
  surface?: 'light' | 'dark'
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex max-w-[680px] flex-col gap-4">
        <Eyebrow surface={surface}>{eyebrow}</Eyebrow>
        <h2 className={`text-h2 ${surface === 'dark' ? 'text-mist' : 'text-ink'}`}>{title}</h2>
      </div>
      {link && (
        <Link href={link.href} className="border-b border-ink py-3 text-base font-medium text-ink hover:border-signal-deep hover:text-signal-deep">
          {link.label} →
        </Link>
      )}
    </div>
  )
}
