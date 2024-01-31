import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial } from '../../types/types'
import type { HelperTextTheme } from './theme'
import { ColorsEnum } from '../../types/enums'

export interface HelperTextProps extends Omit<ComponentProps<'p'>, 'color'> {
  color?: Colors
  theme?: DeepPartial<HelperTextTheme>
  value?: string
}

export const HelperText: FC<HelperTextProps> = ({
  children,
  className,
  color = ColorsEnum.secondary,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().helperText, customTheme)

  return (
    <p className={twMerge(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ''}
    </p>
  )
}

HelperText.displayName = 'HelperText'
