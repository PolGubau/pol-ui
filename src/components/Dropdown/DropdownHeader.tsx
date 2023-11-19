'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../types';
import { useDropdownContext } from './DropdownContext';
import { DropdownDivider } from './DropdownDivider';

export interface DropdownHeaderTheme {
  header: string;
}

export interface DropdownHeaderProps extends ComponentProps<'div'> {
  theme?: DeepPartial<DropdownHeaderTheme>;
}

export const DropdownHeader: FC<DropdownHeaderProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();

  const theme = customTheme.header ?? rootTheme.floating.header;

  return (
    <>
      <div className={twMerge(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
