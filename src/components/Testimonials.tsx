import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { usePrefersReducedMotion } from '@/hooks/use-media'
import { cn } from '@/lib/utils'

type TestimonialsProps = {
  items: Testimonial[]
  className?: string
}

export function Testimonials({ items, className }: TestimonialsProps) {
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()
  const active = items[index]

  useEffect(() => {
    if (reduced || items.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [items.length, reduced])

  if (!active) return null

  return (
    <section className={cn('bg-mist/50 py-20 md:py-28', className)}>
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Voices"
            title="What visitors say"
            subtitle="Sample testimonials for layout preview — replace with verified customer reviews."
            align="center"
          />
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="mx-auto h-8 w-8 text-accent/70" aria-hidden />
              <p className="mt-6 font-display text-2xl leading-snug text-ink md:text-3xl">
                “{active.quote}”
              </p>
              <footer className="mt-8 flex flex-col items-center gap-3">
                <img
                  src={active.avatar}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <cite className="not-italic font-medium text-ink">{active.name}</cite>
                  <p className="text-sm text-muted">
                    {active.role} · {active.location}
                    {active.project ? ` · ${active.project}` : ''}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                className={cn(
                  'h-2 w-2 rounded-full transition',
                  i === index ? 'bg-navy' : 'bg-border hover:bg-lime/50',
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
