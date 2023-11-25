'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../types';
import { useDropdownContext } from './DropdownContext';
import React from 'react';

export interface DropdownDividerTheme {
  divider: string;
}

export type DropdownDividerProps = {
  theme?: DeepPartial<DropdownDividerTheme>;
} & ComponentProps<'div'>;

export const DropdownDivider: FC<DropdownDividerProps> = ({ className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();

  const theme = customTheme.divider ?? rootTheme.floating.divider;

  return <div className={twMerge(theme, className)} {...props} />;
};
