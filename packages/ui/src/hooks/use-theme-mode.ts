"use client";

import { useEffect, useState } from "react";

import { isClient } from "../helpers/isClient/is-client";
import { getThemeMode } from "../theme-store";
import { useWatchLocalStorage } from "./use-watch-localstorage-value/use-watch-localstorage-value";

const DEFAULT_MODE: ThemeMode = "light";
const STORAGE_THEME_MODE = "pol-theme";
const SYNC_THEME_MODE = "pol-theme-sync";

/**
 * @name ThemeModeEnum
 * @description Enum for the different theme modes
 * @property {string} light - Light mode
 * @property {string} dark - Dark mode
 * @property {string} auto - Auto mode
 */
export enum ThemeModeEnum {
  light = "light",
  dark = "dark",
  auto = "auto",
}

/**
 * @name ThemeMode
 * @description Type for the different theme modes
 * @see ThemeModeEnum for the different theme modes
 */
export type ThemeMode = keyof typeof ThemeModeEnum;

export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode(getThemeMode()));

  /**
   * Persist `mode` in local storage and add/remove `dark` class on `html`
   */
  useEffect(() => {
    setModeInLs(mode);
    setModeInDom(mode);
  }, [mode]);

  /**
   * Sync all tabs with the latest theme mode value
   */
  useWatchLocalStorage({
    key: STORAGE_THEME_MODE,
    onChange(newValue) {
      if (newValue) {
        handleSetMode(newValue as ThemeMode);
        return;
      }
    },
  });

  /**
   * Keep the other instances of the hook in sync (bi-directional)
   */
  useSyncMode((mode) => {
    setMode(mode);
  });

  /**
   * Sets `mode` to a given value: `light | dark` | `auto`
   */
  const handleSetMode = (mode: ThemeMode) => {
    setMode(mode);
    setModeInLs(mode);
    setModeInDom(mode);
    document.dispatchEvent(new CustomEvent(SYNC_THEME_MODE, { detail: mode }));
  };

  /**
   * Toggles between: `light | dark`
   */
  const toggleMode = () => {
    let newMode = mode;

    if (newMode === "auto") {
      newMode = computeModeValue(newMode);
    }

    newMode = newMode === "dark" ? "light" : "dark";

    handleSetMode(newMode);
  };

  /**
   * Sets the value to `<PoluiProvider theme={{ mode }}>` prop
   */
  const clearMode = () => {
    const newMode = getThemeMode() ?? DEFAULT_MODE;

    handleSetMode(newMode);
  };

  return {
    mode,
    computedMode: computeModeValue(mode),
    setMode: handleSetMode,
    toggleMode,
    clearMode,
  };
};

const useSyncMode = (onChange: (mode: ThemeMode) => void) => {
  useEffect(() => {
    function handleSync(e: Event) {
      const mode = (e as CustomEvent<ThemeMode>).detail;

      onChange(mode);
    }

    document.addEventListener(SYNC_THEME_MODE, handleSync);
    return () => {
      document.removeEventListener(SYNC_THEME_MODE, handleSync);
    };
  }, [onChange]);
};

/**
 * Sets the give value in local storage
 */
const setModeInLs = (mode: ThemeMode) => {
  localStorage.setItem(STORAGE_THEME_MODE, mode);
};

/**
 * Add or remove class `dark` on `html` element
 */
const setModeInDom = (mode: ThemeMode) => {
  const computedMode = computeModeValue(mode);

  if (computedMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const getInitialMode = (defaultMode?: ThemeMode): ThemeMode => {
  if (!isClient()) {
    return DEFAULT_MODE;
  }

  const lsMode = localStorage.getItem(STORAGE_THEME_MODE) as ThemeMode | undefined;

  return lsMode ?? defaultMode ?? DEFAULT_MODE;
};

/**
 * Parse `auto` mode value to either `light` or `dark`
 * @returns `light` | `dark`
 */
const computeModeValue = (mode: ThemeMode): ThemeMode => {
  return mode === "auto" ? prefersColorScheme() : mode;
};

/**
 * Get browser prefered color scheme
 * @returns `light` | `dark`
 */
const prefersColorScheme = (): ThemeMode => {
  return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
