import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { plotImages } from '@/data/images'
import { usePrefersReducedMotion } from '@/hooks/use-media'

const HERO_IMAGE = plotImages.hero

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest">
      <img
        src={HERO_IMAGE}
        alt="Replace with your DTCP plotted land photography"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,87,0.18),transparent_50%)]"
        aria-hidden
      />

      <div className="container-premium relative z-10 pb-24 pt-32 md:pb-28 md:pt-40">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.28em] text-accent-soft"
        >
          DTCP Approved Plots
        </motion.p>
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-stone md:text-6xl lg:text-7xl"
        >
          Own a Plot Worth Building On.
        </motion.h1>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-xl text-base text-mist/90 md:text-lg"
        >
          DTCP plotted layouts with clear demarcation, approach roads, and locations chosen for long-term living and investment.
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button asChild size="lg" variant="accent">
            <Link to="/projects">{siteConfig.cta.explore}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-stone/35 bg-transparent text-stone hover:bg-white/10"
          >
            <Link to="/book-site-visit">{siteConfig.cta.bookVisit}</Link>
          </Button>
        </motion.div>
        <p className="mt-6 max-w-md text-xs text-mist/55">{siteConfig.placeholderNote}</p>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-stone/70 transition hover:text-stone"
        aria-label="Scroll to statistics"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
