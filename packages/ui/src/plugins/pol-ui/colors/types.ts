export type ColorScale = Partial<{
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}>

export interface ThemeColors {
  primary: ColorScale
  secondary: ColorScale
  success: ColorScale
  warning: ColorScale
  error: ColorScale
  info: ColorScale
}

export type SomeColors = Partial<ThemeColors>
