import type { Meta, StoryFn } from '@storybook/react'
import type { ContainerScrollProps } from './ContainerScroll'
import { ContainerScroll } from './ContainerScroll'

export default {
  title: 'Components/ContainerScroll',
  component: ContainerScroll,
  decorators: [(Story): JSX.Element => <Story />],
} as Meta

const Template: StoryFn<ContainerScrollProps> = args => <ContainerScroll {...args} />

export const Default = Template.bind({})
Default.args = {
  titleComponent: (
    <h1 className="flex flex-col gap-4">
      <span className="text-6xl font-bold text-black dark:text-white">Pol-ui</span>
      <span className="text-2xl font-bold text-black dark:text-white">Empowering web development</span>
    </h1>
  ),
  children: (
    <div className="flex items-center gap-4 flex-col justify-center w-full ">
      <div className="w-96 h-fit bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Card</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula, nisl et aliquam cursus, ligula ante
            auctor nulla, at accumsan ex leo in enim.
          </p>
        </div>
      </div>
      <div className="w-96 h-fit bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Card</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula, nisl et aliquam cursus, ligula ante
            auctor nulla, at accumsan ex leo in enim.
          </p>
        </div>
      </div>
      <div className="w-96 h-fit bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Card</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula, nisl et aliquam cursus, ligula ante
            auctor nulla, at accumsan ex leo in enim.
          </p>
        </div>
      </div>
    </div>
  ),
}
