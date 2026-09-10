import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { CtaBand } from '@/components/CtaBand'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { getLocationBySlug, getProjectsByLocation } from '@/lib/data'
import type { Location } from '@/data/locations'
import type { Project } from '@/data/projects'

export function LocationDetailsPage() {
  const { slug } = useParams()
  const [location, setLocation] = useState<Location | null | undefined>(undefined)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (!slug) return
    void (async () => {
      const loc = await getLocationBySlug(slug)
      setLocation(loc ?? null)
      if (loc) {
        const list = await getProjectsByLocation(loc.name)
        setProjects(list)
      }
    })()
  }, [slug])

  if (location === undefined) {
    return <div className="container-premium py-40 text-muted">Loading location…</div>
  }

  if (!location) {
    return (
      <div className="container-premium py-40 text-center">
        <h1 className="font-display text-4xl">Location not found</h1>
        <Button asChild className="mt-6">
          <Link to="/locations">All locations</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Seo
        title={location.name}
        description={location.shortDescription}
        path={`/locations/${location.slug}`}
        image={location.image}
      />
      <section className="relative min-h-[50vh] overflow-hidden bg-forest">
        <img
          src={location.image}
          alt={`${location.name} — replace with your photography`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="container-premium relative z-10 flex min-h-[50vh] flex-col justify-end pb-12 pt-28 text-stone">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-soft">{location.region}</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{location.name}</h1>
          <p className="mt-4 max-w-2xl text-mist/90">{location.shortDescription}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">About this market</h2>
            <p className="mt-4 leading-relaxed text-muted">{location.description}</p>
            <p className="mt-4 text-sm text-muted">{location.investmentNotes}</p>
          </div>
          <ul className="space-y-3">
            {location.highlights.map((h) => (
              <li key={h} className="border border-border bg-surface px-4 py-3 text-sm text-ink">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist/40 py-16">
        <div className="container-premium">
          <h2 className="font-display text-3xl text-ink">Projects in {location.name}</h2>
          {projects.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-muted">
              No sample projects tagged to this location yet. Link projects via location/city fields
              in data.
            </p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
