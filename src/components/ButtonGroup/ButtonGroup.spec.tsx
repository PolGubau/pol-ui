import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { Button } from '../Button/Button'
import { ButtonGroup } from './ButtonGroup'

describe('Components / Button group', () => {
  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        buttonGroup: {
          base: 'text-gray-400',
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </PoluiProvider>,
      )

      expect(group()).toHaveClass('text-gray-400')
    })

    it('should use `position` classes', () => {
      const theme: CustomPoluiTheme = {
        buttonGroup: {
          base: 'text-gray-400',
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </PoluiProvider>,
      )

      expect(group()).toHaveClass('text-gray-400')
    })
  })
})

const group = () => screen.getByRole('group')
