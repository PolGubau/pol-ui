"use client"

import type { ComponentProps, FC } from "react"
import { TbMoon, TbSun } from "react-icons/tb"
import { twMerge } from "tailwind-merge"

import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { useThemeMode } from "../../hooks/use-theme-mode"
import { getTheme } from "../../theme-store"
import { IconButton, IconButtonProps } from "../IconButton"

export interface DarkThemeToggleProps extends IconButtonProps {
  iconDark?: FC<ComponentProps<"svg">>
  iconLight?: FC<ComponentProps<"svg">>
  ref?: React.Ref<HTMLButtonElement>
  hasMotion?: boolean
}

/**
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
  label = "Toggle dark mode",
  ...props
}: DarkThemeToggleProps) => {
  const { computedMode, toggleMode } = useThemeMode()

  return (
    <IconButton data-testid="dark-theme-toggle" onClick={toggleMode} {...props}>
      {computedMode === "dark" && (
        <IconDark
          aria-label="Currently dark mode"
          data-active={computedMode === "dark"}
        />
      )}
      {computedMode === "light" && (
        <IconLight
          aria-label="Currently light mode"
          data-active={computedMode === "light"}
          className={"dark:hidden"}
        />
      )}
    </IconButton>
  )
}

DarkThemeToggle.displayName = "DarkThemeToggle"
