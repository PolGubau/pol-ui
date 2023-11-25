import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Checkbox } from './Checkbox';
import React from 'react';

describe.concurrent('Components / Checkbox', () => {
  describe.concurrent('A11y', () => {
    it('should have role="checkbox" by default', () => {
      const checkbox = render(<Checkbox />).getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme: CustomPoluiTheme = {
        checkbox: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Checkbox />
        </PoluiProvider>,
      );

      expect(checkbox()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });
});

const checkbox = () => screen.getByRole('checkbox');
