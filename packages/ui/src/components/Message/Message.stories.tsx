import type { Meta } from '@storybook/react'
import { Message, MessageProps, MessageGroup } from './Message'
import { Divider } from '../Divider'

export default {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex ">
        <div className="flex p-6 items-center justify-center w-full">
          <Story />
        </div>
        <div className="dark bg-secondary-900 flex p-6 items-center justify-center w-full">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const exampleDate = new Date('2021-09-01 12:04:05')

export const Default = () => {
  const props: MessageProps = {
    content: 'Hello World',
    date: exampleDate,
    arrow: true,
  }
  return <Message {...props} />
}

export const Group = () => {
  const messages: MessageProps[] = [
    {
      content: 'Hello World',
      date: exampleDate,
    },
    {
      content: 'Hello World',
      date: exampleDate,
    },
    {
      content: 'Hello World',
      date: exampleDate,
    },
  ]
  return <MessageGroup messages={messages} />
}

export const Conversation = () => {
  const group1: MessageProps[] = [
    {
      content: 'Hello Anna',
      date: exampleDate,
    },
    {
      content: 'Have you tried the new Message component? It is pretty cool!',
      date: exampleDate,
    },
    {
      content: 'It has a nice arrow and everything 🔥',
      date: exampleDate,
    },
  ]

  const group2: MessageProps[] = [
    {
      content: 'Hey Hey',
      date: exampleDate,
    },
    {
      content: 'YES! I love it',
      date: exampleDate,
    },
    {
      content: 'I am using it right now',
      date: exampleDate,
    },
  ]

  return (
    <div className="flex p-6 items-center justify-center flex-col w-full">
      <div className="max-w-xl bg-primary-100 dark:bg-slate-900 border-4 border-primary-900 w-full h-[80vh] rounded-xl overflow-y-auto">
        <header className="flex flex-col gap-1 p-4">
          <h1 className="text-4xl font-bold text-black dark:text-white">Anna</h1>
          <p className="text-lg text-primary-800 dark:text-white">Last seen at 12:04 PM</p>
          <Divider className="border-black" />
        </header>
        <section className="w-full p-4">
          <div className="flex flex-col gap-4">
            <MessageGroup messages={group1} />
            <MessageGroup messages={group2} mine={false} />
          </div>
        </section>
      </div>
    </div>
  )
}
