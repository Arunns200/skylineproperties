import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { aboutContent } from '@/data/about'
import { siteConfig } from '@/config/site'

export function MissionVisionPage() {
  return (
    <>
      <Seo
        title="Mission & Vision"
        description="Mission and vision of Skyline Properties — DTCP plot developments."
        path="/mission-vision"
      />
      <section className="bg-forest pb-14 pt-28 text-stone">
        <div className="container-premium max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-soft">About us</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">Mission & Vision</h1>
          <p className="mt-4 text-mist/85">{aboutContent.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <article className="border border-border bg-surface p-8">
            <h2 className="font-display text-3xl text-ink">Mission</h2>
            <p className="mt-4 leading-relaxed text-muted">{aboutContent.mission}</p>
          </article>
          <article className="border border-border bg-mist/50 p-8">
            <h2 className="font-display text-3xl text-ink">Vision</h2>
            <p className="mt-4 leading-relaxed text-muted">{aboutContent.vision}</p>
          </article>
        </div>

        <div className="container-premium mt-12 max-w-3xl">
          <h2 className="font-display text-2xl text-ink">What we stand for</h2>
          <ul className="mt-6 space-y-3">
            {aboutContent.trustPoints.map((point) => (
              <li key={point} className="border-l-2 border-accent pl-4 text-sm text-ink">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{aboutContent.commitment}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <Link to="/">Enquire / WhatsApp</Link>
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
