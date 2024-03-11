export type OverrideProps<T, R> = Omit<T, keyof R> & R
