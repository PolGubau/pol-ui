/**
 * Creates a debounced function that delays invoking the provided function until after the specified delay.
 *
 * @param fn - The function to debounce.
 * @param delay - The number of milliseconds to delay.
 * @returns A new debounced function.
 */
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export function debounce(fn: Function, delay: number) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let timer: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
