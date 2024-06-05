import type { Meta, StoryFn } from '@storybook/react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Dropdown, DropdownGroup, DropdownItem, DropdownLabel } from '../Dropdown'
import { Navbar, type NavbarProps } from './Navbar'
import { TbCreditCard, TbKeyboard, TbLogout, TbSettings, TbUser } from 'react-icons/tb'
import { IconButton } from '../IconButton'

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
const StoryNavbarTab = () => <div className="h-64 w-96 grid place-items-center">Some fancy lists</div>
export const Default = Template.bind({})
Default.args = {
  leftContent: <img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-7" alt="Pol-ui Logo" />,
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <StoryNavbarTab /> },
    { href: '#', label: 'Services', content: <StoryNavbarTab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
}

export const WithCTA = Template.bind({})
WithCTA.args = {
  leftContent: <img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-7" alt="Pol-ui Logo" />,
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <StoryNavbarTab /> },
    { href: '#', label: 'Services', content: <StoryNavbarTab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: <Button>Get started</Button>,
}

export const WithDropdown = Template.bind({})
WithDropdown.args = {
  leftContent: <img src="https://ui.polgubau.com/logo.png" className="h-6 sm:h-7" alt="Pol-ui Logo" />,
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <StoryNavbarTab /> },
    { href: '#', label: 'Services', content: <StoryNavbarTab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: (
    // <Dropdown
    //   label="User settings"
    //   trigger={<Avatar alt="User settings" img="https://avatars.githubusercontent.com/u/63197171?v=4" />}
    // >
    //   <DropdownItem label="Profile" />
    //   <DropdownItem label="Settings" />
    //   <DropdownItem label="Logout" />
    // </Dropdown>
    <Dropdown
      trigger={
        <IconButton className="p-0">
          <Avatar alt="User settings" img="https://avatars.githubusercontent.com/u/63197171?v=4" />
        </IconButton>
      }
    >
      <DropdownLabel>My Account</DropdownLabel>
      <DropdownGroup>
        <DropdownItem onSelect={() => alert('a')}>
          <TbUser className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownItem>
        <DropdownItem>
          <TbCreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </DropdownItem>
        <DropdownItem>
          <TbSettings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem>
          <TbKeyboard className="mr-2 h-4 w-4" />
          <span>Keyboard shortcuts</span>
        </DropdownItem>
      </DropdownGroup>
    </Dropdown>
  ),
}
export const DarkMode = Template.bind({})
DarkMode.args = {
  className: 'dark bg-secondary-900 p-8',
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <StoryNavbarTab /> },
    { href: '#', label: 'Services', content: <StoryNavbarTab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: (
    <div className="flex gap-3 md:order-2">
      <Dropdown
        label="User settings"
        trigger={
          <IconButton className="p-0">
            <Avatar alt="User settings" img="https://avatars.githubusercontent.com/u/63197171?v=4" />
          </IconButton>
        }
      >
        <DropdownItem label="Profile" />
        <DropdownItem label="Settings" />
        <DropdownItem label="Logout" />
      </Dropdown>
    </div>
  ),
}
export const CustomClasses = Template.bind({})
CustomClasses.args = {
  className: 'bg-primary-900 fixed rounded-full max-w-[800px] mx-auto top-5 left-1/2 transform -translate-x-1/2',
  linkClassName: 'text-primary-50',
  links: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About', content: <StoryNavbarTab /> },
    { href: '#', label: 'Services', content: <StoryNavbarTab /> },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Contact' },
  ],
  rightContent: (
    <div className="flex gap-3 md:order-2">
      <Dropdown
        trigger={
          <IconButton className="p-0">
            <Avatar alt="User settings" img="https://avatars.githubusercontent.com/u/63197171?v=4" />
          </IconButton>
        }
      >
        <DropdownItem label="Profile" />
        <DropdownItem label="Settings" />
        <DropdownItem label="Logout" />
      </Dropdown>
    </div>
  ),
}
export const CustomLinkClass = Template.bind({})
CustomLinkClass.args = {
  ...Default.args,
  linkClassName: 'text-primary-100 bg-primary-800 w-[150px]',
}
