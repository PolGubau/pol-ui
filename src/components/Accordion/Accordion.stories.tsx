import type { Meta, StoryFn } from '@storybook/react';
import type { ComponentProps, FC } from 'react';
import { HiChevronDown, HiOutlineArrowCircleDown } from 'react-icons/hi';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import React from 'react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    alwaysOpen: false,
    bordered: true,
  },
} as Meta;

const icon: FC<ComponentProps<'svg'>> = HiChevronDown;

const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>What is Pol-ui?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Pol-ui is an open-source library of interactive components built on top of Tailwind CSS including buttons,
          dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to&nbsp; &nbsp;and start developing websites even faster with components on
          top of Tailwind CSS.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Is there a Figma file available?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Pol-ui is first conceptualized and designed using the Figma software so everything you see in the library has
          a design equivalent in our Figma file.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>What are the differences between Pol-ui and Tailwind UI?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Pol-ui are open source under the MIT license, whereas
          Tailwind UI is a paid product. Another difference is that Pol-ui relies on smaller and standalone components,
          whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Pol-ui, Pol-ui Pro, and even Tailwind UI as there is no technical
          reason stopping you from using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="https://Pol-ui.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Pol-ui Pro
            </a>
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);

export const AlwaysOpen = Template.bind({});
AlwaysOpen.storyName = 'Always open';
AlwaysOpen.args = {
  alwaysOpen: true,
};

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: false,
};

export const WithArrowIcon = Template.bind({});
WithArrowIcon.storyName = 'With arrow icon';
WithArrowIcon.args = {
  arrowIcon: HiOutlineArrowCircleDown,
};
