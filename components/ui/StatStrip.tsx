export type Stat = { value: string; label: string }

/** Joined 1px-gap stat grid. Dark by default (hero proof strip). */
export default function StatStrip({ stats, surface = 'dark' }: { stats: Stat[]; surface?: 'light' | 'dark' }) {
  const dark = surface === 'dark'
  return (
    <dl
      className={`m-0 grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] ${
        dark ? 'border-line-dark bg-line-dark' : 'border-line bg-line'
      }`}
    >
      {stats.map((s) => (
        <div key={s.label} className={`flex flex-col gap-1.5 p-[18px] lg:p-7 ${dark ? 'bg-ink text-mist' : 'bg-white text-ink'}`}>
          <dt className="order-2 text-[13px] lg:text-[15px] text-muted-dark-dim">{s.label}</dt>
          <dd className="m-0 text-[28px] font-semibold tracking-heading lg:text-[40px]">{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}
