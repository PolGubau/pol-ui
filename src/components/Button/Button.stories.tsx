import type { Meta, StoryFn } from '@storybook/react'
import { theme } from '../../theme'
import { Button } from '.'
import type { MainSizes, Colors, RoundedSizes } from '../../types'
import type { ButtonProps } from '.'
import { TbStarFilled } from 'react-icons/tb'

export default {
  title: 'Components/Button',
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },

  component: Button,
  tags: ['button', 'autodocs'],
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    fullSized: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    rounded: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full', 'none'],
      control: { type: 'inline-radio' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'text' },
    },
  },
} as Meta

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.storyName = 'Default'
DefaultButton.args = {
  children: 'Button',
}

export const OutlineButton = Template.bind({})
OutlineButton.storyName = 'Outline'
OutlineButton.args = {
  ...DefaultButton.args,
  outline: true,
}
export const Loading = Template.bind({})
Loading.args = {
  ...DefaultButton.args,
  loading: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  ...DefaultButton.args,
  disabled: true,
}
export const FullSized = Template.bind({})
FullSized.args = {
  ...DefaultButton.args,
  fullSized: true,
}
export const Transparent = Template.bind({})
Transparent.args = {
  ...DefaultButton.args,
  rounded: 'xl',
  hasBackground: false,
}
export const Link = Template.bind({})
Link.args = {
  ...DefaultButton.args,
  href: 'https://www.polgubau.com',
  target: '_blank',
}
export const WithMotion = Template.bind({})
WithMotion.args = {
  ...DefaultButton.args,
  hasMotion: true,
}

export const Rounded = (args: ButtonProps) => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.button.rounded).map(rounded => (
      <Button key={rounded} {...args} rounded={rounded as RoundedSizes}>
        {rounded}
      </Button>
    ))}
  </div>
)
export const Sizes = (args: ButtonProps) => (
  <div className="flex gap-3 flex-wrap items-center">
    {Object.keys(theme.button.size).map(size => (
      <Button key={size} {...args} size={size as MainSizes}>
        {size}
      </Button>
    ))}
  </div>
)

export const AllColors = (args: ButtonProps) => (
  <section className="flex gap-12 flex-wrap justify-center items-center">
    <div className="flex gap-3 flex-wrap p-4 rounded-xl">
      {Object.keys(theme.button.color).map(color => (
        <Button key={color} {...args} color={color as Colors}>
          {color}
        </Button>
      ))}
    </div>
    <div className="dark">
      <div className="flex gap-3 flex-wrap bg-secondary-900 p-4 rounded-xl">
        {Object.keys(theme.button.color).map(color => (
          <Button key={color} {...args} color={color as Colors}>
            {color}
          </Button>
        ))}
      </div>
    </div>
  </section>
)
export const OutlineColors = (args: ButtonProps) => (
  <section className="flex gap-4 flex-wrap justify-center items-center">
    <div className="flex gap-3 flex-wrap p-4 rounded-xl">
      {Object.keys(theme.button.color).map(color => (
        <Button key={color} {...args} color={color as Colors} outline>
          {color}
        </Button>
      ))}
    </div>
    <div className="dark">
      <div className="flex gap-3 flex-wrap bg-secondary-900 p-4 rounded-xl">
        {Object.keys(theme.button.color).map(color => (
          <Button key={color} {...args} color={color as Colors} outline>
            {color}
          </Button>
        ))}
      </div>
    </div>
  </section>
)

export const WithIcon = (args: ButtonProps) => (
  <Button {...args}>
    <TbStarFilled />
    Button
  </Button>
)
