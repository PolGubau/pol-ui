'use client'

import type { ComponentProps, FC } from 'react'
import { cn } from '../../helpers'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial, Orientation } from '../../types/types'
import type { DividerTheme } from './theme'
import { OrientationsEnum } from '../../types'

export interface DividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<DividerTheme>
  /**
   * Either `vertical` or `horizontal`. Defaults to `horizontal`.
   */
  orientation?: Orientation
  /**
   * Whether or not the component is purely decorative. When true, accessibility-related attributes
   * are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean
}
const DEFAULT_ORIENTATION = OrientationsEnum.horizontal
/**
 *
 * @name Divider
 * @description The Divider component is used to separate content within a section or a page, and it is used to create a visual separation between different sections of a page.
 * @returns React.FC<DividerProps>
 */
export const Divider: FC<DividerProps> = ({
  className,
  theme: customTheme = {},
  orientation = DEFAULT_ORIENTATION,
  decorative,
  ...props
}) => {
  const ariaOrientation = orientation === 'vertical' ? orientation : undefined
  const semanticProps = decorative ? { role: 'none' } : { 'aria-orientation': ariaOrientation, role: 'separator' }
  const theme = mergeDeep(getTheme().divider, customTheme)
  return (
    <div
      data-orientation={orientation}
      {...semanticProps}
      data-testid="divider"
      className={cn(theme.base, theme.orientation[orientation], className)}
      {...props}
    />
  )
}
