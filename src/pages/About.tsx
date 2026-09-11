import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/SectionHeading'
import { aboutContent } from '@/data/about'
import { stats } from '@/data/stats'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description={aboutContent.heroSubtitle}
        path="/about"
      />
      <section className="bg-navy pb-16 pt-28 text-stone">
        <div className="container-premium max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-lime">{aboutContent.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">{aboutContent.heroTitle}</h1>
          <p className="mt-5 text-lg text-mist/85">{aboutContent.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl text-ink">{aboutContent.storyTitle}</h2>
            {aboutContent.story.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2">
            <div className="bg-mist/60 p-6">
              <h3 className="font-display text-2xl text-ink">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{aboutContent.vision}</p>
            </div>
            <div className="bg-navy p-6 text-stone">
              <h3 className="font-display text-2xl">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist/85">{aboutContent.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-premium">
          <SectionHeading title="Why customers trust us" subtitle="Placeholder commitments — replace with your verified process." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {aboutContent.trustPoints.map((point) => (
              <div key={point} className="border-l-2 border-accent pl-4 py-2 text-ink">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border py-14">
        <div className="container-premium grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.id}>
              <p className="font-display text-4xl text-navy">{s.value}</p>
              <p className="mt-1 text-sm text-ink">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <SectionHeading title="Milestones" subtitle="Sample timeline — do not invent awards or history." />
          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {aboutContent.milestones.map((m) => (
              <li key={m.title + m.year}>
                <p className="text-xs uppercase tracking-[0.16em] text-lime">{m.year}</p>
                <h3 className="mt-1 font-display text-2xl text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted">{m.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist/40 py-20">
        <div className="container-premium">
          <SectionHeading title="Leadership" subtitle="Placeholder profiles — replace with real people and bios." />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {aboutContent.leadership.map((person) => (
              <article key={person.name + person.role} className="flex gap-5 bg-surface p-5">
                <img
                  src={person.image}
                  alt=""
                  className="h-28 w-28 object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-2xl text-ink">{person.name}</h3>
                  <p className="text-sm text-lime">{person.role}</p>
                  <p className="mt-2 text-sm text-muted">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-muted">{aboutContent.commitment}</p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
