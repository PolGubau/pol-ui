import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FC } from 'react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe.concurrent('Navbar', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="navigation"`', () => {
      render(<Navbar />)

      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })
  })

  describe.concurrent('Keyboard interactions', () => {
    it('should hide/show `Navbar.Menu` when `Space` is pressed on `Navbar.Toggle`', async () => {
      const user = userEvent.setup()
      render(<NavbarTest />)
      const collapse = screen.getByTestId('ui-navbar-collapse')
      const toggle = screen.getByTestId('ui-navbar-toggle')

      expect(collapse).toHaveClass('hidden')

      await user.click(toggle)

      expect(collapse).not.toHaveClass('hidden')
    })
  })
})

const NavbarTest: FC = () => (
  <Navbar
    leftContent={<img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-9" alt="Pol-ui Logo" />}
    links={[
      { href: '#', label: 'Home' },
      { href: '#', label: 'About', content: <p>lorem</p> },
      { href: '#', label: 'Services', content: <p>lorem</p> },
      { href: '#', label: 'Pricing' },
      { href: '#', label: 'Contact' },
    ]}
  />
)
