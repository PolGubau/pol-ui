import React from 'react'
import { cn, mergeDeep } from '../../helpers'
import { ColorsEnum, type Colors, type DeepPartial, type RoundedSizes } from '../../types'
import { getTheme } from '../../theme-store'
import type { ToggleTheme } from './theme'
export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: React.ReactNode
  rounded?: RoundedSizes
  theme?: DeepPartial<ToggleTheme>
  color?: Colors
}
export const Toggle: React.FC<ToggleProps> = ({
  active = false,
  children,
  color = ColorsEnum.primary,
  rounded = 'xl',
  theme: customTheme = {},
  ...props
}: ToggleProps) => {
  const theme = mergeDeep(getTheme().toggle, customTheme)

  return (
    <button
      className={cn(
        theme.base,
        theme.rounded[rounded],

        active ? theme.active.on.base : theme.active.off.base,
        active ? theme.active.on.colors[color] : theme.active.off.colors[color],
      )}
      {...props}
    >
      {children}
    </button>
  )
}
