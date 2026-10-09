type Variant = 'on-light' | 'on-dark'

const BLOCKS: [number, number][] = [
  [8, 8], [15, 8], [22, 8],
  [8, 15], /* center */
  [8, 22], [15, 22], [22, 22],
]

export function LogoMark({ size = 36, variant = 'on-light', className }: { size?: number; variant?: Variant; className?: string }) {
  const bg = variant === 'on-light' ? '#0B1015' : '#F5F7F6'
  const fg = variant === 'on-light' ? '#F5F7F6' : '#0B1015'
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true" className={className}>
      <rect width="36" height="36" rx="8" fill={bg} />
      {BLOCKS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" rx="1.2" fill={fg} />
      ))}
      <rect x="15" y="15" width="6" height="6" rx="1.2" fill="#19B48A" />
    </svg>
  )
}

/** Mark + wordmark. `variant` is the surface it sits on. */
export default function Logo({ variant = 'on-light', size = 36, className = '' }: { variant?: Variant; size?: number; className?: string }) {
  const dark = variant === 'on-dark'
  return (
    <span className={`inline-flex items-center gap-3 ${dark ? 'text-mist' : 'text-ink'} ${className}`}>
      {/* On a dark surface the mark inverts (light tile) to match Brand "primary on dark" */}
      <LogoMark size={size} variant={variant} />
      <span className="font-geist font-semibold tracking-[-0.02em]" style={{ fontSize: size * 0.53 }}>
        ciphertext
        <span className={`font-mono font-normal ${dark ? 'text-muted-dark-dim' : 'text-slate'}`}>/lab</span>
      </span>
    </span>
  )
}
