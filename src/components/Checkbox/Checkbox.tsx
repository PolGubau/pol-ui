import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { ColorsEnum } from '../PoluiProvider/enums'

export interface CheckboxTheme {
  root: CheckboxRootTheme
}
export interface CheckboxRootTheme {
  base: string
  color: Colors
}

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  theme?: DeepPartial<CheckboxTheme>
  color?: keyof Colors
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = ColorsEnum.primary, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme)

    return (
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(theme.root.base, theme.root.color[color], className)}
        {...props}
      />
    )
  },
)

Checkbox.displayName = 'Checkbox'
