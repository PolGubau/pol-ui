"use client";

import { Viewport } from "@radix-ui/react-navigation-menu";
import { forwardRef } from "react";

export const NavigationMenuViewport = forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport>
>(({ className = "", ...props }, ref) => (
  <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
    <Viewport
      {...props}
      ref={ref}
      className={`${className}data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white dark:bg-secondary-800 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]`}
    />
  </div>
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";
