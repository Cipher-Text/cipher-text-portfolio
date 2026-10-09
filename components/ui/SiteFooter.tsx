import Link from 'next/link'
import Logo from './Logo'

const COLUMNS = [
  { title: 'Company', links: [['About', '/about'], ['Team', '/about'], ['Careers', '/about'], ['Contact', '/contact']] },
  { title: 'What we do', links: [['Services', '/services'], ['Work', '/work'], ['Products', '/products'], ['Technology', '/technology']] },
  { title: 'Connect', links: [['LinkedIn', 'https://www.linkedin.com'], ['GitHub', 'https://github.com'], ['Email', 'mailto:hello@ciphertextlabs.com']] },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white px-5 pb-10 pt-16 text-ink sm:px-8 lg:pt-[72px]">
      <div className="mx-auto flex max-w-container flex-col gap-14">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[360px] flex-1 basis-[300px] flex-col gap-[18px]">
            <Logo size={36} />
            <p className="text-[15px] leading-relaxed text-slate">Dependable software for healthcare, government and data-driven organizations.</p>
            {/* TODO: [City, Country] · [Phone] — real contact details */}
            <span className="text-[15px] text-slate">[City, Country] · [Phone]</span>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-1">
                <span className="mb-2 font-mono text-xs uppercase text-slate">{col.title}</span>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} className="flex min-h-[44px] items-center text-[15px] hover:text-signal-deep sm:min-h-0 sm:py-1.5">
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm text-slate">
          <span>© {new Date().getFullYear()} Cipher Text Lab. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/security" className="hover:text-ink">Security</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
