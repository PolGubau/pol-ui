import type { ColorScale } from './colors/types'
import plugin from 'tailwindcss/plugin.js'

import { animations } from './animations'
import { utilities } from './utilities'
import type { CustomPluginConfig } from './types'
import type { ThemeColors } from './colors'
import { colors } from './colors/colors'

export const poluiPlugin = (config: CustomPluginConfig = {}): ReturnType<typeof plugin> => {
  const { colors: userColors = {} } = config

  // allColors is the official object with all colors from pol-ui but the user can override them using the userColors object.
  // We merge the userColors with allColors to create a new object with the user's colors overriding the official ones.

  // Each color has 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, DEFAULT keys. The user may just override some keys, not all, keep the others as they are.
  const addDefault = (color: ColorScale) => {
    return {
      ...color,
      DEFAULT: color[500],
    }
  }

  const parsedColors: ThemeColors = Object.keys(colors).reduce((acc, key) => {
    const color = colors[key as keyof ThemeColors]
    const userColor = userColors[key as keyof ThemeColors]

    if (userColor) {
      acc[key as keyof ThemeColors] = addDefault({
        ...color,
        ...userColor,
      })
    } else {
      acc[key as keyof ThemeColors] = addDefault(color)
    }

    return acc
  }, {} as ThemeColors)

  return plugin(
    ({ addUtilities }) => {
      addUtilities({ ...utilities })
    },
    {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            ...parsedColors,
          },
          ...animations,
        },
      },
    },
  )
}
