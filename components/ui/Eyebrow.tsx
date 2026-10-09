import type { ReactNode } from 'react'

/** Mono uppercase label. `dot` adds the signal square (used in the hero). */
export default function Eyebrow({ children, surface = 'light', dot = false, className = '' }: { children: ReactNode; surface?: 'light' | 'dark'; dot?: boolean; className?: string }) {
  const color = dot ? (surface === 'dark' ? 'text-muted-dark-dim' : 'text-slate') : surface === 'dark' ? 'text-signal' : 'text-signal-deep'
  return (
    <span className={`inline-flex items-center gap-2.5 font-mono text-label uppercase ${color} ${className}`}>
      {dot && <span className="h-2 w-2 rounded-sm bg-signal" aria-hidden="true" />}
      {children}
    </span>
  )
}
