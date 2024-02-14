import type { Meta } from '@storybook/react'
import type { KanbanCardProps } from './'
import { Kanban } from './Kanban'
import React from 'react'
export default {
  title: 'Components/Kanban',
  component: Kanban,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-10">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const DEFAULT_CARDS: KanbanCardProps[] = [
  // BACKLOG
  { title: 'Look into render bug in dashboard', id: '1', column: 'backlog' },
  { title: 'SOX compliance checklist', id: '2', column: 'backlog' },
  { title: '[SPIKE] Migrate to Azure', id: '3', column: 'backlog' },
  { title: 'Document Notifications service', id: '4', column: 'backlog' },
  {
    title: 'Research DB options for new microservice',
    id: '5',
    column: 'todo',
  },
  { title: 'Postmortem for outage', id: '6', column: 'todo' },
  { title: 'Sync with product on Q3 roadmap', id: '7', column: 'todo' },

  // DOING
  {
    title: 'Refactor context providers to use Zustand',
    id: '8',
    column: 'doing',
  },
  { title: 'Add logging to daily CRON', id: '9', column: 'doing' },
  // DONE
  {
    title: 'Set up DD dashboards for Lambda listener',
    id: '10',
    column: 'done',
  },
]
const columns = [...new Set(DEFAULT_CARDS.map(card => card.column))]

export const Default = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS)
  return <Kanban cards={cards} setCards={setCards} columns={columns} />
}
