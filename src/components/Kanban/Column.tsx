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
  onReorderSameColumn: (cards: KanbanCardProps[], cardId: string, before: string) => void
  onReorderDifferentColumn: (cards: KanbanCardProps[], cardId: string, before: string) => void
  columnClassName?: string
}
/**
 * KanbanColumn component for displaying a column in a kanban board.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the kanban column.
 * @param {KanbanCardProps[]} props.cards - The array of KanbanCardProps representing the cards in the column.
 * @param {string} props.column - The identifier for the column.
 * @param {Dispatch<SetStateAction<boolean>>} props.setDragging - Function to set the dragging state.
 * @param {boolean} props.dragable - Boolean indicating whether cards are draggable.
 * @param {Dispatch<SetStateAction<KanbanCardProps[]>>} props.setCards - Function to set the array of cards.
 * @param {string} [props.className] - Additional class name for styling purposes.
 * @param {string} [props.columnClassName] - Additional class name for styling the column.
 * @returns {JSX.Element} The rendered KanbanColumn component.
 */
export const KanbanColumn = ({
  title,
  cards,
  column,
  setCards,
  setDragging,
  className,
  columnClassName,
  dragable: dragableCards,
  onReorderSameColumn,
  onReorderDifferentColumn,
}: KanbanColumnProps): JSX.Element => {
  const { value: active, setFalse, setTrue } = useBoolean(false)

  /**
   * Handles the start of dragging a card.
   * @param {DragEvent} e - The drag event.
   * @param {KanbanCardProps} card - The card being dragged.
   * @returns {void}
   */
  const handleDragStart = (e: DragEvent, card: KanbanCardProps): void => {
    if (e.dataTransfer) {
      e.dataTransfer.setData('cardId', card.id)
      setDragging(true)
    }
  }

  const reorderCards = (cards: KanbanCardProps[], cardId: string, before: string) => {
    // Create a shallow copy of the cards array.
    let copy = [...cards]

    // Find the card to transfer based on its id.
    let cardToTransfer = copy.find(c => c.id === cardId)

    // If the card to transfer is not found, show a toast and exit the function.
    if (!cardToTransfer) {
      toast({ title: 'Card not found' })
      return
    }

    const isTheSameColumn = cardToTransfer.column === column

    // Update the cardToTransfer with the new column value.
    cardToTransfer = { ...cardToTransfer, column }

    // Remove the card from its current position in the copy array.
    copy = copy.filter(c => c.id !== cardId)

    // Check if the card should be moved to the back of the array.
    const moveToBack = before === '-1'

    // If moveToBack is true, push the cardToTransfer to the end of the copy array.
    if (moveToBack) {
      copy.push(cardToTransfer)
    } else {
      // If moveToBack is false, find the index to insert the card and splice it into the copy array.
      const insertAtIndex = copy.findIndex(el => el.id === before)
      if (insertAtIndex === undefined) return
      copy.splice(insertAtIndex, 0, cardToTransfer)
    }
    // Update the state with the modified copy of the cards array.
    setCards(copy)

    // If the card is being moved within the same column, call the onReorderSameColumn function.
    if (isTheSameColumn) {
      onReorderSameColumn(copy, cardId, before)
    } else {
      // If the card is being moved to a different column, call the onReorderDifferentColumn function.
      onReorderDifferentColumn(copy, cardId, before)
    }
  }

  /**
   * Handles the end of dragging a card.
   * @param {DragEvent} e - The drag event.
   * @returns {void}
   */
  const handleDragEnd = (e: DragEvent): void => {
    // Set the dragging state to false when the drag ends.
    setDragging(false)

    // If there is no dataTransfer object, exit the function.
    if (!e.dataTransfer) return

    // Retrieve the cardId from the dataTransfer object.
    const cardId = e.dataTransfer.getData('cardId')

    // Set the active state to false.
    setFalse()

    // Clear highlights on drop indicators.
    clearHighlights()

    // Get an array of drop indicators for the column.
    const indicators = getIndicators()

    // Find the nearest drop indicator based on the drag event.
    const { element } = getNearestIndicator(e, indicators)

    // Get the value of the 'before' attribute from the indicator's dataset, defaulting to '-1'.
    // Before is the id of the card before which the dragged card should be placed.
    const before = element.dataset.before ?? '-1'

    // If the drop indicator is different from the cardId, proceed with reordering.
    if (before !== cardId) {
      reorderCards(cards, cardId, before)
    }
  }
  /**
   * Handles the drag-over event during dragging a card.
   * @param {DragEvent} e - The drag event.
   * @returns {void}
   */
  const handleDragOver = (e: DragEvent): void => {
    e.preventDefault()
    highlightIndicator(e)
    setTrue()
  }
  /**
   * Clears the highlights of drop indicators.
   * @param {HTMLElement[]} [els] - Optional array of elements to clear highlights.
   * @returns {void}
   */
  const clearHighlights = (els?: HTMLElement[]): void => {
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
  /**
   * Gets the nearest drop indicator element.
   * @param {DragEvent} e - The drag event.
   * @param {HTMLElement[]} indicators - Array of drop indicator elements.
   * @returns {{ offset: number, element: HTMLElement }} The nearest indicator element and its offset.
   */
  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]): { offset: number; element: HTMLElement } => {
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
  /**
   * Gets all drop indicator elements for the column.
   * @returns {HTMLElement[]} Array of drop indicator elements.
   */
  const getIndicators = (): HTMLElement[] => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`) as unknown as HTMLElement[])
  }
  /**
   * Handles the drag-leave event during dragging a card.
   * @returns {void}
   */
  const handleDragLeave = (): void => {
    clearHighlights()
    setFalse()
  }

  // Filter cards based on the current column.
  const filteredCards = cards.filter(c => c.column === column)

  // Render the KanbanColumn component.

  return (
    <div className={twMerge('w-64 h-full shrink-0', className)}>
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
              card={c}
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
