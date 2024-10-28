"use client"

import type { ComponentProps, FC } from "react"

import { cn } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types/types"
import { FocusEffect } from "../FocusEffect"
import type { CardTheme } from "./theme"

export type CardProps = ComponentProps<"div"> &
  ComponentProps<"button"> &
  ComponentProps<"a"> & {
    href?: string
    theme?: DeepPartial<CardTheme>
    onClick?: () => void
  }

/**
 * @name Card
 * @description A Card component that can be used to display content in a card-like style. Usefull in a blog, a social network, a forum...
 *
 * @returns {React.ReactNode} A Card component.
 *
 * @example
 * <Card>
 *    <h5 className="text-2xl font-bold">Card title!</h5>
 *     <p className="font-normal text-secondary-700">
 *       Hello there!
 *    </p>
 * </Card>
 *
 */
export const Card: FC<CardProps> = (props): React.ReactNode => {
  const { href, theme: customTheme = {}, onClick, ...rest } = props

  // Card component will be an Anchor link if href prop is passed.

  const Component =
    typeof onClick === "undefined"
      ? typeof href === "undefined"
        ? "div"
        : "a"
      : "button"

  const theme = mergeDeep(getTheme().card, customTheme)
  return (
    <Component
      data-testid="ui-card"
      href={href}
      onClick={onClick}
      className={cn(theme.base, href && theme.href, rest?.className)}
      {...(rest as any)}
    >
      {rest.children}
      {onClick && <FocusEffect />}
    </Component>
  )
}
