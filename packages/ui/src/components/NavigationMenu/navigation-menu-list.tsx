"use client";

import { NavigationMenu as N } from "radix-ui";

import { cn } from "../../helpers";
import { NavigationMenuIndicator } from "./navigation-menu-indicator";

const { List } = N;
export interface NavigationMenuListProps extends React.ComponentPropsWithoutRef<typeof List> {
  children?: React.ReactNode;
  hasIndicator?: boolean;
  ref?: React.Ref<HTMLUListElement>;
}

export const NavigationMenuList = ({ className, children, hasIndicator = true, ...props }: NavigationMenuListProps) => (
  <List className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)} {...props}>
    {children}
    {hasIndicator && <NavigationMenuIndicator />}
  </List>
);
