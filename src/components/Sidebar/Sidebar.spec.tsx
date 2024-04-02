import { render, screen } from '@testing-library/react'
import type { FC } from 'react'
import { HiChartPie, HiInbox, HiShoppingBag } from 'react-icons/hi'
import { describe, expect, it } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import type { SidebarProps } from './Sidebar'
import { Sidebar } from './Sidebar'
import { SidebarItem } from './SidebarItem'
import { SidebarLogo } from './SidebarLogo'
import { SidebarCollapse } from './SidebarCollapse'

describe('Components / Sidebar', () => {
  describe('A11y', () => {
    it('should use `aria-label` if provided', () => {
      render(<TestSidebar aria-label="My differently labelled sidebar" />)

      const sidebar = screen.getByLabelText('My differently labelled sidebar')

      expect(sidebar).toHaveAccessibleName('My differently labelled sidebar')
    })

    it('should use text content as accessible name in `Sidebar.Logo`', () => {
      render(<TestSidebar />)

      expect(logo()).toHaveAccessibleName('PolUi')
    })

    it('should use `imgAlt` as alternative text for image in `Sidebar.Logo` given `img=".." and imgAlt=".."`', () => {
      render(<TestSidebar />)

      const logoImg = screen.getByAltText('PolUi logo')

      expect(logoImg).toHaveAccessibleName('PolUi logo')
    })
  })
})

describe('Props', () => {
  it("shouldn't display text content in `Sidebar.Logo` when `open={true}`", () => {
    render(<TestSidebar open />)

    expect(logo().lastElementChild).toHaveClass('hidden')
  })
})

describe('Theme', () => {
  describe('`Sidebar.Logo`', () => {
    it('should use custom classes', () => {
      const theme: CustomPoluiTheme = {
        sidebar: {
          logo: {
            base: 'text-gray-100',
            collapsed: {
              off: 'text-gray-300',
              on: 'text-gray-400',
            },
            img: 'text-gray-200',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar />
        </PoluiProvider>,
      ),
        expect(logo()).toHaveClass('text-gray-100')
    })
  })
})

const TestSidebar: FC<SidebarProps> = ({ ...props }) => (
  <Sidebar {...props}>
    <SidebarLogo href="#" img="favicon.svg" imgAlt="PolUi logo">
      PolUi
    </SidebarLogo>

    <SidebarItem active data-testid="active-item" href="#" icon={HiChartPie} label="3" labelColor="success">
      Dashboard
    </SidebarItem>
    <SidebarCollapse aria-label="E-commerce" icon={HiShoppingBag}>
      <SidebarItem href="#">Products</SidebarItem>
      <SidebarItem href="#">Services</SidebarItem>
    </SidebarCollapse>
    <SidebarItem href="#" icon={HiInbox}>
      Inbox
    </SidebarItem>
    <SidebarItem as="h3">My heading</SidebarItem>
  </Sidebar>
)

const logo = () => screen.getByLabelText('PolUi')
