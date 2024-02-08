import type { Meta } from '@storybook/react'
import { PerspectiveCard } from './PerspectiveCard'

export default {
  title: 'Components/PerspectiveCard',
  component: PerspectiveCard,
  tags: ['autodocs'],

  decorators: [
    Story => (
      <div className="flex flex-col h-[500px] justify-center items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => {
  return (
    <div className="w-[500px] min-h-[400px] rounded-3xl border bg-primary-200">
      <PerspectiveCard>
        <div className="w-[150px] h-[150px] rounded-3xl bg-primary grid place-items-center"> Hello there </div>
      </PerspectiveCard>
    </div>
  )
}
export const WideParent = () => {
  return (
    <div className="w-full min-h-screen rounded-3xl border bg-primary-200">
      <PerspectiveCard>
        <div className="w-[150px] h-[150px] rounded-3xl bg-primary grid place-items-center"> Hello there </div>
      </PerspectiveCard>
    </div>
  )
}
export const CustomProps = () => {
  return (
    <div className="w-full min-h-screen rounded-3xl border bg-primary-200">
      <PerspectiveCard
        onClick={() => alert('clicked')}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            type: 'spring',
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
            type: 'spring',
          },
        }}
      >
        <div className="w-[150px] h-[150px] rounded-3xl bg-primary grid place-items-center"> Hello there </div>
      </PerspectiveCard>
    </div>
  )
}
