import type { NavbarCollapseTheme } from "./navbar-collapse";

export interface NavbarTheme {
  base: string;
  collapse: NavbarCollapseTheme;
  toggle: NavbarToggleTheme;
}
export interface NavbarToggleTheme {
  base: string;
}

export const navbarTheme: NavbarTheme = {
  base: "px-2 h-[60px] flex gap-4 justify-between items-center sm:px-3 w-full z-50",

  collapse: {
    base: "md:flex md:w-auto absolute md:relative top-20 shadow rounded-lg left-0 w-[90vw] mx-[5vw] md:mx-0 z-50 py-2 bg-secondary-50 dark:secondary-900",
    hidden: {
      on: "hidden",
      off: "",
    },
  },

  toggle: {
    base: "md:hidden",
  },
};
