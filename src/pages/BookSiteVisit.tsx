import { SiteVisitForm } from '@/components/forms/SiteVisitForm'
import { Seo } from '@/components/Seo'
import { siteConfig } from '@/config/site'

export function BookSiteVisitPage() {
  return (
    <>
      <Seo
        title="Book Site Visit"
        description="Schedule a complimentary site visit to experience the property in person."
        path="/book-site-visit"
      />
      <section className="relative overflow-hidden bg-forest pb-16 pt-28 text-stone">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(ellipse at 20% 20%, rgba(176,141,87,0.2), transparent 50%)',
          }}
        />
        <div className="container-premium relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-soft">Site visit</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl">
            Experience the Property in Person.
          </h1>
          <p className="mt-5 text-mist/85">
            Choose a project, pick a convenient slot, and walk the layout with our team. Form
            submission is simulated until you connect a backend.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-premium grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl text-ink">What to expect</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li>Layout walkthrough with plot options</li>
              <li>Approach road and neighbourhood context</li>
              <li>Time for questions on documentation</li>
              <li>No obligation — educational first</li>
            </ul>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex text-sm font-medium text-forest underline-offset-4 hover:underline"
            >
              Prefer WhatsApp? Message us directly →
            </a>
          </div>
          <div className="border border-border bg-surface p-6 md:p-8">
            <SiteVisitForm />
          </div>
        </div>
      </section>
    </>
  )
}
