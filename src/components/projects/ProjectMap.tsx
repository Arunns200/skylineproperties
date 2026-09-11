import { MapPinned } from 'lucide-react'

type ProjectMapProps = {
  lat?: number
  lng?: number
  name: string
}

/**
 * Google Maps-ready placeholder.
 * Replace with @react-google-maps/api or iframe embed using VITE_GOOGLE_MAPS_API_KEY.
 */
export function ProjectMap({ lat, lng, name }: ProjectMapProps) {
  const hasCoords = typeof lat === 'number' && typeof lng === 'number'

  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-premium">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Location map</h2>
        <p className="mt-2 max-w-xl text-muted">
          Placeholder map for {name}. Connect a Google Maps API key later — coordinates are ready
          {hasCoords ? ` (${lat}, ${lng})` : ''}.
        </p>
        <div className="relative mt-8 flex aspect-[21/9] min-h-[220px] items-center justify-center overflow-hidden border border-border bg-mist">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(11,44,94,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,44,94,0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden
          />
          <div className="relative z-10 flex max-w-sm flex-col items-center gap-3 p-6 text-center">
            <MapPinned className="h-10 w-10 text-navy" />
            <p className="text-sm text-muted">
              Map placeholder — drop in Google Maps Embed or JS API here without changing surrounding UI.
            </p>
            {hasCoords ? (
              <a
                className="text-sm font-medium text-navy underline-offset-4 hover:underline"
                href={`https://www.google.com/maps?q=${lat},${lng}`}
                target="_blank"
                rel="noreferrer"
              >
                Open sample coordinates in Google Maps
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
