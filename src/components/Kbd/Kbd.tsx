import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { KbdTheme } from './theme'

export interface KbdProps extends ComponentProps<'span'> {
  icon?: FC<ComponentProps<'svg'>>
  theme?: DeepPartial<KbdTheme>
}

export const Kbd: FC<KbdProps> = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().kbd, customTheme)

  return (
    <span className={twMerge(theme.root.base, className)} data-testid="ui-kbd" {...props}>
      {Icon && <Icon className={theme.root.icon} data-testid="ui-kbd-icon" />}
      {children}
    </span>
  )
}

Kbd.displayName = 'Kbd'
