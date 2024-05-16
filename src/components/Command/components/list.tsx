import type { PropsWithChildren } from 'react'
import React from 'react'
import { cn, mergeDeep } from '../../../helpers'
import { mergeRefs } from '../../../helpers/mergeRefs/mergeRefs'
import { useCommand } from '../contexts'
import type { DivProps } from '../types'
import { SlottableWithNestedChildren } from '../utils'
import type { CommandTheme } from '../theme'
import { getTheme } from '../../../theme-store'

export interface ListProps extends PropsWithChildren, DivProps {
  /**
   * Accessible label for this List of suggestions. Not shown visibly.
   */
  label?: string
  theme?: Partial<CommandTheme>
  className ?:string
}
/**
 * Contains `Item`, `Group`, and `Separator`.
 * Use the `--command-list-height` CSS variable to animate height based on the number of results.
 */
export const List = React.forwardRef<HTMLDivElement, ListProps>((props, forwardedRef) => {
  const { theme: customTheme = {}, label = 'Suggestions', ...etc } = props

  const ref = React.useRef<HTMLDivElement>(null)
  const height = React.useRef<HTMLDivElement>(null)
  const context = useCommand()
  const theme = mergeDeep(getTheme().command, customTheme)

  React.useEffect(() => {
    if (height.current && ref.current) {
      const el = height.current
      const wrapper = ref.current
      let animationFrame: number
      const observer = new ResizeObserver(() => {
        animationFrame = requestAnimationFrame(() => {
          const height = el.offsetHeight
          wrapper.style.setProperty(`--command-list-height`, height.toFixed(1) + 'px')
        })
      })
      observer.observe(el)
      return () => {
        cancelAnimationFrame(animationFrame)
        observer.unobserve(el)
      }
    }
  }, [])

  return (
    <div
      ref={mergeRefs([ref, forwardedRef])}
      {...etc}
      data-command-list=""
      role="listbox"
      aria-label={label}
      id={context.listId}
      className={cn(theme.list.base, props.className)}
    >
      {SlottableWithNestedChildren(props, child => (
        <div ref={mergeRefs([height, context.listInnerRef])} data-command-list-sizer="">
          {child}
        </div>
      ))}
    </div>
  )
})
List.displayName = 'List'
