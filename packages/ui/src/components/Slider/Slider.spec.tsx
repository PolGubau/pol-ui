import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { PoluiProvider, type CustomPoluiTheme } from "../PoluiProvider"
import { Slider } from "./Slider"

describe("Components / Button", () => {
  describe("A11y", () => {
    it('should have `role="progressbar"` by default', () => {
      render(<Slider />)
      expect(TestSlider()).toBeInTheDocument()
    })

    it("should be able to use any other role permitted for `Slider`", () => {
      render(<Slider role="rangeinput" />)
      expect(TestSlider("rangeinput")).toBeInTheDocument()
    })
  })

  describe("Keyboard interactions", () => {
    it("should focus when `Tab` is pressed", async () => {
      const user = userEvent.setup()
      render(<Slider />)
      await user.tab()
      expect(Sliders()[0]).toHaveFocus()
    })

    it("should be possible to `Tab` out", async () => {
      const user = userEvent.setup()
      render(
        <>
          <Slider />
          <Slider />
          <Slider />
        </>
      )
      const SliderElements = Sliders()
      await user.tab()
      expect(SliderElements[0]).toHaveFocus()
      await user.tab()
      expect(SliderElements[1]).toHaveFocus()
      await user.tab()
      expect(SliderElements[2]).toHaveFocus()
    })
  })

  describe("Rendering", () => {
    it("should render with no props", () => {
      render(<Slider />)
      expect(TestSlider()).toBeInTheDocument()
    })
  })
})

const TestSlider = (role = "progressbar") => screen.getByRole(role)
const Sliders = (role = "slider") => screen.getAllByRole(role)
