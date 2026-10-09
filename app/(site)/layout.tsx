import { Geist, Geist_Mono } from 'next/font/google'
import Nav from '@/components/ui/Nav'
import SiteFooter from '@/components/ui/SiteFooter'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', weight: ['400', '500', '600', '700'] })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', weight: ['400', '500'] })

/** Redesign layout. Fonts are scoped to this subtree so legacy pages keep Inter. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geist.variable} ${geistMono.variable} min-h-screen bg-mist font-geist text-ink antialiased`}>
      <Nav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
