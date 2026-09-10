import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { projects } from '@/data/projects'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-forest text-stone">
      <div className="container-premium grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-2xl">
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-mist/80">{siteConfig.tagline}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-mist/85">
            <li>
              <Link to="/" className="hover:text-stone">
                Home / Enquire
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-stone">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/mission-vision" className="hover:text-stone">
                Mission & Vision
              </Link>
            </li>
            {projects.map((p) => (
              <li key={p.id}>
                <Link to={`/projects/${p.slug}`} className="hover:text-stone">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            Talk to us
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-mist/85">
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-stone">
                Call · {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone"
              >
                WhatsApp · {siteConfig.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col gap-2 py-4 text-xs text-mist/55 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-stone">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-stone">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
