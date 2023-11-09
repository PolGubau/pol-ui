import { Select, SelectProps } from '@rewind-ui/core';
import * as React from 'react';

export const SelectCode = (props: any) => {
  const { color, size, disabled, tone, shadow, radius, validation, withRing } = props;

  const defaultProps = {
    color: 'dark',
    disabled: false,
    radius: 'md',
    shadow: 'none',
    size: 'md',
    tone: 'light',
    validation: 'none',
    withRing: true,
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    validation !== defaultProps.validation ? `validation="${validation}"` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Select } from '@rewind-ui/core';

function App() {
  return (
    <Select${attributes.join(' ')}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  );
}
`.trim();
};

export const SelectExample = (props: SelectProps) => {
  return (
    <Select {...props}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  );
};
