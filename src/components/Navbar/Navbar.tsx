'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { NavbarTheme } from './theme'
import { NavbarCollapse } from './navbar-collapse'
export interface NavbarLink extends Omit<ComponentProps<'a'>, 'content'> {
  href: string
  label: string
  content?: React.ReactNode
  active?: boolean
}
export interface NavbarProps extends Omit<ComponentProps<'nav'>, 'children'> {
  defaultOpen?: boolean
  theme?: DeepPartial<NavbarTheme>
  rightContent?: React.ReactNode
  leftContent?: React.ReactNode
  links?: NavbarLink[]
  linkClassName?: string
  hasHambuguer?: boolean
}

export const Navbar: FC<NavbarProps> = ({
  className,
  defaultOpen = false,
  theme: customTheme = {},
  rightContent,
  leftContent,
  linkClassName,
  links,
  hasHambuguer,
  ...props
}) => {
  const theme = mergeDeep(getTheme().navbar, customTheme)
  return (
    <nav className={twMerge(theme.root.base, className)} {...props}>
      {leftContent}
      <NavbarCollapse
        links={links}
        linkClassName={linkClassName}
        defaultOpen={defaultOpen}
        hasHambuguer={hasHambuguer}
      />
      {rightContent}
    </nav>
  )
}
