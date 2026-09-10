import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectHero } from '@/components/projects/ProjectHero'
import { ProjectOverview } from '@/components/projects/ProjectOverview'
import { ProjectHighlights } from '@/components/projects/ProjectHighlights'
import { LocationAdvantage } from '@/components/projects/LocationAdvantage'
import { ProjectMap } from '@/components/projects/ProjectMap'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { MasterPlan } from '@/components/projects/MasterPlan'
import { PlotInventory } from '@/components/projects/PlotInventory'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { getProjectBySlug } from '@/lib/data'
import type { Project } from '@/data/projects'
import { siteConfig } from '@/config/site'

export function ProjectDetailsPage() {
  const { slug } = useParams()
  const [project, setProject] = useState<Project | null | undefined>(undefined)

  useEffect(() => {
    if (!slug) return
    void getProjectBySlug(slug).then((p) => setProject(p ?? null))
  }, [slug])

  if (project === undefined) {
    return <div className="container-premium py-40 text-muted">Loading project…</div>
  }

  if (!project) {
    return (
      <div className="container-premium py-40 text-center">
        <h1 className="font-display text-4xl text-ink">Project not found</h1>
        <p className="mt-3 text-muted">Check the slug or add the project in src/data/projects.ts.</p>
        <Button asChild className="mt-6">
          <Link to="/projects">Back to projects</Link>
        </Button>
      </div>
    )
  }

  const displayName = project.name.replace('Sample Project — ', '')

  return (
    <>
      <Seo
        title={displayName}
        description={project.shortDescription}
        path={`/projects/${project.slug}`}
        image={project.heroImage}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Residence',
          name: project.name,
          description: project.shortDescription,
          image: project.heroImage,
          address: {
            '@type': 'PostalAddress',
            addressLocality: project.city,
            addressRegion: project.state,
            addressCountry: 'IN',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            description: `Starting from ${project.priceFrom}`,
          },
        }}
      />
      <ProjectHero project={project} />
      <ProjectOverview project={project} />

      <section className="py-20 md:py-24">
        <div className="container-premium grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-sage">About the project</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{displayName}</h2>
            <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/">{siteConfig.cta.bookVisit}</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  {siteConfig.cta.whatsapp}
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={project.gallery[0] ?? project.heroImage}
              alt={`${displayName} editorial image — replace with yours`}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <ProjectHighlights highlights={project.highlights} amenities={project.amenities} />
      <LocationAdvantage places={project.nearbyPlaces} />
      <ProjectMap lat={project.lat} lng={project.lng} name={displayName} />
      <ProjectGallery images={[project.heroImage, ...project.gallery]} name={displayName} />
      {project.masterPlan ? <MasterPlan src={project.masterPlan} name={displayName} /> : null}
      <PlotInventory items={project.plotInventory} />

      <section className="bg-surface py-20">
        <div className="container-premium max-w-3xl">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Why This Location?</h2>
          <p className="mt-5 leading-relaxed text-muted">{project.whyLocation}</p>
          <ul className="mt-6 grid gap-3 text-sm text-ink sm:grid-cols-2">
            {[
              'Connectivity',
              'Infrastructure',
              'Employment growth',
              'Schools & hospitals',
              'Future development',
              'Investment potential',
            ].map((item) => (
              <li key={item} className="border-l-2 border-accent pl-3">
                {item} <span className="text-muted">(sample theme — expand with your research)</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="See It For Yourself." subtitle="Book a complimentary site visit." />
    </>
  )
}
