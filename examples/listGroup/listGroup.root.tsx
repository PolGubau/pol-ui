import { ListGroup, ListGroupItem } from '~/src';
import React from 'react';

const code = `
'use client';

import { ListGroup } from 'pol-ui';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item>Profile</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item disabled>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
`;

const codeRSC = `
import { ListGroup, ListGroupItem } from 'pol-ui';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem>Profile</ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem disabled>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem>Profile</ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem disabled>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export const root = {
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
  githubSlug: 'listGroup/listGroup.root.tsx',
  component: <Component />,
};
