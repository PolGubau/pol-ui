import type { Meta } from "@storybook/react"
import {
  TbActivityHeartbeat,
  TbCalendar,
  TbFaceId,
  TbHammer,
  TbProgress,
  TbUniverse,
  TbUser,
} from "react-icons/tb"

import { cn } from "../../helpers"
import { useBoolean } from "../../hooks"
import { Button } from "../Button"
import { Card } from "../Card"
import { Navbar } from "../Navbar"
import MultiLevelSidebar, {
  type NavigationMenuProps,
  type NavigationPropsLink,
} from "./MultiLevelSidebar"

export default {
  title: "Components/MultiLevelSidebar",
  component: MultiLevelSidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const { value: darkMode, toggle } = useBoolean(false)
      return (
        <div className={cn("flex h-screen flex-col", { dark: darkMode })}>
          <Navbar
            rightContent={<Button onClick={toggle}>Toggle Dark Mode</Button>}
            leftContent={
              <div className="flex items-center gap-2 flex-1">
                <div className="h-5 w-5 bg-orange-200 rounded-full " />{" "}
                <p className="dark:text-secondary-50">Navbar</p>
              </div>
            }
            className="bg-secondary-50 dark:bg-secondary-900 border-b dark:border-secondary-800"
          />
          <section className="grid grid-cols-[auto,1fr] h-full pt-[60px]">
            <Story />
            <div className="w-full h-full bg-primary-100"></div>
          </section>
        </div>
      )
    },
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const links: NavigationPropsLink[] = [
  {
    name: "Dashboard",
    navigate: () => {
      console.log("Navigate to Dashboard")
    },
    icon: TbUser,
    active: true,
  },
  {
    name: "Projects",
    navigate: () => {
      console.log("Navigate to Dashboard")
    },
    icon: TbFaceId,
  },
  {
    name: "Team",
    navigate: () => {
      console.log("Navigate to Dashboard")
    },
    icon: TbActivityHeartbeat,
  },
  {
    name: "Calendar",
    navigate: () => {
      console.log("Navigate to Dashboard")
    },
    icon: TbHammer,
  },
  {
    name: "Documents",
    navigate: () => {
      console.log("Navigate to Dashboard")
    },
    icon: TbProgress,
  },
  {
    name: "Reports",
    navigate: () => {
      console.log("Navigate to Dashboard")
    },
    icon: TbUniverse,
  },
]
const menus: NavigationMenuProps[] = [
  {
    name: "Projects",
    icon: TbProgress,
    links: [
      {
        name: "Project 1",
        navigate: () => {
          console.log("Navigate to Project 1")
        },
        icon: TbUser,
      },
      {
        name: "Project 2",
        navigate: () => {
          console.log("Navigate to Project 2")
        },
        icon: TbUser,
      },
      {
        name: "Project 3",
        navigate: () => {
          console.log("Navigate to Project 3")
        },
        icon: TbUser,
      },
    ],
    children: (
      <div>
        <Card>
          <p className="dark:text-secondary ">Discover more</p>
          <img
            src="https://picsum.photos/200"
            alt="Project"
            className="rounded-xl shadow shadow-secondary"
          />
        </Card>
        <Card>
          <p className="dark:text-secondary ">Discover more 2</p>
          <img
            src="https://picsum.photos/200"
            alt="Project"
            className="rounded-xl shadow shadow-secondary"
          />
        </Card>
        <Card>
          <p className="dark:text-secondary ">Discover more 3</p>
          <img
            src="https://picsum.photos/200"
            alt="Project"
            className="rounded-xl shadow shadow-secondary"
          />
        </Card>
        <Card>
          <p className="dark:text-secondary ">Discover more 4</p>
          <img
            src="https://picsum.photos/200"
            alt="Project"
            className="rounded-xl shadow shadow-secondary"
          />
        </Card>
        <Card>
          <p className="dark:text-secondary ">Discover more 5</p>
          <img
            src="https://picsum.photos/200"
            alt="Project"
            className="rounded-xl shadow shadow-secondary"
          />
        </Card>
      </div>
    ),
  },
  {
    name: "Team",
    icon: TbActivityHeartbeat,
    links: [
      {
        name: "Team 1",
        navigate: () => {
          console.log("Navigate to Team 1")
        },
        icon: TbUser,
      },
      {
        name: "Team 2",
        navigate: () => {
          console.log("Navigate to Team 2")
        },
        icon: TbUser,
      },
      {
        name: "Team 3",
        navigate: () => {
          console.log("Navigate to Team 3")
        },
        icon: TbUser,
      },
    ],
    children: <div>Team</div>,
  },
  {
    name: "Calendar",
    icon: TbCalendar,
    links: [
      {
        name: "Calendar 1",
        navigate: () => {
          console.log("Navigate to Calendar 1")
        },
        icon: TbUser,
      },
      {
        name: "Calendar 2",
        navigate: () => {
          console.log("Navigate to Calendar 2")
        },
        icon: TbUser,
      },
      {
        name: "Calendar 3",
        navigate: () => {
          console.log("Navigate to Calendar 3")
        },
        icon: TbUser,
      },
    ],
  },
]

export const Default = () => {
  return <MultiLevelSidebar links={links} menus={menus} />
}

export const StressTest = () => {
  return (
    <MultiLevelSidebar
      links={[...links, ...links, ...links, ...links]}
      menus={[...menus, ...menus, ...menus, ...menus]}
    />
  )
}
