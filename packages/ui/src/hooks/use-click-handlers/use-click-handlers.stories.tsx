import type { Meta } from '@storybook/react'

import { Toaster, toast } from '../../components'
import { PoluiProvider } from '../../components/PoluiProvider'
import { useClickHandlers } from './use-click-handlers'

export default {
  title: 'Hooks/useKeyShortcuts',
  component: PoluiProvider,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} as Meta
export const Default: React.FC = () => {
  const handleDoubleClick = () => {
    toast('Double click detected')
  }

  const handleHoldClick = () => {
    toast('Hold click detected')
  }

  const buttonRef = useClickHandlers({
    onDoubleClick: handleDoubleClick,
    onHoldClick: handleHoldClick,
    holdTime: 1000, // optional, defaults to 500ms
  })

  return (
    <div>
      <h1>Click Handlers Example</h1>
      <button ref={buttonRef}>Click or Hold Me</button>
    </div>
  )
}
