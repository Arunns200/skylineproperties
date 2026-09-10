import type { StatItem } from '@/data/stats'
import { Reveal } from '@/components/Reveal'

export function Stats({ items }: { items: StatItem[] }) {
  return (
    <section id="stats" className="border-b border-border bg-surface py-14 md:py-16">
      <div className="container-premium grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {items.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.06}>
            <div className="text-center md:text-left">
              <p className="font-display text-4xl text-forest md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
              <p className="mt-1 text-xs text-muted">{stat.hint}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
