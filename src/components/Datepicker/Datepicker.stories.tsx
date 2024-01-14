import type { Meta, StoryFn } from '@storybook/react'
import type { DatepickerProps } from './Datepicker'
import { Datepicker } from './Datepicker'
import { WeekStart, getFirstDateInRange } from './helpers'

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  decorators: [
    Story => (
      <div className="p-6 bg-secondary-50 dark:bg-secondary-900 min-h-[300px]">
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
  argTypes: {
    language: {
      control: {
        type: 'select',
        options: ['en', 'es-ES'],
      },
    },
    weekStart: {
      options: Object.values(WeekStart).filter(x => typeof x === 'string'),
      mapping: WeekStart,
      control: {
        type: 'select',
        labels: Object.entries(WeekStart)
          .filter(([, value]) => typeof value !== 'string')
          .reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {}),
      },
    },
  },
} as Meta

const Template: StoryFn<DatepickerProps> = args => {
  // https://github.com/storybookjs/storybook/issues/11822
  if (args.minDate) {
    args.minDate = new Date(args.minDate)
  }
  if (args.maxDate) {
    args.maxDate = new Date(args.maxDate)
  }

  // update defaultDate based on the range
  if (args.minDate && args.maxDate) {
    if (args.defaultDate) {
      args.defaultDate = getFirstDateInRange(args.defaultDate, args.minDate, args.maxDate)
    }
  }

  return <Datepicker {...args} />
}

export const Default = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker />
  </div>
)
export const DarkMode = (): JSX.Element => (
  <div className="dark">
    <div className=" bg-secondary-50  rounded-2xl dark:bg-secondary-900 p-8 min-h-[500px] ">
      <Datepicker />
    </div>
  </div>
)
export const AutoHideDisabled = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker autoHide={false} />
  </div>
)
export const Inline = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker inline />
  </div>
)
export const RangedDates = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker minDate={new Date('2021-01-01')} maxDate={new Date('2021-12-31')} />
  </div>
)
