import type { Meta, StoryFn } from '@storybook/react'
import type { ContainerScrollProps } from './ContainerScroll'
import { ContainerScroll } from './ContainerScroll'

export default {
  title: 'Components/ContainerScroll',
  component: ContainerScroll,
  tags: ['autodocs'],
  decorators: [(Story): JSX.Element => <Story />],
} as Meta

const Template: StoryFn<ContainerScrollProps> = args => <ContainerScroll {...args} />

const titleComponent = (
  <h1 className="flex flex-col gap-4">
    <span className="text-6xl font-bold text-black dark:text-white">Pol-ui</span>
    <span className="text-2xl font-bold text-black dark:text-white">Empowering web development</span>
  </h1>
)
const cards = (
  <div className="flex items-center gap-4 flex-col justify-center w-full ">
    {[1, 2, 3].map(n => {
      return (
        <div className="w-fit h-fit bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg" key={n}>
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Card {n}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula, nisl et aliquam cursus, ligula ante
              auctor nulla, at accumsan ex leo in enim.
            </p>
          </div>
        </div>
      )
    })}
  </div>
)
export const Default = Template.bind({})
Default.args = {
  titleComponent,
  children: cards,
}
export const AnimationInTop = Template.bind({})
AnimationInTop.args = {
  titleComponent,
  children: cards,
  top: true,
}
export const AnimationJustInTop = Template.bind({})
AnimationJustInTop.args = {
  titleComponent,
  children: cards,
  top: true,
  bottom: false,
}
