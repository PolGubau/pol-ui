'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useSidebarContext } from './SidebarContext';
import React from 'react';
export interface SidebarItemsTheme {
  base: string;
}

export interface SidebarItemsProps extends ComponentProps<'div'> {
  theme?: DeepPartial<SidebarItemsTheme>;
}

export const SidebarItems: FC<SidebarItemsProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();

  const theme = mergeDeep(rootTheme.items, customTheme);

  return (
    <div className={twMerge(theme.base, className)} data-testid="ui-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
