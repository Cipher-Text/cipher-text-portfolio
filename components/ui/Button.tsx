import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Surface = 'light' | 'dark'

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-control px-[22px] py-3.5 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2'

function styles(variant: Variant, surface: Surface) {
  if (variant === 'primary') return 'bg-signal font-semibold text-ink hover:bg-signal-deep hover:text-white'
  if (variant === 'secondary')
    return surface === 'dark'
      ? 'bg-mist font-medium text-ink hover:bg-white'
      : 'bg-ink font-medium text-mist hover:bg-graphite'
  return surface === 'dark'
    ? 'border border-[#33424D] font-medium text-mist hover:border-muted-dark-dim'
    : 'border border-line-strong font-medium text-ink hover:border-ink'
}

type Props = {
  variant?: Variant
  /** Surface the button sits on, for secondary/ghost contrast */
  surface?: Surface
  href?: string
  children: ReactNode
  className?: string
} & Omit<ComponentProps<'button'>, 'className' | 'children'>

export default function Button({ variant = 'primary', surface = 'light', href, children, className = '', ...rest }: Props) {
  const cls = `${base} ${styles(variant, surface)} ${className}`
  if (href) {
    const external = /^(https?:|mailto:)/.test(href)
    return external ? (
      <a href={href} className={cls}>{children}</a>
    ) : (
      <Link href={href} className={cls}>{children}</Link>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
