import {
  Droplets,
  Fence,
  Lamp,
  Leaf,
  Shield,
  Sparkles,
  Trees,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  gated: Fence,
  road: Waves,
  light: Lamp,
  security: Shield,
  water: Droplets,
  park: Trees,
  drain: Leaf,
  power: Zap,
  default: Sparkles,
}

function pickIcon(label: string): LucideIcon {
  const l = label.toLowerCase()
  if (l.includes('gat') || l.includes('secur')) return iconMap.security
  if (l.includes('road') || l.includes('blacktop')) return iconMap.road
  if (l.includes('light')) return iconMap.light
  if (l.includes('water')) return iconMap.water
  if (l.includes('park') || l.includes('trail') || l.includes('landscap')) return iconMap.park
  if (l.includes('drain') || l.includes('rain')) return iconMap.drain
  if (l.includes('eb') || l.includes('power') || l.includes('solar') || l.includes('ev'))
    return iconMap.power
  if (l.includes('club') || l.includes('amen')) return iconMap.default
  return iconMap.default
}

export function ProjectHighlights({
  highlights,
  amenities,
}: {
  highlights: string[]
  amenities: string[]
}) {
  const items = [...highlights, ...amenities].slice(0, 9)

  return (
    <section className="bg-mist/40 py-20 md:py-24">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Highlights"
            title="Thoughtfully planned features"
            subtitle="Sample amenities and highlights — replace with verified project features."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = pickIcon(item)
            return (
              <Reveal key={item} delay={i * 0.04}>
                <div className="flex gap-4 border border-border/70 bg-surface p-5 transition hover:border-sage/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-mist text-forest">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="pt-2 text-sm font-medium leading-snug text-ink">{item}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
