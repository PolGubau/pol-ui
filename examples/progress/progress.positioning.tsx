import { Progress } from '~/src';

const code = `
'use client';

import { Progress } from 'pol-ui';

function Component() {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}
`;

const codeRSC = `
import { Progress } from 'pol-ui';

function Component() {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}
`;

function Component() {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}

export const positioning = {
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
  githubSlug: 'progress/progress.positioning.tsx',
  component: <Component />,
};
