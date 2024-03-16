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
import { AnimatePresence, motion } from 'framer-motion'

export interface DarkThemeToggleProps extends Omit<ComponentProps<'button'>, 'color'> {
  iconDark?: string
  iconLight?: string
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
 * @returns React.FC<DarkThemeToggleProps>
 *
 */
export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = TbSun,
  iconLight: IconLight = TbMoon,
  hasMotion = true,
  label = 'Toggle dark mode',
  color = ColorsEnum.primary,
  ...props
}) => {
  const { computedMode, toggleMode } = useThemeMode()

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme)

  const iconMotion = {
    initial: hasMotion ? { opacity: 0, y: 50 } : {},
    animate: hasMotion ? { opacity: 1, y: 0 } : {},
    exit: hasMotion ? { opacity: 0, y: -50 } : {},
  }

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
      <AnimatePresence mode="wait">
        {computedMode === 'dark' && (
          <motion.div {...iconMotion}>
            <IconDark
              aria-label="Currently dark mode"
              data-active={computedMode === 'dark'}
              className={twMerge(theme.root.icon)}
            />
          </motion.div>
        )}
        {computedMode === 'light' && (
          <motion.div {...iconMotion}>
            <IconLight
              aria-label="Currently light mode"
              data-active={computedMode === 'light'}
              className={twMerge(theme.root.icon, 'dark:hidden')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </IconButton>
  )
}

DarkThemeToggle.displayName = 'DarkThemeToggle'
