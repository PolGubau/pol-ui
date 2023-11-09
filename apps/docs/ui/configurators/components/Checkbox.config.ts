import { CheckboxCode, CheckboxExample } from '@/ui/configurators/components/Checkbox.example';

export const CheckboxConfig = {
  example: CheckboxExample,
  default: CheckboxCode,
  state: {
    color: 'dark',
    disabled: false,
    description: '',
    error: '',
    radius: 'md',
    size: 'md',
    tone: 'solid',
    withRing: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Disabled',
      name: 'disabled',
      type: 'switch',
    },
    {
      label: 'Error',
      name: 'error',
      type: 'input',
      placeholder: 'Error message',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'input',
      placeholder: 'Checkbox description',
    },
    {
      label: 'With ring',
      name: 'withRing',
      type: 'switch',
    },
  ],
};
