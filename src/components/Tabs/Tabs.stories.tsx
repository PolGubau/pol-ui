import type { Meta } from '@storybook/react'
import type { TabsProps } from './Tabs'
import { Tabs } from './Tabs'

export default {
  title: 'Components/Tabs',
  tags: ['Tabs', 'autodocs'],
  component: Tabs,

  argTypes: {
    className: {
      control: 'text',
    },
    style: {
      control: 'radio',
      options: ['default', 'underline', 'pills', 'fullWidth'],
    },
  },
  decorators: [
    Story => (
      <div className="flex p-6 flex-col min-h-[400px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const tabs = [
  {
    name: 'Product',
    content: (
      <div className="bg-secondary-200 p-6 rounded-2xl">
        <h2 className="text-3xl text-secondary-900 font-bold">Product Tab</h2>
        <p>
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
        </p>
      </div>
    ),
  },
  {
    name: 'Features',
    content: (
      <div className="bg-secondary-200 p-6 rounded-2xl">
        <h2 className="text-3xl text-secondary-900 font-bold">Features Tab</h2>
        <p>
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
        </p>
      </div>
    ),
  },
  {
    name: 'Reviews',
    content: (
      <div className="bg-secondary-200 p-6 rounded-2xl">
        <h2 className="text-3xl text-secondary-900 font-bold">Reviews Tab</h2>
        <p>
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
        </p>
      </div>
    ),
  },
  {
    name: 'Customers',
    content: (
      <div className="bg-secondary-200 p-6 rounded-2xl">
        <h2 className="text-3xl text-secondary-900 font-bold">Customers Tab</h2>
        <p>
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas.
        </p>
      </div>
    ),
  },
]
export const TabsExample = (args: TabsProps): JSX.Element => (
  <div className=" relative flex flex-col mx-auto w-full  items-start justify-start">
    <Tabs {...args} />
  </div>
)
TabsExample.args = {
  tabs: tabs,
}
export const ContainedMode = (args: TabsProps): JSX.Element => TabsExample.bind({})(args)
ContainedMode.args = {
  tabs: tabs,
  mode: 'contained',
}
export const WithMotion = (args: TabsProps): JSX.Element => TabsExample.bind({})(args)
WithMotion.args = {
  tabs: tabs,
  hasMotion: true,
}
export const WithoutAnyMotion = (args: TabsProps): JSX.Element => TabsExample.bind({})(args)
WithoutAnyMotion.args = {
  tabs: tabs,
  hasNavMotion: false,
  hasMotion: false,
}
export const Disabled = (args: TabsProps): JSX.Element => TabsExample.bind({})(args)
Disabled.args = {
  tabs: [
    {
      name: 'Enabled',
      content: (
        <div className="bg-secondary-200 p-6 rounded-2xl">
          <h2 className="text-3xl text-secondary-900 font-bold">Enabled Tab</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas.
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur
          </p>
        </div>
      ),
    },
    {
      name: 'Disabled',
      disabled: true,
      content: (
        <div className="bg-secondary-200 p-6 rounded-2xl">
          <h2 className="text-3xl text-secondary-900 font-bold">Disabled Tab</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas.
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur
          </p>
        </div>
      ),
    },
  ],
}
Disabled.displayName = 'Disabled'
