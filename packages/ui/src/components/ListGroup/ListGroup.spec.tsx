import { useState } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { HiCloudDownload } from "react-icons/hi"
import { describe, expect, it } from "vitest"

import {
  PoluiProvider,
  type CustomPoluiTheme,
} from "../../providers/PoluiProvider"
import { ListGroup } from "./ListGroup"
import { ListItem } from "./ListItem"

describe("Components / List group", () => {
  describe("Keyboard interactions", () => {
    it("should trigger `onClick` when `Enter` is pressed on a `ListItem`", async () => {
      const user = userEvent.setup()
      render(<TestListGroup />)

      await user.tab()
      await user.keyboard("[Enter]")

      const firstItem = items()[0]

      expect(firstItem).toHaveAccessibleName("Clicked")
    })

    it("should trigger `onClick` when `Space` is pressed on a `ListItem`", async () => {
      const user = userEvent.setup()
      render(<TestListGroup />)

      await user.tab()
      await user.keyboard("[Space]")

      const firstItem = items()[0]

      expect(firstItem).toHaveAccessibleName("Clicked")
    })
  })

  it("should be possible to `Tab` out", async () => {
    const user = userEvent.setup()
    render(
      <>
        <TestListGroup />
        <button aria-label="Outside">Outside</button>
      </>
    )
    const outsideButton = screen.getByLabelText("Outside")

    await user.tab()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of items()) {
      await user.tab()
    }

    expect(outsideButton).toHaveFocus()
  })
})

const TestListGroup = (): JSX.Element => {
  const [isClicked, setClicked] = useState(false)

  return (
    <ListGroup>
      <ListItem
        active
        onClick={() => {
          setClicked(!isClicked)
        }}
      >
        {isClicked ? "Clicked" : "Waiting"}
      </ListItem>
      <ListItem href="#">Settings</ListItem>
      <ListItem>Messages</ListItem>
      <ListItem icon={HiCloudDownload}>Download</ListItem>
    </ListGroup>
  )
}

const items = () =>
  screen
    .getAllByRole("listitem")
    .map((li) => li.firstElementChild) as HTMLElement[]
