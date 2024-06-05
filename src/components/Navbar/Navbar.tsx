'use client'

import type { ComponentProps, FC } from 'react'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { NavbarTheme } from './theme'
import { NavbarCollapse } from './navbar-collapse'
import { cn } from '../../helpers'
export interface NavbarLink extends Omit<ComponentProps<'a'>, 'content'> {
  href: string
  label: string
  content?: JSX.Element
  active?: boolean
}
export interface NavbarProps extends Omit<ComponentProps<'nav'>, 'children'> {
  theme?: DeepPartial<NavbarTheme>
  rightContent?: JSX.Element
  leftContent?: JSX.Element
  links?: NavbarLink[]
  linkClassName?: string
}

/**
 * @name Navbar
 * @description The Navbar component is used to display a navigation bar in the top of the page, it is usually used to navigate to different pages or sections of the same page.
 * @returns React.FC<NavbarProps>
 */

export const Navbar: FC<NavbarProps> = ({
  className,
  theme: customTheme = {},
  rightContent,
  leftContent,
  linkClassName,
  links,
  ...props
}) => {
  const theme = mergeDeep(getTheme().navbar, customTheme)
  return (
    <nav className={cn(theme.base, className)} {...props}>
      {leftContent}
      <NavbarCollapse links={links} linkClassName={linkClassName} />
      {rightContent}
    </nav>
  )
}
