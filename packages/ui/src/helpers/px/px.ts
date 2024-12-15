/**
 * @name px
 * @description Converts the specified number to a pixel string
 * @param arg <string | number> The number to convert
 * @returns <string> The pixel string
 * @example
 * const pxString = px(10);
 * console.info(pxString); // 10px
 * const pxString = px('10'); // 10px
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export function px(arg: string | number) {
  return `${arg.toString()}px`;
}
