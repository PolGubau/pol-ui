import type { Meta } from '@storybook/react'

import { BiCloud, BiExpandVertical, BiLogOut } from 'react-icons/bi'
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
import { useState } from 'react'
import { Button } from '../Button'
import { cn } from '../../helpers'
import { FocusEffect } from '../FocusEffect'

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
      <div className="flex grid min-w-[200px] place-items-center">
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

export const AppPicker = () => {
  const apps = [
    { name: 'ui', icon: <TbUser /> },
    { name: 'notes', icon: <TbCreditCard /> },
    { name: 'labs', icon: <TbSettings /> },
    { name: 'music', icon: <TbKeyboard /> },
    { name: 'chat', icon: <TbUsers /> },
    { name: 'mail', icon: <TbMail /> },
    { name: 'calendar', icon: <TbMessage /> },
    {
      name: 'contacts',
      icon: <TbPlus />,
    },
  ]

  const [selectedApp, setSelectedApp] = useState(apps[0])

  return (
    <section className="w-full bg-primary-200 min-h-[600px]">
      <header className="flex gap-8 items-center justify-between px-4 py-2 bg-secondary-100">
        <div className="flex gap-1 items-center">
          <h1>Pol/</h1>
          <Dropdown
            trigger={
              <Button color={'secondary'} variant={'ghost'} className="py-1" rounded="full">
                <span>{selectedApp.icon}</span> {selectedApp.name} <BiExpandVertical />
              </Button>
            }
          >
            <DropdownGroup className="grid grid-cols-4 gap-2 m-2">
              {apps.map(app => (
                <DropdownItem
                  key={app.name}
                  onSelect={() => setSelectedApp(app)}
                  className={cn(
                    'flex flex-col gap-2 max-w-[80px] rounded-xl cursor-pointer group first:rounded-t-xl last:rounded-b-xl overflow-hidden',
                    {
                      'bg-primary-200 text-primary-900': selectedApp.name === app.name,
                    },
                  )}
                >
                  <FocusEffect className="bg-black/10" />
                  <span className="scale-150">{app.icon}</span>
                  <span>{app.name}</span>
                </DropdownItem>
              ))}
            </DropdownGroup>
          </Dropdown>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-xl font-bold">{selectedApp.name} App content</h2>
      </main>
    </section>
  )
}
