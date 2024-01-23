import type { Meta } from '@storybook/react'
import { Dropdown, DropdownProps } from './Dropdown'
import { DropdownItem } from './DropdownItem'

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
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] h-screen  bg-primary-100">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template = (args: DropdownProps) => (
  <div className="flex gap-3 flex-wrap">
    <Dropdown
      {...args}
      color="primary"
      ref={el => {
        console.log(el)
      }}
    >
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
    </Dropdown>
  </div>
)

export const Default = () => (
  <div className="flex gap-3 flex-wrap">
    <Dropdown label="Dropdown">
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
    </Dropdown>
  </div>
)

export const Colors = () => (
  <div className="flex gap-3 flex-wrap">
    <Dropdown label="Dropdown">
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
    </Dropdown>
  </div>
)

// export const CustomItem = Template.bind({})
// CustomItem.args = {
//   children: (
//     <>
//       <Dropdown.Item>Default button</Dropdown.Item>
//       <Dropdown.Item as="span">As span</Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item as="a" href="https://polgubau.com/" target="_blank">
//         As link
//       </Dropdown.Item>
//     </>
//   ),
// }
