import type { Meta } from '@storybook/react'

import { BiCloud, BiLogOut } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import {
  TbCreditCard,
  TbKeyboard,
  TbLifebuoy,
  TbMail,
  TbMessage,
  TbPlus,
  TbSettings,
  TbUser,
  TbUserPlus,
  TbUsers,
} from 'react-icons/tb'
import {
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownShortcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
} from './Dropdown'
import { Divider } from '../Divider'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    title: 'Dropdown example',
    placement: 'auto',
    disabled: false,
    label: 'Dropdown',
  },
  decorators: [
    Story => (
      <div className="flex p-6 grid min-w-[200px] place-items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
export function Default() {
  return (
    <Dropdown>
      <DropdownLabel>My Account</DropdownLabel>
      <Divider />
      <DropdownGroup>
        <DropdownItem onSelect={() => alert('a')}>
          <TbUser className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownShortcut>⇧⌘P</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <TbCreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <DropdownShortcut>⌘B</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <TbSettings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem>
          <TbKeyboard className="mr-2 h-4 w-4" />
          <span>Keyboard shortcuts</span>
          <DropdownShortcut>⌘K</DropdownShortcut>
        </DropdownItem>
      </DropdownGroup>
      <Divider />
      <DropdownGroup>
        <DropdownItem>
          <TbUsers className="mr-2 h-4 w-4" />
          <span>Team</span>
        </DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger>
            <TbUserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </DropdownSubTrigger>
          <DropdownPortal>
            <DropdownSubContent>
              <DropdownItem>
                <TbMail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </DropdownItem>
              <DropdownItem>
                <TbMessage className="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownItem>
              <Divider />
              <DropdownItem>
                <TbPlus className="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownItem>
            </DropdownSubContent>
          </DropdownPortal>
        </DropdownSub>
        <DropdownItem>
          <TbPlus className="mr-2 h-4 w-4" />
          <span>New Team</span>
          <DropdownShortcut>⌘+T</DropdownShortcut>
        </DropdownItem>
      </DropdownGroup>
      <Divider />
      <DropdownItem>
        <BsGithub className="mr-2 h-4 w-4" />
        <span>GitHub</span>
      </DropdownItem>
      <DropdownItem>
        <TbLifebuoy className="mr-2 h-4 w-4" />
        <span>Support</span>
      </DropdownItem>
      <DropdownItem disabled>
        <BiCloud className="mr-2 h-4 w-4" />
        <span>API</span>
      </DropdownItem>
      <Divider />
      <DropdownItem>
        <BiLogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
        <DropdownShortcut>⇧⌘Q</DropdownShortcut>
      </DropdownItem>
    </Dropdown>
  )
}

export const Empty = () => {
  return <Dropdown>a</Dropdown>
}
