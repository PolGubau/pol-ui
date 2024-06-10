// https://github.com/gregberge/react-merge-refs
// Copyright (c) 2020 Greg Bergé
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeRefs<T = any>(refs: (React.MutableRefObject<T> | React.LegacyRef<T>)[]): React.RefCallback<T> {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        return ((ref as React.MutableRefObject<T | null>).current = value)
      }
    })
  }
}
