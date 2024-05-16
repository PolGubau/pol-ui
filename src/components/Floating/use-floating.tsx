import type { Dispatch } from 'react'
import { useEffect, useRef } from 'react'
import { useBaseFloating, useFloatingInteractions } from '../../hooks'
import type { Placement } from '@floating-ui/react'
import { autoUpdate, useFocus } from '@floating-ui/react'
import type { TriggerReason } from '../../types'
export interface UseFloatingProps {
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
  trigger?: TriggerReason
  placement?: 'auto' | Placement
}
export const useFloating = ({ open, setOpen, trigger = 'hover', placement }: UseFloatingProps) => {
  const arrowRef = useRef<HTMLDivElement>(null)

  const floatingProperties = useBaseFloating({
    open,
    placement,
    arrowRef,
    setOpen,
  })

  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingProperties

  const focus = useFocus(context)
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: 'tooltip',
    trigger,
    interactions: [focus],
  })

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }
  }, [open, refs.floating, refs.reference, update])
  return { refs, getFloatingProps, getReferenceProps, x, y, arrowX, arrowY, arrowRef, strategy }
}
