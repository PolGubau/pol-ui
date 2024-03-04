import React from 'react'
import { SlottableWithNestedChildren } from './Command'
import type { LoadingProps } from './types'

/**
 * You should conditionally render this with `progress` while loading asynchronous items.
 */
export const CommandLoading = React.forwardRef<HTMLDivElement, LoadingProps>(
  (
    props = {
      progress: 0,
      label: 'Loading...',
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        {...props}
        role="progressbar"
        aria-valuenow={props.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={props.label}
      >
        {SlottableWithNestedChildren(props, child => (
          <div aria-hidden>{child}</div>
        ))}
      </div>
    )
  },
)
CommandLoading.displayName = 'CommandLoading'
