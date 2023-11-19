import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC } from 'react';
import { describe, expect, it } from 'vitest';
import { Navbar } from './Navbar';

describe.concurrent('Navbar', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="navigation"`', () => {
      render(<Navbar />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe.concurrent('Keyboard interactions', () => {
    it('should hide/show `Navbar.Menu` when `Space` is pressed on `Navbar.Toggle`', async () => {
      const user = userEvent.setup();
      render(<NavbarTest />);
      const collapse = screen.getByTestId('ui-navbar-collapse');
      const toggle = screen.getByTestId('ui-navbar-toggle');

      expect(collapse).toHaveClass('hidden');

      await user.click(toggle);

      expect(collapse).not.toHaveClass('hidden');

      await user.click(toggle);

      expect(collapse).toHaveClass('hidden');
    });
  });
});

const NavbarTest: FC = () => (
  <Navbar>
    <Navbar.Brand href="https://ui.polgubau.com/">
      <img
        src="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
        className="mr-3 h-6 sm:h-9"
        alt="Pol-ui Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pol-ui</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="/navbars" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">About</Navbar.Link>
      <Navbar.Link href="/navbars">Services</Navbar.Link>
      <Navbar.Link href="/navbars">Pricing</Navbar.Link>
      <Navbar.Link href="/navbars">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);
