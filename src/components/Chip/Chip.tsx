import type { ElementType } from 'react'
import React from 'react'
import { ColorsEnum, type Colors, type DeepPartial, type MainSizes, type RoundedSizes } from '../../types'
import { IconButton } from '../IconButton'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { ChipTheme } from './theme'

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
  onClick?: () => void

  color?: Colors
  size?: MainSizes
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
  const Component = BaseComponent ?? BASE_COMPONENT
  const theme = mergeDeep(getTheme().chip, customTheme)

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
