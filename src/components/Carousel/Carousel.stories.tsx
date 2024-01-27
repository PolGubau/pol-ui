import type { Meta, StoryFn } from '@storybook/react'
import type { CarouselProps } from './Carousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './Carousel'
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

export const CarouselTemplate: StoryFn<CarouselProps> = args => (
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

export const Default = CarouselTemplate.bind({})
Default.args = {}

export const SlideInterval = CarouselTemplate.bind({})
SlideInterval.storyName = 'Loop'
SlideInterval.args = {
  options: {
    loop: true,
  },
}

export const CusotmStartIndex = CarouselTemplate.bind({})
CusotmStartIndex.storyName = 'Custom Start Index'
CusotmStartIndex.args = {
  options: {
    startIndex: 3,
  },
}
