import type { Meta, StoryFn } from '@storybook/react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Dropdown, DropdownItem } from '../Dropdown'
import { Navbar, type NavbarComponentProps } from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<NavbarComponentProps> = args => <Navbar {...args} />

export const DefaultNavbar = Template.bind({})
DefaultNavbar.storyName = 'Default'
DefaultNavbar.args = {
  children: (
    <>
      <Navbar.Brand href="https://Pol-ui.com/">
        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Pol-ui Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
}

export const WithCTA = Template.bind({})
WithCTA.args = {
  children: (
    <>
      <Navbar.Brand href="https://Pol-ui.com/">
        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Pol-ui Logo" />
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
}

export const WithDropdown = Template.bind({})
WithDropdown.storyName = 'With dropdown'
WithDropdown.args = {
  children: (
    <>
      <Navbar.Brand href="https://ui.polgubau.com/">
        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Pol-ui Logo" />
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Dropdown
          label="User settings"
          trigger={
            <Avatar alt="User settings" img="https://Pol-ui.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownItem label="Profile" />
          <DropdownItem label="Settings" />
          <DropdownItem label="Logout" />
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
}
