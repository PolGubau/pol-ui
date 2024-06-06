import type { ComponentProps } from 'react'
import React from 'react'
import { useCommandState } from '../Command'
import { cn, mergeDeep } from '../../../helpers'
import { getTheme } from '../../../theme-store'
import type { CommandTheme } from '../theme'

/**
 * Automatically renders when there are no results for the search query.
 */
export interface CommandEmptyProps extends ComponentProps<'div'> {
  theme?: Partial<CommandTheme>
}

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>((props, forwardedRef) => {
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
CommandEmpty.displayName = 'Empty'
