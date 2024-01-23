import type { Meta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { theme } from '../../theme'
import { MainSizesEnum } from '../PoluiProvider/enums'

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
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px]  bg-secondary-50">
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
      <DropdownItem label="Undo" onClick={() => console.log('Undo')} />
      <DropdownItem label="Redo" disabled />
      <DropdownItem label="Cut" />
      <Dropdown label="Copy as" nestingIcon="📋">
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

export const Default = () => (
  <div className="flex gap-3 flex-wrap">
    <Dropdown label="Dropdown">
      <Example />
    </Dropdown>
  </div>
)

export const Colors = () => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.dropdown.root.color).map(c => (
      <Dropdown label={c} color={c} key={c}>
        <Example />
      </Dropdown>
    ))}
  </div>
)
export const Roundness = () => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.dropdown.rounded).map(c => (
      <Dropdown label={c} rounded={c} key={c}>
        <Example />
      </Dropdown>
    ))}
  </div>
)
export const Sizes = () => (
  <div className="flex gap-3 flex-wrap items-center">
    {Object.keys(MainSizesEnum).map(c => (
      <Dropdown label={c} size={c} key={c}>
        <Example />
      </Dropdown>
    ))}
  </div>
)
