import React from 'react'
import type { LoadingProps } from '../types'
import { SlottableWithNestedChildren } from '../utils'

/**
 * You should conditionally render this with `progress` while loading asynchronous items.
 */
export const CommandLoading = React.forwardRef<HTMLDivElement, LoadingProps>((props, forwardedRef) => {
  const { progress, label = 'Loading...', ...etc } = props

  return (
    <div
      ref={forwardedRef}
      {...etc}
      data-command-loading=""
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      {SlottableWithNestedChildren(props, child => (
        <div aria-hidden>{child}</div>
      ))}
    </div>
  )
})
CommandLoading.displayName = 'Loading'
