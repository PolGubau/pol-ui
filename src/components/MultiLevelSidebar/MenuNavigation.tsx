import { motion } from 'framer-motion'
import { TbX } from 'react-icons/tb'
import type { NavigationMenuProps } from './MultiLevelSidebar'
import NavigationLink from './NavigationLink'
import { Divider } from '../Divider'
import { Input } from '../Input'

const variants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
}

interface ProjectNavigationProps {
  selectedProject: string
  isOpen: boolean
  menu: NavigationMenuProps | undefined
  setSelectedProject: (project: string | null) => void
}

const ProjectNavigation = ({ selectedProject, menu, isOpen, setSelectedProject }: ProjectNavigationProps) => {
  if (!menu) return null
  return (
    <motion.nav
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        duration: 0.25,
        ease: 'easeInOut',
      }}
      className={`h-full flex flex-col gap-8 w-64 absolute bg-secondary-100 dark:bg-secondary-900 ml-0  ${
        isOpen ? 'left-64' : 'left-20'
      } border-r border-secondary-200 dark:border-secondary-800 p-5`}
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <h1 className="tracking-wide dark:text-neutral-100 text-neutral-900 text-lg">{selectedProject}</h1>
        <button onClick={() => setSelectedProject(null)}>
          <TbX className="w-8 stroke-neutral-400" />
        </button>
      </div>
      <Input placeholder="Search" />

      <div className="flex flex-col gap-3">
        {menu.links?.map((props, index) => <NavigationLink key={index} {...props} />)}
      </div>
      <Divider />
      {menu.children}
    </motion.nav>
  )
}

export default ProjectNavigation
