'use client'

import type { ComponentProps, FC } from 'react'
import type { DeepPartial, IBoolean } from '../../types/types'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '../NavigationMenu'
import { cn } from '../../helpers'
import { Link } from '../Link'
import type { NavbarProps } from './Navbar'
import { theme } from '../../theme'
import { useBoolean } from '../../hooks'
import { Modal } from '../Modal'
import { ListItem } from '../ListGroup'
import { Hamburguer } from '../Hamburguer'
export interface NavbarCollapseTheme {
  base: string
  hidden: IBoolean
}

export interface NavbarCollapseProps extends ComponentProps<'div'> {
  theme?: DeepPartial<NavbarCollapseTheme>
  links?: NavbarProps['links']
  linkClassName?: string
  defaultOpen?: boolean
  hasHambuguer?: boolean
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({
  links = [],
  linkClassName,
  className,
  defaultOpen = false,
  hasHambuguer = true,
  ...props
}) => {
  const { value, toggle } = useBoolean(defaultOpen)
  return (
    <>
      <div className="md:hidden">
        {hasHambuguer && (
          <Hamburguer
            open={value}
            data-testid="ui-navbar-toggle"
            aria-label="Toggle navigation"
            onClick={() => toggle()}
            className={cn(theme.toggle.base, className)}
          />
        )}
        <Modal show={value} onClose={toggle}>
          {links.map((link, index) => {
            return (
              <ListItem key={index} className={cn('flex flex-col gap-2')}>
                {link.label}
              </ListItem>
            )
          })}
        </Modal>
      </div>
      <div className={cn('hidden md:flex gap-4', className)} {...props}>
        <NavigationMenu>
          {links.map((link, index) => {
            const { label, content, active, ...rest } = link

            return (
              <NavigationMenuItem key={index}>
                {link.content ? (
                  <>
                    <NavigationMenuTrigger className={linkClassName}>{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>{content}</NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    {...rest}
                    underline={false}
                    className={cn(theme.navigationMenu.trigger.base, linkClassName, {
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
    </>
  )
}
