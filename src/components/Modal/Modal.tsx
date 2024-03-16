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
export enum OpenChangeReasons {
  OutsidePress = 'outside-press',
  EscapeKey = 'escape-key',
  AncestorScroll = 'ancestor-scroll',
  ReferencePress = 'reference-press',
  Click = 'click',
  Hover = 'hover',
  Focus = 'focus',
  ListNavigation = 'list-navigation',
  SafePolygon = 'safe-polygon',
}

export type OpenChangeReason = `${OpenChangeReasons}`
export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  onOpenChange?: (open: boolean, reason: OpenChangeReason | undefined) => void
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
  contentClassName?: string
}

/**
 * @name Modal
 * @description The Modal component is used to display a message to the user, it can be closable or not. It can be used to display a message, a warning, an error, a success message... A modal is a dialog box or a popup window that is displayed on top of the current page.
 * @param {ReactNode} props.children - The content of the modal
 * @param {string} props.className - The class name of the modal
 * @param {boolean} props.dismissible - If the modal can be dismissed
 * @param {boolean} props.open - If the modal is open
 * @param {HTMLElement} props.root - The root element of the modal
 * @param {MainSizes} props.size - The size of the modal
 * @param {DeepPartial<ModalTheme>} props.theme - The theme of the modal
 * @param {number | MutableRefObject<HTMLElement | null>} props.initialFocus - The initial focus of the modal
 * @param {boolean} props.lockScroll - If the scroll is locked
 * @param {boolean} props.deleteButton - If the delete button is displayed
 * @param {string} props.contentClassName - The class name of the content
 * @returns React.FC<ModalProps>
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      dismissible = true,
      onOpenChange,
      position = 'center',
      open = false,
      root,
      size = '2xl',
      theme: customTheme = {},
      initialFocus,
      lockScroll = true,
      deleteButton = false,
      contentClassName,
      ...props
    },
    theirRef = null,
  ) => {
    const theme = mergeDeep(getTheme().modal, customTheme)

    const { context } = useFloating({
      open,
      onOpenChange(nextOpen, _e, reason) {
        onOpenChange?.(nextOpen, reason)
      },
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
                  className={twMerge(theme.content, theme.sizes[size], contentClassName)}
                >
                  {deleteButton && (
                    <div className={twMerge(theme.closeButton)}>
                      <IconButton
                        aria-label="Close"
                        type="button"
                        onClick={() => {
                          onOpenChange?.(false, OpenChangeReasons.Click)
                        }}
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
