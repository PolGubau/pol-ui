import React from 'react'
import type { Children, DivProps } from '../types'
import { useCommandState } from '../Command'
import { cn, mergeDeep } from '../../../helpers'
import { getTheme } from '../../../theme-store'
import type { CommandTheme } from '../theme'

/**
 * Automatically renders when there are no results for the search query.
 */
export type EmptyProps = Children &
  DivProps & {
    theme?: Partial<CommandTheme>
  }

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>((props, forwardedRef) => {
  const { theme: customTheme = {} } = props
  const render = useCommandState(state => state.filtered.count === 0)
  const theme = mergeDeep(getTheme().command, customTheme)

  if (!render) return null
  return (
    <div
      ref={forwardedRef}
      {...props}
      data-command-empty=""
      className={cn(theme.empty.base, props.className)}
      role="presentation"
    />
  )
})
Empty.displayName = 'Empty'
