import type { Meta, StoryFn } from '@storybook/react'
import type { SidebarProps } from './Sidebar'
import { Sidebar } from './Sidebar'
import React from 'react'
import { Navbar } from '../Navbar'
import { Button } from '../Button'
import { useBoolean } from '../../hooks'
import {
  TbArrowAutofitUp,
  TbArrowLeft,
  TbArrowRight,
  TbAt,
  TbCoin,
  TbDashboard,
  TbDatabaseSearch,
  TbGraph,
  TbHelp,
  TbHome,
  TbLayout,
  TbLayoutKanban,
  TbMail,
  TbMoneybag,
  TbPaperBag,
  TbPlus,
  TbShare,
  TbShoppingBag,
  TbSignRight,
  TbUser,
} from 'react-icons/tb'
import { ColorsEnum } from '../../types'
import { SidebarItem } from './SidebarItem'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex overflow-hidden  min-h-[500px] h-[500px] bg-secondary-100 ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
const Template: StoryFn<SidebarProps> = args => {
  const { value, toggle } = useBoolean(false)
  return <Sidebar {...args} collapsed={value} toggle={toggle} />
}

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <SidebarItem href="#" icon={TbLayout}>
        Dashboard
      </SidebarItem>
      <SidebarItem href="#" icon={TbLayoutKanban} active>
        Kanban
      </SidebarItem>
      <SidebarItem href="#" icon={TbAt} label="3">
        At
      </SidebarItem>
      <SidebarItem href="#" icon={TbUser}>
        Users
      </SidebarItem>
      <SidebarItem href="#" icon={TbCoin} label="Premium">
        Products
      </SidebarItem>
    </>
  ),
}

export const WithoutIcons = Template.bind({})
WithoutIcons.storyName = 'No icons'
WithoutIcons.args = {
  children: (
    <>
      <SidebarItem href="#">Dashboard</SidebarItem>
      <SidebarItem href="#" labelColor="alternative">
        Kanban
      </SidebarItem>
      <SidebarItem href="#">At</SidebarItem>
      <SidebarItem href="#">Users</SidebarItem>
      <SidebarItem href="#">Notifications</SidebarItem>
      <SidebarItem href="#">Settings</SidebarItem>
    </>
  ),
}
export const HidingCollapse = () => {
  const { value, toggle } = useBoolean(false)

  return (
    <div className="flex gap-4 items-start">
      <Sidebar collapseMode="hide" collapsed={value} toggle={toggle}>
        <SidebarItem href="#" icon={TbLayout}>
          Dashboard
        </SidebarItem>
        <SidebarItem href="#" icon={TbLayoutKanban}>
          Kanban
        </SidebarItem>
        <SidebarItem href="#" icon={TbAt} label="3">
          At
        </SidebarItem>
        <SidebarItem href="#" icon={TbUser}>
          Users
        </SidebarItem>
        <SidebarItem href="#" icon={TbCoin} label="Premium">
          Products
        </SidebarItem>
      </Sidebar>
      <div className="flex m-4">
        <Button onClick={toggle}>{value ? <TbArrowRight /> : <TbArrowLeft />} </Button>
      </div>
    </div>
  )
}

export const MultiLevelDropdown = Template.bind({})
MultiLevelDropdown.storyName = 'Multi-level dropdown'
MultiLevelDropdown.args = {
  children: (
    <>
      <SidebarItem href="#" icon={TbHome}>
        Home
      </SidebarItem>
      <Sidebar.Collapse icon={TbShoppingBag} label="E-commerce">
        <SidebarItem href="#">Shop</SidebarItem>
      </Sidebar.Collapse>
      <SidebarItem href="#" icon={TbAt}>
        Email
      </SidebarItem>
      <SidebarItem href="#" icon={TbUser}>
        Users
      </SidebarItem>

      <SidebarItem href="#" icon={TbSignRight}>
        Sign In
      </SidebarItem>
      <SidebarItem href="#" icon={TbPlus}>
        Sign Up
      </SidebarItem>
    </>
  ),
}

