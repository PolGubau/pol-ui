import React from "react"
import type { Meta } from "@storybook/react"
import { twMerge } from "tailwind-merge"

import type { KanbanCardProps } from "."
import { Toaster, toast } from "../Toaster"
import { Kanban } from "./Kanban"

export default {
  title: "Components/Kanban",
  component: Kanban,
  decorators: [
    (Story) => (
      <div className="flex  h-[600px] p-6">
        <Toaster />
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const DEFAULT_CARDS: KanbanCardProps[] = [
  // BACKLOG
  { title: "Welcome to the kanban", id: "1", column: "backlog" },
  { title: "You can create new cards", id: "2", column: "backlog" },
  { title: "And delete them", id: "3", column: "backlog" },
  { title: "You can also drag them", id: "4", column: "backlog" },
  {
    title: "Is not this cool?",
    id: "5",
    column: "todo",
  },
  {
    title: "I have an action!!!",
    id: "6",
    column: "todo",
    onClick: () => {
      alert("I have been clicked")
    },
  },
  {
    title:
      "I am a card with a long long long long long long long long long long long long title",
    id: "7",
    column: "todo",
  },

  // DOING
  {
    title: "Here is another card",
    id: "8",
    column: "doing",
  },
  { title: "🦆 quack!", id: "9", column: "doing" },
  // DONE
  {
    title: "Quite a complete component, right?",
    id: "10",
    column: "done",
  },
]
const columns = [...new Set(DEFAULT_CARDS.map((card) => card.column))]

export const Default = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      onCreate={handleCreate}
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
    />
  )
}

export const DeleteOnTop = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      deletePositionY="top"
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}
export const DeleteOnLeft = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      deletePositionX="left"
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}
export const DeleteOnRight = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      deletePositionX="right"
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}
export const InstantDeleteDelay = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      deleteDelay={0}
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}

export const CustomLabels = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
      labels={{
        add: "Afegir",
        cancel: "Cancelar",
        placeholder: "Afegir nova tasca...",
      }}
    />
  )
}
export const LongDeleteDelay = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      deleteDelay={2000}
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}
export const DeleteableDisabled = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }

  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
    />
  )
}
export const DragableDisabled = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      dragable={false}
      cards={cards}
      setCards={setCards}
      columns={columns}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}

export const EventOnReorder = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleCreate = ({
    column,
    title,
  }: {
    column: string
    title: string
  }) => {
    setCards([...cards, { title, id: `${Math.random()}`, column }])
  }
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      onReorder={({ cardId, before, newColumn, isSameColumn }) => {
        toast("Card moved in same column", {
          description: `Card ${cardId} moved before ${before}, new column: ${newColumn}, isSameColumn: ${isSameColumn}`,
        })
      }}
      onCreate={handleCreate}
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
    />
  )
}
export const WithoutCreate = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)

  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
    />
  )
}
export const CustomTitleClasses = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)

  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  const classes = [
    "text-primary-800",
    "text-warning-800",
    "text-info-800",
    "text-success-800",
  ]
  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
      titleClasses={classes}
    />
  )
}
export const CustomDeleteButton = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  const content = (active: boolean) => (
    <div
      className={twMerge(
        "w-48 h-36 flex justify-center items-center text-center",
        active ? "bg-red-500" : "bg-blue-500"
      )}
    >
      I am a custom delete buton.
    </div>
  )

  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
      deleteButton={content}
    />
  )
}

export const CustomClassname = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
      className="flex flex-col"
      columnClassName="bg-red-400"
      columnsClassName="flex gap-10 bg-red-200 p-3 rounded-xl"
      indicatorClassName="bg-orange-700"
    />
  )
}
