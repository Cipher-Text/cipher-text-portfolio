import Link from 'next/link'
import type { ReactNode } from 'react'
import Tag from './Tag'

/** Secondary case-study card: preview slot on top, meta + title + blurb below. */
export default function CaseStudyCard({
  href,
  meta,
  title,
  summary,
  preview,
}: {
  href: string
  meta: string
  title: string
  summary: string
  preview?: ReactNode
}) {
  return (
    <Link href={href} className="group flex flex-col overflow-hidden rounded-card-lg border border-line bg-white transition-colors hover:border-ink">
      <div className="flex h-60 items-end bg-[#E6ECEA] px-8 pt-8">
        {preview ?? (
          <div className="h-full w-full rounded-t-[10px] border border-b-0 border-line bg-white" aria-hidden="true" />
        )}
      </div>
      <div className="flex flex-col gap-3 p-8">
        <Tag variant="stack" className="self-start bg-transparent p-0 text-slate">{meta}</Tag>
        <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="text-base leading-relaxed text-slate">{summary}</p>
      </div>
    </Link>
  )
}
