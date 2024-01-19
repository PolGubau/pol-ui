import type { Meta, StoryFn } from '@storybook/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProps } from './Carousel'
import { Card } from '../Card'

export default {
  title: 'Components/Carousel',
  component: Carousel,
  decorators: [
    Story => (
      <div className="flex flex-wrap gap-3 justify-center  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<CarouselProps> = args => (
  <Carousel {...args}>
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

export const Default = Template.bind({})
Default.args = {}

// export const SlideInterval = Template.bind({})
// SlideInterval.storyName = 'Fast interval'
// SlideInterval.args = {
//   slideInterval: 200,
// }

// export const Static = Template.bind({})
// Static.args = {
//   slide: false,
// }

// export const CustomControls = Template.bind({})
// CustomControls.storyName = 'With custom controls'
// CustomControls.args = {
//   leftControl: <div className="bg-green-200 p-3 rounded-xl">LAST</div>,
//   rightControl: <div className="bg-blue-200 p-3 rounded-xl">NEXT</div>,
// }

// export const WithNoIndicators = Template.bind({})
// WithNoIndicators.storyName = 'With no indicators'
// WithNoIndicators.args = {
//   indicators: false,
// }
