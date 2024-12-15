import type { Meta } from "@storybook/react";

import { ScrollProgress, type ScrollProgressProps } from "./scroll-progress";

export default {
  title: "Components/ScrollProgress",
  component: ScrollProgress,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center  ">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
  <p key={i} className="flex justify-center items-center p-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas
    congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero
    egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero
    sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
));

export function Default(props: ScrollProgressProps) {
  return (
    <div className="m-4">
      <ScrollProgress {...props} />
      <strong className="font-bold flex items-center justify-center">
        Note: The scroll progress is shown below the navbar of the page.
      </strong>
      {dummyContent}
    </div>
  );
}
/**
 * You can customize the animation options using the 'options' prop
 */
export function CustomAnimation() {
  return (
    <Default
      options={{
        bounce: 20,
        stiffness: 500,
        damping: 50,
      }}
    />
  );
}
export function CustomAnimation2() {
  return (
    <Default
      options={{
        mass: 20,
        stiffness: 400,
      }}
    />
  );
}

/**
 * Tailwind classes could be also modifyed, by default, your 'primary' color will be used.
 */
export function CustomClasses() {
  return <Default className="bg-success h-[10px] rounded-[40px] top-2 left-2 right-2" />;
}

/**
 * Using tailwind classes you can override the position, just remember to disable the top property with top-[null].
 */
export function InBottom() {
  return <Default className="bottom-0 top-[null]" />;
}
