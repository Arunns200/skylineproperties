import { Mail, MapPin, MessageCircle, Phone, Clock } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Enquire about sample DTCP plots or book a conversation with the Skyline Properties team."
        path="/contact"
      />
      <section className="bg-forest pb-16 pt-28 text-stone">
        <div className="container-premium">
          <SectionHeading
            light
            eyebrow="Contact"
            title="Let’s talk about the right plot"
            subtitle="Replace contact details in src/config/site.ts. Forms currently simulate submission."
          />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-premium grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-ink">Reach us</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-sage" />
                <a href={siteConfig.phoneHref} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 text-sage" />
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">
                  WhatsApp · {siteConfig.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-sage" />
                <a href={siteConfig.emailHref} className="hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-sage" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-sage" />
                <span>{siteConfig.officeHours}</span>
              </li>
            </ul>
          </div>
          <div className="border border-border bg-surface p-6 md:p-8">
            <h2 className="font-display text-2xl text-ink">Send enquiry</h2>
            <p className="mt-2 text-sm text-muted">We’ll respond during office hours (demo form).</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
