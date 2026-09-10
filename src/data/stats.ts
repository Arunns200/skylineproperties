export interface StatItem {
  id: string
  label: string
  value: string
  hint: string
}

export const stats: StatItem[] = [
  {
    id: 'years',
    label: 'Years of Focus',
    value: 'XX+',
    hint: 'Replace with your actual years in business',
  },
  {
    id: 'projects',
    label: 'Projects',
    value: 'XX',
    hint: 'Replace with completed & ongoing count',
  },
  {
    id: 'customers',
    label: 'Families Served',
    value: 'XXX+',
    hint: 'Replace with verified customer count',
  },
  {
    id: 'plots',
    label: 'Plots Delivered',
    value: 'XXX+',
    hint: 'Replace with actual plot inventory delivered',
  },
]
