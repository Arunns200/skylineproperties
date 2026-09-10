import { ProjectCard } from '@/components/projects/ProjectCard'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/SectionHeading'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { projects } from '@/data/projects'

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description="Skyline New Town DTCP plots at OMR Thiruporur, plus Coming Soon launches."
        path="/projects"
      />
      <section className="bg-forest pb-14 pt-28 text-stone">
        <div className="container-premium">
          <SectionHeading
            light
            eyebrow="DTCP Plots"
            title="Projects"
            subtitle="One live layout now — two more Coming Soon. Enquire on the home page or WhatsApp."
          />
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-premium grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="container-premium mt-14 max-w-lg border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl text-ink">Interested?</h2>
          <p className="mt-1 text-sm text-muted">Send details on WhatsApp or call us.</p>
          <div className="mt-5">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </>
  )
}
