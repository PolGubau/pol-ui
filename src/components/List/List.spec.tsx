import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PoluiProvider } from '../../';
import { List } from './List';
import React from 'react';
describe('Components / List group', () => {
  describe('Theme', () => {
    it('should use custom classes', () => {
      const theme = {
        list: {
          root: {
            base: 'asd',
          },
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <TestList />
        </PoluiProvider>,
      ),
        expect(listGroup()).toHaveClass('asd');
    });
  });
});

const TestList = (): JSX.Element => {
  return (
    <List>
      <List.Item>Settings</List.Item>
      <List.Item>Messages</List.Item>
      <List.Item>Download</List.Item>
    </List>
  );
};

const listGroup = () => screen.getByRole('list');
