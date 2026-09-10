import { Search, SlidersHorizontal } from 'lucide-react'
import type { ProjectStatus, PropertyType } from '@/data/projects'
import type { ProjectFilters as Filters } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { locations } from '@/data/locations'

const types: Array<PropertyType | 'all'> = ['all', 'DTCP Plot', 'Gated DTCP Layout']

const statuses: Array<ProjectStatus | 'all'> = ['all', 'Coming Soon', 'Ongoing', 'Sold Out']

type Props = {
  value: Filters
  onChange: (next: Filters) => void
}

function FilterFields({ value, onChange }: Props) {
  return (
    <div className="grid gap-4">
      <div>
        <Label htmlFor="project-search">Search</Label>
        <div className="relative mt-1.5">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input
            id="project-search"
            className="pl-9"
            placeholder="Search projects or locations"
            value={value.query ?? ''}
            onChange={(e) => onChange({ ...value, query: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label>Location</Label>
        <Select
          value={value.location ?? 'all'}
          onValueChange={(v) => onChange({ ...value, location: v })}
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All locations</SelectItem>
            {locations.map((l) => (
              <SelectItem key={l.id} value={l.name}>
                {l.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Property type</Label>
        <Select
          value={value.type ?? 'all'}
          onValueChange={(v) => onChange({ ...value, type: v as Filters['type'] })}
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t === 'all' ? 'All types' : t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Status</Label>
        <Select
          value={value.status ?? 'all'}
          onValueChange={(v) => onChange({ ...value, status: v as Filters['status'] })}
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((s) => (
              <SelectItem key={s} value={s}>
                {s === 'all' ? 'All statuses' : s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Sort</Label>
        <Select
          value={value.sort ?? 'featured'}
          onValueChange={(v) => onChange({ ...value, sort: v as Filters['sort'] })}
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price Low → High</SelectItem>
            <SelectItem value="price-desc">Price High → Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export function ProjectFilters(props: Props) {
  return (
    <>
      <div className="hidden lg:block">
        <FilterFields {...props} />
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="h-4 w-4" />
              Filters & sort
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="overflow-y-auto p-5">
            <SheetHeader className="mb-4 border-0 p-0">
              <SheetTitle>Filter projects</SheetTitle>
            </SheetHeader>
            <FilterFields {...props} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
