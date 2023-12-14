import type { Meta, StoryFn } from '@storybook/react';
import { Button } from '../Button';
import { Loader } from './Loader';
import { ColorsEnum, SizesEnum } from '../PoluiProvider/enums';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

const Template: StoryFn = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: ColorsEnum.info,
  size: SizesEnum.md,
  title: 'Default loader example',
};

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
);

export const Colors = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Loader color="info" aria-label="Info loader example" />
    <Loader color="success" aria-label="Success loader example" />
    <Loader color="error" aria-label="error loader example" />
    <Loader color="warning" aria-label="Warning loader example" />
    <Loader color="pink" aria-label="Pink loader example" />
    <Loader color="purple" aria-label="Purple loader example" />
  </div>
);

export const Sizes = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Loader aria-label="Extra small loader example" size="xs" />
    <Loader aria-label="Small loader example" size="sm" />
    <Loader aria-label="Medium sized loader example" size="md" />
    <Loader aria-label="Large loader example" size="lg" />
    <Loader aria-label="Extra large loader example" size="xl" />
  </div>
);

export const Buttons = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Button>
      <Loader aria-label="Loader button example" />
      <span className="pl-3">Loading...</span>
    </Button>
    <Button color="gray">
      <Loader aria-label="Alternate loader button example" />
      <span className="pl-3">Loading...</span>
    </Button>
  </div>
);
