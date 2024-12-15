import type { IBoolean } from "../../types";

export interface ListGroupTheme {
  root: ListGroupRootTheme;
  item: ListGroupItemTheme;
}

export interface ListGroupItemTheme {
  base: string;

  link: {
    base: string;
    active: IBoolean;
    disabled: IBoolean;
    href: IBoolean;
    icon: string;
  };
}

export interface ListGroupRootTheme {
  base: string;
  bordered: {
    base: string;
    column: string;
    row: string;
  };

  direction: {
    column: string;
    row: string;
  };
}

export const listGroupTheme: ListGroupTheme = {
  root: {
    base: "list-none rounded-lg bg-secondary-50 text-sm font-medium text-secondary-900 dark:border-secondary-600 dark:bg-secondary-700 dark:text-white text-left flex flex-row overflow-hidden w-full",
    bordered: {
      base: " border border-secondary-200",
      column: "divide-y ",
      row: "divide-x w-fit",
    },
    direction: {
      column: "flex-col",
      row: "flex-row",
    },
  },
  item: {
    base: "",
    link: {
      base: "flex items-center w-full py-2 px-4 focus:outline-none dark:border-secondary-600",
      active: {
        off: "bg-secondary-50 dark:secondary-900 hover:bg-secondary-100 hover:text-primary-700 focus-visible:brightness-90 dark:border-secondary-600 dark:hover:bg-secondary-600 dark:hover:text-white dark:focus:text-white  ",

        on: "bg-primary-700 text-white dark:bg-secondary-800 focus-visible:brightness-90",
      },
      disabled: {
        off: "",
        on: "hover:bg-secondary-100 text-secondary-900 hover:text-secondary-900 focus:text-secondary-900 bg-secondary-100 cursor-not-allowed",
      },
      href: {
        off: "",
        on: "",
      },
      icon: "mr-2 h-4 w-4 fill-current",
    },
  },
};
