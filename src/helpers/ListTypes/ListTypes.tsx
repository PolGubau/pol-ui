/**
 * @name ListTypes
 * @description ListTypes is a generic type that takes an object and returns a list of types
 *
 * @param {T} T
 * @returns {ListTypes<T>}
 */
export type ListTypes<T> = {
  [K in keyof T]: T[K]
}
