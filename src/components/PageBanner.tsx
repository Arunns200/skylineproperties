import { cn } from '@/lib/utils'

type PageBannerProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}

export function PageBanner({ eyebrow, title, subtitle, className }: PageBannerProps) {
  return (
    <section className={cn('relative overflow-hidden bg-navy pb-14 pt-28 text-stone', className)}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(140, 198, 63, 0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(255, 255, 255, 0.06), transparent 50%)',
        }}
      />
      <div className="container-premium relative max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-lime">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-mist/85">{subtitle}</p> : null}
      </div>
    </section>
  )
}
