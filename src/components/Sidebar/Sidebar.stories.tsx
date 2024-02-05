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

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex overflow-hidden  h-full min-h-[400px] bg-secondary-100 ">
        <div className="bg-secondary-50">
          <Story />
        </div>
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
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={TbLayout}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbLayoutKanban} active>
          Kanban
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbAt} label="3">
          At
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbCoin} label="Premium">
          Products
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  ),
}

export const WithoutIcons = Template.bind({})
WithoutIcons.storyName = 'No icons'
WithoutIcons.args = {
  children: (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#">Dashboard</Sidebar.Item>
        <Sidebar.Item href="#" labelColor="alternative">
          Kanban
        </Sidebar.Item>
        <Sidebar.Item href="#">At</Sidebar.Item>
        <Sidebar.Item href="#">Users</Sidebar.Item>
        <Sidebar.Item href="#">Notifications</Sidebar.Item>
        <Sidebar.Item href="#">Settings</Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  ),
}
export const HidingCollapse = () => {
  const { value, toggle } = useBoolean(false)

  return (
    <div className="flex gap-4 items-start">
      {' '}
      <Sidebar collapseMode="hide" collapsed={value} toggle={toggle}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={TbLayout}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TbLayoutKanban}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TbAt} label="3">
              At
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TbUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TbCoin} label="Premium">
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>{' '}
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
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={TbHome}>
          Home
        </Sidebar.Item>
        <Sidebar.Collapse icon={TbShoppingBag} label="E-commerce">
          <Sidebar.Item href="#">Shop</Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item href="#" icon={TbAt}>
          Email
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbUser}>
          Users
        </Sidebar.Item>

        <Sidebar.Item href="#" icon={TbSignRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbPlus}>
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  ),
}

export const DefaultExpandedDropdown = Template.bind({})
DefaultExpandedDropdown.args = {
  children: (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={TbGraph}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Collapse icon={TbCoin} label="Shop">
          <Sidebar.Item icon={TbMoneybag} href="#">
            Products
          </Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Collapse icon={TbShare} label="Share" open>
          <Sidebar.Item href="#">Usage Summary</Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item href="#" icon={TbMail}>
          Mail
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbCoin}>
          Coin
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  ),
}

export const ContentSeparator = Template.bind({})
ContentSeparator.storyName = 'Content separator'
ContentSeparator.args = {
  children: (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={TbLayout}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbLayoutKanban}>
          Kanban
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbAt} label="3">
          At
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbCoin}>
          Products
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={TbArrowAutofitUp} label="Premium">
          Upgrade
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbPaperBag} label="Premium">
          Docs
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={TbHelp} label="Premium">
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
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
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={TbGraph}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={TbDashboard}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={TbMail}>
            At
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={TbUser}>
            Users
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </>
  ),
}
export const CompleteExample = () => {
  const { value, toggle } = useBoolean(true)

  return (
    <div className="flex w-full m-6 rounded-xl overflow-hidden border border-secondary-800 min-h-[400px] bg-primary-100 flex-col">
      <Navbar className="bg-primary-50 shadow-md">
        <Navbar.Brand>
          <img src="/images/logo.png" className="mr-3 h-6 sm:h-6" alt="Pol-ui Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <section className="flex h-full">
        <div className="bg-primary-50 w-fit  shadow-lg h-full">
          <Sidebar collapsed={value} toggle={toggle}>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={TbDatabaseSearch} active rounded="full">
                  Home
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={TbLayoutKanban}
                  label="Empty"
                  labelColor={ColorsEnum.primary}
                  rounded="full"
                >
                  Menus
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={TbAt} label="3" rounded="full">
                  Mail
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={TbUser} rounded="full">
                  Accounts
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
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
