import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { RefObject } from 'react'
import { createRef, useState } from 'react'
import { describe, expect, it } from 'vitest'
import { Button } from '../Button'
import { Input } from '../Input'
import type { ModalProps } from './Modal'
import { Modal } from './Modal'

describe('Components / Modal', () => {
  it('should be closed by clicking outside if the "dismissible" prop is passed.', async () => {
    const user = userEvent.setup()

    render(<TestModal dismissible />)

    await user.click(triggerButton())

    const modal = dialog()
    expect(modal).toBeInTheDocument()

    await user.click(dialogOverlay())
    expect(modal).not.toBeInTheDocument()
  })

  it('should append to root element when root prop is provided', async () => {
    const root = document.createElement('div')
    const user = userEvent.setup()

    render(<TestModal root={root} />)

    const openButton = triggerButton()

    await user.click(openButton)

    expect(within(root).getByRole('dialog')).toBeTruthy()
  })

  describe('A11y', () => {
    it('should have `role="dialog"`', async () => {
      const user = userEvent.setup()

      render(<TestModal />)

      const openButton = triggerButton()

      await user.click(openButton)

      expect(dialog()).toBeDefined()
    })
  })

  describe('Keyboard interactions', () => {
    it('should open `Modal` when `Space` is pressed on its toggle button', async () => {
      const user = userEvent.setup()

      render(<TestModal />)

      const openButton = triggerButton()

      await user.click(openButton)

      const modal = dialog()
      expect(modal).toBeInTheDocument()
    })

    it('should close `Modal` when `Space` is pressed on any of its buttons', async () => {
      const user = userEvent.setup()

      render(<TestModal />)

      const openButton = triggerButton()

      await user.click(openButton)

      const modal = dialog()
      const closeButton = within(modal).getAllByRole('button')[0]

      expect(modal).toBeInTheDocument()

      await user.click(closeButton)

      expect(modal).not.toBeInTheDocument()
    })

    it('should be closed by Esc key press.', async () => {
      const user = userEvent.setup()

      render(<TestModal dismissible />)

      await user.click(triggerButton())

      const modal = dialog()
      expect(modal).toBeInTheDocument()

      await user.keyboard('[Escape]')

      expect(modal).not.toBeInTheDocument()
    })

    it('should initially focus element provided by ref when `initialFocus={elementRef}`', async () => {
      const user = userEvent.setup()
      const inputRef = createRef<HTMLInputElement>()

      render(<TestModal dismissible inputRef={inputRef} />)

      await user.click(triggerButton())
      const modal = dialog()
      expect(modal).toBeInTheDocument()

      await waitFor(() => expect(document.activeElement).toEqual(input()))
    })
  })
})

const TestModal = ({
  root,
  dismissible = false,
  inputRef,
}: Pick<ModalProps, 'root' | 'dismissible'> & { inputRef?: RefObject<HTMLInputElement> }): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal dismissible={dismissible} root={root} show={open} onClose={() => setOpen(false)} initialFocus={inputRef}>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>{' '}
          <Input ref={inputRef} data-testid="text-input" />
          <Button onClick={() => setOpen(false)}>I accept</Button>
          <Button onClick={() => setOpen(false)}>Decline</Button>
        </div>
      </Modal>
    </>
  )
}

const dialog = () => screen.getByRole('dialog')
const dialogOverlay = () => screen.getByTestId('modal-overlay')
const triggerButton = () => screen.getByRole('button', { name: 'Toggle modal' })

const input = () => screen.getByTestId('text-input')
