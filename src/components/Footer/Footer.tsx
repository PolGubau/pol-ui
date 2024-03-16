import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'

import type { FooterTheme } from './theme'

export interface FooterProps extends ComponentProps<'footer'> {
  container?: boolean
  theme?: DeepPartial<FooterTheme>
}

/**
 * 
 * @name Footer
 * @description The Footer component is used to display the footer of a page, it is usually used to display the author, the date, and the contact information of the page.
 * @returns React.FC<FooterProps>
 */
export const Footer: FC<FooterProps> = ({
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
      className={twMerge(theme.root.base, container && theme.root.container, className)}
      {...props}
    >
      {children}
    </footer>
  )
}
