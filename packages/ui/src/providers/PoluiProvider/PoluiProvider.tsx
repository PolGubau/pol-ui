"use client";

import React, { type FC } from "react";

import { Toaster } from "../../components/Toaster";
import type { ToasterProps } from "../../components/Toaster/Toaster";
import { type MakeRequired, cn } from "../../helpers";
import { type ThemeMode, useThemeMode } from "../../hooks/use-theme-mode";
import { languages } from "../../i18n";
import { ThemeInit } from "../../theme-store/init";
import type { Language, SomeTranslations } from "../../types";
import type { CustomPoluiTheme } from "./PoluiTheme";

/**
 * @name ThemeProps
 * @description Interface to define the props of the PoluiProvider theme component
 * @author Pol Gubau - https://polgubau.com
 * @property {ThemeMode} mode - The theme mode to be used
 * @property {CustomPoluiTheme} theme - The custom theme to be used
 */
export interface ThemeProps {
  mode?: ThemeMode;
  theme?: CustomPoluiTheme;
}

/**
 * @name ProviderProps
 * @description Interface to define the props of the PoluiProvider component
 * @property {React.ReactNode} children - The children to be rendered
 * @property {ThemeProps} theme - The theme to be used
 * @author Pol Gubau - https://polgubau.com

 */
export interface ProviderProps {
  children: React.ReactNode;
  theme?: ThemeProps;
  keys?: {
    language: string;
  };
  defaultLanguage?: Language;
  toaster?: ToasterProps;
  allLanguages?: Language[];
  translations?: SomeTranslations;
  isDebug?: boolean;
}

export interface PolUiContextProps
  extends MakeRequired<Pick<ProviderProps, "defaultLanguage" | "translations" | "keys" | "allLanguages">> {}

export const PolUiContext = React.createContext<PolUiContextProps | undefined>(undefined);

/**
 * @name PoluiProvider
 * @description The PoluiProvider component is a wrapper component that provides the theme to all the components in the Polui library. It also initializes the theme mode and the custom theme if provided.
 * @param {ProviderProps} { children, theme} 
 * @returns {React.ReactNode} The PoluiProvider component
 * @author Pol Gubau - https://polgubau.com

 */
export const PoluiProvider: FC<ProviderProps> = ({
  children,
  theme,
  keys = {
    language: "pol-ui",
  },
  defaultLanguage = languages[0] as Language,
  isDebug,
  allLanguages = [],
  toaster,
  translations = {
    "en-US": {},
  },
}: ProviderProps): React.ReactNode => {
  const locales = Object.keys(translations) as Locale[];
  type Locale = keyof typeof translations;

  const context = {
    keys: { language: keys.language },
    defaultLanguage,
    translations,
    locales,
    allLanguages,
    isDebug,
  };

  const { computedMode } = useThemeMode();

  return (
    <PolUiContext.Provider value={context}>
      <div
        className={cn({
          dark: computedMode === "dark",
        })}
      >
        {children}
        <Toaster {...toaster} />
      </div>
      <ThemeInit mode={theme?.mode ?? computedMode} theme={theme?.theme} />
    </PolUiContext.Provider>
  );
};

// Set display name for PoluiProvider component
PoluiProvider.displayName = "PoluiProvider";
