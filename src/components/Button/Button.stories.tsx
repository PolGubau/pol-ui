import type { Meta, StoryFn } from '@storybook/react'
import { theme } from '../../theme'
import type { ButtonVariants, ButtonProps } from './new'
import { Button } from './new'
import { type MainSizes, type Colors, type RoundedSizes } from '../../types'
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
    variant: {
      options: ['filled', 'outline', 'link', 'ghost'],
      control: { type: 'inline-radio' },
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

const NewTemplate: StoryFn<ButtonProps> = args => <Button {...args} />

export const DefaultButton = NewTemplate.bind({})
DefaultButton.storyName = 'Default'
DefaultButton.args = {
  children: 'Button',
}

export const OutlineButton = NewTemplate.bind({})
OutlineButton.storyName = 'Outline'
OutlineButton.args = {
  ...DefaultButton.args,
  variant: 'outline',
}
export const Loading = NewTemplate.bind({})
Loading.args = {
  ...DefaultButton.args,
  loading: true,
}
export const Disabled = NewTemplate.bind({})
Disabled.args = {
  ...DefaultButton.args,
  disabled: true,
}
export const FullSized = NewTemplate.bind({})
FullSized.args = {
  ...DefaultButton.args,
  fullSized: true,
}

export const Rounded = () => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.button.rounded).map(r => (
      <Button key={r} rounded={r as RoundedSizes}>
        {r}
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
      <nav className="flex gap-4 flex-col">
        <div className="flex gap-2 flex">
          {Object.keys(theme.button.color).map(color => (
            <Button key={color} color={color as Colors}>
              {color}
            </Button>
          ))}
        </div>
      </nav>
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
export const WithIcon = (args: ButtonProps) => (
  <Button {...args}>
    <TbStarFilled />
    Button
  </Button>
)
export const NewButtonDefault = () => (
  <div className="flex gap-5 flex-col flex-wrap">
    <nav className="flex gap-4 items-center">
      {['default', 'outline', 'link', 'ghost'].map(variant => (
        <Button key={variant} variant={variant as ButtonVariants}>
          {variant}
        </Button>
      ))}
    </nav>
    <nav className="flex gap-4 items-center ">
      {Object.keys(theme.button.size).map(size => (
        <Button key={size} size={size as MainSizes}>
          {size}
        </Button>
      ))}
    </nav>

    <nav className="flex gap-4">
      {Object.keys(theme.button.rounded).map(r => (
        <Button key={r} rounded={r as RoundedSizes}>
          {r}
        </Button>
      ))}
    </nav>
    <Button className="rounded-2xl w-fit bg-orange-500 shadow-inner hover:shadow-none">Custom with classes</Button>
  </div>
)

export const NewAllColors = () => (
  <section className="flex gap-12 flex-wrap justify-center items-center">
    <div className="flex gap-3 flex-wrap p-4 rounded-xl ">
      {Object.keys(theme.button.color).map(color => (
        <Button key={color} color={color as Colors}>
          {color}
        </Button>
      ))}
    </div>
    <div className="dark">
      <div className="flex gap-3 flex-wrap bg-secondary-900 p-4 rounded-xl">
        {Object.keys(theme.button.color).map(color => (
          <Button key={color} color={color as Colors}>
            {color}
          </Button>
        ))}
      </div>
    </div>
  </section>
)
