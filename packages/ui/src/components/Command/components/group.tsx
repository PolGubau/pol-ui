"use client"

import React from "react"

import { cn, mergeDeep } from "../../../helpers"
import { mergeRefs } from "../../../helpers/mergeRefs/mergeRefs"
import { useIsomorphicLayoutEffect } from "../../../hooks"
import { getTheme } from "../../../theme-store"
import { useCommandState } from "../Command"
import { GroupContext, useCommand } from "../contexts"
import { useValue } from "../hooks"
import type { GroupProps } from "../types"
import { SlottableWithNestedChildren } from "../utils"

/**
 * Group command menu items together with a heading.
 * Grouped items are always shown together.
 */
export const CommandGroup = React.forwardRef<HTMLDivElement, GroupProps>(
  (props, forwardedRef) => {
    const { heading, forceMount, theme: customTheme = {}, ...etc } = props
    const id = React.useId()
    const ref = React.useRef<HTMLDivElement>(null)
    const headingRef = React.useRef<HTMLDivElement>(null)
    const headingId = React.useId()
    const context = useCommand()
    const render = useCommandState((state) =>
      forceMount
        ? true
        : !context.filter()
          ? true
          : !state.search
            ? true
            : state.filtered.groups.has(id)
    )

    useIsomorphicLayoutEffect(() => {
      return context.group(id)
    }, [])

    useValue(id, ref, [props.value, props.heading, headingRef])

    const contextValue = React.useMemo(
      () => ({ id, forceMount }),
      [forceMount, id]
    )
    const theme = mergeDeep(getTheme().command, customTheme)

    return (
      <div
        className={cn(theme.group.base, props.className)}
        ref={mergeRefs([ref, forwardedRef])}
        {...etc}
        data-command-group=""
        role="presentation"
        hidden={render ? undefined : true}
      >
        {heading && (
          <header
            ref={headingRef}
            data-command-group-heading=""
            aria-hidden
            id={headingId}
            className={cn(theme.group.header, props.headingClassName)}
          >
            {heading}
          </header>
        )}
        {SlottableWithNestedChildren(props, (child) => (
          <div
            data-command-group-items=""
            role="group"
            aria-labelledby={heading ? headingId : undefined}
          >
            <GroupContext.Provider value={contextValue}>
              {child}
            </GroupContext.Provider>
          </div>
        ))}
      </div>
    )
  }
)
CommandGroup.displayName = "Group"
