import { Link } from 'react-router-dom'
import type { Location } from '@/data/locations'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'

type Props = {
  locations: Location[]
  projectCounts: Record<string, number>
}

export function HomeLocations({ locations, projectCounts }: Props) {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Markets"
            title="Locations with room to grow"
            subtitle="Sample corridors across Tamil Nadu and Pondicherry — replace with your coverage map."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.slice(0, 6).map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.05}>
              <Link
                to={`/locations/${loc.slug}`}
                className="group relative block aspect-[5/4] overflow-hidden"
              >
                <img
                  src={loc.image}
                  alt={`${loc.name} — replace with your location photography`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-stone">
                  <h3 className="font-display text-2xl">{loc.name}</h3>
                  <p className="mt-1 text-sm text-mist/80">
                    {projectCounts[loc.name] ?? 0} sample project
                    {(projectCounts[loc.name] ?? 0) === 1 ? '' : 's'}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/locations">Explore all locations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
