import type { Meta, StoryFn } from '@storybook/react'
import type { CardProps } from './Card'
import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [(Story): JSX.Element => <div className="h-1/2 w-1/2">{Story()}</div>],
} as Meta

const Template: StoryFn<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card component is here!</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      A great component for showing important text or creating visual links.
    </p>
  </Card>
)

export const Default = Template.bind({})
Default.args = {}

export const Horizontal = Template.bind({})
Horizontal.args = {
  horizontal: true,
}

export const WithA11yImage = Template.bind({})
WithA11yImage.storyName = 'With image with alt text'
WithA11yImage.args = {
  imgAlt: 'Meaningful alt text for an image that is not purely decorative',
  imgSrc: 'https://polgubau.com/docs/images/blog/image-1.jpg',
}

export const WithDecorativeImage = Template.bind({})
WithDecorativeImage.storyName = 'With decorative image'
WithDecorativeImage.args = {
  imgSrc: 'https://polgubau.com/docs/images/blog/image-1.jpg',
}

export const WithNextImage = Template.bind({})
WithNextImage.storyName = 'Custom img Component (Next.js...)'
WithNextImage.args = {
  renderImage: () => <img alt="Example" src={'https://polgubau.com/docs/images/blog/image-1.jpg'} />,
}
