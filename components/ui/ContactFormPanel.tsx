'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'

// Existing form service endpoint (same one the legacy form used).
// Spam: Formspree honeypot (`_gotcha`) + its server-side rate limiting.
const ENDPOINT = 'https://formspree.io/f/xlgwrrkr'

const SECTORS = ['Healthcare', 'Government', 'Media', 'Education', 'Other']
const BUDGETS = ['Not sure yet', 'Under $10k', '$10k–$25k', '$25k–$50k', '$50k+']
const TIMELINES = ['Flexible', 'Within 1 month', '1–3 months', '3+ months']

const input =
  'w-full rounded-control border border-line-strong bg-white px-4 py-3.5 font-geist text-base text-ink placeholder:text-slate/70 focus-visible:border-ink'
const label = 'text-sm font-medium'

export default function ContactFormPanel() {
  const [sector, setSector] = useState('Healthcare')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, sector, nda: data.nda ? 'yes' : 'no' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setSector('Healthcare')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-start justify-center gap-5 py-10 lg:min-h-[520px]">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-signal text-ink" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 20 20" fill="none"><path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-heading">Message received.</h2>
        <p className="max-w-[440px] text-lg leading-relaxed text-slate">Thanks — an engineer will reply within one business day.</p>
        <button type="button" onClick={() => setStatus('idle')} className="min-h-[44px] rounded-control border border-line-strong px-[18px] py-3 text-[15px] font-medium hover:border-ink">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {/* Honeypot: hidden from people and assistive tech; bots fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Leave this field empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-name" className={label}>Full name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" required className={input} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-email" className={label}>Work email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" required placeholder="you@organization.org" className={input} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-org" className={label}>Organization</label>
        <input id="c-org" name="organization" type="text" autoComplete="organization" className={input} />
      </div>

      <fieldset className="m-0 flex min-w-0 flex-col gap-2.5 border-0 p-0">
        <legend className={`${label} mb-2.5 p-0`}>Sector</legend>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => {
            const on = s === sector
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => setSector(s)}
                className={`min-h-[44px] rounded-control border px-4 py-[11px] text-[15px] transition-colors ${
                  on ? 'border-ink bg-ink text-mist' : 'border-line-strong bg-white text-ink hover:border-ink'
                }`}
              >
                {s}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-budget" className={label}>Budget range</label>
          <select id="c-budget" name="budget" className={input} defaultValue={BUDGETS[0]}>
            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-time" className={label}>Timeline</label>
          <select id="c-time" name="timeline" className={input} defaultValue={TIMELINES[0]}>
            {TIMELINES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-msg" className={label}>What are you building?</label>
        <textarea
          id="c-msg"
          name="message"
          rows={5}
          required
          placeholder="A few sentences on the problem, users and any compliance needs."
          className={`${input} resize-y leading-normal`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input id="c-nda" name="nda" type="checkbox" className="mt-0.5 h-5 w-5 accent-signal-deep" />
        <label htmlFor="c-nda" className="text-[15px] leading-normal text-slate">I’d like to sign an NDA before sharing details.</label>
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-control border border-red-300 bg-red-50 px-4 py-3 text-[15px] text-red-800">
          Something went wrong sending your message. Please try again, or email hello@ciphertextlabs.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="min-h-[44px] rounded-[10px] bg-signal px-6 py-[18px] text-[17px] font-semibold text-ink transition-colors hover:bg-signal-deep hover:text-white disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
      {/* TODO: link to the real privacy policy once /privacy exists */}
      <span className="text-[13px] text-slate">We only use your details to reply. See our <Link href="/privacy" className="underline">privacy policy</Link>.</span>
    </form>
  )
}
