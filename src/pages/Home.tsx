import { Link } from 'react-router-dom'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { aboutContent } from '@/data/about'
import { projects } from '@/data/projects'
import { plotImages } from '@/data/images'

export function HomePage() {
  return (
    <>
      <Seo path="/" description={siteConfig.description} />

      {/* Lead-first landing */}
      <section className="relative overflow-hidden bg-forest pb-16 pt-24 text-stone md:pb-20 md:pt-28">
        <img
          src={plotImages.hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
        <div className="container-premium relative z-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-soft">
              DTCP Plots · OMR Thiruporur
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Skyline New Town
            </h1>
            <p className="mt-4 max-w-md text-base text-mist/90 md:text-lg">
              Leave your details — we will connect on WhatsApp or call you back about DTCP plots.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-mist/80">
              <li>• Featured: Skyline New Town, OMR Thiruporur</li>
              <li>• 2 more projects Coming Soon</li>
              <li>• Free site visit on request</li>
            </ul>
          </div>

          <div className="rounded-md border border-white/10 bg-stone p-5 text-ink shadow-xl md:p-7">
            <h2 className="font-display text-2xl text-ink">Get plot details</h2>
            <p className="mt-1 text-sm text-muted">Name & phone required. Submits to WhatsApp.</p>
            <div className="mt-5">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-20">
        <div className="container-premium">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-sage">Projects</p>
              <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Our plots</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/projects">View all</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision preview */}
      <section id="mission" className="border-t border-border bg-mist/40 py-16 md:py-20">
        <div className="container-premium grid gap-8 md:grid-cols-2">
          <div className="border border-border bg-surface p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Mission</p>
            <h2 className="mt-3 font-display text-3xl text-ink">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted">{aboutContent.mission}</p>
          </div>
          <div className="border border-border bg-forest p-6 text-stone md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">Vision</p>
            <h2 className="mt-3 font-display text-3xl">Our vision</h2>
            <p className="mt-4 leading-relaxed text-mist/85">{aboutContent.vision}</p>
          </div>
        </div>
        <div className="container-premium mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/mission-vision">Mission & Vision</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
