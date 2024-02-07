import type { ComponentProps, ElementType, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { FooterLinkGroupTheme } from './theme'

export interface FooterLinkGroupProps extends ComponentProps<'ul'> {
  col?: boolean
  theme?: DeepPartial<FooterLinkGroupTheme>
  titleAs?: ElementType
  title?: string
  titleClassname?: string
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  titleAs: Component = 'h2',
  title,
  className,
  col = false,
  theme: customTheme = {},
  titleClassname,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink, customTheme)

  return (
    <div className="flex flex-col text-center ">
      {title && (
        <Component data-testid="ui-footer-title" className={twMerge(theme.title, titleClassname)}>
          {title}
        </Component>
      )}
      <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
        {children}
      </ul>
    </div>
  )
}
