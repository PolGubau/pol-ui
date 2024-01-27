import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button'
import { Loader } from './Loader'
import { ColorsEnum, MainSizesEnum, SizesEnum } from '../../types/enums'

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta

const Template: StoryFn = args => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  color: ColorsEnum.secondary,
  size: SizesEnum.md,
  title: 'Default loader example',
}

export const Alignment = (): JSX.Element => (
  <div className="flex w-1/3 flex-col gap-3 p-6">
    <div className="text-left">
      <Loader aria-label="Left-aligned loader example rotate-360" />
    </div>
    <div className="text-center">
      <Loader aria-label="Center-aligned loader example" />
    </div>
    <div className="text-right">
      <Loader aria-label="Right-aligned loader example" />
    </div>
  </div>
)

export const Colors = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    {Object.keys(ColorsEnum).map(color => (
      <Loader
        color={color as keyof typeof ColorsEnum}
        aria-label={`${color} loader example`}
        key={color}
        title={`${color} loader example`}
      />
    ))}
  </div>
)

export const Sizes = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    {Object.keys(MainSizesEnum).map(v => (
      <Loader size={v} aria-label={`${v} loader example`} key={v} title={`${v} loader example`} />
    ))}
  </div>
)

export const Buttons = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Button rounded="full">
      <Loader aria-label="Loader button example" className="text-secondary-50" />
      <span className="pl-3">Loading...</span>
    </Button>
    <Button color="gray">
      <Loader aria-label="Alternate loader button example" />
      <span className="pl-3">Loading...</span>
    </Button>
  </div>
)
