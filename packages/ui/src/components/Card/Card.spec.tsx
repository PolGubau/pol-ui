import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { Card } from './Card'

describe('Components / Card', () => {
  describe('A11y', () => {
    it('should allow `aria-label`', () => {
      render(<Card aria-label="My card" />)

      expect(card()).toHaveAccessibleName('My card')
    })
  })

  describe('Rendering', () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(<Card href="#" />)

      expect(screen.getByRole('link')).toEqual(card())
    })
  })

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            base: 'text-cyan-100',
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Card />
        </PoluiProvider>,
      )

      expect(card()).toHaveClass('text-cyan-100')
    })

    it('should use `children` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            children: 'text-cyan-900',
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Card>
            <span aria-label="The content">Some content</span>
          </Card>
        </PoluiProvider>,
      )
      const children = screen.getByLabelText('The content')

      expect(children.parentElement).toHaveClass('text-cyan-900')
    })

    it('should use `href` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            href: 'text-cyan-700',
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Card href="#">My card</Card>
        </PoluiProvider>,
      )

      expect(card()).toHaveClass('text-cyan-700')
    })
  })
})

const card = () => screen.getByTestId('ui-card')
