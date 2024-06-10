import React, { useEffect, useState, type FC } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Pagination } from "./Pagination"

describe("Pagination", () => {
  describe("Keyboard interactions", () => {
    it("should do nothing when `Space` is pressed while Next button is focused while on last page", async () => {
      const user = userEvent.setup()
      render(<PaginationTestFiveElements />)

      for (let i = 0; i < 10; ++i) {
        await user.click(nextButton())
      }

      expect(pages()).toEqual([1, 2, 3, 4, 5])
      expect(currentPage()).toEqual(5)
    })

    it("should disable previous button when on 1st page", () => {
      render(<PaginationTestFiveElements />)

      const firstButton = buttons()[0]

      expect(currentPage()).toEqual(1)
      expect(firstButton).toBeDisabled()
    })

    it("should disable next button when on last page", async () => {
      const user = userEvent.setup()
      render(<PaginationTestFiveElements />)

      // const lastButton = buttons()[buttons().length - 1]

      for (let i = 0; i < 5; ++i) {
        await user.click(nextButton())
      }

      expect(currentPage()).toEqual(5)
    })
  })

  it('should "move" the slider when more then 3 pages are changed', async () => {
    const user = userEvent.setup()
    render(<PaginationTestTenElements />)
    await user.click(nextButton())
    await user.click(nextButton())
    await user.click(nextButton())
    await user.click(nextButton())

    expect(currentPage()).toEqual(5)
    expect(pages()).toEqual([3, 4, 5, 6, 7])
  })

  describe("Props", () => {
    it("should change previous and next text when provided", () => {
      render(
        <Pagination
          currentPage={1}
          hasLabels
          onPageChange={() => undefined}
          totalPages={5}
          labels={{
            next: "Go forward",
            previous: "Go back",
            of: "of",
            to: "to",
            showing: "Showing",
            entries: "Entries",
          }}
        ></Pagination>
      )

      expect(previousButton()).toHaveTextContent("Go back")
      expect(nextButton()).toHaveTextContent("Go forward")
    })
  })
})

const PaginationTestFiveElements: FC = () => {
  const [page, setPage] = useState(1)

  const onPageChange = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    setPage(page)
  }, [page])

  return (
    <Pagination
      currentPage={page}
      onPageChange={onPageChange}
      showIcons
      totalPages={5}
    />
  )
}

const PaginationTestTenElements: FC = () => {
  const [page, setPage] = useState(1)

  const onPageChange = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    setPage(page)
  }, [page])

  return (
    <Pagination
      currentPage={page}
      onPageChange={onPageChange}
      showIcons
      totalPages={10}
    />
  )
}

const buttons = () => screen.getAllByRole("button")

const pages = () => {
  return screen
    .getAllByRole("listitem")
    .map((page) => page.textContent ?? "")
    .map((page) => parseInt(page))
    .filter((page) => Number.isInteger(page))
}

const currentPage = () => {
  const currentPageElement = screen
    .getAllByRole("listitem")
    .find((elem) => elem.getAttribute("aria-current") === "page")

  expect(currentPageElement).toBeInTheDocument()
  return parseInt(currentPageElement?.textContent ?? "0")
}

const nextButton = () => buttons()[buttons().length - 1]

const previousButton = () => buttons()[0]
