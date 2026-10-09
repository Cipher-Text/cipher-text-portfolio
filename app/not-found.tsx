import type { Metadata } from 'next'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } }

/** The cipher block with its right-middle block knocked loose. */
function BrokenBlock() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className="h-40 w-40 shrink-0 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
      {[[8, 8], [15, 8], [8, 15], [8, 22], [15, 22], [22, 22]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" rx="1" fill="#26343E" />
      ))}
      <rect x="22.6" y="6.4" width="6" height="6" rx="1" fill="none" stroke="#33424D" strokeWidth="0.4" strokeDasharray="1 0.8" transform="rotate(14 25.6 9.4)" />
      <rect x="15" y="15" width="6" height="6" rx="1" fill="#19B48A" />
    </svg>
  )
}

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-ink px-5 py-7 text-mist sm:px-10 lg:px-[100px]">
      <Link href="/" aria-label="Cipher Text Lab home" className="self-start rounded-control py-1.5">
        <Logo variant="on-dark" size={36} />
      </Link>
      <div className="flex flex-1 flex-wrap items-center gap-10 py-12 lg:gap-24">
        <BrokenBlock />
        <div className="flex min-w-0 max-w-[640px] flex-1 basis-[300px] flex-col gap-6">
          <span className="font-mono text-[15px] uppercase text-signal">Error 404 · Block not found</span>
          <h1 className="text-h1">This page didn’t decrypt.</h1>
          <p className="text-[17px] leading-relaxed text-muted-dark lg:text-[19px]">
            The link may be old or mistyped. Our systems are fine — this page just doesn’t exist.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/">Back to home</Button>
            <Button href="/work" variant="ghost" surface="dark">View our work</Button>
            <Button href="/contact" variant="ghost" surface="dark">Contact us</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
