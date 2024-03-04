'use client'

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react'
import { forwardRef, type ComponentPropsWithoutRef, type MutableRefObject } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial, MainSizes, Positions } from '../../types/types'
import type { ModalTheme } from './theme'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '../IconButton'
import { TbX } from 'react-icons/tb'

export interface ModalPositions extends Positions {
  [key: string]: string
}

export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  onClose?: () => void
  position?: keyof ModalPositions
  open?: boolean
  popup?: boolean
  root?: HTMLElement
  size?: MainSizes
  dismissible?: boolean
  deleteButton?: boolean
  lockScroll?: boolean
  theme?: DeepPartial<ModalTheme>
  initialFocus?: number | MutableRefObject<HTMLElement | null>
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      dismissible = true,
      onClose,
      position = 'center',
      open = false,
      root,
      size = '2xl',
      theme: customTheme = {},
      initialFocus,
      lockScroll = true,
      deleteButton = false,
      ...props
    },
    theirRef = null,
  ) => {
    const theme = mergeDeep(getTheme().modal, customTheme)

    const { context } = useFloating({
      open,
      onOpenChange: () => onClose?.(),
    })

    const ref = useMergeRefs([context.refs.setFloating, theirRef])

    const click = useClick(context)
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown', enabled: dismissible })
    const role = useRole(context)

    const { getFloatingProps } = useInteractions([click, dismiss, role])
    if (!open) {
      return null
    }

    return (
      <AnimatePresence mode="wait">
        {open && (
          <FloatingPortal root={root}>
            <FloatingOverlay
              lockScroll={lockScroll}
              data-testid="modal-overlay"
              className={twMerge(theme.base, theme.positions[position], open && theme.show, className)}
              {...props}
            >
              <FloatingFocusManager context={context} initialFocus={initialFocus}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                  ref={ref}
                  {...getFloatingProps(props)}
                  className={twMerge(theme.content, theme.sizes[size])}
                >
                  {deleteButton && (
                    <div className={twMerge(theme.closeButton)}>
                      <IconButton
                        aria-label="Close"
                        type="button"
                        onClick={onClose}
                        style={{
                          zIndex: 1000,
                        }}
                      >
                        <TbX aria-hidden size={20} />
                      </IconButton>
                    </div>
                  )}
                  {children}
                </motion.div>
              </FloatingFocusManager>
            </FloatingOverlay>
          </FloatingPortal>
        )}
      </AnimatePresence>
    )
  },
)
Modal.displayName = 'Modal'
