import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjects, getProjectBySlug } from '@/lib/content'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors"
          >
            &larr; Back to Work
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {project.category}
              </span>
              <span
                className={`text-sm font-medium px-3 py-1 rounded ${
                  project.status === 'Live'
                    ? 'bg-green-50 text-green-600'
                    : project.status === 'Deployed'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-slate-50 text-slate-600'
                }`}
              >
                {project.status}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
          <span className="text-slate-400 text-lg font-medium">
            Project Image: {project.title}
          </span>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Problem */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                The Problem
              </h2>
              <p className="text-lg text-slate-900 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Our Solution
              </h2>
              <p className="text-lg text-slate-900 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Key Features
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200"
              >
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {project.link && (
        <section className="py-20 md:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              See it in action
            </h2>
            <p className="text-slate-300 mb-8">
              Visit the live project to explore the full experience.
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Visit {project.title}
              <svg
                className="w-4 h-4 ml-2"
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
          </div>
        </section>
      )}
    </>
  )
}
