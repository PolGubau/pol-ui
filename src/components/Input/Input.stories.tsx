import type { Meta, StoryFn } from '@storybook/react'
import { Input, type InputProps } from './Input'
import { TbAt, TbEye, TbUser } from 'react-icons/tb'
import { ColorsEnum } from '../../types/enums'

import { Dropdown, DropdownItem } from '../Dropdown'
import { IconButton } from '../IconButton'

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  min-h-[400px] justify-center items-center bg-secondary-50">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.storyName = 'Text input'
Default.args = {
  placeholder: 'pol@ui.com',
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  placeholder: 'pol@ui.com',
}
export const WithPlaceholderAndLabel = Template.bind({})
WithPlaceholderAndLabel.args = {
  placeholder: 'pol@ui.com',
  label: 'Email',
}
export const LeftLabel = Template.bind({})
LeftLabel.args = {
  placeholder: 'pol@ui.com',
  label: 'Email',
  labelPosition: 'left',
}

export const WithAddon = Template.bind({})
WithAddon.args = {
  placeholder: 'Addon',
  addon: (
    <Dropdown label="Dropdown">
      <DropdownItem label="Undo" />
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
    </Dropdown>
  ),
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'Username',
  leftComponent: <TbUser className="ml-1" />,
}
export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  placeholder: 'Email',
  rightComponent: <TbAt />,
}
export const WithHelperText = Template.bind({})
WithHelperText.args = {
  placeholder: 'Email',
  helperText: 'Helper text',
}
export const PasswordField = Template.bind({})
PasswordField.args = {
  type: 'password',
  placeholder: '**********',
  label: 'Password',
  helperText: 'Must be at least 8 characters',
}

export const AllColors = () => (
  <div className="grid grid-cols-2">
    <div className="flex flex-col gap-4 p-4 bg-secondary-50">
      {Object.keys(ColorsEnum).map(color => (
        <Input key={color} placeholder={color} color={color} rightComponent={<TbAt />} />
      ))}
    </div>
    <div className="dark flex flex-col gap-4 p-4 rounded-xl bg-secondary-900">
      {Object.keys(ColorsEnum).map(color => (
        <Input key={color} placeholder={color} color={color} rightComponent={<TbAt />} />
      ))}
    </div>
  </div>
)
export const AllColorsFilled = () => (
  <div className="grid grid-cols-2">
    <div className="flex flex-col gap-4 p-4 bg-secondary-50">
      {Object.keys(ColorsEnum).map(color => (
        <Input
          key={color}
          placeholder={color}
          color={color}
          rightComponent={<TbAt />}
          defaultValue="I am in light mode"
        />
      ))}
    </div>
    <div className="dark flex flex-col gap-4 p-4 rounded-xl bg-secondary-900">
      {Object.keys(ColorsEnum).map(color => (
        <Input
          key={color}
          placeholder={color}
          color={color}
          rightComponent={<TbAt />}
          defaultValue="I am in dark mode"
        />
      ))}
    </div>
  </div>
)
export const AllColorsWithBorder = () => (
  <div className="grid grid-cols-2 ">
    <div className="flex flex-col gap-4 p-4 bg-secondary-50">
      {Object.keys(ColorsEnum).map(color => (
        <Input
          border
          key={color}
          placeholder={color}
          color={color}
          rightComponent={
            <IconButton size="sm" outline color={color} onClick={() => alert(color)}>
              <TbEye size={18} />
            </IconButton>
          }
          defaultValue="I am in light mode"
        />
      ))}
    </div>
    <div className="dark flex flex-col gap-4 p-4 rounded-xl bg-secondary-900">
      {Object.keys(ColorsEnum).map(color => (
        <Input
          border
          key={color}
          placeholder={color}
          color={color}
          rightComponent={<TbAt />}
          defaultValue="I am in dark mode"
        />
      ))}
    </div>
  </div>
)
