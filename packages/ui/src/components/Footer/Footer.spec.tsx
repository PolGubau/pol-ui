import type { FC } from "react"
import { cleanup, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  PoluiProvider,
  type CustomPoluiTheme,
} from "../../providers/PoluiProvider"
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

  describe("Theme", () => {
    it("should use `base` classes", () => {
      const theme: CustomPoluiTheme = {
        footer: {
          root: {
            base: "text-gray-100",
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <TestFooter />
        </PoluiProvider>
      )

      expect(footer()).toHaveClass("text-gray-100")
    })

    it("should use `container` classes", () => {
      const theme: CustomPoluiTheme = {
        footer: {
          root: {
            container: "text-gray-100",
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <TestFooter />
        </PoluiProvider>
      )

      expect(footer()).toHaveClass("text-gray-100")
    })

    describe("`Footer.Brand`", () => {
      it("should use `brand` classes", () => {
        const theme: CustomPoluiTheme = {
          footer: {
            brand: {
              base: "text-gray-100",
              img: "text-gray-200",
              span: "text-gray-300",
            },
          },
        }
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <FooterBrand
                alt="PoluiProvider"
                href="https://PoluiProvider.com"
                src=""
              >
                PoluiProvider
              </FooterBrand>
            </Footer>
          </PoluiProvider>
        )

        expect(brand()).toHaveClass("text-gray-100")
        expect(screen.getByRole("img")).toHaveClass("text-gray-200")

        cleanup()
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <FooterBrand href="/" src="">
                PoluiProvider
              </FooterBrand>
            </Footer>
          </PoluiProvider>
        )

        expect(screen.getByTestId("ui-footer-brand-span")).toHaveClass(
          "text-gray-300"
        )
      })
    })
  })
})

const TestFooter: FC = () => (
  <Footer container>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <FooterBrand
            href="https://PoluiProvider.com"
            src="https://PoluiProvider.com/docs/images/logo.svg"
            alt="PoluiProvider Logo"
            name="PoluiProvider"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <FooterLinkGroup col>
              <Link href="#">PoluiProvider</Link>
              <Link href="#">Tailwind CSS</Link>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterLinkGroup col>
              <Link href="#">Github</Link>
              <Link href="#">Discord</Link>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterLinkGroup col>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Copyright href="#" by="PoluiProvider™" year={2022} />
      </div>
    </div>
  </Footer>
)

const brand = () => screen.getByTestId("ui-footer-brand")

const copyright = () => screen.getByTestId("ui-footer-copyright")

const footer = () => screen.getByTestId("ui-footer")
