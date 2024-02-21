import type { Meta } from '@storybook/react'
import { Hamburguer } from './Hamburguer'
import { useBoolean } from '../../hooks'

export default {
  title: 'Components/Hamburguer',
  component: Hamburguer,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

export const Default = () => {
  const { value, toggle } = useBoolean(false)

  return (
    <Hamburguer
      onClick={() => {
        toggle()
      }}
      open={value}
    />
  )
}

export const Outline = () => {
  const { value, toggle } = useBoolean(false)

  return <Hamburguer outline onClick={toggle} open={value} />
}
