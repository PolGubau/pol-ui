export interface NavigationMenuTheme {
  root: NavigationMenuThemeRoot;
  trigger: NavigationMenuTriggerTheme;
  content: NavigationMenuContentTheme;
}

export interface NavigationMenuThemeRoot {
  base: string;
}

export interface NavigationMenuTriggerTheme {
  base: string;
  icon: string;
}
export interface NavigationMenuContentTheme {
  base: string;
}

export const navigationMenuTheme: NavigationMenuTheme = {
  root: {
    base: "relative z-[1] flex w-full justify-center",
  },
  trigger: {
    base: "group inline-flex text-secondary-900 dark:text-secondary-50 gap-px h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/40 hover:text-primary-900 dark:hover:text-primary-50 focus:bg-primary/40 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
    icon: "relative top-[1px] ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180",
  },

  content: {
    base: "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight bg-white dark:bg-secondary-800",
  },
};
