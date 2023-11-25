'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { Colors } from '../PoluiProvider';
import { useSidebarContext } from './SidebarContext';

export interface SidebarCTATheme {
  base: string;
  color: SidebarCTAColors;
}

export interface SidebarCTAProps extends Omit<ComponentProps<'div'>, 'color'> {
  color?: keyof SidebarCTAColors;
  theme?: DeepPartial<SidebarCTATheme>;
}

export interface SidebarCTAColors
  extends Pick<
    Colors,
    'blue' | 'dark' | 'failure' | 'gray' | 'green' | 'light' | 'purple' | 'red' | 'success' | 'warning' | 'yellow'
  > {
  [key: string]: string;
}

export const SidebarCTA: FC<SidebarCTAProps> = ({
  children,
  color = 'info',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isCollapsed } = useSidebarContext();

  const theme = mergeDeep(rootTheme.cta, customTheme);

  return (
    <div
      data-testid="sidebar-cta"
      hidden={isCollapsed}
      className={twMerge(theme.base, theme.color[color], className)}
      {...props}
    >
      {children}
    </div>
  );
};

SidebarCTA.displayName = 'Sidebar.CTA';
