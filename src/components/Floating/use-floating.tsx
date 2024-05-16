// src/components/Floating/use-floating.tsx

import type { Dispatch, RefObject } from 'react'
import { useEffect, useRef } from 'react'
import { useBaseFloating, useFloatingInteractions } from '../../hooks'
import type { Placement, ReferenceType } from '@floating-ui/react'
import { autoUpdate, useFocus } from '@floating-ui/react'
import type { TriggerReason } from '../../types'

export interface UseFloatingProps {
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
  trigger?: TriggerReason
  placement?: 'auto' | Placement
}

export interface UseFloatingReturn {
  refs: {
    /**
     * A React ref to the reference element.
     */
    reference: React.MutableRefObject<ReferenceType | null>
    /**
     * A React ref to the floating element.
     */
    floating: React.MutableRefObject<unknown>
    /**
     * A callback to set the reference element (reactive).
     */
    setReference: (node?: ReferenceType | null) => void
    /**
     * A callback to set the floating element (reactive).
     */
    setFloating: (node?: unknown) => void
  }
  getFloatingProps: (props?: React.HTMLProps<HTMLElement>) => React.HTMLProps<HTMLElement>
  getReferenceProps: (props?: React.HTMLProps<HTMLElement>) => React.HTMLProps<HTMLElement>
  x?: number
  y?: number
  arrowX?: number
  arrowY?: number
  arrowRef: RefObject<HTMLDivElement>
  strategy: 'absolute' | 'fixed'
}

export const useFloating = ({ open, setOpen, trigger = 'hover', placement }: UseFloatingProps): UseFloatingReturn => {
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
