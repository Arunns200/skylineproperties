import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

type CtaBandProps = {
  title?: string
  subtitle?: string
  className?: string
}

export function CtaBand({
  title = 'See It For Yourself.',
  subtitle = 'Book a complimentary site visit and walk the land with our team.',
  className,
}: CtaBandProps) {
  return (
    <section className={cn('relative overflow-hidden bg-forest py-20 md:py-28', className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 80% 20%, rgba(176,141,87,0.25), transparent), radial-gradient(ellipse 50% 60% at 10% 90%, rgba(61,107,90,0.35), transparent)',
        }}
        aria-hidden
      />
      <div className="container-premium relative text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-soft">
          Site visit
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-stone md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist/85">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="accent">
            <Link to="/">
              {siteConfig.cta.bookVisit}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-stone/30 text-stone hover:bg-white/10"
          >
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              {siteConfig.cta.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
