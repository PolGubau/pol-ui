import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial, MainSizes } from '../../types/types'
import { HelperText } from '../HelperText'
import type { FileInputTheme } from './theme'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'

export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color' | 'size'> {
  color?: Colors
  helperText?: ReactNode
  size?: MainSizes
  theme?: DeepPartial<FileInputTheme>
}

/**
 * @name FileInput
 * @description The FileInput component is used to upload files from the user's device, useful in forms where you need to upload files as images, documents, etc.
 * @returns React.FC<FileInputProps>
 */
export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className = '',
      color = ColorsEnum.primary,
      helperText,
      size = MainSizesEnum.md,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().fileInput, customTheme)

    return (
      <>
        <div className={twMerge(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              className={twMerge(theme.field.input.base, theme.field.input.colors[color], theme.field.input.size[size])}
              {...props}
              type="file"
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    )
  },
)

FileInput.displayName = 'FileInput'
