import type { ComponentProps, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { HelperText } from '../HelperText'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import type { MainSizes } from '../PoluiProvider/PoluiTheme'
import type { InputTheme } from './InputTypes'
import { Label } from '../Label'

export enum InputLabelPositionsEnum {
  top = 'top',
  left = 'left',
}
export type InputLabelPositions = keyof typeof InputLabelPositionsEnum
export interface BaseInputsProps {
  color?: keyof Colors
  helperText?: ReactNode
  leftComponent?: ReactNode
  rightComponent?: ReactNode
  size?: keyof MainSizes
  theme?: DeepPartial<InputTheme>
  border?: boolean
  label?: string
  labelPosition?: InputLabelPositions
  labelClassName?: string
  innerClassName?: string
}

export interface InputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'size'>, BaseInputsProps {
  addon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      addon,
      className,
      color = ColorsEnum.primary,
      helperText,
      leftComponent,
      rightComponent,
      size = MainSizesEnum.md,
      theme: customTheme = {},
      label,
      labelPosition = 'top',
      innerClassName,
      border = false,
      labelClassName = '',
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().textInput, customTheme)
    const randomId = useId()

    return (
      <div className={twMerge(theme.root.base, theme.root.labelPosition[labelPosition])}>
        {label && (
          <Label className={twMerge(theme.label, labelClassName)} htmlFor={randomId}>
            {label}
          </Label>
        )}
        <div className={twMerge(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={twMerge(theme.field.base)}>
            {leftComponent && (
              <div
                data-testid="left-icon"
                className={twMerge(theme.field.icons.base, theme.field.icons.svg, theme.field.icons.left)}
              >
                {leftComponent}
              </div>
            )}
            {rightComponent && (
              <div
                data-testid="right-icon"
                className={twMerge(theme.field.icons.base, theme.field.icons.svg, theme.field.icons.right)}
              >
                {rightComponent}
              </div>
            )}
            <input
              name={randomId}
              id={randomId}
              className={twMerge(
                theme.field.input.base,
                theme.field.input.multiline.off,
                theme.field.input.border[border ? 'on' : 'off'],
                theme.field.input.colors[color],
                theme.field.input.sizes[size],
                theme.field.input.withIcon[leftComponent ? 'on' : 'off'],
                theme.field.input.withRightIcon[rightComponent ? 'on' : 'off'],
                theme.field.input.withAddon[addon ? 'on' : 'off'],
                innerClassName,
              )}
              {...props}
              ref={ref}
            />{' '}
            {helperText && <HelperText color={color}>{helperText}</HelperText>}
          </div>
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'
