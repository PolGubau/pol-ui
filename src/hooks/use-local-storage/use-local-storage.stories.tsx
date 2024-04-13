import type { Meta } from '@storybook/react'

import { PoluiProvider } from '../../components/PoluiProvider'
import { useLocalStorage } from './use-local-storage'
import { Input } from '../../components/Input'

export default {
  title: 'Hooks/useLocalStorage',
  component: PoluiProvider,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} as Meta

export const Default = () => {
  const [value, setValue] = useLocalStorage('polUIStorybook', 'initialValue')
  return (
    <div>
      Current value in localstorage:{value}
      <div>
        <Input value={value} onChange={e => setValue(e.target.value)} />
      </div>
    </div>
  )
}
export const Encrypted = () => {
  const [value, setValue] = useLocalStorage('polUIStorybook', 'initialValue', 'supersecretkey')
  return (
    <div>
      Current value in localstorage:{value}
      <div>
        <Input value={value} onChange={e => setValue(e.target.value)} />
      </div>
    </div>
  )
}
