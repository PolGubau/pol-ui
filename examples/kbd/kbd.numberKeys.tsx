import { Kbd } from '~/src';
import React from 'react';

const code = `
'use client';

import { Kbd } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>1</Kbd>
      <Kbd>2</Kbd>
      <Kbd>3</Kbd>
      <Kbd>4</Kbd>
      <Kbd>5</Kbd>
      <Kbd>6</Kbd>
      <Kbd>7</Kbd>
      <Kbd>8</Kbd>
      <Kbd>9</Kbd>
      <Kbd>0</Kbd>
    </div>
  );
}
`;

const codeRSC = `
import { Kbd } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>1</Kbd>
      <Kbd>2</Kbd>
      <Kbd>3</Kbd>
      <Kbd>4</Kbd>
      <Kbd>5</Kbd>
      <Kbd>6</Kbd>
      <Kbd>7</Kbd>
      <Kbd>8</Kbd>
      <Kbd>9</Kbd>
      <Kbd>0</Kbd>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>1</Kbd>
      <Kbd>2</Kbd>
      <Kbd>3</Kbd>
      <Kbd>4</Kbd>
      <Kbd>5</Kbd>
      <Kbd>6</Kbd>
      <Kbd>7</Kbd>
      <Kbd>8</Kbd>
      <Kbd>9</Kbd>
      <Kbd>0</Kbd>
    </div>
  );
}

export const numberKeys = {
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
  githubSlug: 'kbd/kbd.numberKeys.tsx',
  component: <Component />,
};
