import { useEffect } from 'react'
import { siteConfig } from '@/config/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
}

export function Seo({
  title,
  description = siteConfig.description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
}: SeoProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`
  const url = `${siteConfig.url}${path}`
  const ogImage = image ?? `${siteConfig.url}${siteConfig.logo.src}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('name', 'description', description)
    setMeta('name', 'theme-color', siteConfig.colors.navy)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:site_name', siteConfig.name)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    const scriptId = 'json-ld-seo'
    const existing = document.getElementById(scriptId)
    if (existing) existing.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [fullTitle, description, url, ogImage, type, jsonLd])

  return null
}
