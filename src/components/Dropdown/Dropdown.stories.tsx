import type { Meta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { theme } from '../../theme'
import { Avatar } from '../Avatar'
import type { RoundedSizes } from '../../types'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    title: 'Dropdown example',
    placement: 'auto',
    disabled: false,
    label: 'Dropdown',
  },
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Example = () => {
  return (
    <>
      <DropdownItem label="Undo" onClick={() => console.log('Undo')} shortcut="Ctrl+Z" />
      <DropdownItem label="Redo" disabled />
      <DropdownItem label="Cut" />
      <Dropdown label="Copy as">
        <DropdownItem label="Text" />
        <DropdownItem label="Video" />
        <Dropdown label="Image" nestingIcon="🎞️">
          <DropdownItem label=".png" />
          <DropdownItem label=".jpg" />
          <DropdownItem label=".svg" />
          <DropdownItem label=".gif" />
        </Dropdown>
        <DropdownItem label="Audio" />
      </Dropdown>
      <Dropdown label="Share">
        <DropdownItem label="Mail" />
        <DropdownItem label="Instagram" />
      </Dropdown>
    </>
  )
}

const SimpleComponent = () => {
  return (
    <>
      <DropdownItem label="Undo" onClick={() => console.log('Undo')} />
      <DropdownItem label="Redo" disabled />
      <DropdownItem label="Cut text " shortcut="⌘Z" />
      <Dropdown label="Share">
        <DropdownItem label="Mail" />
        <DropdownItem label="Instagram" />
      </Dropdown>
    </>
  )
}

export const Default = () => (
  <Dropdown label="Dropdown">
    <Example />
  </Dropdown>
)
export const SimpleExample = () => (
  <Dropdown label="Dropdown">
    <SimpleComponent />
  </Dropdown>
)

export const Colors = () => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.dropdown.root.color).map(c => (
      <Dropdown label={c} color={c as keyof typeof theme.dropdown.root.color} key={c}>
        <Example />
      </Dropdown>
    ))}
  </div>
)
export const Roundness = () => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.dropdown.rounded).map(c => {
      return (
        <Dropdown label={c} rounded={c as RoundedSizes} key={c}>
          <Example />
        </Dropdown>
      )
    })}
  </div>
)
export const Sizes = () => (
  <div className="flex gap-3 flex-wrap items-center">
    {Object.keys(theme.dropdown.size).map(c => (
      <Dropdown label={c} size={c as keyof typeof theme.dropdown.size} key={c}>
        <Example />
      </Dropdown>
    ))}
  </div>
)
export const Disabled = () => (
  <Dropdown disabled label={`I'm disabled 🥲`}>
    <Example />
  </Dropdown>
)
export const CustomTrigger = () => (
  <Dropdown
    label="Dropdown with custom trigger"
    trigger={
      <div className="flex items-center gap-2 rounded-full border p-3 hover:bg-secondary-200 transition-all">
        <span>Name</span>
        <Avatar size="sm" img="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" status="online" />
      </div>
    }
  >
    <Example />
  </Dropdown>
)
