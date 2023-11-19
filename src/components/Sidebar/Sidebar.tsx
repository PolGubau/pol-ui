'use client';

import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';
import { SidebarCTA, type SidebarCTATheme } from './SidebarCTA';
import { SidebarCollapse, type SidebarCollapseTheme } from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import { SidebarItem, type SidebarItemTheme } from './SidebarItem';
import { SidebarItemGroup, type SidebarItemGroupTheme } from './SidebarItemGroup';
import { SidebarItems, type SidebarItemsTheme } from './SidebarItems';
import { SidebarLogo, type SidebarLogoTheme } from './SidebarLogo';

export interface SidebarTheme {
  root: {
    base: string;
    collapsed: IBoolean;
    inner: string;
  };
  collapse: SidebarCollapseTheme;
  cta: SidebarCTATheme;
  item: SidebarItemTheme;
  items: SidebarItemsTheme;
  itemGroup: SidebarItemGroupTheme;
  logo: SidebarLogoTheme;
}

export interface SidebarProps extends ComponentProps<'div'> {
  as?: ElementType;
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
  theme?: DeepPartial<SidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = 'nav',
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().sidebar, customTheme);

  return (
    <SidebarContext.Provider value={{ theme, isCollapsed }}>
      <Component
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === 'hide'}
        className={twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? 'on' : 'off'], className)}
        {...props}
      >
        <div className={theme.root.inner}>{children}</div>
      </Component>
    </SidebarContext.Provider>
  );
};

SidebarComponent.displayName = 'Sidebar';

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
