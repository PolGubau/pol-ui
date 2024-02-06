'use client'

import React from 'react'

import './styles.css'
import { getAsset } from './assets'
import { useIsDocumentHidden } from './hooks'
import type { ToastProps, ToastIcons } from './types'
import type { Colors } from '../../types'
import { twMerge } from 'tailwind-merge'

// Visible toasts amount
export const TOAST_VISIBLE_TOASTS_AMOUNT = 3

// Viewport padding
export const TOAST_VIEWPORT_OFFSET = '32px'

// Default lifetime of a toasts (in ms)
export const TOAST_LIFETIME = 4000

// Default toast width
export const TOAST_WIDTH = 356

// Default gap between toasts
export const TOAST_GAP = 14

export const TOAST_SWIPE_THRESHOLD = 20

export const TOAST_TIME_BEFORE_UNMOUNT = 200

export const Toast = ({
  invert: ToasterInvert,
  toast,
  unstyled,
  interacting,
  setHeights,
  visibleToasts,
  heights,
  index,
  toasts,
  expanded,
  removeToast,
  closeButton: closeButtonFromToaster,
  style,
  cancelButtonStyle,
  actionButtonStyle,
  className = '',
  descriptionClassName = '',
  duration: durationFromToaster,
  position,
  gap = TOAST_GAP,
  expandByDefault,
  classNames,
  icons,
  closeButtonAriaLabel = 'Close toast',
  pauseWhenPageIsHidden,
}: ToastProps) => {
  const [mounted, setMounted] = React.useState(false)
  const [removed, setRemoved] = React.useState(false)
  const [swiping, setSwiping] = React.useState(false)
  const [swipeOut, setSwipeOut] = React.useState(false)
  const [offsetBeforeRemove, setOffsetBeforeRemove] = React.useState(0)
  const [initialHeight, setInitialHeight] = React.useState(0)
  const dragStartTime = React.useRef<Date | null>(null)
  const toastRef = React.useRef<HTMLLIElement>(null)
  const isFront = index === 0
  const isVisible = index + 1 <= visibleToasts
  const toastType = toast.type ?? ('secondary' as Colors)
  const dismissible = toast.dismissible !== false
  const toastClassname = toast.className ?? ''
  const toastDescriptionClassname = toast.descriptionClassName ?? ''
  // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
  const heightIndex = React.useMemo(
    () => heights.findIndex(height => height.toastId === toast.id) ?? 0,
    [heights, toast.id],
  )
  const closeButton = React.useMemo(
    () => toast.closeButton ?? closeButtonFromToaster,
    [toast.closeButton, closeButtonFromToaster],
  )
  const duration = React.useMemo(
    () => toast.duration ?? durationFromToaster ?? TOAST_LIFETIME,
    [toast.duration, durationFromToaster],
  )
  const closeTimerStartTimeRef = React.useRef(0)
  const offset = React.useRef(0)
  const lastCloseTimerStartTimeRef = React.useRef(0)
  const pointerStartRef = React.useRef<{ x: number; y: number } | null>(null)
  const [y, x] = position.split('-')
  const toastsHeightBefore = React.useMemo(() => {
    return heights.reduce((prev, curr, reducerIndex) => {
      // Calculate offset up until current  toast
      if (reducerIndex >= heightIndex) {
        return prev
      }

      return prev + curr.height
    }, 0)
  }, [heights, heightIndex])
  const isDocumentHidden = useIsDocumentHidden()

  const invert = toast.invert ?? ToasterInvert

  offset.current = React.useMemo(() => heightIndex * gap + toastsHeightBefore, [gap, heightIndex, toastsHeightBefore])

  React.useEffect(() => {
    // Trigger enter animation without using CSS animation
    setMounted(true)
  }, [])

  React.useLayoutEffect(() => {
    if (!mounted) return
    const toastNode = toastRef.current
    if (!toastNode) return
    const originalHeight = toastNode?.style.height
    toastNode.style.height = 'auto'
    const newHeight = toastNode.getBoundingClientRect().height
    toastNode.style.height = originalHeight

    setInitialHeight(newHeight)

    setHeights(heights => {
      const alreadyExists = heights.find(height => height.toastId === toast.id)
      if (!alreadyExists) {
        return [{ toastId: toast.id, height: newHeight, position: toast.position ?? 'bottom-center' }, ...heights]
      } else {
        return heights.map(height => (height.toastId === toast.id ? { ...height, height: newHeight } : height))
      }
    })
  }, [mounted, toast.title, toast.description, setHeights, toast.id, toast.position])

  const deleteToast = React.useCallback(() => {
    // Save the offset for the exit swipe animation
    setRemoved(true)
    setOffsetBeforeRemove(offset.current)
    setHeights(h => h.filter(height => height.toastId !== toast.id))

    setTimeout(() => {
      removeToast(toast)
    }, TOAST_TIME_BEFORE_UNMOUNT)
  }, [toast, removeToast, setHeights, offset])

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let remainingTime = duration

    // Pause the timer on each hover
    const pauseTimer = () => {
      if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
        // Get the elapsed time since the timer started
        const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current

        remainingTime = remainingTime - elapsedTime
      }

      lastCloseTimerStartTimeRef.current = new Date().getTime()
    }

    const startTimer = () => {
      closeTimerStartTimeRef.current = new Date().getTime()

      // Let the toast know it has started
      timeoutId = setTimeout(() => {
        toast.onAutoClose?.(toast)
        deleteToast()
      }, remainingTime)
    }

    if (expanded ?? interacting ?? (pauseWhenPageIsHidden && isDocumentHidden)) {
      pauseTimer()
    } else {
      startTimer()
    }

    return () => clearTimeout(timeoutId)
  }, [
    expanded,
    interacting,
    expandByDefault,
    toast,
    duration,
    deleteToast,
    toastType,
    pauseWhenPageIsHidden,
    isDocumentHidden,
  ])

  React.useEffect(() => {
    const toastNode = toastRef.current

    if (toastNode) {
      const height = toastNode.getBoundingClientRect().height

      // Add toast height tot heights array after the toast is mounted
      setInitialHeight(height)
      setHeights(h => [{ toastId: toast.id, height, position: toast.position ?? 'bottom-center' }, ...h])

      return () => setHeights(h => h.filter(height => height.toastId !== toast.id))
    }
  }, [setHeights, toast.id, toast.position])

  React.useEffect(() => {
    if (toast.delete) {
      deleteToast()
    }
  }, [deleteToast, toast.delete])

  return (
    <li
      aria-live={toast.important ? 'assertive' : 'polite'}
      aria-atomic="true"
      role="status"
      ref={toastRef}
      className={twMerge(
        className,
        toastClassname,
        classNames?.toast,
        toast?.classNames?.toast,
        classNames?.default,
        // classNames?.[toastType],
        // toast?.classNames?.[toastType],
      )}
      data-sonner-toast=""
      data-styled={!(toast.jsx ?? toast.unstyled ?? unstyled)}
      data-mounted={mounted}
      data-removed={removed}
      data-visible={isVisible}
      data-y-position={y}
      data-x-position={x}
      data-index={index}
      data-front={isFront}
      data-swiping={swiping}
      data-dismissible={dismissible}
      data-type={toastType}
      data-invert={invert}
      data-swipe-out={swipeOut}
      data-expanded={Boolean(expanded ?? (expandByDefault && mounted))}
      style={
        {
          '--index': index,
          '--toasts-before': index,
          '--z-index': toasts.length - index,
          '--offset': `${removed ? offsetBeforeRemove : offset.current}px`,
          '--initial-height': expandByDefault ? 'auto' : `${initialHeight}px`,
          ...style,
          ...toast.style,
        } as React.CSSProperties
      }
      onPointerDown={event => {
        if (!dismissible) return
        dragStartTime.current = new Date()
        setOffsetBeforeRemove(offset.current)
        // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
        ;(event.target as HTMLElement).setPointerCapture(event.pointerId)
        if ((event.target as HTMLElement).tagName === 'BUTTON') return
        setSwiping(true)
        pointerStartRef.current = { x: event.clientX, y: event.clientY }
      }}
      onPointerUp={() => {
        if (swipeOut ?? !dismissible) return

        pointerStartRef.current = null
        const swipeAmount = Number(toastRef.current?.style.getPropertyValue('--swipe-amount').replace('px', '') ?? 0)
        const timeTaken = new Date().getTime() - (dragStartTime.current?.getTime() ?? 0)
        const velocity = Math.abs(swipeAmount) / timeTaken

        // Remove only if threshold is met
        if (Math.abs(swipeAmount) >= TOAST_SWIPE_THRESHOLD || velocity > 0.11) {
          setOffsetBeforeRemove(offset.current)
          toast.onDismiss?.(toast)
          deleteToast()
          setSwipeOut(true)
          return
        }

        toastRef.current?.style.setProperty('--swipe-amount', '0px')
        setSwiping(false)
      }}
      onPointerMove={event => {
        if (!pointerStartRef.current || !dismissible) return

        const yPosition = event.clientY - pointerStartRef.current.y
        const xPosition = event.clientX - pointerStartRef.current.x

        const clamp = y === 'top' ? Math.min : Math.max
        const clampedY = clamp(0, yPosition)
        const swipeStartThreshold = event.pointerType === 'touch' ? 10 : 2
        const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold

        if (isAllowedToSwipe) {
          toastRef.current?.style.setProperty('--swipe-amount', `${yPosition}px`)
        } else if (Math.abs(xPosition) > swipeStartThreshold) {
          // User is swiping in wrong direction so we disable swipe gesture
          // for the current pointer down interaction
          pointerStartRef.current = null
        }
      }}
    >
      {closeButton && !toast.jsx ? (
        <button
          aria-label={closeButtonAriaLabel}
          data-close-button
          onClick={
            !dismissible
              ? () => {}
              : () => {
                  deleteToast()
                  toast.onDismiss?.(toast)
                }
          }
          className={twMerge(classNames?.closeButton, toast?.classNames?.closeButton)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      ) : null}
      {toast.jsx ?? React.isValidElement(toast.title) ? (
        toast.jsx ?? toast.title
      ) : (
        <>
          {toastType ?? toast.icon ?? toast.promise ? (
            <div data-icon="">{toast.icon ?? icons?.[toastType as keyof ToastIcons] ?? getAsset(toastType)}</div>
          ) : null}

          <div data-content="">
            <div data-title="" className={twMerge(classNames?.title, toast?.classNames?.title)}>
              {toast.title}
            </div>
            {toast.description ? (
              <div
                data-description=""
                className={twMerge(
                  descriptionClassName,
                  toastDescriptionClassname,
                  classNames?.description,
                  toast?.classNames?.description,
                )}
              >
                {toast.description}
              </div>
            ) : null}
          </div>
          {toast.cancel ? (
            <button
              data-button
              data-cancel
              style={toast.cancelButtonStyle ?? cancelButtonStyle}
              onClick={event => {
                if (!dismissible) return
                deleteToast()
                if (toast.cancel?.onClick) {
                  toast.cancel.onClick(event)
                }
              }}
              className={twMerge(classNames?.cancelButton, toast?.classNames?.cancelButton)}
            >
              {toast.cancel.label}
            </button>
          ) : null}
          {toast.action ? (
            <button
              data-button=""
              style={toast.actionButtonStyle ?? actionButtonStyle}
              onClick={event => {
                toast.action?.onClick(event)
                if (event.defaultPrevented) return
                deleteToast()
              }}
              className={twMerge(classNames?.actionButton, toast?.classNames?.actionButton)}
            >
              {toast.action.label}
            </button>
          ) : null}
        </>
      )}
    </li>
  )
}
