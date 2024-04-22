import type { Meta } from '@storybook/react'
import Lines from './lines'

export default {
  title: 'Components/Lines',
  component: Lines,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => {
  return (
    <Lines>
      <div className="h-[999px] bg-error w-full">
        {Array.from({ length: 50 }).map((_, index) => (
          <p key={index}>{index + 1}</p>
        ))}
      </div>
    </Lines>
  )
}
