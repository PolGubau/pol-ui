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
  title: 'Default spinner example',
};

export const Alignment = (): JSX.Element => (
  <div className="flex w-1/3 flex-col gap-3 p-6">
    <div className="text-left">
      <Loader aria-label="Left-aligned spinner example" />
    </div>
    <div className="text-center">
      <Loader aria-label="Center-aligned spinner example" />
    </div>
    <div className="text-right">
      <Loader aria-label="Right-aligned spinner example" />
    </div>
  </div>
);

export const Colors = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Loader color="info" aria-label="Info spinner example" />
    <Loader color="success" aria-label="Success spinner example" />
    <Loader color="error" aria-label="error spinner example" />
    <Loader color="warning" aria-label="Warning spinner example" />
    <Loader color="pink" aria-label="Pink spinner example" />
    <Loader color="purple" aria-label="Purple spinner example" />
  </div>
);

export const Sizes = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Loader aria-label="Extra small spinner example" size="xs" />
    <Loader aria-label="Small spinner example" size="sm" />
    <Loader aria-label="Medium sized spinner example" size="md" />
    <Loader aria-label="Large spinner example" size="lg" />
    <Loader aria-label="Extra large spinner example" size="xl" />
  </div>
);

export const Buttons = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Button>
      <Loader aria-label="Spinner button example" />
      <span className="pl-3">Loading...</span>
    </Button>
    <Button color="gray">
      <Loader aria-label="Alternate spinner button example" />
      <span className="pl-3">Loading...</span>
    </Button>
  </div>
);
