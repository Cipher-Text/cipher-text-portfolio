import type { Metadata } from 'next'
import { getProjects } from '@/lib/content'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of healthcare platforms, government systems, and data-driven applications.',
}

export default function WorkPage() {
  const projects = getProjects()

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Work
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              A selection of projects that showcase our approach to building reliable, scalable software for healthcare, governance, and data platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
