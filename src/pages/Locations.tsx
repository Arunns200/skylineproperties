import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { getLocations, getProjects } from '@/lib/data'
import type { Location } from '@/data/locations'

export function LocationsPage() {
  const [items, setItems] = useState<Location[]>([])
  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    void (async () => {
      const [locs, projects] = await Promise.all([getLocations(), getProjects()])
      setItems(locs)
      const map: Record<string, number> = {}
      for (const p of projects) {
        map[p.location] = (map[p.location] ?? 0) + 1
      }
      setCounts(map)
    })()
  }, [])

  return (
    <>
      <Seo
        title="Locations"
        description="Explore sample markets across Chennai, Pondicherry, Chengalpattu and more."
        path="/locations"
      />
      <section className="bg-navy pb-16 pt-28 text-stone">
        <div className="container-premium">
          <SectionHeading
            light
            eyebrow="Markets"
            title="Locations"
            subtitle="Sample discovery map of corridors we highlight in this demo. Replace imagery and notes with yours."
          />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-premium grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.04}>
              <article className="group overflow-hidden border border-border bg-surface">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`${loc.name} — replace with your photography`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{loc.region}</p>
                  <h2 className="mt-1 font-display text-2xl text-ink">{loc.name}</h2>
                  <p className="mt-2 text-sm text-muted">
                    {counts[loc.name] ?? 0} sample project{(counts[loc.name] ?? 0) === 1 ? '' : 's'}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-muted">{loc.shortDescription}</p>
                  <Button asChild variant="outline" className="mt-5">
                    <Link to={`/locations/${loc.slug}`}>Explore</Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
