// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function mergeRefs<T = any>(refs: (React.MutableRefObject<T> | React.LegacyRef<T>)[]): React.RefCallback<T> {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
        return ((ref as React.MutableRefObject<T | null>).current = value);
      }
      return null;
    }
    return null;
  };
}
