"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { NavigationMenuContentTheme } from "./theme";

export interface NavigationMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> {
  theme?: DeepPartial<NavigationMenuContentTheme>;
}
export const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, theme: customTheme = {}, ...props }, ref) => {
  const theme = mergeDeep(getTheme().navigationMenu.content, customTheme);

  return <NavigationMenuPrimitive.Content ref={ref} className={twMerge(theme.base, className)} {...props} />;
});
NavigationMenuContent.displayName = "NavigationMenuContent";
