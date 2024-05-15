import { useEffect, useRef } from 'react'

/**
 * Custom hook that sets up an interval to call the provided callback function.
 *
 * @param callback - The function to be called at each interval.
 * @param delay - The delay (in milliseconds) between each interval. Pass `null` to stop the interval.
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay !== null) {
      tick()

      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
