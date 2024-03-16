import { AnimatePresence } from 'framer-motion'
import { useBoolean, useDebounce } from '../../hooks'
import { KanbanColumn } from './Column'
import type { KanbanCardProps } from './Card'
import { KanbanDeleteCardsButton } from './BurnBarrel'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { KanbanTheme } from './theme'

interface OnReorder {
  cards: KanbanCardProps[]
  cardId: KanbanCardProps['id']
  before: KanbanCardProps['id']
  newColumn: KanbanCardProps['column']
  isSameColumn: boolean
}


export interface KanbanProps {
  dragable?: boolean
  columns?: string[]
  cards: KanbanCardProps[]
  setCards: (value: KanbanCardProps[]) => void
  deleteButton?: (dragging: boolean) => React.ReactNode
  deletePositionY?: 'top' | 'bottom'
  deletePositionX?: 'left' | 'right' | 'center'
  deleteDelay?: number
  onReorder?: ({ cards, cardId, before, newColumn, isSameColumn }: OnReorder) => void
  onCreate?: ({ column, title }: { column: string; title: string }) => void
  onDelete?: (cardId: KanbanCardProps['id']) => void
  className?: string
  columnClassName?: string
  columnsClassName?: string
  indicatorClassName?: string
  titleClasses?: string[]
  labels?: {
    add?: string
    cancel?: string
    placeholder?: string
  }
  theme?: DeepPartial<KanbanTheme>
}

/**
 *
 * @name Kanban
 * @description The Kanban component is used to display a kanban board, it is used to display cards in columns and allows the user to drag and drop the cards between columns. It's a great way to visualize the flow of work and to see what's in progress, what's done, and what's coming up.
 * @returns
 */
export const Kanban: React.FC<KanbanProps> = ({
  dragable = true,
  cards,
  setCards,
  deleteButton,
  deletePositionY,
  deletePositionX,
  onReorder,
  onCreate,
  onDelete,
  deleteDelay = 300,
  className,
  columnClassName,
  columnsClassName,
  indicatorClassName,
  columns = [...new Set(cards.map(card => card.column))],
  titleClasses,
  labels = { add: 'Add', cancel: 'Cancel', placeholder: 'Add new...' },

  theme: customTheme = {},
}: KanbanProps) => {
  const { value: dragging, setValue: setDragging } = useBoolean(false)
  const debouncedDragging = useDebounce(dragging, deleteDelay)
  const shouldRenderDeleteButton = onDelete && debouncedDragging

  if (!columns.length) throw new Error('Kanban must have at least one column 🤔🤔🤔')
  if (!cards.length) throw new Error('Kanban must have at least one card 🤔🤔🤔')
  if (deleteButton && !onDelete) throw new Error('Kanban must have onDelete prop if deleteButton is provided 🤔🤔🤔')
  const theme: KanbanTheme = mergeDeep(getTheme().kanban, customTheme)

  return (
    <AnimatePresence mode="wait">
      <div className={twMerge(theme.root.base, className)}>
        {columns.map((column, i) => {
          return (
            <KanbanColumn
              labels={labels}
              titleClass={titleClasses?.[i % titleClasses.length]}
              key={column}
              title={column}
              className={columnsClassName}
              columnClassName={columnClassName}
              indicatorClassName={indicatorClassName}
              column={column}
              cards={cards}
              setDragging={setDragging}
              setCards={setCards}
              dragable={dragable}
              onReorder={onReorder}
              onCreate={onCreate}
              theme={theme}
            />
          )
        })}

        {shouldRenderDeleteButton && (
          <KanbanDeleteCardsButton
            setDragging={setDragging}
            positionX={deletePositionX}
            positionY={deletePositionY}
            onDelete={onDelete}
            content={deleteButton}
          />
        )}
      </div>
    </AnimatePresence>
  )
}
