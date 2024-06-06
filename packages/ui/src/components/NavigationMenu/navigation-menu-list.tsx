import { List } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavigationMenuIndicator } from './navigation-menu-indicator'

export interface NavigationMenuListProps extends React.ComponentPropsWithoutRef<typeof List> {
  children?: React.ReactNode
  hasIndicator?: boolean
}

export const NavigationMenuList = forwardRef<React.ElementRef<typeof List>, NavigationMenuListProps>(
  ({ className, children, hasIndicator = true, ...props }, ref) => (
    <List
      ref={ref}
      className={twMerge('group flex flex-1 list-none items-center justify-center space-x-1', className)}
      {...props}
    >
      {children}
      {hasIndicator && <NavigationMenuIndicator />}
    </List>
  ),
)
NavigationMenuList.displayName = 'NavigationMenuList'
