import { motion } from 'framer-motion'
import { BrandLogo } from '@/components/BrandLogo'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { siteConfig } from '@/config/site'
import { projects } from '@/data/projects'
import { usePrefersReducedMotion } from '@/hooks/use-media'

export function HomeHero() {
  const reduced = usePrefersReducedMotion()
  const featured = projects.find((project) => project.featured) ?? projects.find((project) => project.status === 'Ongoing')
  const comingSoon = projects.filter((project) => project.status === 'Coming Soon').length

  const points = [
    featured ? `Featured: ${featured.name}, ${featured.location}` : null,
    comingSoon > 0 ? `${comingSoon} more project${comingSoon === 1 ? '' : 's'} Coming Soon` : null,
    'Free site visit on request',
  ].filter((point): point is string => Boolean(point))

  return (
    <section className="relative overflow-hidden bg-stone">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 8% 0%, rgba(11, 44, 94, 0.07), transparent 58%), radial-gradient(ellipse 50% 45% at 100% 85%, rgba(140, 198, 63, 0.12), transparent 55%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent"
        aria-hidden
      />

      <div className="container-premium relative z-10 grid items-center gap-10 py-24 md:gap-12 md:py-28 lg:min-h-[100svh] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-24">
        <motion.div
          className="home-hero-brand"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-navy/55 md:mb-6">
            {siteConfig.hero.eyebrow}
          </p>
          <BrandLogo size="hero" linked={false} priority titleAs="h1" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:mt-8 md:text-base">
            {siteConfig.hero.supporting}
          </p>
          <ul className="mt-5 max-w-md space-y-1.5 text-sm text-navy/70 md:mt-6">
            {points.map((point) => (
              <li key={point} className="home-hero-point flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="rounded-2xl border border-navy/10 bg-surface p-5 shadow-[0_28px_64px_-32px_rgba(11,44,94,0.45)] md:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-lime">Site visit</p>
            <h2 className="mt-2 font-display text-2xl text-navy md:text-[1.85rem]">
              {siteConfig.cta.bookVisit}
            </h2>
            <p className="mt-1.5 text-sm text-muted">{siteConfig.hero.formSubtitle}</p>
            <div className="mt-5">
              <LeadCaptureForm compact />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
