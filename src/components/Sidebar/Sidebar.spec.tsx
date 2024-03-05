import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('Keyboard interactions', () => {
  it('should expand/collapse when `Space` is pressed on a `Sidebar.Collapse`', async () => {
    const user = userEvent.setup()
    render(<TestSidebar />)

    const collapseButton = collapseButtons()[0]

    await user.click(collapseButton)

    const collapse = collapses()[0]

    expect(collapse).toBeVisible()
  })

  it('should follow link when `Space` is pressed on `SidebarItem` with `href=".."`', () => {
    render(<TestSidebar />)

    const link = screen.getAllByRole('link')[1]

    expect(link).toHaveAccessibleName('Dashboard')
    expect(link).toHaveAttribute('href', '#')
  })
})

describe('Props', () => {
  it("shouldn't display text content in `Sidebar.Logo` when `open={true}`", () => {
    render(<TestSidebar open />)

    expect(logo().lastElementChild).toHaveClass('hidden')
  })

  it('should use the HTML element provided in `SidebarItem as=".."`', () => {
    render(<TestSidebar />)

    const asItem = screen.getByLabelText('My heading')

    expect(asItem.tagName.toLocaleLowerCase()).toEqual('h3')
  })
})

describe('Theme', () => {
  describe('`SidebarItem`', () => {
    it('should use custom classes', () => {
      const theme: CustomPoluiTheme = {
        sidebar: {
          item: {
            active: 'text-gray-100',
            base: 'bg-gray-100',
            collapsed: {
              insideCollapse: 'text-gray-300',
            },
            content: {
              base: 'bg-gray-200',
            },
            icon: {
              base: 'text-gray-400',
              active: 'bg-gray-300',
            },
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar open />
        </PoluiProvider>,
      )
      const theItems = items()
        .map(item => item.firstElementChild)
        .map(item => item?.firstElementChild)
        .filter(item => item?.tagName.toLocaleLowerCase() !== 'button') as HTMLElement[]
      const activeItems = screen.getAllByTestId('active-item')
      const activeIcons = activeItems.map(item => item.firstElementChild)
      const inactiveIcons = [...collapseIcons().filter(icon => !activeIcons.includes(icon))]
      const inactiveItems = [...theItems.filter(item => item !== null && !activeItems.includes(item))]

      activeIcons.forEach(icon => expect(icon).toHaveClass('bg-gray-300'))
      activeItems.forEach(item => expect(item).toHaveClass('text-gray-100'))
      itemContents().forEach(content => expect(content).toHaveClass('bg-gray-200'))
      inactiveIcons.forEach(icon => expect(icon).not.toHaveClass('bg-gray-300'))
      inactiveItems.forEach(item => expect(item).not.toHaveClass('text-gray-100'))
      icons().forEach(icon => expect(icon).toHaveClass('text-gray-400'))
    })
  })

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

const collapseButtons = () => screen.getAllByRole('button')

const collapses = () => screen.getAllByRole('list').slice(1)

const collapseIcons = () => screen.getAllByTestId('ui-sidebar-collapse-icon')

const itemContents = () => screen.getAllByTestId('ui-sidebar-item-content')

const icons = () => screen.getAllByTestId('ui-sidebar-item-icon')

const items = () => screen.getAllByRole('listitem')

const logo = () => screen.getByLabelText('PolUi')
