import type { Meta, StoryFn } from '@storybook/react'
import type { FollowerPointerCardProps } from './FollowerPointerCard'
import { FollowerPointerCard } from './FollowerPointerCard'
import { Card } from '../Card'

export default {
  title: 'Components/FollowerPointerCard',
  component: FollowerPointerCard,
} as Meta

const Template: StoryFn<FollowerPointerCardProps> = args => <FollowerPointerCard {...args} />
const blogContent = {
  author: 'Pol Gubau',
  date: '19th March, 2024',
  title: 'Mastering UI Design in React: A Comprehensive Guide',
  description:
    'Explore the intricate world of User Interface (UI) design in React with our insightful blog. From essential principles to advanced techniques, discover how to create stunning, responsive, and user-friendly interfaces that elevate your React applications to the next level. ',
  authorAvatar: '/images/people/me.png',
}

const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex space-x-2 items-center bg-primary p-1 rounded-full pr-3">
    <img src={avatar} height="30" width="30" alt="thumbnail" className="rounded-full" />
    <p>{title}</p>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: <TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar} />,
  children: (
    <Card className="max-w-xl">
      <h2 className="font-bold my-4 text-lg text-zinc-700">{blogContent.title}</h2>
      <h2 className="font-normal text-sm text-zinc-500">{blogContent.description}</h2>
      <div className="flex flex-row justify-between items-center">
        <span className="text-sm text-gray-500">{blogContent.date}</span>
        <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">Read More</div>
      </div>
    </Card>
  ),
}
