import type { Meta } from '@storybook/react'

import { PoluiProvider } from '../../components/PoluiProvider'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { decrypt, encrypt } from './encryption'
import { Button } from '../../components/Button'

export default {
  title: 'Helpers/encryption',
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
  const [value, setValue] = useState('Hello there')
  const supersecretkey = 'supersecretkey'
  const handleEncrypt = async () => {
    const encrypted = encrypt(value, supersecretkey)
    setValue(encrypted)
  }
  const handleDecrypt = async () => {
    const decrypted = decrypt(value, supersecretkey)
    setValue(decrypted)
  }
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      Current value: {value}
      <div>
        <Input value={value} onChange={e => { setValue(e.target.value); }} />
      </div>
      <Button onClick={handleEncrypt}>Encrypt</Button>
      <Button onClick={handleDecrypt} color="secondary" disabled={!value}>
        Decrypt
      </Button>
    </div>
  )
}
