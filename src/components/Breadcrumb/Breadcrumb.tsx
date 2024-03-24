'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { BreadcrumbItemTheme } from './BreadcrumbItem'

export interface BreadcrumbTheme {
  root: BreadcrumbRootTheme
  item: BreadcrumbItemTheme
}

export interface BreadcrumbRootTheme {
  base: string
  list: string
}

export interface BreadcrumbComponentProps extends ComponentProps<'nav'> {
  theme?: DeepPartial<BreadcrumbRootTheme>
}

/**
 *
 * @name Breadcrumb
 * @description The Breadcrumb component is used to display the current location within a hierarchy of content and provide a way to navigate back to the root of the hierarchy.
 * @returns React.FC<BreadcrumbComponentProps>
 */
export const Breadcrumb: FC<BreadcrumbComponentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().breadcrumb.root, customTheme)

  return (
    <nav aria-label="Breadcrumb" className={twMerge(theme.base, className)} {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  )
}
