import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = DialogPrimitive.Close

export function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  side?: 'right' | 'left' | 'bottom'
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/50 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-50 flex flex-col bg-surface shadow-xl transition ease-out',
          side === 'right' && 'inset-y-0 right-0 h-full w-[min(100%,22rem)]',
          side === 'left' && 'inset-y-0 left-0 h-full w-[min(100%,22rem)]',
          side === 'bottom' && 'inset-x-0 bottom-0 max-h-[85vh] rounded-t-xl',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-sm opacity-70 transition hover:opacity-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-b border-border px-5 py-4 pr-12', className)} {...props} />
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title className={cn('font-display text-xl text-ink', className)} {...props} />
  )
}
