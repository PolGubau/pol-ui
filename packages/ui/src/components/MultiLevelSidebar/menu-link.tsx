"use client"

import { TbChevronRight } from "react-icons/tb"

import { cn } from "../../helpers"
import { Button } from "../Button"
import type { NavigationMenuProps } from "./MultiLevelSidebar"

interface ProjectLinkProps extends NavigationMenuProps {
  setSelectedProject: (val: string | null) => void
  isOpen: boolean
}

const ProjectLink = ({
  icon: Icon,
  name,
  isOpen,
  setSelectedProject,
  ...props
}: ProjectLinkProps) => {
  const handleClick = () => {
    setSelectedProject(null)
    setTimeout(() => {
      setSelectedProject(name)
    }, 250)
  }

  return (
    <Button
      variant={"ghost"}
      onClick={handleClick}
      {...props}
      className={cn("transition-all", {
        "gap-4": isOpen,
        "gap-0": !isOpen,
      })}
    >
      <Icon className="stroke-secondary-900 dark:stroke-secondary-50 min-w-4 w-4 h-4" />
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <TbChevronRight className="stroke-secondary-900 dark:stroke-secondary-100 dark:troke-secondary-50 min-w-8 w-8" />
      </div>
    </Button>
  )
}

export default ProjectLink
