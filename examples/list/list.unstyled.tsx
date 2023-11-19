import { type CodeData } from '~/components/code-demo';
import { List, ListItem } from '~/src';

const code = `
'use client';

import { List } from 'flowbite-react';

function Component() {
  return (
    <List unstyled>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
  );
}
`;

const codeRSC = `
import { List, ListItem } from 'flowbite-react';

function Component() {
  return (
    <List unstyled>
      <ListItem>At least 10 characters (and up to 100 characters)</ListItem>
      <ListItem>At least one lowercase character</ListItem>
      <ListItem>Inclusion of at least one special character, e.g., ! @ # ?</ListItem>
    </List>
  );
}
`;

function Component() {
  return (
    <List unstyled>
      <ListItem>At least 10 characters (and up to 100 characters)</ListItem>
      <ListItem>At least one lowercase character</ListItem>
      <ListItem>Inclusion of at least one special character, e.g., ! @ # ?</ListItem>
    </List>
  );
}

export const unstyled: CodeData = {
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
  githubSlug: 'list/list.unstyled.tsx',
  component: <Component />,
};
