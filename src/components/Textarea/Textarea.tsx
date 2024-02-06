import type { ComponentProps } from 'react'
import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import { HelperText } from '../HelperText'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import { Label } from '../Label'
import type { BaseInputsProps } from '../Input/props'

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref' | 'size'>, BaseInputsProps {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      color = ColorsEnum.primary,
      helperText,
      leftComponent,
      rightComponent,
      size = MainSizesEnum.md,
      theme: customTheme = {},
      label,
      labelPosition = 'top',
      border = false,
      labelClassName = '',
      innerClassName = '',
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
            <textarea
              ref={ref}
              name={randomId}
              id={randomId}
              className={twMerge(
                theme.field.input.base,
                theme.field.input.multiline.on,
                theme.field.input.border[border ? 'on' : 'off'],
                theme.field.input.colors[color],
                theme.field.input.sizes[size],
                theme.field.input.withIcon[leftComponent ? 'on' : 'off'],
                theme.field.input.withRightIcon[rightComponent ? 'on' : 'off'],
                innerClassName,
              )}
              {...props}
            />

            {helperText && <HelperText color={color}>{helperText}</HelperText>}
          </div>
        </div>
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
