import type { ColorsType } from "../../types";

export interface HamburguerTheme {
  base: string;
  color: ColorsType;
}

export const hamburguerTheme: HamburguerTheme = {
  base: "",
  color: {
    primary: "text-primary-900 dark:text-primary-50",
    secondary: "text-secondary-900 dark:text-secondary-50",
    error: "text-error-900 dark:text-error-50",
    success: "text-success-900 dark:text-success-50",
    warning: "text-warning-900 dark:text-warning-50",
    info: "text-info-900 dark:text-info-50",
  },
};
