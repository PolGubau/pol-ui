import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Avatar } from "."
import { PoluiProvider } from "../../providers/PoluiProvider"

describe("Components / Avatar", () => {
  describe("Placeholder", () => {
    it("should display placeholder initials", () => {
      render(
        <PoluiProvider>
          <Avatar placeholderInitials="RR" />
        </PoluiProvider>
      )

      expect(initialsPlaceholderText()).toHaveTextContent("RR")
    })

    it("should support explicit sizes with placeholder initials", () => {
      render(
        <PoluiProvider>
          <Avatar placeholderInitials="RR" size="xl" />
        </PoluiProvider>
      )

      expect(initialsPlaceholder()).toHaveClass("h-36 w-36")
    })
    it("should support border color with placeholder initials", () => {
      render(
        <PoluiProvider>
          <Avatar placeholderInitials="RR" bordered color="success" />
        </PoluiProvider>
      )

      expect(initialsPlaceholder()).toHaveClass(
        "ring-green-500 dark:ring-green-500"
      )
    })
  })
  describe("Image", () => {
    it("should support custom image elements", () => {
      render(
        <PoluiProvider>
          <Avatar
            img={(props) => (
              <img alt="" referrerPolicy="no-referrer" {...props} />
            )}
          />
        </PoluiProvider>
      )

      expect(img()).toHaveAttribute("referrerpolicy", "no-referrer")
    })
  })
  describe("Status", () => {
    it("should have online status indicator", () => {
      render(
        <PoluiProvider>
          <Avatar status="online" />
        </PoluiProvider>
      )

      expect(status()).toHaveClass("bg-success")
    })
  })
})

const status = () => screen.getByTestId("ui-avatar-status")
const img = () => screen.getByTestId("ui-avatar-img")
const initialsPlaceholder = () =>
  screen.getByTestId("ui-avatar-initials-placeholder")
const initialsPlaceholderText = () =>
  screen.getByTestId("ui-avatar-initials-placeholder-text")
