import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { HelperText } from '../HelperText'
import type { FileInputTheme } from './theme'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import type { Colors, MainSizes } from '../PoluiProvider/PoluiTheme'

export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color' | 'size'> {
  color?: keyof Colors
  helperText?: ReactNode
  size?: keyof MainSizes
  theme?: DeepPartial<FileInputTheme>
}

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
