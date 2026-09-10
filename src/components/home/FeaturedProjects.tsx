import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-premium">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="DTCP Plots"
              title="Layouts Planned for Clarity"
              subtitle="Explore sample DTCP plotted projects in high-growth corridors — replace with your live inventory."
            />
            <Button asChild variant="outline" className="self-start md:self-auto">
              <Link to="/projects">View All Plots</Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
