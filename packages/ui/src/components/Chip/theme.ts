import type { ColorsType, RoundedSizesTypes } from "../../types";

export interface ChipTheme {
  base: string;
  text: string;
  withAction: string;
  withoutAction: string;
  rounded: RoundedSizesTypes;
  element: string;
  disabled: string;
  color: ColorsType;
  clickable: string;
}
export const chipTheme: ChipTheme = {
  base: "flex items-center justify-between pl-3 p-1 rounded-full gap-1.5 bg-secondary-300 text-white",
  text: "text-black dark:text-white",
  withAction: "pl-3",
  withoutAction: "px-3",
  clickable: "cursor-pointer",
  disabled: "opacity-50 cursor-not-allowed",
  rounded: {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  },
  element: "flex items-center justify-center",
  color: {
    primary: "bg-primary-300/70 dark:bg-primary-700/70",
    secondary: "bg-secondary-300/70 dark:bg-secondary-700/70",
    success: "bg-success-300/70 dark:bg-success-700/70",
    error: "bg-error-300/70 dark:bg-error-700/70",
    warning: "bg-warning-300/70 dark:bg-warning-700/70",
    info: "bg-info-300/70 dark:bg-info-700/70",
  },
};
