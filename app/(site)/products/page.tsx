import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import CTABand from '@/components/ui/CTABand'
import { ArrowRight } from '@/components/ui/Button'
import { getProducts } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ title: 'Products', description: 'In addition to client work, we build our own products to solve common problems in healthcare, media, and developer productivity.' })

export default function ProductsPage() {
  const products = getProducts()

  return (
    <>
      <section className="px-5 pb-12 pt-14 sm:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto flex max-w-container flex-wrap items-end justify-between gap-8 lg:gap-12">
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6 lg:basis-[720px]">
            <Eyebrow>Products</Eyebrow>
            <h1 className="text-h1">Products we build ourselves.</h1>
          </div>
          <p className="min-w-0 flex-1 basis-[300px] text-lg leading-relaxed text-slate">
            In addition to client work, we build our own products to solve common problems in healthcare, media, and developer productivity.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-[120px]">
        <div className="mx-auto grid max-w-container grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          {products.map((p) => {
            const status = p.status.toUpperCase()
            return (
              <Card key={p.name} className="min-h-[260px]">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-h3">{p.name}</h2>
                  <Tag variant={p.status === 'Live' ? 'live' : 'outline'}>{status}</Tag>
                </div>
                <p className="flex-grow text-base leading-relaxed text-slate">{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 self-start border-b border-ink text-base font-semibold hover:border-signal-deep hover:text-signal-deep"
                  >
                    Visit {p.name} <ArrowRight />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </Card>
            )
          })}
        </div>
      </section>

      <CTABand title="Want to build a product together?" body="We partner with organizations to build software products from concept to launch." />
    </>
  )
}
