import type { ElementType } from 'react'
import React from 'react'
import { ColorsEnum, type Colors, type DeepPartial, type RoundedSizes } from '../../types'
import { IconButton } from '../IconButton'
import { cn, colorToTailwind, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { ChipTheme } from './theme'
import { useRipple } from '../../hooks'
import type { MinimalEvent } from '../../hooks/use-ripple/use-ripple'

const BASE_COMPONENT = 'li'
type BASE_COMPONENT_TYPE = typeof BASE_COMPONENT

export interface ChipAction extends React.HTMLAttributes<HTMLButtonElement> {
  element?: React.ReactNode
  icon?: React.ReactNode
}

export type ChipProps<T extends ElementType = BASE_COMPONENT_TYPE> = {
  as?: T
  children: React.ReactNode
  label?: string
  onClick?: (e: React.MouseEvent) => void
  color?: Colors
  disabled?: boolean
  rounded?: RoundedSizes
  actions?: ChipAction[]
  theme?: DeepPartial<ChipTheme>
  className?: string
  elementClassName?: string
  textClassName?: string
}

export const Chip = <T extends ElementType = BASE_COMPONENT_TYPE>({
  as: BaseComponent,
  children,
  label = undefined,
  onClick = undefined,
  actions = [],
  disabled = false,
  color = ColorsEnum.secondary,
  rounded = 'full',
  theme: customTheme = {},
  className,
  elementClassName,
  textClassName,
}: ChipProps<T>) => {
  const Component = onClick ? 'button' : BaseComponent ?? BASE_COMPONENT
  const theme = mergeDeep(getTheme().chip, customTheme)

  const [ripple, event] = useRipple({
    disabled: disabled,
    opacity: 0.5,
    className: colorToTailwind(color),
  })

  return (
    <Component
      className={cn(
        theme.base,
        actions.length === 0 ? theme.withoutAction : theme.withAction,
        theme.rounded[rounded],
        theme.color[color],
        disabled && theme.disabled,
        !disabled && onClick && theme.clickable,
        className,
      )}
      onPointerDown={(e: MinimalEvent) => onClick && event(e)}
      ref={onClick && ripple}
      onClick={onClick}
    >
      <p className={cn(theme.text, textClassName)}>{label ?? children}</p>

      {actions.map(({ onClick, element, icon }, index) => (
        <>
          {icon && (
            <IconButton key={index} size="xs" onClick={onClick} disabled={disabled}>
              {icon}
            </IconButton>
          )}
          {element && (
            <div key={index} className={cn(theme.element, elementClassName)}>
              {element}
            </div>
          )}
        </>
      ))}
    </Component>
  )
}
