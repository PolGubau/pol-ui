import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { Slider } from './Slider'

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="progressbar"` by default', () => {
      render(<Slider />)
      expect(TestSlider()).toBeInTheDocument()
    })

    it('should be able to use any other role permitted for `Slider`', () => {
      // eslint-disable-next-line jsx-a11y/aria-role
      render(<Slider role="rangeinput" />)
      expect(TestSlider('rangeinput')).toBeInTheDocument()
    })
  })

  describe('Keyboard interactions', () => {
    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup()
      render(<Slider />)
      await user.tab()
      expect(TestSlider()).toHaveFocus()
    })

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup()
      render(
        <>
          <Slider />
          <Slider />
          <Slider />
        </>,
      )
      const SliderElements = Sliders()
      await user.tab()
      expect(SliderElements[0]).toHaveFocus()
      await user.tab()
      expect(SliderElements[1]).toHaveFocus()
      await user.tab()
      expect(SliderElements[2]).toHaveFocus()
    })

    it('should not trigger `onChange` when `Space` is pressed', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<Slider onChange={handleChange} />)
      await user.tab()
      expect(TestSlider()).toHaveFocus()
      await user.keyboard('[Space]')
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('should not trigger `onChange` when `Enter` is pressed', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<Slider onChange={handleChange} />)
      await user.tab()
      expect(TestSlider()).toHaveFocus()
      await user.keyboard('[Enter]')
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Rendering', () => {
    it('should render with no props', () => {
      render(<Slider />)
      expect(TestSlider()).toBeInTheDocument()
    })
  })

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        slider: {
          base: 'dummy-range-slider-base-classes',
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <Slider />
        </PoluiProvider>,
      )

      expect(SliderContainer()).toHaveClass('dummy-range-slider-base-classes')
    })
  })

  describe('Theme as a prop', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme['slider'] = {
        base: 'dummy-range-slider-base-classes',
      }

      render(<Slider theme={theme} />)

      expect(SliderContainer()).toHaveClass('dummy-range-slider-base-classes')
    })
  })
})

const SliderContainer = () => screen.getByTestId('ui-slider')
const TestSlider = (role = 'slider') => screen.getByRole(role)
const Sliders = (role = 'slider') => screen.getAllByRole(role)
