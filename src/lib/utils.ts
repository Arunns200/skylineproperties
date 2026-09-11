import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Vite `base` without a trailing slash — use as react-router `basename`. */
export const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

/** Prefix a public-folder path so GitHub Pages project sites resolve assets. */
export function publicUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
