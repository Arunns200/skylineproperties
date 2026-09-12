import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { cn, publicUrl } from '@/lib/utils'

const sizes = {
  sm: 'h-11 w-auto max-w-[11.5rem] sm:h-12 sm:max-w-[13rem]',
  md: 'h-[4.5rem] w-auto max-w-[14rem]',
  hero: 'h-auto w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem]',
} as const

type BrandLogoProps = {
  size?: keyof typeof sizes
  linked?: boolean
  onDark?: boolean
  className?: string
  priority?: boolean
  titleAs?: 'h1' | 'span'
}

export function BrandLogo({
  size = 'md',
  linked = true,
  onDark = false,
  className,
  priority = false,
  titleAs = 'span',
}: BrandLogoProps) {
  const label = `${siteConfig.name} — ${siteConfig.tagline}`
  const image = (
    <img
      src={publicUrl(siteConfig.logo.src)}
      alt={titleAs === 'h1' ? '' : label}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      className={cn(sizes[size], 'select-none object-contain object-center')}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )

  const content = (
    <>
      <span className={cn(onDark && 'inline-flex rounded-lg bg-white px-2.5 py-2')}>{image}</span>
      {titleAs === 'h1' ? <h1 className="sr-only">{siteConfig.name}</h1> : null}
    </>
  )

  const classes = cn('inline-flex max-w-full items-center', size === 'hero' && 'brand-logo-hero', className)

  if (linked) {
    return (
      <Link to="/" className={classes} aria-label={`${siteConfig.name} home`}>
        {content}
      </Link>
    )
  }

  return (
    <div className={classes} role={titleAs === 'h1' ? undefined : 'img'} aria-label={titleAs === 'h1' ? undefined : label}>
      {content}
    </div>
  )
}
