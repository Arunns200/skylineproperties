import { useState } from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MasterPlan({ src, name }: { src: string; name: string }) {
  const [zoom, setZoom] = useState(1)

  return (
    <section className="border-y border-border bg-mist/30 py-16 md:py-20">
      <div className="container-premium">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">Master plan</h2>
            <p className="mt-2 text-muted">
              Sample master plan imagery for {name}. Replace with your layout drawing.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Zoom out"
              onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Zoom in"
              onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-8 overflow-auto border border-border bg-surface">
          <img
            src={src}
            alt={`${name} master plan placeholder`}
            className="mx-auto max-w-none origin-top transition duration-300"
            style={{ transform: `scale(${zoom})`, width: `${100 * zoom}%` }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
