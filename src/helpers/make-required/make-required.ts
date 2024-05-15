export type MakeRequired<T> = {
  [K in keyof T]-?: T[K]
}
