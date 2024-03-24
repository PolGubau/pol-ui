'use client'

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
/**
 *  Chip component
 * @description The chip component is used to display information in a compact way and can be used to trigger actions when clicked or to display actions when hovered over. It can be used to display tags, categories, actions...
 *  @param {ElementType} props.as - The component to render
 * @param {React.ReactNode} props.children - The content of the chip
 * @param {string} props.label - The label of the chip
 * @param {(e: React.MouseEvent) => void} props.onClick - The function to call when the chip is clicked
 * @param {Colors} props.color - The color of the chip
 * @param {boolean} props.disabled - If the chip is disabled
 * @param {RoundedSizes} props.rounded - The rounded size of the chip
 * @param {ChipAction[]} props.actions - The actions of the chip
 * @param {DeepPartial<ChipTheme>} props.theme - The theme of the chip
 * @param {string} props.className - The class name of the chip
 * @param {string} props.elementClassName - The class name of the element
 * @param {string} props.textClassName - The class name of the text
 * @returns
 * @example
 *
 * <Chip
 *  label="Chip"
 * color={ColorsEnum.primary}
 * rounded="md"
 * actions={[
 *  {
 *   icon: <Icon name="close" />,
 *  onClick: () => console.log('close'),
 * },
 * ]}
 * />
 *
 * @returns <Chip />
 */

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

      {/* The actions of the chip will be displayed as icons or elements */}
      {actions.map(({ onClick, element, icon }, index) => (
        <>
          {icon && (
            <IconButton
              key={index}
              size="xs"
              onClick={e => {
                e.stopPropagation()
                onClick?.(e)
              }}
              disabled={disabled}
            >
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
