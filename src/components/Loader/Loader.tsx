import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial, MainSizes } from '../../types/types'
import { ColorsEnum, SizesEnum } from '../../types/enums'
import type { LoaderTheme } from './theme'

export interface LoaderProps extends Omit<ComponentProps<'span'>, 'color' | 'size'> {
  color?: Colors
  size?: MainSizes
  theme?: DeepPartial<LoaderTheme>
}

/**
 * @name Loader
 * @description The Loader component is used to display a loader to the user, it is used to indicate that the page or any other component is loading.
 * @returns React.FC<LoaderProps>
 */

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
      data-testid="loader"
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
