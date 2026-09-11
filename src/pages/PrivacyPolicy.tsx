import { PageBanner } from '@/components/PageBanner'
import { Seo } from '@/components/Seo'
import { siteConfig } from '@/config/site'

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy-policy" description="Placeholder privacy policy." />
      <PageBanner eyebrow={siteConfig.name} title="Privacy Policy" />
      <section className="container-premium max-w-3xl pb-20 pt-12">
        <p className="text-sm text-muted">
          Placeholder legal text for {siteConfig.name}. Replace with counsel-approved policy before
          launch.
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            We may collect contact details you submit via enquiry or site-visit forms (name, phone,
            email, project interest, message). Demo submissions are not stored in a production
            database until you connect a backend.
          </p>
          <p>
            Replace this section with your data retention, sharing, cookie, and rights disclosures
            under applicable Indian law.
          </p>
        </div>
      </section>
    </>
  )
}
