import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Progress } from "./Progress"

describe.concurrent("Components / Progress", () => {
  describe.concurrent("A11y", () => {
    it('should have `role="progressbar"`', () => {
      render(<Progress label="Accessible name" progress={45} />)

      expect(progressBar()).toBeInTheDocument()
    })

    it("should use `label` as accessible name", () => {
      render(<Progress label="Accessible name" progress={45} />)

      expect(progressBar()).toHaveAccessibleName("Accessible name")
    })

    it("should report current progress to screen readers", () => {
      render(<Progress progress={45} />)

      expect(progressBar()).toHaveAttribute("aria-valuenow", "45")
    })

    it("should only display labels if specified", () => {
      render(<Progress progress={45} label="Pol-ui" />)

      expect(progressBar()).not.toHaveTextContent("45")
      expect(progressBar()).toHaveTextContent("Pol-ui")
    })

    it("should display test label inside, progress label outside", () => {
      render(<Progress progress={45} label="Pol-ui" />)

      expect(outerLabelContainer()).toBeInTheDocument()
    })

    it("should display text label outside, progress label inside", () => {
      render(<Progress progress={45} label="Pol-ui" />)

      expect(outerLabelContainer()).toBeInTheDocument()
      expect(outerlabel()).toHaveTextContent("Pol-ui")
    })
  })
})

const progressBar = () => screen.getByRole("progressbar")
const outerLabelContainer = () =>
  screen.getByTestId("ui-progress-label-container")
const outerlabel = () => screen.getByTestId("ui-progress-label")
