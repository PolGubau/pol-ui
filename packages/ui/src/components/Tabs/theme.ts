import type { IBoolean } from "../../types";

export interface TabsTheme {
  base: string;
  disabled: string;
  navItem: {
    base: string;
    text: string;
    marker: {
      base: string;
      active: IBoolean;
      mode: {
        contained: string;
        underlined: string;
      };
    };
  };
}

export const tabsTheme: TabsTheme = {
  base: "flex flex-row justify-start relative",

  disabled: "opacity-50 cursor-not-allowed",
  navItem: {
    base: "relative outline-0 px-3 py-1.5 rounded-full hover:bg-primary/20 dark:hover:bg-primary-800/20 cursor-pointer transition-colors",
    text: "relative flex text-secondary-900 dark:text-secondary-50",

    marker: {
      base: "absolute inset-0 left-0 bottom-0 rounded-full",
      active: {
        on: "bg-primary dark:bg-primary-400",
        off: "",
      },
      mode: {
        underlined: "h-1 top-8",
        contained: "h-full bg-primary/20 dark:bg-primary-800/20",
      },
    },
  },
};
