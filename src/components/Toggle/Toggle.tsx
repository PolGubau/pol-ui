import React from 'react'
import { cn, mergeDeep, rippleClass } from '../../helpers'
import { ColorsEnum, type Colors, type DeepPartial, type RoundedSizes } from '../../types'
import { getTheme } from '../../theme-store'
import type { ToggleTheme } from './theme'
import { useRipple } from '../../hooks'

export interface ToggleProps extends Omit<React.ComponentProps<'button'>, 'color' | 'onClick'> {
  active?: boolean
  children: React.ReactNode
  rounded?: RoundedSizes
  theme?: DeepPartial<ToggleTheme>
  color?: Colors
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * @name Toggle
 * @description A simple toggle component that can be used to switch between two states as a button
 * @param {boolean} [active] - The state of the toggle
 * @param {React.ReactNode} children - The content of the toggle
 * @param {RoundedSizes} [rounded] - The rounded size of the toggle
 * @param {DeepPartial<ToggleTheme>} [theme] - The theme of the toggle
 * @param {Colors} [color] - The color of the toggle
 * @param {boolean} [disabled] - The state of the toggle
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - The props of the button
 * @returns {React.FC<ToggleProps>}
 * @example
 * <Toggle onClick={toggle} active={value}>
 *  <TbItalic />
 * </Toggle>
 *
 * @returns {JSX.Element}
 */
export const Toggle: React.FC<ToggleProps> = ({
  active = false,
  children,
  color = ColorsEnum.primary,
  rounded = 'xl',
  theme: customTheme = {},
  disabled = false,
  className,
  onClick,
  ...props
}: ToggleProps): JSX.Element => {
  const theme = mergeDeep(getTheme().toggle, customTheme)
  const [ripple, event] = useRipple({
    disabled: disabled,
    opacity: 0.4,
    className: rippleClass(color),
  })
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onPointerDown={event}
      ref={ripple}
      className={cn(
        theme.base,
        theme.rounded[rounded],

        active ? theme.active.on.base : theme.active.off.base,
        active ? theme.active.on.colors[color] : theme.active.off.colors[color],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
