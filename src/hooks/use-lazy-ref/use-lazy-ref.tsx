import React from 'react'

/**
 * Custom hook for creating a lazy-initialized mutable ref.
 * @template T - The type of the value stored in the ref.
 * @param {() => T} fn - A function that returns the initial value for the ref.
 * @returns {React.MutableRefObject<T>} - The mutable ref object.
 */
export function useLazyRef<T>(fn: () => T): React.MutableRefObject<T> {
  // Create a mutable ref to store the value
  const ref = React.useRef<T>()

  // Check if the current value of the ref is undefined
  if (ref.current === undefined) {
    // If undefined, initialize the ref with the result of the provided function
    ref.current = fn()
  }

  // Return the ref as a React.MutableRefObject
  return ref as React.MutableRefObject<T>
}

// Example usage:
// const myLazyRef = useLazyRef(() => expensiveInitialization());
// Now, myLazyRef.current contains the lazily initialized value.
