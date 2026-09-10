/**
 * Data access layer — swap implementations for Supabase/Firebase later
 * without restructuring UI consumers.
 *
 * Future collections: projects, plot_inventory, locations, leads,
 * site_visits, testimonials, blog_posts, users
 */

import { blogPosts, type BlogPost } from '@/data/blog'
import { locations, type Location } from '@/data/locations'
import { projects, type Project, type ProjectStatus, type PropertyType } from '@/data/projects'
import { stats, type StatItem } from '@/data/stats'
import { testimonials, type Testimonial } from '@/data/testimonials'

export type LeadPayload = {
  name: string
  phone: string
  email?: string
  projectSlug?: string
  message: string
  source: 'contact' | 'project' | 'other' | 'home'
}

export type SiteVisitPayload = {
  name: string
  phone: string
  email: string
  projectSlug: string
  date: string
  time: string
  visitors: number
  message?: string
}

export type ProjectFilters = {
  query?: string
  location?: string
  type?: PropertyType | 'all'
  status?: ProjectStatus | 'all'
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'newest'
}

function priceRank(priceFrom: string) {
  const digits = priceFrom.replace(/[^\d]/g, '')
  return digits ? Number(digits) : 0
}

export async function getProjects(filters: ProjectFilters = {}): Promise<Project[]> {
  let result = [...projects]

  if (filters.query) {
    const q = filters.query.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q),
    )
  }

  if (filters.location && filters.location !== 'all') {
    result = result.filter(
      (p) =>
        p.location.toLowerCase() === filters.location!.toLowerCase() ||
        p.city.toLowerCase() === filters.location!.toLowerCase(),
    )
  }

  if (filters.type && filters.type !== 'all') {
    result = result.filter((p) => p.type === filters.type)
  }

  if (filters.status && filters.status !== 'all') {
    result = result.filter((p) => p.status === filters.status)
  }

  switch (filters.sort) {
    case 'price-asc':
      result.sort((a, b) => priceRank(a.priceFrom) - priceRank(b.priceFrom))
      break
    case 'price-desc':
      result.sort((a, b) => priceRank(b.priceFrom) - priceRank(a.priceFrom))
      break
    case 'newest':
      result.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
      break
    case 'featured':
    default:
      result.sort((a, b) => Number(b.featured) - Number(a.featured))
      break
  }

  return result
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured)
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug)
}

export async function getLocations(): Promise<Location[]> {
  return locations
}

export async function getLocationBySlug(slug: string): Promise<Location | undefined> {
  return locations.find((l) => l.slug === slug)
}

export async function getProjectsByLocation(locationName: string): Promise<Project[]> {
  const key = locationName.toLowerCase()
  return projects.filter(
    (p) => p.location.toLowerCase() === key || p.city.toLowerCase() === key,
  )
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials
}

export async function getStats(): Promise<StatItem[]> {
  return stats
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  const posts = [...blogPosts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  )
  if (!category || category === 'all') return posts
  return posts.filter((p) => p.category === category)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((p) => p.slug === slug)
}

/** Simulate API submit — replace with Supabase/Firebase insert */
export async function submitLead(payload: LeadPayload): Promise<{ ok: true; id: string }> {
  await new Promise((r) => setTimeout(r, 600))
  console.info('[lead:demo]', payload)
  return { ok: true, id: `lead_${Date.now()}` }
}

export async function submitSiteVisit(
  payload: SiteVisitPayload,
): Promise<{ ok: true; id: string }> {
  await new Promise((r) => setTimeout(r, 700))
  console.info('[site_visit:demo]', payload)
  return { ok: true, id: `visit_${Date.now()}` }
}
