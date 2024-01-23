import type { ComponentProps, FC, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { HelperText } from '../HelperText'
import { ColorsEnum, MainSizesEnum } from '../PoluiProvider/enums'
import { MainSizes } from '../PoluiProvider/PoluiTheme'
import { InputTheme } from './InputTypes'

export interface InputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  addon?: ReactNode
  color?: keyof Colors
  helperText?: ReactNode
  icon?: FC<ComponentProps<'svg'>>
  rightIcon?: FC<ComponentProps<'svg'>>
  shadow?: boolean
  sizing?: keyof MainSizes
  theme?: DeepPartial<InputTheme>
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      addon,
      className,
      color = ColorsEnum.primary,
      helperText,
      icon: Icon,
      rightIcon: RightIcon,
      shadow,
      sizing = MainSizesEnum.md,
      theme: customTheme = {},
      label,
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().textInput, customTheme)
    const randomId = useId()

    return (
      <>
        <div className={twMerge(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}

          <div className={theme.field.base}>
            {Icon && (
              <div className={twMerge(theme.field.icons.base, theme.field.icons.left)}>
                <Icon className={theme.field.icons.svg} />
              </div>
            )}
            {RightIcon && (
              <div data-testid="right-icon" className={twMerge(theme.field.icons.base, theme.field.icons.right)}>
                <RightIcon className={theme.field.icons.svg} />
              </div>
            )}
            <input
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? 'on' : 'off'],
                theme.field.input.withRightIcon[RightIcon ? 'on' : 'off'],
                theme.field.input.withAddon[addon ? 'on' : 'off'],
                theme.field.input.withShadow[shadow ? 'on' : 'off'],
              )}
              {...props}
              ref={ref}
            />
            <label
              htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
              className={twMerge(theme.field.input.label.base, className)}
            >
              {label}
            </label>
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    )
  },
)

Input.displayName = 'Input'
