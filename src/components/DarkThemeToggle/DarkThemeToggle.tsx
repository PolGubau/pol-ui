'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { useThemeMode } from '../../hooks/use-theme-mode'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial } from '../../types/types'
import type { DarkThemeToggleTheme } from './theme'
import { ColorsEnum } from '../../types'
import { TbMoon, TbSun } from 'react-icons/tb'
import { IconButton } from '../IconButton'

export interface DarkThemeToggleProps extends Omit<ComponentProps<'button'>, 'color'> {
  iconDark?: FC<ComponentProps<'svg'>>
  iconLight?: FC<ComponentProps<'svg'>>
  theme?: DeepPartial<DarkThemeToggleTheme>
  ref?: React.Ref<HTMLButtonElement>
  color?: Colors
  hasMotion?: boolean
  label?: string
}

/**
 *
 *
 * @name DarkThemeToggle
 * @description The DarkThemeToggle component is used to toggle between dark and light mode, you can assign your own icons or use the default ones (sun and moon)
 * @param {string} props.iconDark - The icon for dark mode
 * @param {string} props.iconLight - The icon for light mode
 * @param {DeepPartial<DarkThemeToggleTheme>} props.theme - The theme of the dark theme toggle
 *
 *
 * @returns JSX.Element
 *
 */
export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = TbSun,
  iconLight: IconLight = TbMoon,
  label = 'Toggle dark mode',
  color = ColorsEnum.primary,
  ...props
}: DarkThemeToggleProps) => {
  const { computedMode, toggleMode } = useThemeMode()

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme)

  return (
    <IconButton
      label={label}
      aria-label={label}
      data-active={computedMode === 'dark'}
      data-testid="dark-theme-toggle"
      className={twMerge(theme.root.base, className)}
      onClick={toggleMode}
      color={color}
      {...props}
    >
      {computedMode === 'dark' && (
        <IconDark
          aria-label="Currently dark mode"
          data-active={computedMode === 'dark'}
          className={twMerge(theme.root.icon)}
        />
      )}
      {computedMode === 'light' && (
        <IconLight
          aria-label="Currently light mode"
          data-active={computedMode === 'light'}
          className={twMerge(theme.root.icon, 'dark:hidden')}
        />
      )}
    </IconButton>
  )
}

DarkThemeToggle.displayName = 'DarkThemeToggle'
