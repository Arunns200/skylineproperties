import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { projects } from '@/data/projects'
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

export function ContactForm({ defaultProject }: { defaultProject?: string }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectSlug, setProjectSlug] = useState(defaultProject ?? '')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate() {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, '').replace(/^\+91/, ''))) {
      next.phone = 'Enter a valid 10-digit Indian mobile number'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email'
    if (!message.trim() || message.trim().length < 10) {
      next.message = 'Please share a short message (10+ characters)'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await submitLead({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        projectSlug: projectSlug || undefined,
        message: message.trim(),
        source: 'contact',
      })
      setSuccess(true)
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-start gap-3 border border-sage/30 bg-mist/50 p-8">
        <CheckCircle2 className="h-8 w-8 text-sage" />
        <h3 className="font-display text-2xl text-ink">Enquiry received</h3>
        <p className="text-muted">
          This is a simulated success message. Connect Supabase/Firebase in{' '}
          <code className="text-sm">submitLead</code> to store leads.
        </p>
        <Button type="button" variant="outline" onClick={() => setSuccess(false)}>
          Send another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          className="mt-1.5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
      </div>
      <div>
        <Label htmlFor="contact-phone">Phone</Label>
        <Input
          id="contact-phone"
          className="mt-1.5"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          aria-invalid={!!errors.phone}
        />
        {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
      </div>
      <div>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          className="mt-1.5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-invalid={!!errors.email}
        />
        {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
      </div>
      <div>
        <Label>Interested project</Label>
        <Select value={projectSlug || 'none'} onValueChange={(v) => setProjectSlug(v === 'none' ? '' : v)}>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select a project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Not sure yet</SelectItem>
            {projects.map((p) => (
              <SelectItem key={p.id} value={p.slug}>
                {p.name.replace('Sample Project — ', '')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          className="mt-1.5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
