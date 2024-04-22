import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import { HelperText } from '../HelperText'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import { Label } from '../Label'
import type { InputProps } from './props'

/**
 * @name Input
 * The Input component is a text input field that allows users to enter text. It can be used in forms, modals, and more.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      color = ColorsEnum.primary,
      helperText,
      onTextChange,
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
                innerClassName,
              )}
              onChange={e => {
                props.onChange?.(e)
                onTextChange?.(e.target.value)
              }}
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
