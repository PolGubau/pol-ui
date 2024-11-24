"use client"

import { setTheme } from ".."
import type { CustomPoluiTheme } from "../../providers/PoluiProvider"

interface Props {
  theme?: CustomPoluiTheme
}

export function ThemeClientInit({ theme }: Props) {
  setTheme(theme)

  return null
}
