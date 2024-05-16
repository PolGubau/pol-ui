import React from 'react'
import { GroupContext, useCommand } from '../contexts'
import { useCommandState } from '../Command'
import type { GroupProps } from '../types'
import { useIsomorphicLayoutEffect } from '../../../hooks'
import { useValue } from '../hooks'
import { cn, mergeDeep } from '../../../helpers'
import { mergeRefs } from '../../../helpers/mergeRefs/mergeRefs'
import { SlottableWithNestedChildren } from '../utils'
import { getTheme } from '../../../theme-store'

/**
 * Group command menu items together with a heading.
 * Grouped items are always shown together.
 */
export const CommandGroup = React.forwardRef<HTMLDivElement, GroupProps>((props, forwardedRef) => {
  const { heading, forceMount, theme: customTheme = {}, ...etc } = props
  const id = React.useId()
  const ref = React.useRef<HTMLDivElement>(null)
  const headingRef = React.useRef<HTMLDivElement>(null)
  const headingId = React.useId()
  const context = useCommand()
  const render = useCommandState(state =>
    forceMount ? true : context.filter() === false ? true : !state.search ? true : state.filtered.groups.has(id),
  )

  useIsomorphicLayoutEffect(() => {
    return context.group(id)
  }, [])

  useValue(id, ref, [props.value, props.heading, headingRef])

  const contextValue = React.useMemo(() => ({ id, forceMount }), [forceMount, id])
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
      {SlottableWithNestedChildren(props, child => (
        <div data-command-group-items="" role="group" aria-labelledby={heading ? headingId : undefined}>
          <GroupContext.Provider value={contextValue}>{child}</GroupContext.Provider>
        </div>
      ))}
    </div>
  )
})
CommandGroup.displayName = 'Group'
