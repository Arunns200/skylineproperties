import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { projects } from '@/data/projects'
import { siteConfig } from '@/config/site'
import { submitSiteVisit } from '@/lib/data'
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

export function SiteVisitForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectSlug: projects[0]?.slug ?? '',
    date: '',
    time: '10:00',
    visitors: '2',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, '').replace(/^\+91/, ''))) {
      next.phone = 'Enter a valid 10-digit mobile number'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.projectSlug) next.projectSlug = 'Select a project'
    if (!form.date) next.date = 'Choose a preferred date'
    if (!form.time) next.time = 'Choose a preferred time'
    if (!form.visitors || Number(form.visitors) < 1) next.visitors = 'Enter number of visitors'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await submitSiteVisit({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        projectSlug: form.projectSlug,
        date: form.date,
        time: form.time,
        visitors: Number(form.visitors),
        message: form.message.trim() || undefined,
      })
      setSuccess(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-start gap-3 border border-sage/30 bg-mist/50 p-8">
        <CheckCircle2 className="h-8 w-8 text-sage" />
        <h3 className="font-display text-2xl text-ink">Site visit requested</h3>
        <p className="text-muted">
          Simulated confirmation only. Wire <code className="text-sm">submitSiteVisit</code> to your
          backend when ready.
        </p>
        <Button asChild variant="accent">
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </a>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="sv-name">Name</Label>
          <Input id="sv-name" className="mt-1.5" value={form.name} onChange={(e) => set('name', e.target.value)} />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <Label htmlFor="sv-phone">Phone</Label>
          <Input id="sv-phone" className="mt-1.5" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
          {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
      </div>
      <div>
        <Label htmlFor="sv-email">Email</Label>
        <Input id="sv-email" type="email" className="mt-1.5" value={form.email} onChange={(e) => set('email', e.target.value)} />
        {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
      </div>
      <div>
        <Label>Project</Label>
        <Select value={form.projectSlug} onValueChange={(v) => set('projectSlug', v)}>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((p) => (
              <SelectItem key={p.id} value={p.slug}>
                {p.name.replace('Sample Project — ', '')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="sv-date">Preferred date</Label>
          <Input id="sv-date" type="date" className="mt-1.5" value={form.date} onChange={(e) => set('date', e.target.value)} />
          {errors.date ? <p className="mt-1 text-xs text-destructive">{errors.date}</p> : null}
        </div>
        <div>
          <Label htmlFor="sv-time">Preferred time</Label>
          <Input id="sv-time" type="time" className="mt-1.5" value={form.time} onChange={(e) => set('time', e.target.value)} />
        </div>
        <div>
          <Label htmlFor="sv-visitors">Visitors</Label>
          <Input
            id="sv-visitors"
            type="number"
            min={1}
            max={20}
            className="mt-1.5"
            value={form.visitors}
            onChange={(e) => set('visitors', e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="sv-message">Message</Label>
        <Textarea id="sv-message" className="mt-1.5" value={form.message} onChange={(e) => set('message', e.target.value)} />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? 'Booking…' : 'Book My Site Visit'}
      </Button>
      <p className="text-center text-sm text-muted">
        Prefer chat?{' '}
        <a className="font-medium text-forest underline-offset-4 hover:underline" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </p>
    </form>
  )
}
