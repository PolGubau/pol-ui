import { render, screen } from "@testing-library/react"
import { MdKeyboardArrowLeft, MdKeyboardCommandKey } from "react-icons/md"
import { describe, expect, it } from "vitest"

import { Kbd } from "./Kbd"

describe("Components / Kbd", () => {
  describe("Rendering", () => {
    it("should render when `children={0}`", () => {
      render(<Kbd>0</Kbd>)
      expect(kbd()).toHaveTextContent("0")
    })

    it("should show icon when render", () => {
      render(<Kbd icon={MdKeyboardArrowLeft} />)

      expect(kbd()).toBeInTheDocument()
      expect(kbd().childNodes[0]).toContainHTML("svg")
    })

    it("should show icon and children when render", () => {
      render(<Kbd icon={MdKeyboardCommandKey}>command</Kbd>)

      expect(kbd()).toBeInTheDocument()
      expect(kbd().childNodes[0]).toContainHTML("svg")
      expect(kbd()).toHaveTextContent("command")
    })
  })
})

const kbd = () => screen.getByTestId("ui-kbd")
