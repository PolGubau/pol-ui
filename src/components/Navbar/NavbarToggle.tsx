'use client'

import type { ComponentProps, FC } from 'react'
import { FaBars } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial } from '../../types/types'
import { useNavbarContext } from './NavbarContext'

export interface NavbarToggleTheme {
  base: string
  icon: string
}

export interface NavbarToggleProps extends ComponentProps<'button'> {
  barIcon?: FC<ComponentProps<'svg'>>
  theme?: DeepPartial<NavbarToggleTheme>
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = FaBars,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isOpen, setIsOpen } = useNavbarContext()

  const theme = mergeDeep(rootTheme.toggle, customTheme)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button data-testid="ui-navbar-toggle" onClick={handleClick} className={twMerge(theme.base, className)} {...props}>
      <span className="sr-only">Open main menu</span>
      <BarIcon aria-hidden className={theme.icon} />
    </button>
  )
}
