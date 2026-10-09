import Header from '@/components/Header'
import Footer from '@/components/Footer'

/** Existing pages. Remove this group once every page is migrated to (site). */
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
