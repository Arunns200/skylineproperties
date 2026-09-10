import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium tracking-wide',
  {
    variants: {
      variant: {
        default: 'bg-forest text-stone',
        secondary: 'bg-mist text-forest',
        accent: 'bg-accent/15 text-accent',
        outline: 'border border-border text-muted',
        success: 'bg-sage/15 text-sage',
        warning: 'bg-accent/20 text-ink',
        muted: 'bg-stone text-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
