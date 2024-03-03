import { describe, expect, it } from 'vitest'
import { generatePluginCSS } from './utils'

describe('PoluiPlugin', () => {
  it('should be defined', async () => {
    const css = await generatePluginCSS({
      content: '<div class="bg-red-200">Test</div>',
    })
    expect(css).toMatch(' ')
  })
})
