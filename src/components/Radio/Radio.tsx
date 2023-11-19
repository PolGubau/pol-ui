import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface RadioTheme {
  root: RadioRootTheme;
}

export interface RadioRootTheme {
  base: string;
}

export interface RadioProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
  theme?: DeepPartial<RadioTheme>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().radio, customTheme);

    return <input ref={ref} type="radio" className={twMerge(theme.root.base, className)} {...props} />;
  },
);

Radio.displayName = 'Radio';
