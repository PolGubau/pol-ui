import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'

export const NavigationMenuIndicator = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    className={
      className +
      'data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]'
    }
    {...props}
    ref={ref}
  >
    <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator'
