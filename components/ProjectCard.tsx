import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/content'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-video bg-slate-100 relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/55 via-primary-900/15 to-transparent" />
          <div className="absolute left-4 bottom-4">
            <span className="text-xs font-medium text-white/90 bg-black/20 backdrop-blur px-2.5 py-1 rounded">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${
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

          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1 mt-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-slate-400 px-2 py-1">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
