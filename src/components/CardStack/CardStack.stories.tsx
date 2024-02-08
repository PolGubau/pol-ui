import type { Meta, StoryFn } from '@storybook/react'
import { CardStack } from './CardStack'
import { twMerge } from 'tailwind-merge'

export default {
  title: 'Components/CardStack',
  component: CardStack,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  min-h-[300px] justify-center items-center bg-secondary-50">
        Before
        <Story />
        After
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Example = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(
        'w-[150px] text-2xl h-[150px] rounded-3xl bg-primary grid place-items-center',
        props.className,
      )}
    >
      {props.children ?? 'Example'}
    </div>
  )
}

const Template: StoryFn = args => <CardStack {...args} />
export const Default = Template.bind({})
Default.args = {
  children: [
    <Example className="bg-red-200" key={1}>
      1
    </Example>,
    <Example className="bg-green-200" key={2}>
      2
    </Example>,
    <Example className="bg-blue-200" key={3}>
      3
    </Example>,
    <Example className="bg-purple-200" key={4}>
      4
    </Example>,
    <Example className="bg-orange-200" key={5}>
      5
    </Example>,
  ],
}
export const JustOneElement = Template.bind({})
JustOneElement.args = {
  children: [<Example key={1}>1</Example>],
}
export const Pair = Template.bind({})
Pair.args = {
  children: [<Example key={1}>1</Example>, <Example key={2}>2</Example>],
}
