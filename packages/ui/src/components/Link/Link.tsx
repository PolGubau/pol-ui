"use client"

import type { ComponentProps, ElementType, FC } from "react"

import { cn } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types/types"

export interface LinkTheme {
  base: string
  href: string
}

export interface LinkProps extends ComponentProps<"a"> {
  as?: ElementType
  theme?: DeepPartial<LinkTheme>
  underline?: boolean
}

/**
 * @name Link
 * @description The Link component is used to navigate to a different page or to a different section of the same page, it is usually used to navigate to a different page.
 * @returns React.FC<LinkProps>
 * @example
 * <Link href="https://www.google.com">Google</Link>
 * <Link href="https://www.google.com" underline={false}>Google</Link>
 */
export const Link: FC<LinkProps> = ({
  as: Component = "a",
  children,
  className,
  underline = true,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().link, customTheme)

  return (
    <Component
      className={cn(
        theme.base,
        theme.underline[underline ? "on" : "off"],

        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
