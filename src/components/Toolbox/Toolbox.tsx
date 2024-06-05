import { FaChevronUp } from 'react-icons/fa'
import { cn } from '../../helpers'
import { IconButton } from '../IconButton'
import { useBoolean } from '../../hooks'

export interface ToolboxProps {
  children: React.ReactNode
}

const Toolbox = ({ children }: ToolboxProps) => {
  const { value: showDebug, toggle } = useBoolean(false)

  return (
    <>
      <IconButton
        onClick={toggle}
        size={'sm'}
        className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 bg-slate-800 dark:bg-black "
        style={{ zIndex: 999999 }}
      >
        <FaChevronUp
          size={18}
          className={cn('fill-white transition-all', {
            'rotate-180': showDebug,
          })}
        />
      </IconButton>
      <div
        style={{ zIndex: 999999 }}
        className={cn(
          'w-fit bg-slate-800 dark:bg-black shadow-xl flex transition-all justify-center items-center rounded-full p-1 gap-1 fixed left-1/2 -translate-x-1/2 z-40',
          {
            'bottom-12': showDebug,
            '-bottom-20': !showDebug,
          },
        )}
      >
        {children}
      </div>
    </>
  )
}

export default Toolbox
