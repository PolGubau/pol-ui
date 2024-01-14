import type { Meta, StoryFn } from '@storybook/react'
import type { CarouselProps } from './Carousel'
import { Carousel } from './Carousel'

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta

const Template: StoryFn<CarouselProps> = args => (
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel {...args}>
      <img
        src="https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="..."
      />
      <img
        src="https://images.pexels.com/photos/12244662/pexels-photo-12244662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="..."
      />
      <img
        src="https://images.pexels.com/photos/13599103/pexels-photo-13599103.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="..."
      />
      <img
        src="https://images.pexels.com/photos/16242630/pexels-photo-16242630/free-photo-of-butterfly-on-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="..."
      />
      <img
        src="https://images.pexels.com/photos/16643211/pexels-photo-16643211/free-photo-of-close-up-photo-of-a-butterfly-on-concrete.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="..."
      />
    </Carousel>
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const SlideInterval = Template.bind({})
SlideInterval.storyName = 'Slide interval'
SlideInterval.args = {
  slideInterval: 5000,
}

export const Static = Template.bind({})
Static.args = {
  slide: false,
}

export const CustomControls = Template.bind({})
CustomControls.storyName = 'With custom controls'
CustomControls.args = {
  leftControl: '<',
  rightControl: '>',
}

export const WithNoIndicators = Template.bind({})
WithNoIndicators.storyName = 'With no indicators'
WithNoIndicators.args = {
  indicators: false,
}
