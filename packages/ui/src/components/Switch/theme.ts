import type { ColorsType, IBoolean, MainSizesType } from "../../types";

export interface SwitchTheme {
  root: SwitchRootTheme;
  toggle: SwitchToggleTheme;
}

export interface SwitchRootTheme {
  base: string;
  active: IBoolean;
  label: string;
}

export interface SwitchToggleTheme {
  base: string;
  sizes: MainSizesType;
  color: ColorsType;
  handler: SwitchHandlerTheme;
}

export interface SwitchHandlerTheme {
  base: string;
}

export const switchTheme: SwitchTheme = {
  root: {
    base: "group relative flex items-center rounded-lg focus:outline-none transition-all",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50",
    },
    label: "ml-3 text-sm font-medium text-secondary-900 dark:text-secondary-300",
  },
  toggle: {
    base: "rounded-full border group-focus:ring-2 group-focus:ring-primary/25 flex items-center overflow-hidden aspect-video p-0.5 justify-start	bg-transparent data-[checked=true]:justify-end data-[checked=false]:opacity-50",
    color: {
      error: "bg-error border-error-500",
      success: "bg-success border-success-500",
      warning: "bg-warning border-warning-600",
      info: "bg-info border-info-600",
      primary: "bg-primary border-primary-600",
      secondary: "bg-secondary border-secondary-400",
    },

    sizes: {
      xs: "w-8",
      sm: "w-10",
      md: "w-12",
      lg: "w-14",
      xl: "w-16",
    },
    handler: {
      base: "bg-secondary-50 rounded-full h-full aspect-square group-enabled:group-active:aspect-[4/3] transition-[aspect-ratio] ease-in-out duration-200",
    },
  },
};
