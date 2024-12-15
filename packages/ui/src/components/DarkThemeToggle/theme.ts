export interface DarkThemeToggleTheme {
  root: DarkThemeToggleRootTheme;
}

export interface DarkThemeToggleRootTheme {
  base: string;
  icon: string;
}
export const darkThemeToggleTheme: DarkThemeToggleTheme = {
  root: {
    base: "aspect-square rounded-full focus:outline-none dark:focus:ring-offset-secondary-900",
    icon: "h-5 w-5",
  },
};
