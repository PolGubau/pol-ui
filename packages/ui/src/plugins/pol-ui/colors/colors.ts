import { secondary } from './secondary'
import { primary } from './primary'
import { error } from './error'
import { success } from './success'
import { warning } from './warning'
import { info } from './info'
import type { ThemeColors } from './types'

export const colors: ThemeColors = {
  info,
  error,
  warning,
  success,
  primary,
  secondary,
}

export type Colors = typeof colors
