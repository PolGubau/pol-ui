import type { ComponentProps, FC, ReactNode } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, ColorsType, DeepPartial, IBoolean, MainSizes, MainSizesType } from '../../types/types'
import { HelperText } from '../HelperText'
import { ColorsEnum, MainSizesEnum } from '../../types'

export interface SelectTheme {
  base: string
  addon: string
  field: {
    base: string
    icon: {
      base: string
      svg: string
    }
    select: {
      base: string
      withIcon: IBoolean
      withAddon: IBoolean
      withShadow: IBoolean
      sizes: MainSizesType
      colors: ColorsType
    }
  }
}

export interface SelectProps extends Omit<ComponentProps<'select'>, 'color' | 'ref'> {
  addon?: ReactNode
  color?: Colors
  helperText?: ReactNode
  icon?: FC<ComponentProps<'svg'>>
  shadow?: boolean
  sizing?: MainSizes
  theme?: DeepPartial<SelectTheme>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      addon,
      children,
      className,
      color = ColorsEnum.primary,
      helperText,
      icon: Icon,
      shadow,
      sizing = MainSizesEnum.md,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().select, customTheme)

    return (
      <div className={twMerge(theme.base, className)}>
        {addon && <span className={theme.addon}>{addon}</span>}
        <div className={theme.field.base}>
          {Icon && (
            <div className={theme.field.icon.base}>
              <Icon className={theme.field.icon.svg} />
            </div>
          )}
          <select
            className={twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.sizes[sizing],
              theme.field.select.withIcon[Icon ? 'on' : 'off'],
              theme.field.select.withAddon[addon ? 'on' : 'off'],
              theme.field.select.withShadow[shadow ? 'on' : 'off'],
            )}
            {...props}
            ref={ref}
          >
            {children}
          </select>
          {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </div>
      </div>
    )
  },
)

Select.displayName = 'Select'
