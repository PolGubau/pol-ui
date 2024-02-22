'use client'
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { twMerge } from 'tailwind-merge'
import { NavigationMenuViewport } from './navigation-menu-viewport'
import { NavigationMenuList } from './navigation-menu-list'
import { getTheme } from '../../theme-store'
import { mergeDeep } from '../../helpers'
import type { DeepPartial } from '../../types'
import type { NavigationMenuThemeRoot } from './theme'

type RefElement = React.ElementRef<typeof NavigationMenuPrimitive.Root>

export interface NavigationMenuProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  children: React.ReactNode
  hasIndicator?: boolean
  listClassName?: string
  theme?: DeepPartial<NavigationMenuThemeRoot>
}

export const NavigationMenu = React.forwardRef<RefElement, NavigationMenuProps>(
  ({ className, children, hasIndicator = true, listClassName = '', theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().navigationMenu.root, customTheme)

    return (
      <NavigationMenuPrimitive.Root ref={ref} className={twMerge(theme.base, className)} {...props}>
        <NavigationMenuList className={listClassName} hasIndicator={hasIndicator}>
          {children}
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenuPrimitive.Root>
    )
  },
)
NavigationMenu.displayName = 'NavigationMenu'
