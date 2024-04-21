import { TbChevronRight } from 'react-icons/tb'
import type { NavigationMenuProps } from './MultiLevelSidebar'

interface Props extends Pick<NavigationMenuProps, 'icon' | 'name'> {
  setSelectedProject: (val: string | null) => void
}

const ProjectLink = ({ icon: Icon, name, setSelectedProject }: Props) => {
  const handleClick = () => {
    setSelectedProject(null)
    setTimeout(() => {
      setSelectedProject(name)
    }, 250)
  }
  return (
    <button
      onClick={handleClick}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      <Icon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">{name}</p>
        <TbChevronRight className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
      </div>
    </button>
  )
}

export default ProjectLink
