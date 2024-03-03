import createPlugin from 'tailwindcss/plugin'

import themeConfig from './theme'
import type { PluginCreator } from 'tailwindcss/types/config'
import type { Config } from 'tailwindcss'

const pluginCreator: PluginCreator = api => {
  const { theme, matchUtilities, addUtilities } = api

  const dynamicsUtils = {
    'animate-delay': {
      css: 'animation-delay',
      values: theme('animationDelay'),
    },
  }

  Object.entries(dynamicsUtils).forEach(([name, { css, values }]) => {
    matchUtilities({
      [name]: (value: string) => {
        return { [css]: value }
      },
    }),
      {
        values,
      }
  })
}

const pluginConfig: Partial<Config> = { theme: themeConfig }

export const PoluiPlugin = createPlugin(pluginCreator, pluginConfig)
