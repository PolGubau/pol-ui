import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Loader } from './Loader';

describe('Components / Spinner', () => {
  describe('A11y', () => {
    it('should have `role="status"` by default', () => {
      const spinner = getSpinner(render(<Loader aria-label="My spinner" />));

      expect(spinner).toHaveAccessibleName('My spinner');
    });

    it('should be able to set no `role`', () => {
      const { getByLabelText } = render(<Loader aria-label="My spinner" role={undefined} />);

      const spinner = getByLabelText('My spinner');

      expect(spinner).not.toHaveAttribute('role');
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        spinner: {
          base: 'text-gray-100',
        },
      };

      const spinner = getSpinner(
        render(
          <PoluiProvider theme={{ theme }}>
            <Loader />
          </PoluiProvider>,
        ),
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-100');
    });

    it('should use `color` classes', () => {
      const theme: CustomPoluiTheme = {
        spinner: {
          color: {
            primary: 'text-gray-200',
          },
        },
      };

      const spinner = getSpinner(
        render(
          <PoluiProvider theme={{ theme }}>
            <Loader color="primary" />
          </PoluiProvider>,
        ),
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-200');
    });

    it('should use `light` classes', () => {
      const theme: CustomPoluiTheme = {
        spinner: {
          light: {
            on: {
              color: {
                success: 'text-gray-300',
              },
            },
          },
        },
      };

      const spinner = getSpinner(
        render(
          <PoluiProvider theme={{ theme }}>
            <Loader color="success" light />
          </PoluiProvider>,
        ),
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-300');
    });
  });
});

const getSpinner = ({ getByRole }: Pick<RenderResult, 'getByRole'>): HTMLElement => getByRole('status');
