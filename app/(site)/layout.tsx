import Nav from '@/components/ui/Nav'
import SiteFooter from '@/components/ui/SiteFooter'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  )
}
