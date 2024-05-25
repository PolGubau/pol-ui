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
    ({ addUtilities, matchUtilities, addVariant, theme }) => {
      addUtilities({ ...utilities })
      matchUtilities(
        {
          timeline: (value, { modifier }) => ({
            animationTimeline: modifier ? `--${modifier}` : value,
          }),
        },
        {
          values: {
            DEFAULT: 'scroll(y)',
            auto: 'auto',
            none: 'none',
            'scroll-x': 'scroll(x)',
            view: 'view()',
          },
          modifiers: 'any',
        },
      )
      matchUtilities(
        {
          'scroll-timeline': (value, { modifier }) => ({
            scrollTimeline: (modifier ? `--${modifier} ` : 'none ') + value,
          }),
        },
        {
          values: theme('timelineValues'),
          modifiers: 'any',
        },
      )

      matchUtilities(
        {
          'view-timeline': (value, { modifier }) => ({
            viewTimeline: (modifier ? `--${modifier} ` : 'none ') + value,
          }),
        },
        {
          values: theme('timelineValues'),
          modifiers: 'any',
        },
      )

      matchUtilities(
        {
          scope: (_v, { modifier }) => ({
            timelineScope: `--${modifier}`,
          }),
        },
        { values: { DEFAULT: '' }, modifiers: 'any' },
      )

      /**
       * Animation range utility
       * Use to be [animation-range:0px_300px], now you can use range-0px_300px
       * @example range-0px_300px
       */
      matchUtilities(
        {
          range: (value, { modifier }) => ({
            animationRange: splitAndCombine(value, modifier),
          }),
        },
        {
          values: {
            DEFAULT: 'cover cover',
            'on-entry': 'entry entry',
            'on-exit': 'exit exit',
            contain: 'contain contain',
          },
          modifiers: 'any',
        },
      )

      addVariant('no-animations', '@supports not (animation-range: cover)')
    },

    {
      darkMode: 'class',

      extend: {
        colors: {
          ...parsedColors,
        },
        ...animations,
      },
    },
  )
}

function splitAndCombine(values: string, modifiers: string | null) {
  const valueArray = (values || '').split(' ')
  const modifierArray = (modifiers || ['0_100%'].join('_')).split('_')

  const combinedValues = [valueArray[0], modifierArray[0], valueArray[1], modifierArray[1]]

  return combinedValues.join(' ')
}
