import { useCallback, useEffect, useRef } from "react"

interface UseLongPressProps {
  delay: number
  onLongPress: () => void
  onClick?: () => void
  onCancel?: () => void
  onFinish?: () => void
  onStart?: () => void
}

function useLongPress({
  delay,
  onLongPress,
  onClick,
  onCancel,
  onFinish,
  onStart,
}: UseLongPressProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const pressTriggeredRef = useRef<boolean>(false)
  const pressInitiatedRef = useRef<boolean>(false)

  const start = useCallback(
    (
      event:
        | React.MouseEvent<unknown>
        | React.TouchEvent<unknown>
        | React.KeyboardEvent<unknown>
    ) => {
      // Only left clicks (button 0)
      if ("button" in event && event.button !== 0) return
      pressTriggeredRef.current = false
      pressInitiatedRef.current = true
      if (onStart) onStart()

      timerRef.current = setTimeout(() => {
        if (pressInitiatedRef.current) {
          onLongPress()
          if (onFinish) onFinish()
          pressTriggeredRef.current = true
        }
      }, delay)
    },
    [onLongPress, delay, onFinish, onStart]
  )

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    if (!pressTriggeredRef.current && pressInitiatedRef.current && onClick) {
      onClick()
    }
    pressInitiatedRef.current = false
    timerRef.current = undefined
    if (!pressTriggeredRef.current) {
      if (onCancel) onCancel()
    }
  }, [onClick, onCancel])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return {
    onMouseDown: start,
    onTouchStart: start,
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchEnd: clear,
  }
}
export { useLongPress, type UseLongPressProps }
