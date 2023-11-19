import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean, Colors } from '../PoluiProvider';
import { HelperText } from '../HelperText';

export interface TextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: IBoolean;
}

export interface TextareaColors extends Pick<Colors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  color?: keyof TextareaColors;
  helperText?: ReactNode;
  shadow?: boolean;
  theme?: DeepPartial<TextareaTheme>;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color = 'gray', helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().textarea, customTheme);

    return (
      <>
        <textarea
          ref={ref}
          className={twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? 'on' : 'off'], className)}
          {...props}
        />
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

Textarea.displayName = 'Textarea';
