import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial } from '../../types/types'
import { ColorsEnum } from '../../types/enums'
import type { LabelTheme } from './theme'

export interface LabelProps extends Omit<ComponentProps<'label'>, 'color'> {
  color?: Colors
  disabled?: boolean
  theme?: DeepPartial<LabelTheme>
  value?: string
  className?: string
}

/**
 * @name Label
 * @description The Label component is used to display a label to the user in a form or any other component that needs it.
 * @returns React.FC<LabelProps>
 */
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
