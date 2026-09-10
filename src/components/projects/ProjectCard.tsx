import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group overflow-hidden border border-border/80 bg-surface transition duration-300 hover:-translate-y-1 hover:border-sage/40',
        className,
      )}
    >
      <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <img
            src={project.heroImage}
            alt={`${project.name} — replace with your project photography`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <Badge variant="secondary">{project.type}</Badge>
            <Badge variant="accent">{project.status}</Badge>
          </div>
        </div>
      </Link>

      <div className="space-y-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl text-ink">
              <Link to={`/projects/${project.slug}`} className="hover:text-forest-light">
                {project.name}
              </Link>
            </h3>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {project.location}, {project.state}
            </p>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>

        <dl className="grid grid-cols-2 gap-3 border-t border-border pt-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">From</dt>
            <dd className="font-medium text-ink">{project.priceFrom}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Plot sizes</dt>
            <dd className="font-medium text-ink">{project.plotSizes}</dd>
          </div>
        </dl>

        <Button asChild variant="outline" className="w-full">
          <Link to={`/projects/${project.slug}`}>
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  )
}
