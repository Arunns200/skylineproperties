import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/SectionHeading'
import { whyInvestCards } from '@/data/about'

export function WhyInvestPage() {
  return (
    <>
      <Seo
        title="Why Invest"
        description="Educational overview of location strategy, documentation, and site-visit-led buying."
        path="/why-invest"
      />
      <section className="bg-forest pb-16 pt-28 text-stone">
        <div className="container-premium max-w-3xl">
          <SectionHeading
            light
            eyebrow="Guidance"
            title="Why consider our developments"
            subtitle="Sample educational content — not financial advice. Replace with your verified market thesis."
          />
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-premium grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyInvestCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.04}>
              <article className="h-full border border-border bg-surface p-6 transition hover:border-sage/40">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  0{i + 1}
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        title="Walk the land before you decide."
        subtitle="A guided site visit is the clearest way to understand layout, approach, and feel."
      />
    </>
  )
}
