import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Conveyor } from "./Conveyor"

describe("Components / Conveyor", () => {
  describe("Rendering", () => {
    it("Should render its children`", () => {
      render(<TestConveyor />)

      numbers.forEach((item) => {
        expect(screen.getAllByText(item)[0]).toBeInTheDocument()
        expect(screen.getAllByText(item)[1]).toBeInTheDocument()
      })
    })

    it('Should have "scroller" animation', () => {
      render(<TestConveyor />)

      expect(screen.getByTestId("conveyor-scroller")).toHaveClass("scroller")
    })
  })
})
const numbers = ["1", "2", "3", "4", "5", "6"]
const TestConveyor = () => {
  return (
    <Conveyor>
      {numbers.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </Conveyor>
  )
}
