import { useState, type Dispatch, type SetStateAction } from 'react'
import type { KanbanCardProps } from './Card'
import { TbTrash } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const KanbanDeleteCardsButton = ({
  setCards,
  setDragging,
}: {
  setCards: Dispatch<SetStateAction<KanbanCardProps[]>>
  setDragging: Dispatch<SetStateAction<boolean>>
}) => {
  const [active, setActive] = useState(false)
  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setActive(true)
  }
  const handleDragLeave = () => {
    setActive(false)
  }
  const handleDragEnd = (e: { dataTransfer: { getData: (arg0: string) => unknown } }) => {
    setDragging(false)
    if (!e.dataTransfer) return
    const cardId = e.dataTransfer.getData('cardId')
    setCards(pv => pv.filter(c => c.id !== cardId))
    setActive(false)
  }

  return (
    <motion.div
      initial={{ scale: 0.5, y: 100, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.5, y: 100, opacity: 0 }}
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={twMerge(
        'fixed flex items-center gap-2 truncate py-3 px-6 rounded-2xl text-xl bottom-6 inset-x-0 max-w-max mx-auto text-bold  backdrop-blur-md bg-error-200 text-error-900 transition-shadow shadow-md z-50 shadow-error-900/20 ',

        active && 'brightness-95 shadow-lg shadow-error-900/20 ',
      )}
    >
      <TbTrash />
      Delete Card
    </motion.div>
  )
}
