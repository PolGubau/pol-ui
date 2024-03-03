import tailwindcss from 'tailwindcss'
import postcss from 'postcss'

import { PoluiPlugin } from './index'

const TAILWIND_BASE = '@tailwind utilities; '

export async function generatePluginCSS(
  options: {
    inline?: string
    content?: string
  } = {},
) {
  const { inline = '', content = '' } = options

  const result = await postcss([
    tailwindcss({
      plugins: [PoluiPlugin],
      content: [{ raw: content }],
    }),
  ]).process(`${TAILWIND_BASE} ${inline}`, { from: undefined })
  return result.css
}
