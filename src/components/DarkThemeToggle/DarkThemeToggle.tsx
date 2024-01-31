'use client'

import type { ComponentProps, FC } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { useThemeMode } from '../../hooks/use-theme-mode'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial } from '../../types/types'
import type { DarkThemeToggleTheme } from './theme'
import { Button } from '../Button'
import { ColorsEnum } from '../../types'

export interface DarkThemeToggleProps extends Omit<ComponentProps<'button'>, 'color'> {
  iconDark?: string
  iconLight?: string
  theme?: DeepPartial<DarkThemeToggleTheme>
  ref?: React.Ref<HTMLButtonElement>
  color?: Colors
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ref,
  color = ColorsEnum.primary,
  ...props
}) => {
  const { computedMode, toggleMode } = useThemeMode()

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme)

  return (
    <Button
      ref={ref}
      aria-label="Toggle dark mode"
      data-testid="dark-theme-toggle"
      className={twMerge(theme.root.base, className)}
      onClick={toggleMode}
      color={color}
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
