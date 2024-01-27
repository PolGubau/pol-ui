export interface RadioTheme {
  root: string

  input: {
    base: string
    input: string
    fakeInput: string
    marker: string
  }
  label: string
}

export const radioTheme: RadioTheme = {
  root: 'flex items-center cursor-pointer gap-1 group',
  input: {
    base: 'relative flex items-center justify-center',
    input: 'peer z-10 w-6 h-6 opacity-0 absolute cursor-pointer',
    fakeInput:
      'w-6 h-6 rounded-full border border-secondary dark:border-secondary-700 group-hover:ring-2 ring-primary transition-all',
    marker: 'w-full h-full bg-primary absolute rounded-full z-[5]',
  },
  label: 'cursor-pointer',
}
