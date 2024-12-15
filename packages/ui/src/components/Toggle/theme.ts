import type { BooleanEnum, ColorsType } from "../../types";

export interface ToggleTheme {
  base: string;
  active: Record<
    BooleanEnum,
    {
      base: string;
      colors: ColorsType;
    }
  >;
}
export const toggleTheme: ToggleTheme = {
  base: "flex items-center justify-center aspect-square dark:text-white transition-colors focus:outline-none",

  active: {
    on: {
      base: "",
      colors: {
        primary: "bg-primary/60",
        secondary: "bg-secondary/60",
        success: "bg-success/60",
        info: "bg-info/60",
        warning: "bg-warning/60",
        error: "bg-error/60",
      },
    },
    off: {
      base: "",
      colors: {
        primary: "enabled:hover:bg-primary/20 ",
        secondary: "enabled:hover:bg-secondary/20 ",
        success: "enabled:hover:bg-success/20 ",
        info: "enabled:hover:bg-info/20 ",
        warning: "enabled:hover:bg-warning/20 ",
        error: "enabled:hover:bg-error/20 ",
      },
    },
  },
};
