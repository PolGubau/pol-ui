import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Loader } from './Loader';

describe('Components / Loader', () => {
  describe('A11y', () => {
    it('should have `role="status"` by default', () => {
      const loader = getloader(render(<Loader aria-label="My loader" />));

      expect(loader).toHaveAccessibleName('My loader');
    });

    it('should be able to set no `role`', () => {
      const { getByLabelText } = render(<Loader aria-label="My loader" role={undefined} />);

      const loader = getByLabelText('My loader');

      expect(loader).not.toHaveAttribute('role');
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        loader: {
          base: 'text-gray-100',
        },
      };

      const loader = getloader(
        render(
          <PoluiProvider theme={{ theme }}>
            <Loader />
          </PoluiProvider>,
        ),
      );

      expect(loader.firstElementChild).toHaveClass('text-gray-100');
    });

    it('should use `color` classes', () => {
      const theme: CustomPoluiTheme = {
        loader: {
          color: {
            primary: 'text-gray-200',
          },
        },
      };

      const loader = getloader(
        render(
          <PoluiProvider theme={{ theme }}>
            <Loader color="primary" />
          </PoluiProvider>,
        ),
      );

      expect(loader.firstElementChild).toHaveClass('text-gray-200');
    });

   
  });
});

const getloader = ({ getByRole }: Pick<RenderResult, 'getByRole'>): HTMLElement => getByRole('status');
