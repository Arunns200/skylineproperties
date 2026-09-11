import type { Project } from '@/data/projects'

const fields = (project: Project) => [
  { label: 'Project Area', value: project.area },
  { label: 'Plot Sizes', value: project.plotSizes },
  { label: 'Total Plots', value: project.plotInventory.length ? String(project.plotInventory.length) : '—' },
  { label: 'Price', value: project.priceFrom },
  { label: 'Approval', value: project.approval },
  { label: 'Status', value: project.status },
  { label: 'Property Type', value: project.type },
  { label: 'Location', value: `${project.city}, ${project.state}` },
]

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="border-b border-border bg-surface py-12 md:py-16">
      <dl className="container-premium grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fields(project).map((item) => (
          <div key={item.label} className="border-l border-lime/40 pl-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</dt>
            <dd className="mt-2 font-display text-xl text-ink md:text-2xl">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
