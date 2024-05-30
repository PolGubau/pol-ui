import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { Slider } from './Slider'

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="progressbar"` by default', () => {
      render(<Slider />)
      expect(Slider()).toBeInTheDocument()
    })

    it('should be able to use any other role permitted for `Slider`', () => {
      // eslint-disable-next-line jsx-a11y/aria-role
      render(<Slider role="rangeinput" />)
      expect(Slider('rangeinput')).toBeInTheDocument()
    })
  })

  describe('Keyboard interactions', () => {
    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup()
      render(<Slider />)
      await user.tab()
      expect(Slider()).toHaveFocus()
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
      expect(Slider()).toHaveFocus()
      await user.keyboard('[Space]')
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('should not trigger `onChange` when `Enter` is pressed', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<Slider onChange={handleChange} />)
      await user.tab()
      expect(Slider()).toHaveFocus()
      await user.keyboard('[Enter]')
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Props', () => {
    it('should allow HTML attributes for `<input type="range">`s', () => {
      render(<Slider formAction="post.php" min={4} max={10} step={0.5} />)
      const SliderElement = Slider()
      expect(SliderElement).toHaveAttribute('formAction', 'post.php')
      expect(SliderElement).toHaveAttribute('min', '4')
      expect(SliderElement).toHaveAttribute('max', '10')
      expect(SliderElement).toHaveAttribute('step', '0.5')
    })

    it('should be disabled when `disabled={true}`', () => {
      render(<Slider disabled />)

      expect(Slider()).toBeDisabled()
    })

    it('should be required when `required={true}`', () => {
      render(<Slider required={true} />)
      expect(Slider()).toHaveAttribute('required')
    })

    it('should allow ref as prop', () => {
      const ref = createRef<HTMLInputElement>()
      render(<Slider ref={ref} name="range_slider_name" />)
      expect(ref.current?.name).toBe('range_slider_name')
    })
  })

  describe('Rendering', () => {
    it('should render with no props', () => {
      render(<Slider />)
      expect(Slider()).toBeInTheDocument()
    })
  })

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        slider: {
          root: {
            base: 'dummy-range-slider-base-classes',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <Slider />
        </PoluiProvider>,
      )

      expect(SliderContainer()).toHaveClass('dummy-range-slider-base-classes')
    })

    it('should use `base` classes of field', () => {
      const theme: CustomPoluiTheme = {
        slider: {
          field: {
            base: 'dummy-range-slider-field-base-classes',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <Slider />
        </PoluiProvider>,
      )

      expect(SliderContainer().childNodes[0]).toHaveClass('dummy-range-slider-field-base-classes')
    })

    it('should use `base` classes of input', () => {
      const theme: CustomPoluiTheme = {
        slider: {
          field: {
            input: {
              base: 'dummy-range-slider-field-input-base-classes',
            },
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <Slider />
        </PoluiProvider>,
      )

      expect(Slider()).toHaveClass('dummy-range-slider-field-input-base-classes')
    })

    it('should use `sizes` classes of input', () => {
      const theme: CustomPoluiTheme = {
        slider: {
          field: {
            input: {
              sizes: {
                lg: 'dummy-range-slider-field-input-sizes-lg-classes',
              },
            },
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <Slider size="lg" />
        </PoluiProvider>,
      )

      expect(Slider()).toHaveClass('dummy-range-slider-field-input-sizes-lg-classes')
    })
  })

  describe('Theme as a prop', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme['slider'] = {
        root: {
          base: 'dummy-range-slider-base-classes',
        },
      }

      render(<Slider theme={theme} />)

      expect(SliderContainer()).toHaveClass('dummy-range-slider-base-classes')
    })

    it('should use `base` classes of field', () => {
      const theme: CustomPoluiTheme['slider'] = {
        field: {
          base: 'dummy-range-slider-field-base-classes',
        },
      }

      render(<Slider theme={theme} />)

      expect(SliderContainer().childNodes[0]).toHaveClass('dummy-range-slider-field-base-classes')
    })

    it('should use `base` classes of input', () => {
      const theme: CustomPoluiTheme['slider'] = {
        field: {
          input: {
            base: 'dummy-range-slider-field-input-base-classes',
          },
        },
      }

      render(<Slider theme={theme} />)

      expect(Slider()).toHaveClass('dummy-range-slider-field-input-base-classes')
    })

    it('should use `sizes` classes of input', () => {
      const theme: CustomPoluiTheme['slider'] = {
        field: {
          input: {
            sizes: {
              lg: 'dummy-range-slider-field-input-sizes-lg-classes',
            },
          },
        },
      }

      render(<Slider size="lg" theme={theme} />)

      expect(Slider()).toHaveClass('dummy-range-slider-field-input-sizes-lg-classes')
    })
  })
})

const SliderContainer = () => screen.getByTestId('ui-range-slider')
const Slider = (role = 'slider') => screen.getByRole(role)
const Sliders = (role = 'slider') => screen.getAllByRole(role)
