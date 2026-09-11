import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium tracking-wide',
  {
    variants: {
      variant: {
        default: 'bg-navy text-stone',
        secondary: 'bg-mist text-navy',
        accent: 'bg-lime/15 text-navy',
        outline: 'border border-border text-muted',
        success: 'bg-lime/15 text-navy',
        warning: 'bg-lime/20 text-navy',
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
