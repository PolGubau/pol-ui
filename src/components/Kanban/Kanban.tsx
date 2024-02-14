import { type Dispatch, type SetStateAction } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useBoolean, useDebounce } from '../../hooks'
import { KanbanColumn } from './Column'
import type { KanbanCardProps } from './Card'
import { KanbanDeleteCardsButton } from './BurnBarrel'

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
  setCards: Dispatch<SetStateAction<KanbanCardProps[]>>
  deleteable?: boolean
  deleteButton?: React.ReactNode
  deletePositionY?: 'top' | 'bottom'
  deletePositionX?: 'left' | 'right' | 'center'
  deleteDelay?: number
  onReorder?: ({ cards, cardId, before, newColumn, isSameColumn }: OnReorder) => void
}

export const Kanban: React.FC<KanbanProps> = ({
  dragable = true,
  cards,
  setCards,
  deleteButton,
  deleteable = true,
  deletePositionY,
  deletePositionX,
  onReorder,
  deleteDelay = 300,
  columns = [...new Set(cards.map(card => card.column))],
}: KanbanProps) => {
  const { value: dragging, setValue: setDragging } = useBoolean(false)
  const debouncedDragging = useDebounce(dragging, deleteDelay)
  const shouldRenderDeleteButton = deleteable && debouncedDragging
  return (
    <AnimatePresence mode="wait">
      <div className="flex w-full gap-2 overflow-x-auto h-fit">
        {columns.map(column => {
          return (
            <KanbanColumn
              key={column}
              title={column}
              column={column}
              cards={cards}
              setDragging={setDragging}
              setCards={setCards}
              dragable={dragable}
              onReorder={onReorder}
            />
          )
        })}

        {shouldRenderDeleteButton && (
          <KanbanDeleteCardsButton
            setCards={setCards}
            setDragging={setDragging}
            positionX={deletePositionX}
            positionY={deletePositionY}
          >
            {deleteButton}
          </KanbanDeleteCardsButton>
        )}
      </div>
    </AnimatePresence>
  )
}
