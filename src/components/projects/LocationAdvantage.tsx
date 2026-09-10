import type { NearbyPlace } from '@/data/projects'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function LocationAdvantage({ places }: { places: NearbyPlace[] }) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Connectivity"
            title="Everything You Need, Within Reach"
            subtitle="Sample nearby landmarks with placeholder distances — replace with accurate travel times."
          />
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place, i) => (
            <Reveal key={`${place.name}-${i}`} delay={i * 0.04} className="bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{place.category}</p>
              <p className="mt-2 font-display text-2xl text-ink">{place.name}</p>
              <p className="mt-1 text-sage">{place.distance}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
