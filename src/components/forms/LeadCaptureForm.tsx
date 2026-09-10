import { useState, type FormEvent } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { projects } from '@/data/projects'
import { siteConfig } from '@/config/site'
import { submitLead } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function buildWhatsAppUrl(parts: {
  name: string
  phone: string
  project: string
  message: string
}) {
  const text = [
    `New lead — ${siteConfig.name}`,
    `Name: ${parts.name}`,
    `Phone: ${parts.phone}`,
    `Project: ${parts.project}`,
    parts.message ? `Message: ${parts.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return `${siteConfig.whatsappHref}?text=${encodeURIComponent(text)}`
}

type LeadCaptureFormProps = {
  compact?: boolean
  defaultProject?: string
}

export function LeadCaptureForm({ compact = false, defaultProject }: LeadCaptureFormProps) {
  const featured = projects.find((p) => p.status === 'Ongoing')?.slug
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [projectSlug, setProjectSlug] = useState(defaultProject ?? featured ?? projects[0]?.slug ?? '')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = 'Name is required'
    const digits = phone.replace(/\s+/g, '').replace(/^\+91/, '')
    if (!/^[6-9]\d{9}$/.test(digits)) next.phone = 'Enter a valid 10-digit mobile number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    const projectName =
      projects.find((p) => p.slug === projectSlug)?.name ?? 'Skyline New Town'
    try {
      await submitLead({
        name: name.trim(),
        phone: phone.trim(),
        email: '',
        projectSlug: projectSlug || undefined,
        message: message.trim() || 'Interested in DTCP plots',
        source: 'home',
      })
      const url = buildWhatsAppUrl({
        name: name.trim(),
        phone: phone.trim(),
        project: projectName,
        message: message.trim(),
      })
      window.open(url, '_blank', 'noopener,noreferrer')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={compact ? '' : 'space-y-5'}>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="lead-name">Your name</Label>
          <Input
            id="lead-name"
            className="mt-1.5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <Label htmlFor="lead-phone">Phone</Label>
          <Input
            id="lead-phone"
            className="mt-1.5"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile"
            autoComplete="tel"
            inputMode="numeric"
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
        <div>
          <Label>Interested in</Label>
          <Select value={projectSlug} onValueChange={setProjectSlug}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map((p) => (
                <SelectItem key={p.id} value={p.slug}>
                  {p.name}
                  {p.status === 'Coming Soon' ? ' (Coming Soon)' : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="lead-message">Message (optional)</Label>
          <Textarea
            id="lead-message"
            className="mt-1.5 min-h-[80px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Plot size, budget, preferred visit date…"
          />
        </div>
        <Button type="submit" size="lg" className="w-full" variant="accent" disabled={submitting}>
          <MessageCircle className="h-4 w-4" />
          {submitting ? 'Opening WhatsApp…' : 'Send on WhatsApp'}
        </Button>
      </form>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button asChild variant="outline" size="lg" className="w-full">
          <a href={siteConfig.phoneHref}>
            <Phone className="h-4 w-4" />
            Call
          </a>
        </Button>
        <Button asChild variant="default" size="lg" className="w-full">
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
      <p className="mt-3 text-center text-xs text-muted">
        Leads open in WhatsApp to {siteConfig.whatsapp}. Replace number in site config.
      </p>
    </div>
  )
}
