export interface OtpInputTheme {
  base: string
  input: string
  selected: string
  unselected: string
}

export const otpInputTheme: OtpInputTheme = {
  base: 'flex items-center',
  input:
    'text-3xl p-0 m-0 text-center border-y border-r first:border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex rounded-none first:rounded-l-md last:rounded-r-md transition-all aspect-square w-16 h-16 bg-transparent',
  selected: 'z-10 border',
  unselected: 'z-0',
}
