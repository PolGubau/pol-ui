'use client';
import React from 'react';
import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';
import { useNavbarContext } from './NavbarContext';

export interface NavbarLinkTheme {
  base: string;
  active: IBoolean;
  disabled: IBoolean;
}

export interface NavbarLinkProps extends ComponentProps<'a'>, Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<NavbarLinkTheme>;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  as: Component = 'a',
  disabled,
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();

  const theme = mergeDeep(rootTheme.link, customTheme);

  return (
    <li>
      <Component
        className={twMerge(
          theme.base,
          active && theme.active.on,
          !active && !disabled && theme.active.off,
          theme.disabled[disabled ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};
