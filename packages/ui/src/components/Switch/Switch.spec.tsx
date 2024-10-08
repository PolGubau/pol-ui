import React, { useState, type FC } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { Input } from "../Input"
import { PoluiProvider, type CustomPoluiTheme } from "../PoluiProvider"
import { Switch } from "./Switch"

describe("Components / Toggle switch", () => {
  describe("A11y", () => {
    it('should have `role="switch"` by default', () => {
      render(<Switch checked={false} label="Enable" onChange={console.log} />)

      expect(toggleSwitch()).toBeInTheDocument()
    })

    it("should have an accessible name", () => {
      render(
        <Switch
          checked={false}
          label="Enable notifications"
          name="notifications"
          onChange={console.log}
        />
      )

      expect(toggleSwitch()).toHaveAccessibleName("Enable notifications")
    })
  })

  describe("Keyboard interaction", () => {
    it("should toggle when `Enter` is pressed", async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(
        <Switch
          checked={false}
          label="Enable notifications"
          name="notifications"
          onChange={handleChange}
        />
      )

      await user.tab()

      expect(toggleSwitch()).toHaveFocus()

      await user.keyboard("[Enter]")
      expect(handleChange).toHaveBeenCalled()
    })
    it("should toggle true when the right arrow is pressed", async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(
        <Switch
          checked={false}
          label="Enable notifications"
          name="notifications"
          onChange={handleChange}
        />
      )

      await user.tab()

      expect(toggleSwitch()).toHaveFocus()

      await user.keyboard("[ArrowRight]")
      expect(handleChange).toHaveBeenCalled()
    })
    it("should false true when the left arrow is pressed", async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(
        <Switch
          checked={false}
          label="Enable notifications"
          name="notifications"
          onChange={handleChange}
        />
      )

      await user.tab()

      expect(toggleSwitch()).toHaveFocus()

      await user.keyboard("[ArrowLeft]")
      expect(handleChange).toHaveBeenCalled()
    })

    it("shouldn't submit surrounding form when `Enter` is pressed", async () => {
      const handleSubmit = vi.fn()
      const user = userEvent.setup()
      render(
        <form
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit()
          }}
        >
          <Switch
            checked={false}
            label="Enable notifications"
            name="notifications"
            onChange={console.log}
          />
        </form>
      )

      await user.tab()

      expect(toggleSwitch()).toHaveFocus()

      await user.keyboard("[Enter]")

      expect(handleSubmit).not.toHaveBeenCalled()
    })

    it("should toggle when `Space` is pressed", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const TestSwitch: FC = () => {
        const [state, setState] = useState(false)

        return (
          <Switch
            checked={state}
            label="Enable notifications"
            name="notifications"
            onChange={(value) => {
              setState(value)
              handleChange(value)
            }}
          />
        )
      }
      render(<TestSwitch />)

      await user.tab()

      expect(toggleSwitch()).toHaveFocus()

      await user.keyboard("[Space]")

      expect(toggleSwitch()).toHaveAttribute("aria-checked", "true")

      await user.keyboard("[Space]")

      expect(toggleSwitch()).toHaveAttribute("aria-checked", "false")
    })

    it("should focus when `Tab` is pressed", async () => {
      const user = userEvent.setup()
      render(
        <Switch
          checked={false}
          label="Enable notifications"
          name="notifications"
          onChange={console.log}
        />
      )

      await user.tab()

      expect(toggleSwitch()).toHaveFocus()
    })

    it("should allow the user to `Tab` away", async () => {
      const user = userEvent.setup()
      render(
        <form>
          <Switch
            checked={false}
            label="Enable notifications"
            name="notifications"
            onChange={console.log}
          />
          <Input type="text" />
        </form>
      )

      await user.tab()
      await user.tab()

      expect(toggleSwitch()).not.toHaveFocus()
      expect(screen.getByRole("textbox")).toHaveFocus()
    })
  })

  describe("Props", () => {
    it("should allow HTML attributes for `<button>`s", () => {
      render(
        <Switch
          checked={false}
          label="Enable"
          onChange={console.log}
          type="submit"
        />
      )

      expect(toggleSwitch()).toHaveAttribute("type", "submit")
    })
  })

  describe("Theme", () => {
    it("should use `base` classes", () => {
      const theme: CustomPoluiTheme = {
        switch: {
          root: {
            base: "text-cyan-100",
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Switch
            checked={false}
            label="Enable"
            onChange={console.log}
            type="submit"
          />
        </PoluiProvider>
      )

      expect(toggleSwitch()).toHaveClass("text-cyan-100")
    })

    it("should use `active` classes", () => {
      const theme: CustomPoluiTheme = {
        switch: {
          root: {
            active: {
              off: "text-cyan-200",
              on: "text-cyan-300",
            },
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Switch
            checked={false}
            label="Enable"
            onChange={console.log}
            type="submit"
          />
          <Switch
            disabled
            checked={false}
            label="Enable"
            onChange={console.log}
            type="submit"
          />
        </PoluiProvider>
      )
      const activeSwitch = toggleSwitches()[0]
      const disabledSwitch = toggleSwitches()[1]

      expect(activeSwitch).toHaveClass("text-cyan-300")
      expect(disabledSwitch).toHaveClass("text-cyan-200")
    })

    it("should use `label` classes", () => {
      const theme: CustomPoluiTheme = {
        switch: {
          root: {
            label: "test-label",
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Switch
            checked={false}
            label="Enable"
            onChange={console.log}
            type="submit"
          />
        </PoluiProvider>
      )

      expect(label()).toHaveClass("test-label")
    })
  })
})

const toggleSwitch = () => screen.getByRole("switch")

const toggleSwitches = () => screen.getAllByRole("switch")

const label = () => screen.getByTestId("ui-switch-label")
