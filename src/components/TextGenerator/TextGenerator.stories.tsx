import type { Meta, StoryFn } from '@storybook/react'

import type { TextGeneratorProps } from './TextGenerator'
import { TextGenerator } from './TextGenerator'

export default {
  title: 'Components/TextGenerator',
  component: TextGenerator,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Example = () => {
  return (
    <section className="min-h-[400px] w-full bg-black text-white text-4xl text-center font-bold py-20 flex flex-col justify-center">
      <TextGenerator
        text="Pol-ui, powering UI
      "
        delay={0.5}
        speed={1.5}
      />
    </section>
  )
}

const Template: StoryFn<TextGeneratorProps> = args => <TextGenerator {...args} />
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`
export const Default = Template.bind({})
Default.args = { text: words }

export const Slow = Template.bind({})
Slow.args = { text: words, speed: 2 }

export const Fast = Template.bind({})
Fast.args = { text: words, speed: 0.1 }

export const Delay = Template.bind({})
Delay.args = { text: words, delay: 1 }

export const CustomClass = Template.bind({})
CustomClass.args = { text: words, className: 'text-4xl text-error' }
