import { type CodeData } from '~/components/code-demo';
import { Kbd } from '~/src';

const code = `
'use client';

import { Kbd } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>Q</Kbd>
      <Kbd>W</Kbd>
      <Kbd>E</Kbd>
      <Kbd>R</Kbd>
      <Kbd>T</Kbd>
      <Kbd>Y</Kbd>
      <Kbd>I</Kbd>
      <Kbd>O</Kbd>
      <Kbd>P</Kbd>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      <Kbd>F</Kbd>
      <Kbd>G</Kbd>
      <Kbd>H</Kbd>
      <Kbd>J</Kbd>
      <Kbd>K</Kbd>
      <Kbd>L</Kbd>
      <Kbd>Z</Kbd>
      <Kbd>X</Kbd>
      <Kbd>C</Kbd>
      <Kbd>V</Kbd>
      <Kbd>B</Kbd>
      <Kbd>N</Kbd>
      <Kbd>M</Kbd>
    </div>
  );
}
`;

const codeRSC = `
import { Kbd } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>Q</Kbd>
      <Kbd>W</Kbd>
      <Kbd>E</Kbd>
      <Kbd>R</Kbd>
      <Kbd>T</Kbd>
      <Kbd>Y</Kbd>
      <Kbd>I</Kbd>
      <Kbd>O</Kbd>
      <Kbd>P</Kbd>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      <Kbd>F</Kbd>
      <Kbd>G</Kbd>
      <Kbd>H</Kbd>
      <Kbd>J</Kbd>
      <Kbd>K</Kbd>
      <Kbd>L</Kbd>
      <Kbd>Z</Kbd>
      <Kbd>X</Kbd>
      <Kbd>C</Kbd>
      <Kbd>V</Kbd>
      <Kbd>B</Kbd>
      <Kbd>N</Kbd>
      <Kbd>M</Kbd>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>Q</Kbd>
      <Kbd>W</Kbd>
      <Kbd>E</Kbd>
      <Kbd>R</Kbd>
      <Kbd>T</Kbd>
      <Kbd>Y</Kbd>
      <Kbd>I</Kbd>
      <Kbd>O</Kbd>
      <Kbd>P</Kbd>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      <Kbd>F</Kbd>
      <Kbd>G</Kbd>
      <Kbd>H</Kbd>
      <Kbd>J</Kbd>
      <Kbd>K</Kbd>
      <Kbd>L</Kbd>
      <Kbd>Z</Kbd>
      <Kbd>X</Kbd>
      <Kbd>C</Kbd>
      <Kbd>V</Kbd>
      <Kbd>B</Kbd>
      <Kbd>N</Kbd>
      <Kbd>M</Kbd>
    </div>
  );
}

export const letterKeys: CodeData = {
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
  githubSlug: 'kbd/kbd.letterKeys.tsx',
  component: <Component />,
};
