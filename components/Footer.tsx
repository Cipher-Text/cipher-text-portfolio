import Link from 'next/link'
import { getSiteConfig } from '@/lib/content'

export default function Footer() {
  const site = getSiteConfig()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{site.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {site.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-300">
              Get In Touch
            </h4>
            <a
              href={`mailto:${site.email}`}
              className="text-slate-400 hover:text-white transition-colors text-sm block"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-slate-500 text-sm text-center">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
