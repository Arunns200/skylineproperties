import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'
import { useScrolled } from '@/hooks/use-media'
import { cn } from '@/lib/utils'

const mobileLinks = [
  { label: 'Home', href: '/' },
  ...siteConfig.nav,
]

export function Header() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-stone/95 text-ink shadow-sm backdrop-blur-md'
          : 'bg-forest/90 text-stone backdrop-blur-sm',
      )}
    >
      <div className="container-premium flex h-16 items-center justify-between md:h-[4.25rem]">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight md:text-[1.65rem]"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition',
                  scrolled ? 'text-muted hover:text-ink' : 'text-stone/85 hover:text-stone',
                  isActive && (scrolled ? 'text-forest' : 'text-stone'),
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant={scrolled ? 'outline' : 'ghost'}
            className={cn('hidden sm:inline-flex', !scrolled && 'text-stone hover:bg-white/10')}
          >
            <a href={siteConfig.phoneHref} aria-label="Call us">
              <Phone className="h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild size="sm" variant="accent" className="hidden sm:inline-flex">
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn('md:hidden', !scrolled && 'text-stone hover:bg-white/10')}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-stone">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 inline-flex items-center gap-2 rounded-md px-3 py-3 text-sage"
                >
                  <Phone className="h-4 w-4" />
                  Call {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-sage"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
