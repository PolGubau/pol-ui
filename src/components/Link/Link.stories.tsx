import type { Meta, StoryFn } from '@storybook/react'
import type { LinkProps } from './Link'
import { Link } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

const Template: StoryFn<LinkProps> = args => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Link',
  href: '#',
}
