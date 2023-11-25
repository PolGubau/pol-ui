import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Radio } from './Radio';
import React from 'react';
describe.concurrent('Components / Radio', () => {
  describe.concurrent('A11y', () => {
    it('should have role="radio" by default', () => {
      const radio = render(<Radio />).getByRole('radio');

      expect(radio).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme: CustomPoluiTheme = {
        radio: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Radio />
        </PoluiProvider>,
      );

      expect(radio()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });
});

const radio = () => screen.getByRole('radio');
