import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { KanbanDropIndicator } from './KanbanDropIndicator'

export type CompleteKanbanCardProps = KanbanCardProps & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleDragStart: Function
  setDragging: (value: boolean) => void
}
export type KanbanCardProps = {
  title: string
  id: string
  dragable?: boolean
  column: string
  onClick?: () => void
}

export const KanbanCard = ({
  title,
  id,
  column,
  handleDragStart,
  onClick,
  dragable,
  setDragging,
}: CompleteKanbanCardProps) => {
  return (
    <>
      <KanbanDropIndicator beforeId={id} column={column} />
      <motion.button
        layout
        onClick={onClick}
        layoutId={id}
        draggable={dragable}
        onDragStart={e => handleDragStart(e, { title, id, column })}
        onDragEnd={() => setDragging(false)}
        className={twMerge(
          'w-full rounded border border-secondary-600 bg-secondary-50 dark:bg-secondary-900 dark:border-secondary-100 hover:brightness-90 p-3',
          dragable ? 'cursor-grab active:cursor-grabbing ' : '',
        )}
      >
        <p className="text-sm text-left text-secondary-900 dark:text-secondary-100">{title}</p>
      </motion.button>
    </>
  )
}
