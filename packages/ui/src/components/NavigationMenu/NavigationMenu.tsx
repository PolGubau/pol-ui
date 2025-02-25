"use client";
import { NavigationMenu as N } from "radix-ui";

import type * as React from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { NavigationMenuList } from "./navigation-menu-list";
import { NavigationMenuViewport } from "./navigation-menu-viewport";
import type { NavigationMenuThemeRoot } from "./theme";

export interface NavigationMenuProps extends React.ComponentPropsWithoutRef<typeof N.Root> {
  children: React.ReactNode;
  hasIndicator?: boolean;
  listClassName?: string;
  ref?: React.Ref<HTMLDivElement>;
  theme?: DeepPartial<NavigationMenuThemeRoot>;
}

/**
 * @name NavigationMenu
 * @description Used to travel from one route to another, it is usually used to navigate to different pages or sections of the same page, it is usually used in the sidebar of a page as a main navigation system.
 * @returns React.FC<NavigationMenuProps>
 */
export const NavigationMenu = ({
  className,
  children,
  hasIndicator = true,
  listClassName = "",
  theme: customTheme = {},
  ...props
}: NavigationMenuProps) => {
  const theme = mergeDeep(getTheme().navigationMenu.root, customTheme);

  return (
    <N.Root className={twMerge(theme.base, className)} {...props}>
      <NavigationMenuList className={listClassName} hasIndicator={hasIndicator}>
        {children}
      </NavigationMenuList>

      <NavigationMenuViewport />
    </N.Root>
  );
};
