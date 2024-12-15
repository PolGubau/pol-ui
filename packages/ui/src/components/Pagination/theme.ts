export interface PaginationTheme {
  base: string;
  layout: PaginationLayoutTheme;
  pages: PaginationPagesTheme;
}

export interface PaginationRootTheme {
  base: string;
}

export interface PaginationLayoutTheme {
  table: {
    base: string;
    span: string;
  };
}
export interface PaginationPagesTheme {
  base: string;
  showIcon: string;
  previous: PaginationNavigationTheme;
  next: PaginationNavigationTheme;
  selector: PaginationButtonTheme;
}
export interface PaginationButtonTheme {
  base: string;
  active: string;
  disabled: string;
}

export interface PaginationNavigationTheme {
  base: string;
  icon: string;
}
export const paginationTheme: PaginationTheme = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400 ",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center  ",
    showIcon: "inline-flex",
    previous: {
      base: "rounded-l-xl rounded-r-none",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-xl rounded-l-none",
      icon: "h-5 w-5",
    },
    selector: {
      base: "",
      active: "",
      disabled: "opacity-50 cursor-normal",
    },
  },
};
