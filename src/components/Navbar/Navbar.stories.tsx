import type { Meta, StoryFn } from '@storybook/react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Dropdown, DropdownItem } from '../Dropdown'
import { Navbar, type NavbarProps } from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    Story => (
      <div className="bg-secondary-50 flex flex-col w-full h-screen overflow-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<NavbarProps> = args => (
  <>
    <Navbar {...args} />
    <div className="bg-primary/50 w-full h-screen min-h-[700px]   p-6 "> Lorem</div>
  </>
)
const Tab = () => <div className="h-64 w-96 grid place-items-center">Some fancy lists</div>
export const Default = Template.bind({})
Default.args = {
  leftContent: <img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-9" alt="Pol-ui Logo" />,
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <Tab /> },
    { href: '#', label: 'Services', content: <Tab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
}

export const WithCTA = Template.bind({})
WithCTA.args = {
  leftContent: <img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-9" alt="Pol-ui Logo" />,
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <Tab /> },
    { href: '#', label: 'Services', content: <Tab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: <Button>Get started</Button>,
}

export const WithDropdown = Template.bind({})
WithDropdown.args = {
  leftContent: <img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-9" alt="Pol-ui Logo" />,
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <Tab /> },
    { href: '#', label: 'Services', content: <Tab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: (
    <div className="flex gap-3 md:order-2">
      <Dropdown
        label="User settings"
        trigger={<Avatar alt="User settings" img="https://avatars.githubusercontent.com/u/63197171?v=4" />}
      >
        <DropdownItem label="Profile" />
        <DropdownItem label="Settings" />
        <DropdownItem label="Logout" />
      </Dropdown>
    </div>
  ),
}
export const DarkMode = Template.bind({})
DarkMode.args = {
  className: 'dark bg-secondary-900 p-8',
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <Tab /> },
    { href: '#', label: 'Services', content: <Tab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: (
    <div className="flex gap-3 md:order-2">
      <Dropdown
        label="User settings"
        trigger={<Avatar alt="User settings" img="https://avatars.githubusercontent.com/u/63197171?v=4" />}
      >
        <DropdownItem label="Profile" />
        <DropdownItem label="Settings" />
        <DropdownItem label="Logout" />
      </Dropdown>
    </div>
  ),
}
