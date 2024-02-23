'use client'

import type { ComponentProps, FC } from 'react'
import type { DeepPartial, IBoolean } from '../../types/types'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '../NavigationMenu'
import { cn } from '../../helpers'
import { Link } from '../Link'
import type { NavbarProps } from './Navbar'
export interface NavbarCollapseTheme {
  base: string
  hidden: IBoolean
}

export interface NavbarCollapseProps extends ComponentProps<'div'> {
  theme?: DeepPartial<NavbarCollapseTheme>
  links?: NavbarProps['links']
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ links = [], className, ...props }) => {
  return (
    <div className={cn('flex gap-4', className)} {...props}>
      <NavigationMenu>
        {links.map((link, index) => {
          const { label, content, active, ...rest } = link

          return (
            <NavigationMenuItem key={index}>
              {link.content ? (
                <>
                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>{content}</NavigationMenuContent>
                </>
              ) : (
                <Link
                  {...rest}
                  underline={false}
                  className={cn('', '', {
                    'text-primary-700': active,
                  })}
                >
                  {label}
                </Link>
              )}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenu>
    </div>
  )
}
