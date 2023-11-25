import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { HelperText } from '../HelperText';
import type { TextInputColors, TextInputSizes } from '../TextInput';
import React from 'react';

export interface FileInputTheme {
  root: FileInputRootTheme;
  field: FileInputFieldTheme;
}

export interface FileInputRootTheme {
  base: string;
}

export interface FileInputFieldTheme {
  base: string;
  input: FileInputFieldInputTheme;
}

export interface FileInputFieldInputTheme {
  base: string;
  colors: TextInputColors;
  sizes: TextInputSizes;
}

export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  color?: keyof TextInputColors;
  helperText?: ReactNode;
  sizing?: keyof TextInputSizes;
  theme?: DeepPartial<FileInputTheme>;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, color = 'gray', helperText, sizing = 'md', theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().fileInput, customTheme);

    return (
      <>
        <div className={twMerge(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
              )}
              {...props}
              type="file"
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

FileInput.displayName = 'FileInput';
