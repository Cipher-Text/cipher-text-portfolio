import Link from 'next/link'
import type { ReactNode } from 'react'

/** Hairline card. Renders a link when `href` is given. */
export default function Card({
  children,
  href,
  surface = 'light',
  className = '',
}: {
  children: ReactNode
  href?: string
  surface?: 'light' | 'dark'
  className?: string
}) {
  const cls = `flex flex-col gap-5 rounded-card border p-8 ${
    surface === 'dark' ? 'border-line-dark bg-graphite text-mist' : 'border-line bg-white text-ink'
  } ${href ? 'transition-colors hover:border-ink' : ''} ${className}`
  return href ? (
    <Link href={href} className={cls}>{children}</Link>
  ) : (
    <div className={cls}>{children}</div>
  )
}
