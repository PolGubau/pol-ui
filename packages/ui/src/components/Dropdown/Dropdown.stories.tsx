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
  DropdownDescription,
  DropdownGroup,
  DropdownHeader,
  DropdownLabel,
  DropdownPortal,
  DropdownShortcut,
  DropdownSub,
} from './Dropdown'
import { Divider } from '../Divider'
import { useState } from 'react'
import { Button } from '../Button'
import { cn } from '../../helpers'
import { FocusEffect } from '../FocusEffect'
import { DropdownItem, DropdownSubContent, DropdownSubTrigger } from './components'
import { DropdownExpandable, DropdownExpandableTextArea } from './components/items'
import { Textarea } from '../Textarea'

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
      <div className="flex grid min-h-[200px] place-items-center bg-secondary-50 dark:bg-secondary-900">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
export function Default() {
  const [value, setValue] = useState('')
  return (
    <Dropdown>
      <DropdownHeader>
        <DropdownLabel>Pol Gubau Amores</DropdownLabel>
        <DropdownDescription>supersecret@gmail.com</DropdownDescription>
      </DropdownHeader>

      <Divider />
      <DropdownGroup>
        <DropdownItem onSelect={() => alert('a')} icon={TbUser}>
          <span>Profile</span>
          <DropdownShortcut>⇧⌘P</DropdownShortcut>
        </DropdownItem>
        <DropdownItem icon={TbCreditCard}>
          <span>Billing</span>
          <DropdownShortcut>⌘B</DropdownShortcut>
        </DropdownItem>
        <DropdownItem icon={TbSettings}>
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem icon={TbKeyboard}>
          <span>Keyboard shortcuts</span>
          <DropdownShortcut>⌘K</DropdownShortcut>
        </DropdownItem>
      </DropdownGroup>
      <Divider />
      <DropdownGroup>
        <DropdownItem icon={TbUsers}>
          <span>Team</span>
        </DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger>
            <TbUserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </DropdownSubTrigger>
          <DropdownPortal>
            <DropdownSubContent>
              <DropdownItem icon={TbMail}>
                <span>Email</span>
              </DropdownItem>
              <DropdownItem icon={TbMessage}>
                <span>Message</span>
              </DropdownItem>
              <Divider />
              <DropdownItem icon={TbPlus}>
                <span>More</span>
              </DropdownItem>
            </DropdownSubContent>
          </DropdownPortal>
        </DropdownSub>
        <DropdownItem icon={TbPlus}>
          <span>New Team</span>
          <DropdownShortcut>⌘+T</DropdownShortcut>
        </DropdownItem>
      </DropdownGroup>
      <Divider />
      <DropdownItem icon={BsGithub}>
        <span>GitHub</span>
      </DropdownItem>
      <DropdownItem icon={TbLifebuoy}>
        <span>Support</span>
      </DropdownItem>
      <DropdownItem disabled>
        <BiCloud className="mr-2 h-4 w-4" />
        <span>API</span>
      </DropdownItem>
      <DropdownExpandableTextArea />

      <Divider />
      <DropdownItem icon={BiLogOut} className="text-error focus:bg-error/10">
        <span>Log out</span>
        <DropdownShortcut>⇧⌘Q</DropdownShortcut>
      </DropdownItem>
    </Dropdown>
  )
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
