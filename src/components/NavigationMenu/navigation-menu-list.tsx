import { List } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const NavigationMenuList = forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={twMerge('group flex flex-1 list-none items-center justify-center space-x-1', className)}
    {...props}
  />
))
NavigationMenuList.displayName = 'NavigationMenuList'
