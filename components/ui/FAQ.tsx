export type FAQItem = { q: string; a: string }

/** Native details/summary: keyboard + screen-reader accessible, no JS. */
export default function FAQ({ items, openFirst = false }: { items: FAQItem[]; openFirst?: boolean }) {
  return (
    <div className="border-t border-line-strong">
      {items.map((item, i) => (
        <details key={item.q} open={openFirst && i === 0} className="group border-b border-line">
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold sm:text-xl marker:hidden [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="font-mono text-xl text-signal-deep group-open:hidden">+</span>
            <span aria-hidden="true" className="hidden font-mono text-xl text-signal-deep group-open:inline">−</span>
          </summary>
          <p className="max-w-[720px] pb-6 text-base leading-relaxed text-slate">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
