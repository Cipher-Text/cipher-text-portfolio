interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
      {icon && (
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </article>
  )
}
