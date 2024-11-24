import { Theme } from '@mui/material'
import type { FC } from 'react'
import React from 'react'
import { cn, MakeRequired } from '../../helpers'
import { useThemeMode, type ThemeMode } from '../../hooks/use-theme-mode'
import { languages } from '../../i18n'
import { ThemeInit } from '../../theme-store/init'
import { Language, SomeTranslations } from '../../types'
import type { CustomMesalvoTheme } from './MesalvoTheme'
/**
 * @name ThemeProps
 * @description Interface to define the props of the MesalvoProvider theme component
 * @property {ThemeMode} mode - The theme mode to be used
 * @property {CustomMesalvoTheme} theme - The custom theme to be used
 */
export interface ThemeProps {
  mode?: ThemeMode
  theme?: CustomMesalvoTheme
}

/**
 * @name ProviderProps
 * @description Interface to define the props of the MesalvoProvider component
 * @property {React.ReactNode} children - The children to be rendered
 * @property {ThemeProps} theme - The theme to be used

 */

interface ProviderProps {
  children: React.ReactNode
  theme?: ThemeProps
  keys?: {
    language: string
  }
  defaultLanguage?: Language
  allLanguages?: Language[]
  translations?: SomeTranslations
  isDebug?: boolean
  toggleDebug?: () => void
  muiTheme?: Partial<Theme> | ((outerTheme: Theme) => Theme)
  appName?: string
  logging?: {
    enabled?: boolean
    key?: string
    strategy?: 'localStorage'
  }
}
export interface CortexContextProps
  extends MakeRequired<
    Pick<ProviderProps, 'defaultLanguage' | 'translations' | 'keys' | 'allLanguages' | 'appName' | 'logging'>
  > {}

export const CortexContext = React.createContext<CortexContextProps | undefined>(undefined)

/**
 * @name MesalvoProvider
 * @description The MesalvoProvider component is a wrapper component that provides the theme to all the components in the Mesalvo library.  
 * @param {ProviderProps} { children, theme } - The children to be rendered and the theme to be used
 * @returns {JSX.Element} The MesalvoProvider component

 */
export const MesalvoProvider: FC<ProviderProps> = ({
  children,
  theme,
  keys = {
    language: 'mesalvo-language',
  },
  defaultLanguage = languages[0],
  appName = 'mesalvo',
  logging = {
    enabled: true,
    key: 'mesalvo-logging',
    strategy: 'localStorage',
  },
  isDebug,
  toggleDebug,
  allLanguages = [],
  translations = {
    'en-US': {},
    'es-ES': {},
    'de-DE': {},
  },
}: ProviderProps): JSX.Element => {
  const locales = Object.keys(translations) as Locale[]
  type Locale = keyof typeof translations

  const context: CortexContextProps = React.useMemo(
    () => ({
      keys: { language: keys.language },
      defaultLanguage,
      translations,
      locales,
      allLanguages,
      appName,
      logging,
      isDebug,
      toggleDebug,
    }),
    [keys, defaultLanguage, translations, locales, allLanguages, appName, logging, isDebug, toggleDebug],
  )
  const { computedMode } = useThemeMode()

  return (
    <CortexContext.Provider value={context}>
      <main
        className={cn({
          dark: computedMode === 'dark',
        })}
      >
        {children}
      </main>
      <ThemeInit mode={theme?.mode ?? 'auto'} theme={theme?.theme} />
    </CortexContext.Provider>
  )
}

// Set display name for MesalvoProvider component
MesalvoProvider.displayName = 'MesalvoProvider'
