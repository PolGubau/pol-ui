import type { FC } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Copyright } from "../Copyright"
import { Divider } from "../Divider"
import { Link } from "../Link"
import { Footer } from "./Footer"
import { FooterBrand } from "./FooterBrand"
import { FooterLinkGroup } from "./FooterLinkGroup"

describe("Components / Footer", () => {
  describe("Rendering", () => {
    it('should render an `<a>` with an `<img>` on `Footer.Brand href=".."`', () => {
      render(
        <Footer>
          <FooterBrand
            alt="PoluiProvider"
            href="https://ui-polgubau.com"
            src="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
          >
            Pol-ui
          </FooterBrand>
        </Footer>
      )
      const a = screen.getByTestId("ui-footer-brand")
      const img = screen.getByAltText("PoluiProvider")

      expect(a).toBeInTheDocument()
      expect(a).toContainElement(img)
    })
  })

  it('should render an `<img>` on `Footer.Brand src=".."`', () => {
    render(
      <Footer>
        <FooterBrand alt="PoluiProvider" src="">
          PoluiProvider
        </FooterBrand>
      </Footer>
    )
    const img = screen.getByAltText("PoluiProvider")

    expect(img).toBeInTheDocument()
  })

  it('should render an `<a>` on `Footer.Copyright href=".."`', () => {
    render(
      <Footer>
        <Copyright
          by="PoluiProvider"
          href="https://PoluiProvider.com"
          year={2022}
        >
          PoluiProvider
        </Copyright>
      </Footer>
    )

    expect(copyright()).toContainElement(screen.getByRole("link"))
  })
})

const copyright = () => screen.getByTestId("ui-footer-copyright")
