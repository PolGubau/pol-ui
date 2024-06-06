import type { FC } from 'react'
import type { ThemeMode } from '../../hooks/use-theme-mode'
import { ThemeInit } from '../../theme-store/init'
import type { CustomPoluiTheme } from './PoluiTheme'

/**
 * @name ThemeProps
 * @description Interface to define the props of the PoluiProvider theme component
 * @author Pol Gubau - https://polgubau.com
 * @property {ThemeMode} mode - The theme mode to be used
 * @property {CustomPoluiTheme} theme - The custom theme to be used
 */
export interface ThemeProps {
  mode?: ThemeMode
  theme?: CustomPoluiTheme
}

/**
 * @name ProviderProps
 * @description Interface to define the props of the PoluiProvider component
 * @property {React.ReactNode} children - The children to be rendered
 * @property {ThemeProps} theme - The theme to be used
 * @author Pol Gubau - https://polgubau.com

 */
interface ProviderProps {
  children: React.ReactNode
  theme?: ThemeProps
}

/**
 * @name PoluiProvider
 * @description The PoluiProvider component is a wrapper component that provides the theme to all the components in the Polui library. It also initializes the theme mode and the custom theme if provided.
 * @param {ProviderProps} { children, theme} 
 * @returns {JSX.Element} The PoluiProvider component
 * @author Pol Gubau - https://polgubau.com

 */
export const PoluiProvider: FC<ProviderProps> = ({ children, theme }: ProviderProps): JSX.Element => {
  return (
    <>
      <ThemeInit mode={theme?.mode ?? 'auto'} theme={theme?.theme} />
      {children}
    </>
  )
}

// Set display name for PoluiProvider component
PoluiProvider.displayName = 'PoluiProvider'
