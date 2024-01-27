import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { RangeSlider } from './RangeSlider'

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="progressbar"` by default', () => {
      render(<RangeSlider />)
      expect(rangeSlider()).toBeInTheDocument()
    })

    it('should be able to use any other role permitted for `RangeSlider`', () => {
      // eslint-disable-next-line jsx-a11y/aria-role
      render(<RangeSlider role="rangeinput" />)
      expect(rangeSlider('rangeinput')).toBeInTheDocument()
    })
  })

  describe('Keyboard interactions', () => {
    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup()
      render(<RangeSlider />)
      await user.tab()
      expect(rangeSlider()).toHaveFocus()
    })

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup()
      render(
        <>
          <RangeSlider />
          <RangeSlider />
          <RangeSlider />
        </>,
      )
      const rangeSliderElements = rangeSliders()
      await user.tab()
      expect(rangeSliderElements[0]).toHaveFocus()
      await user.tab()
      expect(rangeSliderElements[1]).toHaveFocus()
      await user.tab()
      expect(rangeSliderElements[2]).toHaveFocus()
    })

    it('should not trigger `onChange` when `Space` is pressed', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<RangeSlider onChange={handleChange} />)
      await user.tab()
      expect(rangeSlider()).toHaveFocus()
      await user.keyboard('[Space]')
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('should not trigger `onChange` when `Enter` is pressed', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<RangeSlider onChange={handleChange} />)
      await user.tab()
      expect(rangeSlider()).toHaveFocus()
      await user.keyboard('[Enter]')
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Props', () => {
    it('should allow HTML attributes for `<input type="range">`s', () => {
      render(<RangeSlider formAction="post.php" min={4} max={10} step={0.5} />)
      const rangeSliderElement = rangeSlider()
      expect(rangeSliderElement).toHaveAttribute('formAction', 'post.php')
      expect(rangeSliderElement).toHaveAttribute('min', '4')
      expect(rangeSliderElement).toHaveAttribute('max', '10')
      expect(rangeSliderElement).toHaveAttribute('step', '0.5')
    })

    it('should be disabled when `disabled={true}`', () => {
      render(<RangeSlider disabled />)

      expect(rangeSlider()).toBeDisabled()
    })

    it('should be required when `required={true}`', () => {
      render(<RangeSlider required={true} />)
      expect(rangeSlider()).toHaveAttribute('required')
    })

    it('should allow ref as prop', () => {
      const ref = createRef<HTMLInputElement>()
      render(<RangeSlider ref={ref} name="range_slider_name" />)
      expect(ref.current?.name).toBe('range_slider_name')
    })
  })

  describe('Rendering', () => {
    it('should render with no props', () => {
      render(<RangeSlider />)
      expect(rangeSlider()).toBeInTheDocument()
    })
  })

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        rangeSlider: {
          root: {
            base: 'dummy-range-slider-base-classes',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <RangeSlider />
        </PoluiProvider>,
      )

      expect(rangeSliderContainer()).toHaveClass('dummy-range-slider-base-classes')
    })

    it('should use `base` classes of field', () => {
      const theme: CustomPoluiTheme = {
        rangeSlider: {
          field: {
            base: 'dummy-range-slider-field-base-classes',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <RangeSlider />
        </PoluiProvider>,
      )

      expect(rangeSliderContainer().childNodes[0]).toHaveClass('dummy-range-slider-field-base-classes')
    })

    it('should use `base` classes of input', () => {
      const theme: CustomPoluiTheme = {
        rangeSlider: {
          field: {
            input: {
              base: 'dummy-range-slider-field-input-base-classes',
            },
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <RangeSlider />
        </PoluiProvider>,
      )

      expect(rangeSlider()).toHaveClass('dummy-range-slider-field-input-base-classes')
    })

    it('should use `sizes` classes of input', () => {
      const theme: CustomPoluiTheme = {
        rangeSlider: {
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
          <RangeSlider size="lg" />
        </PoluiProvider>,
      )

      expect(rangeSlider()).toHaveClass('dummy-range-slider-field-input-sizes-lg-classes')
    })
  })

  describe('Theme as a prop', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme['rangeSlider'] = {
        root: {
          base: 'dummy-range-slider-base-classes',
        },
      }

      render(<RangeSlider theme={theme} />)

      expect(rangeSliderContainer()).toHaveClass('dummy-range-slider-base-classes')
    })

    it('should use `base` classes of field', () => {
      const theme: CustomPoluiTheme['rangeSlider'] = {
        field: {
          base: 'dummy-range-slider-field-base-classes',
        },
      }

      render(<RangeSlider theme={theme} />)

      expect(rangeSliderContainer().childNodes[0]).toHaveClass('dummy-range-slider-field-base-classes')
    })

    it('should use `base` classes of input', () => {
      const theme: CustomPoluiTheme['rangeSlider'] = {
        field: {
          input: {
            base: 'dummy-range-slider-field-input-base-classes',
          },
        },
      }

      render(<RangeSlider theme={theme} />)

      expect(rangeSlider()).toHaveClass('dummy-range-slider-field-input-base-classes')
    })

    it('should use `sizes` classes of input', () => {
      const theme: CustomPoluiTheme['rangeSlider'] = {
        field: {
          input: {
            sizes: {
              lg: 'dummy-range-slider-field-input-sizes-lg-classes',
            },
          },
        },
      }

      render(<RangeSlider size="lg" theme={theme} />)

      expect(rangeSlider()).toHaveClass('dummy-range-slider-field-input-sizes-lg-classes')
    })
  })
})

const rangeSliderContainer = () => screen.getByTestId('ui-range-slider')
const rangeSlider = (role = 'slider') => screen.getByRole(role)
const rangeSliders = (role = 'slider') => screen.getAllByRole(role)
