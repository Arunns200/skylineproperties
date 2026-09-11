import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const sizes = {
  sm: {
    mark: 'h-9 w-auto sm:h-10',
    name: 'text-[0.95rem] font-semibold tracking-[0.14em] sm:text-lg',
    tagline: 'text-[8px] tracking-[0.28em] sm:text-[9px]',
    gap: 'gap-2.5',
    rule: 'mt-1 h-px w-10',
  },
  md: {
    mark: 'h-12 w-auto',
    name: 'text-xl font-semibold tracking-[0.16em]',
    tagline: 'text-[10px] tracking-[0.32em]',
    gap: 'gap-3',
    rule: 'mt-1.5 h-px w-12',
  },
  hero: {
    mark: 'h-[9.5rem] w-auto sm:h-[11.5rem] md:h-[13.5rem] lg:h-[15.25rem]',
    name: 'text-[1.7rem] font-semibold tracking-[0.2em] sm:text-4xl md:text-[2.75rem] lg:text-5xl',
    tagline: 'text-[11px] tracking-[0.42em] sm:text-sm md:text-[0.95rem]',
    gap: 'gap-5 md:gap-6',
    rule: 'mt-3 h-[2px] w-16 sm:w-20',
  },
} as const

type BrandLogoProps = {
  size?: keyof typeof sizes
  showWordmark?: boolean
  showTagline?: boolean
  stacked?: boolean
  linked?: boolean
  className?: string
  priority?: boolean
  titleAs?: 'h1' | 'span'
}

export function BrandLogo({
  size = 'md',
  showWordmark = true,
  showTagline = false,
  stacked = false,
  linked = true,
  className,
  priority = false,
  titleAs = 'span',
}: BrandLogoProps) {
  const s = sizes[size]
  const Title = titleAs
  const wordmark = showWordmark ? (
    <Title
      className={cn(
        s.name,
        'font-sans uppercase leading-none text-navy',
        titleAs === 'h1' && 'font-semibold',
      )}
    >
      {siteConfig.name}
    </Title>
  ) : null

  const content = (
    <>
      <img
        src={siteConfig.logo.src}
        alt=""
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        className={cn(s.mark, 'select-none object-contain object-center')}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {showWordmark || showTagline ? (
        <div
          className={cn(
            'flex min-w-0 flex-col',
            stacked
              ? 'brand-logo-hero-copy items-center text-center'
              : 'items-start text-left',
          )}
        >
          {wordmark}
          {showTagline ? (
            <>
              <span className={cn(s.rule, 'bg-lime')} aria-hidden />
              <span className={cn(s.tagline, 'mt-2.5 font-medium uppercase text-lime')}>
                {siteConfig.tagline}
              </span>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  )

  const classes = cn(
    'inline-flex max-w-full',
    stacked ? cn('brand-logo-hero', s.gap) : cn('flex-row items-center', s.gap),
    className,
  )

  if (linked) {
    return (
      <Link to="/" className={classes} aria-label={`${siteConfig.name} home`}>
        {content}
      </Link>
    )
  }

  return (
    <div className={classes} role={showWordmark ? undefined : 'img'} aria-label={siteConfig.name}>
      {content}
    </div>
  )
}
