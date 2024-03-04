import { render, screen } from '@testing-library/react'
import type { FC } from 'react'
import { HiHome } from 'react-icons/hi'
import { describe, expect, it } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../../PoluiProvider'
import { Breadcrumb } from './Breadcrumb'
import { BreadcrumbItem } from './BreadcrumbItem'

describe('Components / Breadcrumb', () => {
  it('should have `role="navigation"`', () => {
    render(<TestBreadcrumb />)

    expect(breadcrumb()).toBeInTheDocument()
  })

  it('should contain a `role="list"`', () => {
    render(<TestBreadcrumb />)

    expect(breadcrumb()).toContainElement(breadcrumbList())
  })

  it('should contain a `role="listitem"` for each `BreadcrumbItem`', () => {
    render(<TestBreadcrumb />)

    expect(items()[0]).toHaveTextContent('Home')
    expect(items()[1]).toHaveTextContent('Projects')
    expect(items()[2]).toHaveTextContent('PoluiProvider React')
  })

  it('should contain a `role="link"` for each `BreadcrumbItem href=".."`', () => {
    render(<TestBreadcrumb />)

    expect(links()[0]).toHaveTextContent('Home')
    expect(links()[1]).toHaveTextContent('Projects')
  })

  it('should use `aria-label` if provided', () => {
    render(<TestBreadcrumb />)

    expect(breadcrumb()).toHaveAccessibleName('test label')
  })

  it('should use custom list classes via theme={}', () => {
    const theme: CustomPoluiTheme = {
      breadcrumb: {
        root: {
          list: 'gap-6',
        },
      },
    }
    render(
      <PoluiProvider theme={{ theme }}>
        <TestBreadcrumb />
      </PoluiProvider>,
    )

    expect(breadcrumbList()).toHaveClass('gap-6')
  })

  it('should use custom item classes via theme={}', () => {
    const theme: CustomPoluiTheme = {
      breadcrumb: {
        item: {
          base: 'justify-center',
          chevron: 'h-9 w-9',
          href: {
            off: 'text-md',
            on: 'text-lg',
          },
          icon: 'h-6 w-6',
        },
      },
    }
    render(
      <PoluiProvider theme={{ theme }}>
        <TestBreadcrumb />
      </PoluiProvider>,
    )

    expect(items()[0]).toHaveClass('justify-center')
    expect(contents()[0]).toHaveAttribute('href')
    expect(contents()[0]).toHaveClass('text-lg')

    expect(items()[2]).toHaveClass('justify-center')
    expect(contents()[2]).not.toHaveAttribute('href')
    expect(contents()[2]).toHaveClass('text-md')
  })
})

const TestBreadcrumb: FC = () => (
  <Breadcrumb aria-label="test label">
    <BreadcrumbItem href="#" icon={HiHome}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Projects</BreadcrumbItem>
    <BreadcrumbItem icon={HiHome}>PoluiProvider React</BreadcrumbItem>
  </Breadcrumb>
)

const breadcrumb = () => screen.getByRole('navigation')

const breadcrumbList = () => screen.getByRole('list')

const items = () => screen.getAllByRole('listitem')

const links = () => screen.getAllByRole('link')

const contents = () => screen.getAllByTestId('ui-breadcrumb-item')
