import type { ComponentProps, ReactNode } from 'react'
import type { Colors, DeepPartial, MainSizes } from '../../types'
import type { InputTheme } from './themeTypes'

/**
 * @name InputLabelPositionsEnum
 * @description Enum for different label positions in the BaseInputs component.
 * @enum [top, left]
 */
export enum InputLabelPositionsEnum {
  top = 'top',
  left = 'left',
}

/**
 * @name InputLabelPositions
 * @description Type for label positions in the BaseInputs component.
 * @enum [top, left]
 */
export type InputLabelPositions = keyof typeof InputLabelPositionsEnum

/**
 * @name BaseInputsProps
 * @description Base props for input components.
 */
export interface BaseInputsProps {
  /**
   * @name color
   * @description Optional prop to specify the color of the input.
   * @default null
   * @type Colors
   * @enum [primary, secondary, success, danger, warning, info, light, dark, link]
   * @example
   * ```tsx
   * <BaseInputs color="primary" />
   * ```
   */
  color?: Colors

  /**
   * @name helperText
   * @description Optional prop to provide helper text for the input.
   * @default null
   * @type ReactNode
   * @example
   * ```tsx
   * <BaseInputs helperText="This is a helper text" />
   * ```
   */
  helperText?: ReactNode

  /**
   * @name leftComponent
   * @description Optional prop to add a component to the left of the input.Recommended to icons
   * @default null
   * @type ReactNode
   * @example
   * ```tsx
   * <BaseInputs leftComponent={<RandomIcon />} />
   * ```
   */
  leftComponent?: ReactNode

  /**
   * @name rightComponent
   * @description Optional prop to add a component to the right of the input. Recommended to icons
   * @default null
   * @type ReactNode
   * @example
   * ```tsx
   * <BaseInputs rightComponent={<RandomIcon />} />
   * ```
   */
  rightComponent?: ReactNode

  /**
   * @name size
   * @description Optional prop to specify the size of the input.
   * @default null
   * @type MainSizes
   * @enum [xs, sm, md, lg, xl]
   * @example
   * ```tsx
   * <BaseInputs size="md" />
   * ```
   */
  size?: MainSizes

  /**
   * @name theme
   * @description Optional prop to change the theme of the input.
   * @default {}
   * @type DeepPartial<InputTheme>
   * @example
   * ```tsx
   * <BaseInputs theme={{ color: { primary: 'bg-red-500' } }} />
   * ```
   */
  theme?: DeepPartial<InputTheme>

  /**
   * @name border
   * @description Optional prop to add a border to the input.
   * @default false
   * @type boolean
   * @example
   * ```tsx
   * <BaseInputs border />
   * ```
   */
  border?: boolean

  /**
   * @name label
   * @description Optional prop to add a label to the input.
   * @default null
   * @type string
   * @example
   * ```tsx
   * <BaseInputs label="Username" />
   * ```
   */
  label?: string

  /**
   * @name labelPosition
   * @description Optional prop to specify the position of the label.
   * @default top
   * @type InputLabelPositions
   * @enum [top, left]
   * @example
   * ```tsx
   * <BaseInputs label="Username" labelPosition="left" />
   * ```
   */
  labelPosition?: InputLabelPositions

  /**
   * @name labelClassName
   * @description Optional prop to add additional classes to the label.
   * @default ''
   * @type string
   * @example
   * ```tsx
   * <BaseInputs label="Username" labelClassName="text-red-500" />
   * ```
   */
  labelClassName?: string

  /**
   * @name innerClassName
   * @description Optional prop to add additional classes to the inner input container.
   * @default ''
   * @type string
   * @example
   * ```tsx
   * <BaseInputs innerClassName="border-red-500" />
   * ```
   */
  innerClassName?: string

  onTextChange?: (text: string) => void
}

/**
 * @name InputProps
 * @description Props for the Input component.
 * @type BaseInputsProps
 * @property addon `ReactNode`
 */
export interface InputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'size'>, BaseInputsProps {}
