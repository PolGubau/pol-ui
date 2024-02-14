import { type Dispatch, type SetStateAction } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useBoolean, useDebounce } from '../../hooks'
import { KanbanColumn } from './Column'
import type { KanbanCardProps } from './Card'
import { KanbanDeleteCardsButton } from './BurnBarrel'
export interface KanbanProps {
  dragable?: boolean
  columns?: string[]
  cards: KanbanCardProps[]
  setCards: Dispatch<SetStateAction<KanbanCardProps[]>>
  deleteable?: boolean
  deleteButton?: React.ReactNode
}

export const Kanban: React.FC<KanbanProps> = ({
  dragable = true,
  cards,
  setCards,
  deleteButton,
  deleteable = true,
  columns = [...new Set(cards.map(card => card.column))],
}: KanbanProps) => {
  const { value: dragging, setValue: setDragging } = useBoolean(false)
  const debouncedDragging = useDebounce(dragging, 300)
  const shouldRenderDeleteButton = deleteable && debouncedDragging
  return (
    <AnimatePresence mode="wait">
      <div className="flex h-full w-full gap-2 overflow-auto">
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
            />
          )
        })}

        {shouldRenderDeleteButton && (
          <KanbanDeleteCardsButton setCards={setCards} setDragging={setDragging}>
            {deleteButton}
          </KanbanDeleteCardsButton>
        )}
      </div>
    </AnimatePresence>
  )
}
