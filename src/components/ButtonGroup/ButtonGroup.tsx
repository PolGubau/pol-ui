'use client'

import type { ComponentProps, FC, ReactElement } from 'react'
import { Children, cloneElement, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { ButtonProps } from '../Button'
import type { ButtonGroupTheme } from './theme'

export interface ButtonGroupProps extends ComponentProps<'div'>, Pick<ButtonProps, 'outline' | 'theme'> {
  theme?: DeepPartial<ButtonGroupTheme>
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  outline,
  theme: customTheme = {},
  ...props
}: ButtonGroupProps) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          outline,
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children, outline],
  )

  const themeObject = getTheme()
  const buttonGroupTheme = themeObject?.buttonGroup ?? {}

  const theme = mergeDeep(buttonGroupTheme, customTheme)
  // const theme = mergeDeep(getTheme().badge, customTheme)

  return (
    <div className={twMerge(theme.base, className)} role="group" {...props}>
      {items}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
