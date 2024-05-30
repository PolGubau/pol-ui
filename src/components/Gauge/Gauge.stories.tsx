import type { Meta } from '@storybook/react'
import Gauge from './Gauge'

export default {
  title: 'Components/Gauge',
  component: Gauge,
  tags: ['Gauge', 'autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center justify-center h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => <Gauge value={55} />

export const WithCustomValue = () => <Gauge value={75} />
export const Complete = () => <Gauge value={100} />
export const ABit = () => <Gauge value={10} gap />
export const Debug = () => <Gauge value={90} debug />

export const WithCustomMaxValue = () => <Gauge value={1} max={3} />
export const ShowValue = () => <Gauge value={2} max={3} show="value" />
