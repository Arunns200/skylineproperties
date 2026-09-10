import { Seo } from '@/components/Seo'
import { siteConfig } from '@/config/site'

export function TermsPage() {
  return (
    <>
      <Seo title="Terms of Use" path="/terms" description="Placeholder terms of use." />
      <section className="container-premium max-w-3xl pb-20 pt-28">
        <h1 className="font-display text-4xl text-ink">Terms of Use</h1>
        <p className="mt-4 text-sm text-muted">
          Placeholder terms for {siteConfig.name}. Replace with counsel-approved terms before
          launch.
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            All project details, prices, and statistics on this website are sample demo content
            unless replaced with verified information. Nothing here constitutes an offer, warranty,
            or investment advice.
          </p>
          <p>
            Images are placeholders. Availability of plots and amenities is subject to change and
            must be confirmed in writing.
          </p>
        </div>
      </section>
    </>
  )
}
