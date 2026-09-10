import type { PlotInventoryItem, PlotStatus } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/SectionHeading'

const statusVariant: Record<PlotStatus, 'success' | 'warning' | 'muted'> = {
  Available: 'success',
  Reserved: 'warning',
  Sold: 'muted',
}

export function PlotInventory({ items }: { items: PlotInventoryItem[] }) {
  if (!items.length) {
    return (
      <section className="py-16">
        <div className="container-premium">
          <SectionHeading
            title="Available plots"
            subtitle="No plot inventory listed for this sample project. Add rows in src/data/projects.ts."
          />
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Inventory"
          title="Available plots"
          subtitle="Sample inventory table — replace prices and availability with live data."
        />
        <div className="mt-8 overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-mist/70 text-xs uppercase tracking-[0.14em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Plot No.</th>
                <th className="px-4 py-3 font-medium">Size</th>
                <th className="px-4 py-3 font-medium">Facing</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((plot) => (
                <tr key={plot.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-ink">{plot.plotNumber}</td>
                  <td className="px-4 py-3">{plot.sizeSqFt} Sq.Ft</td>
                  <td className="px-4 py-3">{plot.facing}</td>
                  <td className="px-4 py-3">{plot.price}</td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[plot.status]}>{plot.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
