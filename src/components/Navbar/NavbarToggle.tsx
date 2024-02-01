'use client'

import type { ComponentProps, FC } from 'react'
import { FaBars } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { Colors, DeepPartial } from '../../types/types'
import { useNavbarContext } from './NavbarContext'
import { IconButton } from '../IconButton'

export interface NavbarToggleTheme {
  base: string
  icon: string
}

export interface NavbarToggleProps extends Omit<ComponentProps<'button'>, 'color'> {
  barIcon?: FC<ComponentProps<'svg'>>
  theme?: DeepPartial<NavbarToggleTheme>
  color?: Colors
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
    <IconButton
      data-testid="ui-navbar-toggle"
      onClick={handleClick}
      className={twMerge(theme.base, className)}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <BarIcon aria-hidden className={theme.icon} />
    </IconButton>
  )
}
