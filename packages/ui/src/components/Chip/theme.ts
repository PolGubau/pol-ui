import type { ColorsType } from "../../types";

export interface ChipTheme {
  base: string;
  text: string;
  withAction: string;
  withoutAction: string;
  element: string;
  disabled: string;
  color: ColorsType;
  clickable: string;
}
export const chipTheme: ChipTheme = {
  base: "flex items-center justify-between px-1.5 py-1 rounded-full text-[0.8em] gap-1.5 bg-background-onPrimary text-white truncate w-fit",
  text: "text-secondary-900 dark:text-background flex gap-1",
  withAction: "pl-3",
  withoutAction: "px-3",
  clickable: "cursor-pointer",
  disabled: "opacity-50 cursor-not-allowed",

  element: "flex items-center justify-center",
  color: {
    primary: "bg-primary-200 dark:bg-primary-600/80",
    secondary: "bg-secondary-200 dark:bg-secondary-400",
    success: "bg-success-200 dark:bg-success-600/80",
    error: "bg-error-200 dark:bg-error-600/80",
    warning: "bg-warning-200 dark:bg-warning-600/80",
    info: "bg-info-200 dark:bg-info-600/80",
  },
};
