import type { ComponentProps, ElementType, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'

export interface LinkTheme {
  base: string
  href: string
}

export interface LinkProps extends ComponentProps<'a'> {
  as?: ElementType
  href: string
  theme?: DeepPartial<LinkTheme>
}

export const Link: FC<LinkProps> = ({
  as: Component = 'a',
  children,
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().link, customTheme)

  return (
    <Component href={href} className={twMerge(theme.base, theme.href, className)} {...props}>
      {children}
    </Component>
  )
}
