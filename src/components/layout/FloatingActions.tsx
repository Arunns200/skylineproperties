import { useLocation } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <>
      {!onHome ? (
        <div className="pointer-events-none fixed bottom-24 right-4 z-30 flex flex-col gap-2 md:bottom-6 md:right-6">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call ${siteConfig.phone}`}
            className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-stone shadow-lg transition hover:scale-105"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      ) : null}

      {!onHome ? (
        <div
          className={cn(
            'fixed inset-x-0 bottom-0 z-30 border-t border-border bg-stone/95 p-3 backdrop-blur md:hidden',
          )}
        >
          <a
            href="/"
            className="flex h-11 w-full items-center justify-center rounded-md bg-accent text-sm font-semibold text-ink"
          >
            Enquire / WhatsApp
          </a>
        </div>
      ) : null}
    </>
  )
}
