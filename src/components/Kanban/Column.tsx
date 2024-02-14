import { type Dispatch, type SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'
import { useBoolean } from '../../hooks'
import { toast } from '../Toaster'
import { KanbanCard, type KanbanCardProps } from './Card'
import { motion } from 'framer-motion'
import { AddKanbanCard } from './AddCard'
import { KanbanDropIndicator } from './KanbanDropIndicator'
export type KanbanColumnProps = {
  title: string
  cards: KanbanCardProps[]
  column: string
  setDragging: Dispatch<SetStateAction<boolean>>
  dragable: boolean
  setCards: Dispatch<SetStateAction<KanbanCardProps[]>>
  className?: string
  columnClassName?: string
}
export const KanbanColumn = ({
  title,
  cards,
  column,
  setCards,
  setDragging,
  className,
  columnClassName,
  dragable: dragableCards,
}: KanbanColumnProps) => {
  const { value: active, setFalse, setTrue } = useBoolean(false)
  const handleDragStart = (e: DragEvent, card: KanbanCardProps) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData('cardId', card.id)
      setDragging(true)
    }
  }

  const handleDragEnd = (e: DragEvent) => {
    setDragging(false)
    if (!e.dataTransfer) return
    const cardId = e.dataTransfer.getData('cardId')
    setFalse()
    clearHighlights()
    const indicators = getIndicators()
    const { element } = getNearestIndicator(e, indicators)

    const before = element.dataset.before ?? '-1'
    if (before !== cardId) {
      let copy = [...cards]

      let cardToTransfer = copy.find(c => c.id === cardId)

      if (!cardToTransfer) {
        toast({ title: 'Card not found' })
        return
      }
      cardToTransfer = { ...cardToTransfer, column }

      copy = copy.filter(c => c.id !== cardId)

      const moveToBack = before === '-1'

      if (moveToBack) {
        copy.push(cardToTransfer)
      } else {
        const insertAtIndex = copy.findIndex(el => el.id === before)
        if (insertAtIndex === undefined) return

        copy.splice(insertAtIndex, 0, cardToTransfer)
      }

      setCards(copy)
    }
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    highlightIndicator(e)
    setTrue()
  }

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els ?? getIndicators()

    indicators.forEach(i => {
      i.style.opacity = '0'
    })
  }

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators()

    clearHighlights(indicators)

    const el = getNearestIndicator(e, indicators)

    el.element.style.opacity = '1'
  }

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()

        const offset = e.clientY - (box.top + DISTANCE_OFFSET)

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    )

    return el
  }

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`) as unknown as HTMLElement[])
  }

  const handleDragLeave = () => {
    clearHighlights()
    setFalse()
  }

  const filteredCards = cards.filter(c => c.column === column)

  return (
    <div className={twMerge('w-64 shrink-0', className)}>
      <header className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{filteredCards.length}</span>
      </header>
      <motion.button
        onDrop={e => handleDragEnd(e as unknown as DragEvent)}
        onDragOver={e => handleDragOver(e as unknown as DragEvent)}
        onDragLeave={handleDragLeave}
        onDragEnd={() => {
          setDragging(false)
        }}
        className={twMerge(
          `h-full w-full flex flex-col justify-start items-start transition-all rounded-lg bg-secondary-50 px-1`,
          columnClassName,
          active && 'brightness-95',
        )}
      >
        {filteredCards.map(c => {
          return (
            <KanbanCard
              key={c.id}
              {...c}
              handleDragStart={handleDragStart}
              dragable={dragableCards}
              setDragging={setDragging}
            />
          )
        })}
        <KanbanDropIndicator beforeId={null} column={column} />
        <AddKanbanCard column={column} setCards={setCards} />
      </motion.button>
    </div>
  )
}
