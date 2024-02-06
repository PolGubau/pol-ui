import React from 'react'
import { TOAST_GAP, TOAST_WIDTH, Toast, TOAST_VIEWPORT_OFFSET, TOAST_VISIBLE_TOASTS_AMOUNT } from './Toast'
import { getDocumentDirection } from '../../helpers'
import type { HeightT, ToastT, ToastToDismiss, ToasterProps } from './types'
import { ToastState } from './state'
import ReactDOM from 'react-dom'

export const Toaster = (props: ToasterProps) => {
  const {
    invert,
    position = 'bottom-right',
    hotkey = ['altKey', 'KeyT'],
    expand,
    closeButton,
    className,
    offset,
    richColors,
    duration,
    style,
    visibleToasts = TOAST_VISIBLE_TOASTS_AMOUNT,
    toastOptions,
    dir = getDocumentDirection(),
    gap,
    icons,
    containerAriaLabel = 'Notifications',
    pauseWhenPageIsHidden,
  } = props
  const [toasts, setToasts] = React.useState<ToastT[]>([])
  const possiblePositions = React.useMemo(() => {
    return Array.from(
      new Set(
        [position].concat(toasts.filter(toast => toast.position).map(toast => toast.position ?? 'bottom-center')),
      ),
    )
  }, [toasts, position])
  const [heights, setHeights] = React.useState<HeightT[]>([])
  const [expanded, setExpanded] = React.useState(false)
  const [interacting, setInteracting] = React.useState(false)

  const listRef = React.useRef<HTMLOListElement>(null)
  const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '')
  const lastFocusedElementRef = React.useRef<HTMLElement>(null)
  const isFocusWithinRef = React.useRef(false)

  const removeToast = React.useCallback(
    (toast: ToastT) => setToasts(toasts => toasts.filter(({ id }) => id !== toast.id)),
    [],
  )

  React.useEffect(() => {
    return ToastState.subscribe(toast => {
      if ((toast as ToastToDismiss).dismiss) {
        setToasts(toasts => toasts.map(t => (t.id === toast.id ? { ...t, delete: true } : t)))
        return
      }

      // Prevent batching, temp solution.
      setTimeout(() => {
        ReactDOM.flushSync(() => {
          setToasts(toasts => {
            const indexOfExistingToast = toasts.findIndex(t => t.id === toast.id)

            // Update the toast if it already exists
            if (indexOfExistingToast !== -1) {
              return [
                ...toasts.slice(0, indexOfExistingToast),
                { ...toasts[indexOfExistingToast], ...toast },
                ...toasts.slice(indexOfExistingToast + 1),
              ]
            }

            return [toast, ...toasts]
          })
        })
      })
    })
  }, [])

  React.useEffect(() => {
    // Ensure expanded is always false when no toasts are present / only one left
    if (toasts.length <= 1) {
      setExpanded(false)
    }
  }, [toasts])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isHotkeyPressed = hotkey.every(key => (event as any)[key] ?? event.code === key)

      if (isHotkeyPressed) {
        setExpanded(true)
        listRef.current?.focus()
      }

      if (
        event.code === 'Escape' &&
        (document.activeElement === listRef.current || listRef.current?.contains(document.activeElement))
      ) {
        setExpanded(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [hotkey])

  React.useEffect(() => {
    if (listRef.current) {
      return () => {
        if (lastFocusedElementRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          lastFocusedElementRef.current.focus({ preventScroll: true })
          isFocusWithinRef.current = false
        }
      }
    }
  }, [])

  if (!toasts.length) return null

  return (
    // Remove item from normal navigation flow, only available via hotkey
    <section aria-label={`${containerAriaLabel} ${hotkeyLabel}`} tabIndex={-1}>
      {possiblePositions.map((position, index) => {
        const [y, x] = position.split('-')
        return (
          <ol
            key={position}
            dir={dir === 'auto' ? getDocumentDirection() : dir}
            tabIndex={-1}
            ref={listRef}
            className={className}
            data-sonner-toaster
            data-rich-colors={richColors}
            data-y-position={y}
            data-x-position={x}
            style={
              {
                '--front-toast-height': `${heights[0]?.height}px`,
                '--offset': typeof offset === 'number' ? `${offset}px` : offset ?? TOAST_VIEWPORT_OFFSET,
                '--width': `${TOAST_WIDTH}px`,
                '--gap': `${TOAST_GAP}px`,
                ...style,
              } as React.CSSProperties
            }
            onBlur={event => {
              if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
                isFocusWithinRef.current = false
                if (lastFocusedElementRef.current) {
                  lastFocusedElementRef.current.focus({ preventScroll: true })
                }
              }
            }}
            onFocus={event => {
              const isNotDismissible =
                event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false'

              if (isNotDismissible) return

              if (!isFocusWithinRef.current) {
                isFocusWithinRef.current = true
              }
            }}
            onMouseEnter={() => setExpanded(true)}
            onMouseMove={() => setExpanded(true)}
            onMouseLeave={() => {
              // Avoid setting expanded to false when interacting with a toast, e.g. swiping
              if (!interacting) {
                setExpanded(false)
              }
            }}
            onPointerDown={event => {
              const isNotDismissible =
                event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false'

              if (isNotDismissible) return
              setInteracting(true)
            }}
            onPointerUp={() => setInteracting(false)}
          >
            {toasts
              .filter(toast => (!toast.position && index === 0) ?? toast.position === position)
              .map((toast, index) => (
                <Toast
                  key={toast.id}
                  icons={icons}
                  index={index}
                  toast={toast}
                  duration={toastOptions?.duration ?? duration}
                  className={toastOptions?.className}
                  descriptionClassName={toastOptions?.descriptionClassName}
                  invert={invert ?? false}
                  visibleToasts={visibleToasts}
                  closeButton={toastOptions?.closeButton ?? closeButton ?? false}
                  interacting={interacting}
                  position={position}
                  style={toastOptions?.style}
                  unstyled={toastOptions?.unstyled}
                  classNames={toastOptions?.classNames}
                  cancelButtonStyle={toastOptions?.cancelButtonStyle}
                  actionButtonStyle={toastOptions?.actionButtonStyle}
                  removeToast={removeToast}
                  toasts={toasts.filter(t => t.position == toast.position)}
                  heights={heights.filter(h => h.position == toast.position)}
                  setHeights={setHeights}
                  expandByDefault={expand ?? false}
                  gap={gap}
                  expanded={expanded}
                  pauseWhenPageIsHidden={pauseWhenPageIsHidden ?? false}
                />
              ))}
          </ol>
        )
      })}
    </section>
  )
}
