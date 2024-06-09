import type { Meta } from '@storybook/react'

import { PoluiProvider } from '../../components/PoluiProvider'
import { useKeyShortcuts } from './use-key-shortcuts'
import { KeyCombination, ModifierKey, RegularKey } from './valid-keys'
import { Toaster, toast } from '../../components'

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
  const saveFunction = () => {
    toast('Save function triggered')
  }

  const undoFunction = () => {
    toast('Undo function triggered')
  }

  const shortcuts = [
    { keys: `${ModifierKey.Ctrl}+${RegularKey.S}` as KeyCombination, callback: saveFunction },
    { keys: `${ModifierKey.Ctrl}+${RegularKey.Z}` as KeyCombination, callback: undoFunction },
  ]

  useKeyShortcuts(shortcuts)

  return (
    <div>
      <h1>Keyboard Shortcuts Example</h1>
      <p>Press Ctrl+S to save and Ctrl+Z to undo.</p>
    </div>
  )
}
