'use client'
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { twMerge } from 'tailwind-merge'
import { NavigationMenuViewport } from './navigation-menu-viewport'
import { NavigationMenuList } from './navigation-menu-list'

export interface NavigationMenuProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  children: React.ReactNode
  hasIndicator?: boolean
  listClassName?: string
}

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ className, children, hasIndicator = true, listClassName = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={twMerge('relative z-[1] flex w-full justify-center', className)}
    {...props}
  >
    <NavigationMenuList className={listClassName} hasIndicator={hasIndicator}>
      {children}
    </NavigationMenuList>

    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = 'NavigationMenu'
