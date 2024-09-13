import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"

import { Popover } from "./Popover"

const Example = <Popover label="Click me">Popover Content</Popover>

describe("Popover component", () => {
  test("renders popover content when trigger is clicked", async () => {
    const { getByText } = render(Example)
    await userEvent.click(getByText("Click me"))

    expect(getByText("Popover Content")).toBeInTheDocument()
  })

  test("renders popover content when trigger is clicked and modal is true", async () => {
    const { getByText } = render(Example)
    await userEvent.click(getByText("Click me"))

    expect(getByText("Popover Content")).toBeInTheDocument()
  })
})
