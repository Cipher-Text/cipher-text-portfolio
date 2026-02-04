import type { TechItem } from '@/lib/content'

interface TechStackProps {
  items: TechItem[]
  title?: string
}

export default function TechStack({ items, title }: TechStackProps) {
  return (
    <div>
      {title && (
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <span className="text-sm font-medium text-slate-700">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
