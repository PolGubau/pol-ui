'use client';
import React from 'react';
import type { ComponentProps, FC } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';
import type { NavbarBrandTheme } from './NavbarBrand';
import { NavbarBrand } from './NavbarBrand';
import type { NavbarCollapseTheme } from './NavbarCollapse';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import type { NavbarLinkTheme } from './NavbarLink';
import { NavbarLink } from './NavbarLink';
import type { NavbarToggleTheme } from './NavbarToggle';
import { NavbarToggle } from './NavbarToggle';

export interface NavbarTheme {
  root: NavbarRootTheme;
  brand: NavbarBrandTheme;
  collapse: NavbarCollapseTheme;
  link: NavbarLinkTheme;
  toggle: NavbarToggleTheme;
}

export interface NavbarRootTheme {
  base: string;
  rounded: IBoolean;
  bordered: IBoolean;
  inner: {
    base: string;
    fluid: IBoolean;
  };
}

export interface NavbarComponentProps extends ComponentProps<'nav'> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
  theme?: DeepPartial<NavbarTheme>;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = mergeDeep(getTheme().navbar, customTheme);

  return (
    <NavbarContext.Provider value={{ theme, isOpen, setIsOpen }}>
      <nav
        className={twMerge(
          theme.root.base,
          theme.root.bordered[border ? 'on' : 'off'],
          theme.root.rounded[rounded ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        <div className={twMerge(theme.root.inner.base, theme.root.inner.fluid[fluid ? 'on' : 'off'])}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
