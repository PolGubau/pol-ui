import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { useState } from 'react'
import type { KanbanCardProps } from './Card'
import { TbTrash } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface KanbanDeleteCardsButtonProps extends PropsWithChildren {
  setCards: Dispatch<SetStateAction<KanbanCardProps[]>>
  setDragging: Dispatch<SetStateAction<boolean>>
  positionY?: 'top' | 'bottom'
  positionX?: 'left' | 'right' | 'center'
}

export const KanbanDeleteCardsButton: React.FC<KanbanDeleteCardsButtonProps> = ({
  setCards,
  setDragging,
  children,
  positionY = 'bottom',
  positionX = 'center',
}: KanbanDeleteCardsButtonProps): JSX.Element => {
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

  const negativeIfTop = positionY === 'top' ? -1 : 1
  const initialPositionY = negativeIfTop * 100

  return (
    <motion.div
      initial={{
        scale: 0.5,
        y: initialPositionY,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      exit={{
        scale: 0.5,
        y: initialPositionY,
        opacity: 0,
      }}
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={twMerge(
        'fixed flex items-center gap-2 truncate py-3 px-6 rounded-2xl text-xl   backdrop-blur-md bg-error-200 dark:bg-error-700 text-error-900 dark:text-error-50 transition-shadow shadow-md z-50 shadow-error-900/20 hover:shadow-lg',
        active && 'brightness-95  ',
        positionY === 'top' && 'top-6',
        positionY === 'bottom' && 'bottom-6',
        positionX === 'left' && 'left-6',
        positionX === 'right' && 'right-6',
        positionX === 'center' && 'mx-auto inset-x-0 max-w-max',
      )}
    >
      {children ?? (
        <>
          <TbTrash />
          Delete Card
        </>
      )}
    </motion.div>
  )
}
