import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Radio } from './Radio'

describe.concurrent('Components / Radio', () => {
  describe.concurrent('A11y', () => {
    it('should have role="radio" by default', () => {
      const radio = render(<Radio checked />).getByRole('radio')

      expect(radio).toBeInTheDocument()
    })
  })
})
