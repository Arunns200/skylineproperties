import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-medium uppercase tracking-[0.22em]',
            light ? 'text-sand/80' : 'text-sage',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl leading-tight md:text-4xl lg:text-[2.75rem]',
          light ? 'text-stone' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={cn('mt-4 text-base leading-relaxed md:text-lg', light ? 'text-mist/85' : 'text-muted')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
