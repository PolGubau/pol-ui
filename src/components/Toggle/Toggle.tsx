import React from 'react'
import { cn, mergeDeep, rippleClass } from '../../helpers'
import { ColorsEnum, type Colors, type DeepPartial, type RoundedSizes } from '../../types'
import { getTheme } from '../../theme-store'
import type { ToggleTheme } from './theme'
import { useRipple } from '../../hooks'
export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: React.ReactNode
  rounded?: RoundedSizes
  theme?: DeepPartial<ToggleTheme>
  color?: Colors
  disabled?: boolean
}
export const Toggle: React.FC<ToggleProps> = ({
  active = false,
  children,
  color = ColorsEnum.primary,
  rounded = 'xl',
  theme: customTheme = {},
  disabled = false,
  ...props
}: ToggleProps) => {
  const theme = mergeDeep(getTheme().toggle, customTheme)
  const [ripple, event] = useRipple({
    disabled: disabled,
    opacity: 0.4,
    className: rippleClass(color),
  })
  return (
    <button
      disabled={disabled}
      onPointerDown={event}
      ref={ripple}
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
