import type { Meta } from "@storybook/react";

import { StickyScroll } from "./StickyScroll";

export default {
  title: "Components/StickyScroll ",
  component: StickyScroll,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
} as Meta;

const content = [
  {
    title: "Revolutionizing UI Architecture in React Applications",
    description:
      "Embark on a journey to revolutionize the architecture of your React applications. Delve deep into advanced concepts, including state management, component composition, and efficient data flow. Learn how to build robust and scalable UIs that stand the test of time.",
  },
  {
    title: "Inclusive UI Design: A Comprehensive Guide for React Developers",
    description:
      "Explore the inclusive and accessible side of UI design in React. This comprehensive guide covers everything from understanding diverse user needs to implementing ARIA roles and creating a seamless experience for users with varying abilities. Elevate your React applications with thoughtful and accessible design practices. ",
  },
  {
    title: "Boosting React App Performance: Mastering Memoization Techniques",
    description:
      "Optimize the performance of your React applications with advanced memoization techniques. Dive into the world of memoization, caching, and avoiding unnecessary renders. Discover the art of crafting lightning-fast UIs that deliver a smooth and delightful experience for your users.",
  },

  {
    title: "Revolutionizing UI Architecture in React Applications",
    description:
      "Embark on a journey to revolutionize the architecture of your React applications. Delve deep into advanced concepts, including state management, component composition, and efficient data flow. Learn how to build robust and scalable UIs that stand the test of time. Unleash the transformative potential of React Hooks in UI design. This in-depth exploration covers the use of useState, useEffect, useContext, and custom hooks to build interactive and dynamic interfaces. Elevate your React components with the simplicity and power of Hooks for a more engaging user experience.",
  },
];
export const Simple = () => {
  return (
    <div className="">
      <StickyScroll colors={["#ffffff", "#b2b2b2", "#656565", "#181818"]}>
        <div className="  relative flex flex-col  ">
          {content.map((item, index) => (
            <div key={item.title + index} className="grid h-screen place-items-center">
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </StickyScroll>
    </div>
  );
};
export const BetweenContent = () => {
  return (
    <div className="">
      <div className="bg-[#271212] w-full h-[800px] flex text-center items-center justify-center text-white border-b border-dashed border-white">
        Scroll down to see the component, this is the previous content...
      </div>
      <StickyScroll colors={["#271212", "#1b1c24", "#594d7f", "#b49cff"]}>
        <div className="div relative flex items-start px-4">
          <div className="max-w-4xl flex flex-col gap-40 pt-40 w-full ">
            {content.map((item, index) => (
              <div key={item.title + index} className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-slate-100">{item.title}</h2>
                  <p className="text-kg text-slate-300 max-w-sm mt-10">{item.description}</p>
                </div>
                <div className="w-full h-36 flex justify-center items-center rounded-xl sticky top-20 bottom-20 bg-secondary-100">
                  random draw
                </div>
              </div>
            ))}
          </div>
        </div>
      </StickyScroll>
      <div className="bg-primary w-full py-[300px] flex text-center items-center justify-center text-white border-t border-dashed border-white">
        That's the next component, try to match the same bg color so there will be no transition
      </div>
    </div>
  );
};
