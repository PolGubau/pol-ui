import type { Dispatch, FormEvent, SetStateAction } from 'react'
import { useState } from 'react'
import type { KanbanCardProps } from './Card'
import { motion } from 'framer-motion'
import { TbPlus } from 'react-icons/tb'
import { Textarea } from '../Textarea'
import { Button } from '../Button'
import { ColorsEnum } from '../../types'

type AddCardProps = {
  column: string
  setCards: Dispatch<SetStateAction<KanbanCardProps[]>>
  addLabel?: string
  cancelLabel?: string
}

export const AddKanbanCard = ({ column, setCards, addLabel = 'new', cancelLabel = 'close' }: AddCardProps) => {
  const [text, setText] = useState('')
  const [adding, setAdding] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text.trim().length) return

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    }

    setCards(pv => [...pv, newCard])

    setAdding(false)
  }

  const MotionButton = motion(Button)

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit} className="flex w-full flex-col">
          <Textarea
            onChange={e => setText(e.target.value)}
            placeholder="Add new task..."
            className="flex flex-1 w-full"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <Button color={ColorsEnum.secondary} type="button" onClick={() => setAdding(false)} size="sm">
              <span className="first-letter:uppercase">{cancelLabel}</span>
            </Button>
            <Button color={ColorsEnum.primary} type="submit" size="sm">
              <span className="first-letter:uppercase">{addLabel}</span>
              <TbPlus />
            </Button>
          </div>
        </motion.form>
      ) : (
        <MotionButton
          layout
          color={ColorsEnum.primary}
          type="submit"
          size="sm"
          onClick={() => setAdding(true)}
          hasBackground={false}
        >
          <span className="first-letter:uppercase">{addLabel}</span>
          <TbPlus />
        </MotionButton>
      )}
    </>
  )
}
