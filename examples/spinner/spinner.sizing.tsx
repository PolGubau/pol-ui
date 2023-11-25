import { Spinner } from '~/src';

const code = `
'use client';

import { Spinner } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Spinner aria-label="Extra small spinner example" size="xs" />
      <Spinner aria-label="Small spinner example" size="sm" />
      <Spinner aria-label="Medium sized spinner example" size="md" />
      <Spinner aria-label="Large spinner example" size="lg" />
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Spinner aria-label="Extra small spinner example" size="xs" />
      <Spinner aria-label="Small spinner example" size="sm" />
      <Spinner aria-label="Medium sized spinner example" size="md" />
      <Spinner aria-label="Large spinner example" size="lg" />
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Spinner aria-label="Extra small spinner example" size="xs" />
      <Spinner aria-label="Small spinner example" size="sm" />
      <Spinner aria-label="Medium sized spinner example" size="md" />
      <Spinner aria-label="Large spinner example" size="lg" />
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}

export const sizing = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'spinner/spinner.sizing.tsx',
  component: <Component />,
};
