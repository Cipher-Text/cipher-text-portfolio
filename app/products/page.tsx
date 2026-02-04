import type { Metadata } from 'next'
import Link from 'next/link'
import { getProducts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Our products: healthcare platforms, content management systems, and developer tools.',
}

export default function ProductsPage() {
  const products = getProducts()

  const statusColors: Record<string, string> = {
    Live: 'bg-green-50 text-green-600',
    Beta: 'bg-amber-50 text-amber-600',
    Development: 'bg-blue-50 text-blue-600',
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Products
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              In addition to client work, we build our own products to solve common problems in healthcare, media, and developer productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">
                    {product.name}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {product.name}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        statusColors[product.status] || 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                    >
                      Visit Product
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm">Coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to build a product together?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We partner with organizations to build software products from concept to launch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
