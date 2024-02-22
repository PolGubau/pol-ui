'use client'

import type { ComponentProps, FC } from 'react'
import { useMemo, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { NavbarContext } from './navbar-context'
import type { NavbarTheme } from './theme'
import { Hamburguer } from '../Hamburguer'
import { NavbarCollapse } from './navbar-collapse'
export interface NavbarLink extends Omit<ComponentProps<'a'>, 'content'> {
  href: string
  label: string
  content?: React.ReactNode
  active?: boolean
}
export interface NavbarProps extends Omit<ComponentProps<'nav'>, 'children'> {
  menuOpen?: boolean
  theme?: DeepPartial<NavbarTheme>
  rightContent?: React.ReactNode
  leftContent?: React.ReactNode
  links?: NavbarLink[]
}

export const Navbar: FC<NavbarProps> = ({
  className,
  menuOpen = false,
  theme: customTheme = {},
  rightContent,
  leftContent,
  links,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen)

  const theme = mergeDeep(getTheme().navbar, customTheme)
  const value = useMemo(() => ({ theme, isOpen, setIsOpen }), [theme, isOpen, setIsOpen])
  return (
    <NavbarContext.Provider value={value}>
      <nav className={twMerge(theme.root.base, className)} {...props}>
        {leftContent}
        <NavbarCollapse links={links} />
        {rightContent}

        <Hamburguer
          open={isOpen}
          data-testid="ui-navbar-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          className={twMerge(theme.toggle.base, className)}
        />
      </nav>
    </NavbarContext.Provider>
  )
}