export const DefaultExpandedDropdown = Template.bind({})
DefaultExpandedDropdown.args = {
  children: (
    <>
      <SidebarItem href="#" icon={TbGraph}>
        Dashboard
      </SidebarItem>
      <Sidebar.Collapse icon={TbCoin} label="Shop">
        <SidebarItem icon={TbMoneybag} href="#">
          Products
        </SidebarItem>
      </Sidebar.Collapse>
      <Sidebar.Collapse icon={TbShare} label="Share" open>
        <SidebarItem href="#">Usage Summary</SidebarItem>
      </Sidebar.Collapse>
      <SidebarItem href="#" icon={TbMail}>
        Mail
      </SidebarItem>
      <SidebarItem href="#" icon={TbUser}>
        Users
      </SidebarItem>
      <SidebarItem href="#" icon={TbCoin}>
        Coin
      </SidebarItem>
    </>
  ),
}

export const ContentSeparator = Template.bind({})
ContentSeparator.storyName = 'Content separator'
ContentSeparator.args = {
  children: (
    <>
      <SidebarItem href="#" icon={TbLayout}>
        Dashboard
      </SidebarItem>
      <SidebarItem href="#" icon={TbLayoutKanban}>
        Kanban
      </SidebarItem>
      <SidebarItem href="#" icon={TbAt} label="3">
        At
      </SidebarItem>
      <SidebarItem href="#" icon={TbUser}>
        Users
      </SidebarItem>
      <SidebarItem href="#" icon={TbCoin}>
        Products
      </SidebarItem>

      <SidebarItem href="#" icon={TbArrowAutofitUp} label="Premium">
        Upgrade
      </SidebarItem>
      <SidebarItem href="#" icon={TbPaperBag} label="Premium">
        Docs
      </SidebarItem>
      <SidebarItem href="#" icon={TbHelp} label="Premium">
        Help
      </SidebarItem>
    </>
  ),
}
export const LogoBranding = Template.bind({})
LogoBranding.storyName = 'Logo branding'
LogoBranding.args = {
  children: (
    <>
      <Sidebar.Logo href="#" img="favicon.svg" imgAlt="Pol-ui logo">
        Pol-ui
      </Sidebar.Logo>
      <SidebarItem href="#" icon={TbGraph}>
        Home
      </SidebarItem>
      <SidebarItem href="#" icon={TbDashboard}>
        Kanban
      </SidebarItem>
      <SidebarItem href="#" icon={TbMail}>
        At
      </SidebarItem>
      <SidebarItem href="#" icon={TbUser}>
        Users
      </SidebarItem>
    </>
  ),
}
export const CompleteExample = () => {
  const { value, toggle } = useBoolean(true)

  return (
    <div className="flex w-full rounded-xl overflow-hidden border border-secondary-800 min-h-[400px]  bg-primary-100 flex-col">
      <Navbar
        links={[
          {
            href: '#',
            label: 'Home',
            active: true,
          },
          {
            href: '#',
            label: 'About',
            content: (
              <div className="flex flex-col gap-2">
                <a href="#">About us</a>
                <a href="#">Our team</a>
                <a href="#">Our mission</a>
              </div>
            ),
          },
          {
            href: '#',
            label: 'Contact',
          },
        ]}
        className="bg-primary-50 shadow-md"
        leftContent={<img src="https://ui.polgubau.com/logo.png" className="mr-3 h-6 sm:h-6" alt="Pol-ui Logo" />}
      />
      <section className="flex h-full">
        <div className="bg-primary-50 w-fit  shadow-lg">
          <Sidebar collapsed={value} toggle={toggle}>
            <SidebarItem href="#" icon={TbDatabaseSearch} active rounded="full">
              Home
            </SidebarItem>
            <SidebarItem href="#" icon={TbLayoutKanban} label="Empty" labelColor={ColorsEnum.primary} rounded="full">
              Menus
            </SidebarItem>
            <SidebarItem href="#" icon={TbAt} label="3" rounded="full">
              Mail
            </SidebarItem>
            <SidebarItem href="#" icon={TbUser} rounded="full">
              Accounts
            </SidebarItem>
          </Sidebar>
        </div>
        <div className="flex flex-col gap-5 p-8 w-full bg-primary-200 m-4 rounded-xl">
          <h2>Content</h2>
          <div className="bg-primary-400 rounded-2xl w-full h-20"></div>
          <div className="bg-primary-400 rounded-2xl w-full h-10"></div>
          <div className="bg-primary-300 rounded-2xl w-full h-14"></div>
          <div className="w-full h-20 flex gap-5">
            <div className="bg-primary-300 rounded-2xl w-full h-14"></div>
            <div className="bg-primary-300 rounded-2xl w-full h-14"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
