export type FAQItem = { q: string; a: string }

/** Native details/summary: keyboard + screen-reader accessible, no JS. */
export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="border-t border-line-strong">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line">
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="font-mono text-xl text-slate transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-[720px] pb-6 text-base leading-relaxed text-slate">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
