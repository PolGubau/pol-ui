"use client";

import type { ComponentProps, FC } from "react";
import type { DeepPartial, IBoolean } from "../../types/types";

import { cn } from "../../helpers";
import { theme } from "../../theme";
import { Link } from "../Link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "../NavigationMenu";
import type { NavbarProps } from "./Navbar";
export interface NavbarCollapseTheme {
  base: string;
  hidden: IBoolean;
}

export interface NavbarCollapseProps extends ComponentProps<"div"> {
  theme?: DeepPartial<NavbarCollapseTheme>;
  links?: NavbarProps["links"];
  linkClassName?: string;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ links = [], linkClassName, className, ...props }) => {
  return (
    <div className={cn("hidden md:flex gap-4", className)} {...props}>
      <NavigationMenu>
        {links.map((link, index) => {
          const { label, content, active, ...rest } = link;

          return (
            <NavigationMenuItem key={index}>
              {link.content ? (
                <>
                  <NavigationMenuTrigger className={linkClassName}>{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>{content}</NavigationMenuContent>
                </>
              ) : (
                <Link
                  {...rest}
                  underline={false}
                  className={cn(theme.navigationMenu.trigger.base, linkClassName, {
                    "text-primary-700": active,
                  })}
                >
                  {label}
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenu>
    </div>
  );
};
