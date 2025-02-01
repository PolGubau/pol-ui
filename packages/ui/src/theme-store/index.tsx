"use client";

import { cloneDeep } from "../helpers";
import { mergeDeep } from "../helpers/merge-deep/merge-deep";
import type { ThemeMode } from "../hooks/use-theme-mode";
import type { CustomPoluiTheme, PoluiTheme } from "../providers/PoluiProvider";
import { theme as defaultTheme } from "../theme";
import type { DeepPartial } from "../types";

interface ThemeStore {
  mode?: ThemeMode;
  theme: PoluiTheme;
}

const store: ThemeStore = {
  theme: cloneDeep(defaultTheme),
};

export function setThemeMode(mode?: ThemeMode) {
  store.mode = mode;
}

export function getThemeMode(): ThemeMode | undefined {
  return store.mode;
}

export function setTheme(theme?: CustomPoluiTheme) {
  if (theme) {
    store.theme = mergeDeep(defaultTheme, theme);
  }
}

export function getTheme(): PoluiTheme {
  return cloneDeep(store.theme);
}

export type ThemeKey = keyof PoluiTheme;
export const themeKeys = Object.keys(defaultTheme) as ThemeKey[];

export type ThemeOfPart<T extends ThemeKey> = PoluiTheme[T];
export type PartOfTheme<T extends ThemeKey> = DeepPartial<ThemeOfPart<T>>;

export const themeGetter = <T extends ThemeKey>(path: T, theme: PartOfTheme<T>): ThemeOfPart<T> => {
  const allThemes = getTheme();
  return mergeDeep(allThemes[path], theme);
};
