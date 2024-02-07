import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'

import type { FooterTheme } from './theme'

export interface FooterProps extends ComponentProps<'footer'> {
  bgDark?: boolean
  container?: boolean
  theme?: DeepPartial<FooterTheme>
}

export const Footer: FC<FooterProps> = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer, customTheme)

  return (
    <footer
      data-testid="ui-footer"
      className={twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className)}
      {...props}
    >
      {children}
    </footer>
  )
}
