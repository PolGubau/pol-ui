import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../helpers'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700 disabled:pointer-events-none disabled:opacity-50 relative group overflow-hidden  ',
  {
    variants: {
      variant: {
        default: 'bg-primary text-secondary-900 shadow hover:bg-primary/90',
        error: 'bg-error text-secondary-50 shadow-sm hover:bg-error/90',
        outline: 'border border-secondary bg-background shadow-sm hover:bg-primary/50',
        secondary: 'bg-secondary text-secondary-900 shadow-sm hover:bg-secondary/60',
        ghost: 'hover:bg-primary/60',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span
          className={cn(
            'absolute top-1/2 h-2 w-2 rounded-full bg-secondary-800/50 group-focus:w-[80%] aspect-square group-focus:h-auto',
            'transform -translate-y-1/2 transition-transform duration-200 ease-in-out animation-bounce',
          )}
        />
        {props.children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
