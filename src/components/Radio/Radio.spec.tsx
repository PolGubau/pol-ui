import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { Radio } from './Radio'

describe.concurrent('Components / Radio', () => {
  describe.concurrent('A11y', () => {
    it('should have role="radio" by default', () => {
      const radio = render(<Radio checked />).getByRole('radio')

      expect(radio).toBeInTheDocument()
    })
  })

  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme: CustomPoluiTheme = {
        radio: {
          input: { input: 'bg-yellow-400 dark:bg-yellow-40' },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Radio checked />
        </PoluiProvider>,
      )

      expect(radio()).toHaveClass('bg-yellow-400 dark:bg-yellow-40')
    })
  })
})

const radio = () => screen.getByRole('radio')
