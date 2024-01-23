import type { Meta, StoryFn } from '@storybook/react'
import type { FileInputProps } from './FileInput'
import { FileInput } from './FileInput'
import { ColorsEnum } from '../PoluiProvider/enums'

export default {
  title: 'Components/FileInput',
  tags: ['autodocs'],
  component: FileInput,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center py-20 min-h-[400px] h-full bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<FileInputProps> = args => <FileInput {...args} />

export const DefaultFileInput = Template.bind({})
DefaultFileInput.storyName = 'FileInput'
DefaultFileInput.args = {}

//
export const HelperText = Template.bind({})
HelperText.storyName = 'With helper text'
HelperText.args = {
  helperText: 'This file accepts only .pdf files',
  accept: '.pdf',
}

export const AllColors = (args: FileInputProps) => (
  <div className="flex flex-wrap items-center gap-3 ">
    {Object.keys(ColorsEnum).map(color => (
      <FileInput {...args} color={color} />
    ))}
  </div>
)
