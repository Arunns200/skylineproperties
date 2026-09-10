import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

export function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!images.length) return null

  const current = images[active] ?? images[0]

  return (
    <section className="py-16 md:py-20">
      <div className="container-premium">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Gallery</h2>
        <p className="mt-2 text-muted">Replace these Unsplash placeholders with your project photos.</p>

        <div className="mt-8 hidden gap-3 md:grid md:grid-cols-4 md:grid-rows-2">
          <button
            type="button"
            className="relative col-span-2 row-span-2 overflow-hidden"
            onClick={() => {
              setActive(0)
              setLightbox(true)
            }}
          >
            <img
              src={images[0]}
              alt={`${name} gallery main`}
              className="h-full min-h-[360px] w-full object-cover transition hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
          {images.slice(1, 5).map((src, i) => (
            <button
              key={src}
              type="button"
              className="relative overflow-hidden"
              onClick={() => {
                setActive(i + 1)
                setLightbox(true)
              }}
            >
              <img
                src={src}
                alt={`${name} gallery ${i + 2}`}
                className="h-full min-h-[170px] w-full object-cover transition hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <div className="relative mt-6 md:hidden">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className="w-[85%] shrink-0 snap-center overflow-hidden"
                onClick={() => {
                  setActive(i)
                  setLightbox(true)
                }}
              >
                <img
                  src={src}
                  alt={`${name} gallery ${i + 1}`}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={lightbox} onOpenChange={setLightbox}>
        <DialogContent className="max-w-5xl border-0 bg-forest p-0 text-stone">
          <DialogTitle className="sr-only">{name} gallery lightbox</DialogTitle>
          <div className="relative">
            <img src={current} alt="" className="max-h-[80vh] w-full object-contain" />
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2"
              aria-label="Previous image"
              onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2"
              aria-label="Next image"
              onClick={() => setActive((a) => (a + 1) % images.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-black/40 p-2"
              aria-label="Close lightbox"
              onClick={() => setLightbox(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex justify-center gap-2 p-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  className={cn(
                    'h-1.5 w-6 rounded-full',
                    i === active ? 'bg-accent' : 'bg-white/30',
                  )}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
