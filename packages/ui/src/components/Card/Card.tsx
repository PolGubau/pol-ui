"use client"

import React, { type ComponentProps, type FC } from "react"

import { cn, mergeRefs } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { useRipple } from "../../hooks"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types/types"
import { ButtonProps } from "../Button"
import { FocusEffect } from "../FocusEffect"
import type { CardTheme } from "./theme"

export type CardProps = ComponentProps<"div"> &
  ComponentProps<"button"> &
  Pick<ButtonProps, "rippleOptions"> & {
    theme?: DeepPartial<CardTheme>
    onClick?: () => void
  }

/**
 * @name Card
 *
 * @description A Card component that can be used to display content in a card-like style. Usefull in a blog, a social network, a forum...
 *
 *
 * @example ```
 * <Card>
 *    <h5 className="text-2xl font-bold">Card title!</h5>
 *     <p className="font-normal text-secondary-700">
 *       Hello there!
 *    </p>
 * </Card>
 * ```
 * @returns {React.ReactNode} A Card component.
 *
 */

export const Card = React.forwardRef<React.ElementRef<"div">, CardProps>(
  (props, ref) => {
    const { theme: customTheme = {}, onClick, className = "", ...rest } = props

    // Card component will be an Anchor link if href prop is passed.

    const Component = typeof onClick === "undefined" ? "div" : "button"

    const theme = mergeDeep(getTheme().card, customTheme)

    const [ripple, event] = useRipple({
      disabled: rest.disabled,
      ...rest.rippleOptions,
      opacity: 0.3,
    })
    return (
      <Component
        ref={mergeRefs([ripple, ref])}
        data-testid="ui-card"
        onClick={(e) => {
          if (onClick) {
            event(e)
            onClick(e as React.MouseEvent<HTMLButtonElement>)
          }
        }}
        className={cn(theme.base, className)}
        {...(rest as any)}
      >
        {rest.children}
        {onClick && <FocusEffect />}
      </Component>
    )
  }
)
