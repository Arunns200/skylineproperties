import { ProjectCard } from '@/components/projects/ProjectCard'
import { PageBanner } from '@/components/PageBanner'
import { Seo } from '@/components/Seo'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { siteConfig } from '@/config/site'
import { projects } from '@/data/projects'

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description={`${siteConfig.name} DTCP plots — live layouts and Coming Soon launches.`}
        path="/projects"
      />
      <PageBanner
        eyebrow="DTCP Plots"
        title="Projects"
        subtitle="One live layout now — two more Coming Soon. Enquire on the home page or WhatsApp."
      />
      <section className="py-12 md:py-16">
        <div className="container-premium grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="container-premium mt-14 max-w-lg rounded-2xl border border-navy/10 bg-surface p-6 shadow-[0_20px_50px_-32px_rgba(11,44,94,0.35)] md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-lime">Site visit</p>
          <h2 className="mt-2 font-display text-2xl text-navy">{siteConfig.cta.bookVisit}</h2>
          <p className="mt-1 text-sm text-muted">{siteConfig.hero.formSubtitle}</p>
          <div className="mt-5">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </>
  )
}
