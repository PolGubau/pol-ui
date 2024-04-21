import type { Meta } from '@storybook/react'
import type { NavigationMenuProps, NavigationPropsLink } from './MultiLevelSidebar'
import MultiLevelSidebar from './MultiLevelSidebar'
import { TbActivityHeartbeat, TbCalendar, TbProgress, TbUser } from 'react-icons/tb'
import { Card } from '../Card'

export default {
  title: 'Components/MultiLevelSidebar',
  component: MultiLevelSidebar,
  tags: ['autodocs'],
  decorators: [Story => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const links: NavigationPropsLink[] = [
  {
    name: 'Dashboard',
    navigate: () => console.log('Navigate to Dashboard'),
    icon: TbUser,
    active: true,
  },
  {
    name: 'Projects',
    navigate: () => console.log('Navigate to Dashboard'),
    icon: TbUser,
  },
  {
    name: 'Team',
    navigate: () => console.log('Navigate to Dashboard'),
    icon: TbUser,
  },
  {
    name: 'Calendar',
    navigate: () => console.log('Navigate to Dashboard'),
    icon: TbUser,
  },
  {
    name: 'Documents',
    navigate: () => console.log('Navigate to Dashboard'),
    icon: TbUser,
  },
  {
    name: 'Reports',
    navigate: () => console.log('Navigate to Dashboard'),
    icon: TbUser,
  },
]
const menus: NavigationMenuProps[] = [
  {
    name: 'Projects',
    icon: TbProgress,
    links: [
      {
        name: 'Project 1',
        navigate: () => console.log('Navigate to Project 1'),
        icon: TbUser,
      },
      {
        name: 'Project 2',
        navigate: () => console.log('Navigate to Project 2'),
        icon: TbUser,
      },
      {
        name: 'Project 3',
        navigate: () => console.log('Navigate to Project 3'),
        icon: TbUser,
      },
    ],
    children: (
      <div>
        <Card>
          <p className="dark:text-secondary ">Discover more</p>
          <img src="https://picsum.photos/200" alt="Project" className="rounded-xl shadow shadow-secondary" />
        </Card>
      </div>
    ),
  },
  {
    name: 'Team',
    icon: TbActivityHeartbeat,
    links: [
      {
        name: 'Team 1',
        navigate: () => console.log('Navigate to Team 1'),
        icon: TbUser,
      },
      {
        name: 'Team 2',
        navigate: () => console.log('Navigate to Team 2'),
        icon: TbUser,
      },
      {
        name: 'Team 3',
        navigate: () => console.log('Navigate to Team 3'),
        icon: TbUser,
      },
    ],
    children: <div>Team</div>,
  },
  {
    name: 'Calendar',
    icon: TbCalendar,
    links: [
      {
        name: 'Calendar 1',
        navigate: () => console.log('Navigate to Calendar 1'),
        icon: TbUser,
      },
      {
        name: 'Calendar 2',
        navigate: () => console.log('Navigate to Calendar 2'),
        icon: TbUser,
      },
      {
        name: 'Calendar 3',
        navigate: () => console.log('Navigate to Calendar 3'),
        icon: TbUser,
      },
    ],
  },
]

export const Default = () => {
  return (
    <div className="bg-secondary-50 h-screen w-full">
      <MultiLevelSidebar links={links} menus={menus} />
    </div>
  )
}
export const DarkMode = () => {
  return (
    <div className="dark bg-secondary-800 h-screen w-full">
      <MultiLevelSidebar links={links} menus={menus} />
    </div>
  )
}
