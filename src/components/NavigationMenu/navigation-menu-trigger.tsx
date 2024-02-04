import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import type { ComponentProps, FC } from 'react'
import { forwardRef } from 'react'
import { TbChevronDown } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'

export const navigationMenuTriggerStyle =
  'group inline-flex gap-px h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/40 hover:text-primary-900 focus:bg-primary/40 focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50'

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> {
  icon?: FC<ComponentProps<'svg'>>
}

export const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, icon: Icon = TbChevronDown, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className={twMerge(navigationMenuTriggerStyle, className)} {...props}>
    {children}
    <Icon
      className="relative top-[1px] ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
