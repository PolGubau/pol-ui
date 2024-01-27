import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { ColorsEnum } from '../../types/enums'
import type { LabelTheme } from './theme'

export interface LabelProps extends Omit<ComponentProps<'label'>, 'color'> {
  color?: keyof Colors
  disabled?: boolean
  theme?: DeepPartial<LabelTheme>
  value?: string
  className?: string
}

export const Label: FC<LabelProps> = ({
  children,
  color = ColorsEnum.secondary,
  disabled = false,
  theme: customTheme = {},
  value,
  className,
  ...props
}) => {
  const theme: LabelTheme = mergeDeep(getTheme().label, customTheme)

  return (
    <label
      className={twMerge(theme.base, theme.colors[color], disabled && theme.disabled, className)}
      data-testid="ui-label"
      {...props}
    >
      {value ?? children ?? ''}
    </label>
  )
}

Label.displayName = 'Label'
