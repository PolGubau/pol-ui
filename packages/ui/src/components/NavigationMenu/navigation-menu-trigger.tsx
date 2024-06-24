"use client"

import { forwardRef, type ComponentProps, type FC } from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { TbChevronDown } from "react-icons/tb"

import { cn, mergeDeep } from "../../helpers"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types"
import type { NavigationMenuTriggerTheme } from "./theme"

type RefElement = React.ElementRef<typeof NavigationMenuPrimitive.Trigger>

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<
    typeof NavigationMenuPrimitive.Trigger
  > {
  theme?: DeepPartial<NavigationMenuTriggerTheme>
  icon?: FC<ComponentProps<"svg">>
}

export const NavigationMenuTrigger = forwardRef<
  RefElement,
  NavigationMenuTriggerProps
>(
  (
    {
      className,
      children,
      icon: Icon = TbChevronDown,
      theme: customTheme = {},
      ...props
    },
    ref
  ) => {
    const theme = mergeDeep(getTheme().navigationMenu.trigger, customTheme)

    return (
      <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(theme.base, className)}
        {...props}
      >
        {children}
        <Icon className={theme.icon} aria-hidden="true" />
      </NavigationMenuPrimitive.Trigger>
    )
  }
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
