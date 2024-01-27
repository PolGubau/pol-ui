import type { Meta, StoryFn } from '@storybook/react'
import { HiCheck } from 'react-icons/hi'
import { theme } from '../../theme'
import type { BadgeProps } from './Badge'
import { Badge } from './Badge'
import { ColorsEnum } from '../../types/enums'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      options: Object.keys(theme.badge.root.color),
      control: { type: 'inline-radio' },
    },
    size: {
      options: Object.keys(theme.badge.root.size),
      control: { type: 'inline-radio' },
    },
  },
} as Meta

const Template: StoryFn<BadgeProps> = args => (
  <div className="flex items-center">
    <Badge {...args} />
  </div>
)

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {
  children: 'Default',
}

export const BadgeWithIcon = Template.bind({})
BadgeWithIcon.args = {
  color: ColorsEnum.error,
  icon: HiCheck,
  children: '2 minutes ago',
}

export const BadgeOnlyIcon = Template.bind({})
BadgeOnlyIcon.args = {
  color: ColorsEnum.success,
  icon: HiCheck,
}

export const BadgeAsLink = Template.bind({})
BadgeAsLink.storyName = 'As link'
BadgeAsLink.args = {
  href: '/badges',
  children: 'Read more →',
}
export const SmallRounded = Template.bind({})
SmallRounded.args = {
  size: 'lg',
  rounded: 'sm',
  children: 'Read more →',
}
