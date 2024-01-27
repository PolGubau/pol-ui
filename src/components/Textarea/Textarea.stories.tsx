import type { Meta, StoryFn } from '@storybook/react';
import type { TextareaProps } from './Textarea';
import { Textarea } from './Textarea';

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
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
} as Meta;

const Template: StoryFn<TextareaProps> = (args) => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.storyName = 'Textarea';
DefaultTextarea.args = {
  children: 'Text',
};
export const CustomHeight = Template.bind({});
CustomHeight.args = {
  children: 'Text',
  label: 'That is a loooong textarea',
  className: 'min-h-[300px]',
};
export const Resizeable = Template.bind({});
Resizeable.args = {
  children: 'Text',
  label: 'You can resize me :)',
  innerClassName: 'resize ',
};
