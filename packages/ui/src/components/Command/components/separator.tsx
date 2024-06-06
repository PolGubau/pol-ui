import React from 'react'
import { cn, mergeDeep } from '../../../helpers'
import { mergeRefs } from '../../../helpers/mergeRefs/mergeRefs'
import { getTheme } from '../../../theme-store'
import { useCmdk } from '../hooks'
import type { SeparatorProps } from '../types'

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
export const CommandSeparator = React.forwardRef<HTMLDivElement, SeparatorProps>((props, forwardedRef) => {
  const { alwaysRender, theme: customTheme = {}, ...etc } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const render = useCmdk(state => !state.search)
  const theme = mergeDeep(getTheme().command, customTheme)

  if (!alwaysRender && !render) return null
  return (
    <div
      ref={mergeRefs([ref, forwardedRef])}
      {...etc}
      data-command-separator=""
      role="separator"
      className={cn(theme.base, props.className)}
    />
  )
})
CommandSeparator.displayName = 'Separator'
