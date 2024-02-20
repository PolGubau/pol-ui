import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { IconButton } from './IconButton'

describe('Components / IconButton', () => {
  describe('A11y', () => {
    it('should have `role="IconButton"` by default', () => {
      render(<IconButton>Hi there</IconButton>)

      expect(iconButton()).toBeInTheDocument()
    })

    it('should be able to use any other role permitted for `<IconButton>`s', () => {
      render(<IconButton role="menuitem">Hi there</IconButton>)

      expect(screen.getByRole('menuitem')).toBeInTheDocument()
    })
  })

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<IconButton onClick={onClick}>Hi there</IconButton>)

      await user.click(iconButton())

      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup()
      render(<IconButton>Hi there</IconButton>)

      await user.tab()

      expect(iconButton()).toHaveFocus()
    })

    describe('Props', () => {
      it('should allow HTML attributes for `<IconButton>`s', () => {
        render(
          <IconButton formAction="post.php" type="submit">
            Hi there
          </IconButton>,
        )

        expect(iconButton()).toHaveAttribute('formAction', 'post.php')
        expect(iconButton()).toHaveAttribute('type', 'submit')
      })

      it('should be disabled when `disabled={true}`', () => {
        render(<IconButton disabled>Hi there</IconButton>)

        expect(iconButton()).toBeDisabled()
      })

      it('should show custom Loader when `isLoading={true}` and `loader` is present', () => {
        render(<IconButton loading>Hi there</IconButton>)

        expect(screen.getByTestId('loader')).toBeInTheDocument()
      })
    })

    describe('Rendering', () => {
      it('should render when `children={0}`', () => {
        render(<IconButton>0</IconButton>)

        expect(iconButton()).toHaveTextContent('0')
      })

      describe('`as` and `href` props', () => {
        it('should render an anchor `<a>` when `href=".."`', () => {
          render(<IconButton href="#" label="Something or other" />)

          expect(iconButtonLink()).toBeInTheDocument()
        })
      })
    })

    describe('Theme', () => {
      it('should use `base` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            base: 'font-extralight',
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton />
          </PoluiProvider>,
        )

        expect(iconButton()).toHaveClass('font-extralight')
      })

      it('should use `color` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            color: {
              primary: 'bg-red-300',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton color="primary" />
          </PoluiProvider>,
        )

        expect(iconButton()).toHaveClass('bg-red-300')
      })

      it('should use `disabled` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            disabled: 'opacity-10',
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton disabled />
          </PoluiProvider>,
        )

        expect(iconButton()).toHaveClass('opacity-10')
      })

      it('should use `inner` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            inner: {
              base: 'font-extralight',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton>Hi there</IconButton>
          </PoluiProvider>,
        )

        const iconButtonInnerContent = screen.getByText('Hi there')

        expect(iconButtonInnerContent).toHaveClass('font-extralight')
      })
    })
  })

  const iconButton = () => screen.getByRole('button')

  const iconButtonLink = () => screen.getByRole('link')
})
