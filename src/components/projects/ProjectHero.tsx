import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-navy">
      <img
        src={project.heroImage}
        alt={`${project.name} hero — replace with your photography`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/30" />
      <div className="container-premium relative z-10 flex min-h-[70vh] flex-col justify-end pb-14 pt-28">
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent">{project.status}</Badge>
          <Badge variant="secondary">{project.type}</Badge>
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-stone md:text-6xl">
          {project.name.replace('Sample Project — ', '')}
        </h1>
        <p className="mt-3 inline-flex items-center gap-2 text-mist/90">
          <MapPin className="h-4 w-4" />
          {project.location}, {project.state}
        </p>
        <p className="mt-2 text-lg text-lime">Starting from {project.priceFrom}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="accent">
            <Link to="/">{siteConfig.cta.bookVisit}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-stone/35 text-stone hover:bg-white/10"
          >
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              {siteConfig.cta.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
