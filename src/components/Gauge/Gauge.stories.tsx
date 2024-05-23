import type { Meta } from '@storybook/react'
import type { GaugeProps } from './Gauge'
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

type FuelLevelGaugeProps = Pick<GaugeProps, 'value'>

export const Default: React.FC<FuelLevelGaugeProps> = ({ value }) => {
  const options: Omit<GaugeProps, 'value'> = {
    min: 0,
    max: 100,
  }
  return <Gauge {...options} value={value} />
}
