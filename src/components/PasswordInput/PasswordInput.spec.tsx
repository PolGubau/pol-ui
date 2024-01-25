import { render } from '@testing-library/react'
import { HiEye } from 'react-icons/hi'
import { describe, expect, it } from 'vitest'
import { PasswordInput } from './PasswordInput'

describe.concurrent('Components / Text input', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<PasswordInput />).getByRole('textbox')

      expect(textInput).toBeInTheDocument()
    })
    it('should have Icon if selected ', () => {
      const page = render(<PasswordInput showIcon={HiEye} />).getByTestId('show-icon')

      expect(page).toBeInTheDocument()
    })
  })
})
