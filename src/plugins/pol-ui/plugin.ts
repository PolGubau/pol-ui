import type { ColorScale } from './colors/types'
import plugin from 'tailwindcss/plugin.js'

import { animations } from './animations'
import { utilities } from './utilities'
import type { CustomPluginConfig } from './types'
import type { ThemeColors } from './colors'
import { colors } from './colors/colors'
import { singleTimeline } from './helpers'

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
    ({ addUtilities, matchUtilities, theme }) => {
      // Predefined animations in same element

      interface DynamicUtil {
        [key: string]: {
          css: string
          values: string[]
          generateValue?: (value: string) => string
        }
      }

      const dynamicUtils: DynamicUtil = {
        'animate-delay': {
          css: 'animation-delay',
          values: theme('animationDelay'),
        },
        'animate-duration': { css: 'animation-duration', values: theme('animationDuration') },
        'animate-iteration-count': { css: 'animation-iteration-count', values: theme('animationIterationCount') },
        'animate-fill-mode': { css: 'animation-fill-mode', values: theme('animationFillMode') },
        'animate-bezier': { css: 'animation-timing-function', values: theme('animationCubicBezier') },
        'animate-steps': {
          css: 'animation-timing-function',
          values: theme('animationSteps'),
          generateValue: (value: string | number) => `steps(${value})`,
        },
        'animate-range': {
          css: 'animation-range',
          values: theme('animationRange'),
          generateValue: (value: string) => value,
        },
        timeline: {
          css: 'animation-timeline',
          values: theme('timeline'),
          generateValue: (value: string) => singleTimeline(value),
        },
        'scroll-timeline': {
          css: 'scroll-timeline-name',
          values: theme('scrollTimeline'),
          generateValue: (value: string) => singleTimeline(value),
        },
        'view-timeline': {
          css: 'view-timeline-name',
          values: theme('viewTimeline'),
          generateValue: (value: string) => singleTimeline(value),
        },
        'scroll-timeline-axis': { css: 'scroll-timeline-axis', values: theme('scrollTimelineAxis') },
        'view-timeline-axis': { css: 'view-timeline-axis', values: theme('viewTimelineAxis') },
        'scroll-animate': {
          css: 'scroll-timeline-name',
          values: theme('scrollTimeline'),
          generateValue: (value: string) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}`,
        },
        'view-animate': {
          css: 'view-timeline-name',
          values: theme('viewTimeline'),
          generateValue: (value: string) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}`,
        },
      }

      const dynamicUtilsEntries = Object.entries(dynamicUtils)

      dynamicUtilsEntries.forEach(([name, { css, values, generateValue }]) => {
        matchUtilities(
          {
            [name]: value => ({
              [css]: generateValue ? generateValue(value) : value,
            }),
          },
          {
            values: Object.fromEntries(values.map(value => [value, value])),
          },
        )
      })

      addUtilities(utilities)
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
