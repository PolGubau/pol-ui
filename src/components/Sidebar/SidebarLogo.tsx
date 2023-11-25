'use client';

import type { ComponentProps, FC } from 'react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';
import { useSidebarContext } from './SidebarContext';
import React from 'react';
export interface SidebarLogoTheme {
  base: string;
  collapsed: IBoolean;
  img: string;
}

export interface SidebarLogoProps extends ComponentProps<'a'> {
  href: string;
  img: string;
  imgAlt?: string;
  theme?: DeepPartial<SidebarLogoTheme>;
}

export const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  className,
  href,
  img,
  imgAlt = '',
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();

  const theme = mergeDeep(rootTheme.logo, customTheme);

  return (
    <a aria-labelledby={`ui-sidebar-logo-${id}`} href={href} className={twMerge(theme.base, className)} {...props}>
      <img alt={imgAlt} src={img} className={theme.img} />
      <span className={theme.collapsed[isCollapsed ? 'on' : 'off']} id={`ui-sidebar-logo-${id}`}>
        {children}
      </span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
