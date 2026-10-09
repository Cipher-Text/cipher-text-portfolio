export type Step = { label: string; title: string; body: string }

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] border-t-2 border-ink p-0">
      {steps.map((s, i) => (
        <li key={s.label} className="flex flex-col gap-3.5 pr-7 pt-7">
          <span className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, '0')} — {s.label}</span>
          <h3 className="text-h3">{s.title}</h3>
          <p className="text-base leading-relaxed text-slate">{s.body}</p>
        </li>
      ))}
    </ol>
  )
}
