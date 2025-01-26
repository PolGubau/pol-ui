/**
 * Pauses the execution for a specified duration.
 *
 * @param {number | `${number}ms`} ms - The duration to sleep. It can be a number representing milliseconds or a string in the format `${number}ms`.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 *
 * @example Sleep for 1000 milliseconds
 * await sleep(1000);
 *
 * @example Sleep for 2 seconds
 * await sleep("2000ms");
 */
export const sleep = (ms: number | `${number}ms`): Promise<void> => {
  let duration: number;
  if (typeof ms === "string") {
    duration = Number.parseInt(ms);
  } else {
    duration = ms;
  }
  return new Promise((resolve) => setTimeout(resolve, duration));
};
