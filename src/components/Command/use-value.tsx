import { useLayoutEffect, useRef } from 'react'
import { SELECTORS, useCommand } from './completeCommand'

export function useValue(
  id: string,
  ref: React.RefObject<HTMLElement>,
  deps: (string | React.ReactNode | React.RefObject<HTMLElement>)[],
  aliases: string[] = [],
) {
  const valueRef = useRef<string>()
  const context = useCommand()

  useLayoutEffect(() => {
    const value = (() => {
      for (const part of deps ?? []) {
        if (typeof part === 'string') {
          return part.trim()
        }
      }
    })()
    const keywords = aliases.map(alias => alias.trim())
    context.value(id, value ?? '', keywords)
    ref.current?.setAttribute(SELECTORS.VALUE_ATTR, value ?? '')
    valueRef.current = value
  })

  return valueRef
}
