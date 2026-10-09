import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { getSiteConfig } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', weight: ['400', '500', '600', '700'] })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', weight: ['400', '500'] })

const site = getSiteConfig()

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  alternates: { canonical: './' },
  openGraph: {
    title: site.name,
    description: site.tagline,
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.tagline, images: ['/opengraph-image'] },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MFHGB8RCNL" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MFHGB8RCNL');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-mist font-geist text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-signal focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
