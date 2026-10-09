import type { ReactNode } from 'react'

type Variant = 'solid' | 'outline' | 'live' | 'stack'

const styles: Record<Variant, string> = {
  solid: 'bg-ink text-mist uppercase',
  outline: 'border border-line-strong text-ink uppercase',
  live: 'border border-line-strong text-ink uppercase',
  stack: 'bg-[#EEF1F0] text-ink',
}

/** Mono chip. `live` adds the green status dot; `stack` is the neutral tech-stack chip. */
export default function Tag({ variant = 'solid', children, className = '' }: { variant?: Variant; children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-xs ${styles[variant]} ${className}`}>
      {variant === 'live' && <span className="h-1.5 w-1.5 rounded-full bg-signal-deep" aria-hidden="true" />}
      {children}
    </span>
  )
}
