/**
 * @name parseJSON
 *
 * @description A wrapper for "JSON.parse()"" to support "undefined"
 *
 * @param value {string | null} - The string to parse
 *
 * @returns {T | undefined} The parsed JSON or undefined
 */
export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.error('parsing error on', { value })
    return undefined
  }
}
export const jsonStringify = (data: Record<string, unknown>): string => {
  try {
    return JSON.stringify(data)
  } catch (error) {
    console.error('Error while stringifying JSON:', error)
    return ''
  }
}
