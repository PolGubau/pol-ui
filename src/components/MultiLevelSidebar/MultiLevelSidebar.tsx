import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'
import type { ComponentProps, FC } from 'react'
import { useState, useEffect } from 'react'
import NavigationLink from './NavigationLink'

import ProjectLink from './ProjectLink'
import ProjectNavigation from './MenuNavigation'
import type { ButtonProps } from '../Button'

export interface NavigationPropsLink extends ButtonProps {
  name: string
  navigate: (route: string) => void
  icon: FC<ComponentProps<'svg'>>
  active?: boolean
}

export interface NavigationMenuProps {
  name: string
  icon: FC<ComponentProps<'svg'>>
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
    rotate: 360,
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
        className="bg-secondary-50 dark:bg-secondary-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow dark:shadow-secondary-600"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-700 rounded-full" />
          <button className="p-1 rounded-full flex" onClick={() => handleOpenClose()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
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
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {links.map((props, index) => (
            <NavigationLink key={index} {...props} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {menus?.map((menu, index) => (
            <ProjectLink name={menu.name} icon={menu.icon} setSelectedProject={setSelectedProject} key={index} />
          ))}
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
