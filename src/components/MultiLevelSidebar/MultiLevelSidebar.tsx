import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'
import type { ComponentProps, FC } from 'react'
import { useState, useEffect } from 'react'
import NavigationLink from './link'

import ProjectLink from './menu-link'
import ProjectNavigation from './menu'
import type { ButtonProps } from '../Button'
import { Divider } from '../Divider'
import { IconButton } from '../IconButton'
import { cn } from '../../helpers'

interface ItemProps extends Omit<ButtonProps, 'name'> {
  name: string
  icon: FC<ComponentProps<'svg'>>
}
export interface NavigationPropsLink extends ItemProps {
  navigate: (route: string) => void
  active?: boolean
}

export interface NavigationMenuProps extends ItemProps {
  links?: NavigationPropsLink[]
  children?: React.ReactNode
}

export interface NavigationProps {
  defaultOpen?: boolean
  links: NavigationPropsLink[]
  menus?: NavigationMenuProps[]
}

const containerVariants = {
  close: {
    width: '5rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
}

const svgVariants = {
  close: {
    rotate: 0,
  },
  open: {
    rotate: 180,
  },
}

const MultiLevelSidebar = ({ links, menus, ...rest }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(rest.defaultOpen || false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const containerControls = useAnimationControls()
  const svgControls = useAnimationControls()

  useEffect(() => {
    if (isOpen) {
      containerControls.start('open')
      svgControls.start('open')
    } else {
      containerControls.start('close')
      svgControls.start('close')
    }
  }, [containerControls, isOpen, svgControls])

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
    setSelectedProject(null)
  }

  const selectedMenu = menus?.find(menu => menu.name === selectedProject)

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-secondary-50 dark:bg-secondary-900 flex flex-col z-10 gap-2 p-0 h-full w-full shadow dark:shadow-secondary-600 overflow-y-auto relative"
      >
        <div className="p-2 flex flex-col gap-2 h-full">
          {links.map((props, index) => (
            <NavigationLink key={index} {...props} />
          ))}
          <Divider />
          {menus?.map((menu, index) => (
            <ProjectLink {...menu} setSelectedProject={setSelectedProject} key={index} isOpen={isOpen} />
          ))}
        </div>

        <div
          className={cn(
            'flex w-full p-3 px-5 transition-all justify-end',
            'bg-secondary-50 dark:bg-secondary-900',
            'bottom-0 sticky',
            'border-t border-secondary-100 dark:border-secondary-800',
          )}
        >
          <IconButton variant={'ghost'} className="h-10 w-10 min-h-10 min-w-10" onClick={() => handleOpenClose()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </IconButton>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            menu={selectedMenu}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            isOpen={isOpen}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default MultiLevelSidebar
