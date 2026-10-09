'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Button from './Button'

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/technology', label: 'Approach' },
  { href: '/about', label: 'Company' },
]

/** Routes whose first section is dark, so the Nav sits flush on it. */
const DARK_ROUTES = (path: string) => path === '/' || path.startsWith('/services/')

export default function Nav({ variant = 'auto' }: { variant?: 'dark' | 'light' | 'auto' }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const dark = variant === 'auto' ? DARK_ROUTES(pathname) : variant === 'dark'
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkCls = dark ? 'text-[#C9D3D9] hover:text-white' : 'text-slate hover:text-ink'

  return (
    <header className={dark ? 'border-b border-line-dark bg-ink' : 'border-b border-line bg-white'}>
      <nav aria-label="Primary" className="mx-auto flex max-w-container items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:py-[18px]">
        <Link href="/" aria-label="Cipher Text Lab home" className="rounded-control">
          <Logo variant={dark ? 'on-dark' : 'on-light'} size={36} />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined} className={`flex min-h-[44px] items-center px-3.5 text-[15px] ${linkCls} ${isActive(l.href) ? 'font-semibold' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant={dark ? 'primary' : 'secondary'} className="ml-3 !px-5 !py-3 text-[15px]">Start a project</Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className={`flex h-11 w-11 items-center justify-center rounded-control border md:hidden ${
            dark ? 'border-[#33424D] text-mist' : 'border-line-strong text-ink'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className={`border-t px-5 pb-6 pt-2 md:hidden ${dark ? 'border-line-dark' : 'border-line'}`}>
          <ul className="m-0 flex list-none flex-col p-0">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[48px] items-center border-b text-lg ${dark ? 'border-line-dark text-mist' : 'border-line text-ink'}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-5 w-full">Start a project</Button>
        </div>
      )}
    </header>
  )
}
