import { Link } from 'react-router-dom'
import { HomeHero } from '@/components/home/HomeHero'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { aboutContent } from '@/data/about'
import { projects } from '@/data/projects'

export function HomePage() {
  return (
    <>
      <Seo path="/" description={siteConfig.description} />

      <HomeHero />

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
