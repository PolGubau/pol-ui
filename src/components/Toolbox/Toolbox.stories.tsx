import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button'
import Toolbox, { ToolboxProps } from './Toolbox'
import { IconButton } from '../IconButton'
import { useThemeMode } from '../../hooks'
import { TbMoon, TbSettings, TbSun, TbUser } from 'react-icons/tb'

export default {
  title: 'Components/Toolbox',
  component: Toolbox,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-background w-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => {
  const { computedMode, toggleMode } = useThemeMode()

  return (
    <Toolbox>
      <IconButton onClick={toggleMode} className="text-white">
        {computedMode === 'light' ? <TbSun size={20} /> : <TbMoon size={20} />}
      </IconButton>
      <IconButton className="text-white">
        <TbSettings size={20} />
      </IconButton>
      <IconButton className="text-white">
        <TbUser size={20} />
      </IconButton>
    </Toolbox>
  )
}
