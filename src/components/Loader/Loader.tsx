import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors, Sizes } from '../PoluiProvider'
import { ColorsEnum, SizesEnum } from '../PoluiProvider/enums'

export interface LoaderTheme {
  base: string
  color: Colors
  size: LoaderSizes
}

export interface LoaderSizes extends Sizes {
  [key: string]: string
}

export interface LoaderProps extends Omit<ComponentProps<'span'>, 'color'> {
  color?: keyof Colors
  size?: keyof LoaderSizes
  theme?: DeepPartial<LoaderTheme>
}

export const Loader: FC<LoaderProps> = ({
  className,
  color = ColorsEnum.secondary,
  size = SizesEnum.md,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().loader, customTheme)

  return (
    <span
      role={props.role ?? 'status'}
      className={twMerge(theme.base, theme.color[color], theme.size[size], className)}
      aria-live="polite"
      {...props}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </span>
  )
}

// The name of the component will be Loader
Loader.displayName = 'Loader'
