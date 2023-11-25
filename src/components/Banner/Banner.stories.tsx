import type { Meta, StoryFn } from '@storybook/react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';
import type { BannerComponentProps } from './Banner';
import { Banner } from './Banner';
import React from 'react';

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta;

const Template: StoryFn<BannerComponentProps> = (args) => <Banner {...args} />;

export const DefaultBanner = Template.bind({});
DefaultBanner.storyName = 'Default';
DefaultBanner.args = {
  children: (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <MdAnnouncement />
          <span>
            New components has been launched for the{' '}
            <a
              href="https://ui.polgubau.com"
              className="decoration-600 dark:decoration-500 inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
            >
              Pol-ui UI Kit
            </a>
          </span>
        </p>
      </div>
      <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
        <HiX className="h-4 w-4" />
      </Banner.CollapseButton>
    </div>
  ),
};
