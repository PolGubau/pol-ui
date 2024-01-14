'use client'

import type { ComponentProps, FC } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { useThemeMode } from '../../hooks/use-theme-mode'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { DarkThemeToggleTheme } from './theme'
import { Button } from '../Button'

export interface DarkThemeToggleProps extends ComponentProps<'button'> {
  iconDark?: string
  iconLight?: string
  theme?: DeepPartial<DarkThemeToggleTheme>
  ref?: any
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ref,
  ...props
}) => {
  const { computedMode, toggleMode } = useThemeMode()

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme)

  return (
    <Button
      aria-label="Toggle dark mode"
      data-testid="dark-theme-toggle"
      className={twMerge(theme.root.base, className)}
      onClick={toggleMode}
      {...props}
    >
      <IconDark
        aria-label="Currently dark mode"
        data-active={computedMode === 'dark'}
        className={twMerge(theme.root.icon, 'hidden dark:block')}
      />
      <IconLight
        aria-label="Currently light mode"
        data-active={computedMode === 'light'}
        className={twMerge(theme.root.icon, 'dark:hidden')}
      />
    </Button>
  )
}

DarkThemeToggle.displayName = 'DarkThemeToggle'
