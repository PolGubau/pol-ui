export interface ButtonGroupTheme {
  base: string
  position: PositionInButtonGroup
}
export interface PositionInButtonGroup {
  none: string
  start: string
  middle: string
  end: string
}
export const buttonGroupTheme: ButtonGroupTheme = {
  base: 'inline-flex',
  position: {
    none: 'focus:ring-2',
    start: 'rounded-r-none',
    middle: 'rounded-none border-l-0 pl-0',
    end: 'rounded-l-none border-l-0 pl-0',
  },
}
