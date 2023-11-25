'use client';
import React from 'react';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';
import { useNavbarContext } from './NavbarContext';

export interface NavbarCollapseTheme {
  base: string;
  list: string;
  hidden: IBoolean;
}

export interface NavbarCollapseProps extends ComponentProps<'div'> {
  theme?: DeepPartial<NavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = useNavbarContext();

  const theme = mergeDeep(rootTheme.collapse, customTheme);

  return (
    <div
      data-testid="ui-navbar-collapse"
      className={twMerge(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
