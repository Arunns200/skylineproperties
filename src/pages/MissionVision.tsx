import { Link } from 'react-router-dom'
import { PageBanner } from '@/components/PageBanner'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { aboutContent } from '@/data/about'
import { siteConfig } from '@/config/site'

export function MissionVisionPage() {
  return (
    <>
      <Seo
        title="Mission & Vision"
        description={`Mission and vision of ${siteConfig.name} — DTCP plot developments.`}
        path="/mission-vision"
      />
      <PageBanner eyebrow="About us" title="Mission & Vision" subtitle={aboutContent.heroSubtitle} />

      <section className="py-16 md:py-20">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <article className="border border-border bg-surface p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-lime">Mission</p>
            <h2 className="mt-3 font-display text-3xl text-ink">Mission</h2>
            <p className="mt-4 leading-relaxed text-muted">{aboutContent.mission}</p>
          </article>
          <article className="border border-border bg-navy p-8 text-stone">
            <p className="text-xs uppercase tracking-[0.18em] text-lime">Vision</p>
            <h2 className="mt-3 font-display text-3xl">Vision</h2>
            <p className="mt-4 leading-relaxed text-mist/85">{aboutContent.vision}</p>
          </article>
        </div>

        <div className="container-premium mt-12 max-w-3xl">
          <h2 className="font-display text-2xl text-ink">What we stand for</h2>
          <ul className="mt-6 space-y-3">
            {aboutContent.trustPoints.map((point) => (
              <li key={point} className="border-l-2 border-lime pl-4 text-sm text-ink">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{aboutContent.commitment}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <Link to="/">{siteConfig.cta.bookVisit}</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={siteConfig.phoneHref}>Call {siteConfig.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
