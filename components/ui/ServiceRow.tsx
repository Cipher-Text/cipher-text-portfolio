import Link from 'next/link'
import { ArrowRight } from './Button'

/** Mobile-style list row: number + title + arrow, hairline separated. */
export default function ServiceRow({ href, index, title }: { href: string; index: string; title: string }) {
  return (
    <Link href={href} className="flex min-h-[44px] items-center justify-between gap-3 border-b border-line py-5 hover:text-signal-deep">
      <span className="flex flex-col gap-1">
        <span className="font-mono text-xs text-slate">{index}</span>
        <span className="text-lg font-semibold">{title}</span>
      </span>
      <ArrowRight />
    </Link>
  )
}
