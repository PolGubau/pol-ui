export interface TabsTheme {
  container: string;
  nav: string;
  disabled: string;
  navItem: {
    base: string;
    text: string;
    marker: {
      base: string;
      mode: {
        contained: string;
        underlined: string;
      };
    };
  };
}

export const tabsTheme: TabsTheme = {
  container: "flex flex-col overflow-hidden w-full",
  nav: "flex flex-row justify-start relative",

  disabled: "opacity-50 cursor-not-allowed",
  navItem: {
    base: "relative outline-0 px-3 py-1.5 rounded-full hover:bg-primary/20 dark:hover:bg-primary-800/20 cursor-pointer transition-colors",

    text: "relative flex text-secondary-900 dark:text-secondary-50",

    marker: {
      base: "absolute left-0 right-0 bg-primary dark:bg-primary-800 z-10 rounded-full",

      mode: {
        underlined: "h-1 bottom-0 -bottom-2",
        contained: "h-full bg-primary/20 dark:bg-primary-800/20 top-0",
      },
    },
  },
};
