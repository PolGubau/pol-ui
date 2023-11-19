import { render, screen } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Badge } from './Badge';

describe('Components / Badge', () => {
  describe('Rendering', () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(
        <Badge href="/" icon={HiCheck}>
          A badge with a link
        </Badge>,
      );

      expect(link()).toBeInTheDocument();
      expect(link()).toHaveAttribute('href', '/');
    });
  });

  describe('Classname', () => {
    it('should merge not overwrite', () => {
      render(<Badge className="bg-red-500">A badge with custom background</Badge>);

      expect(badge()).toHaveClass(
        'bg-red-500 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      );
    });
  });

  describe('Theme', () => {
    it('should use custom colors', () => {
      const theme: CustomPoluiTheme = {
        badge: {
          root: {
            color: {
              primary:
                'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
            },
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Badge color="primary" href="/" icon={HiCheck}>
            A badge
          </Badge>
        </PoluiProvider>,
      );

      expect(badge()).toHaveClass(
        'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      );
    });

    it('should use custom sizes', () => {
      const theme: CustomPoluiTheme = {
        badge: {
          root: {
            size: {
              xxl: 'text-2xl',
            },
          },
          icon: {
            off: 'rounded-lg p-1',
            on: 'rounded-full p-5',
            size: {
              xxl: 'w-6 h-6',
            },
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Badge size="xxl">A badge</Badge>
          <Badge icon={HiCheck} size="xxl" />
        </PoluiProvider>,
      );

      const badges = screen.getAllByTestId('ui-badge');
      const regularBadge = badges[0];
      const emptyBadge = badges[1];

      expect(regularBadge).toHaveClass('text-2xl');
      expect(regularBadge).toHaveClass('rounded-lg p-1');
      expect(emptyBadge).toHaveClass('rounded-full p-5');
      expect(icon()).toHaveClass('w-6 h-6');
    });
  });
});

const badge = () => screen.getByTestId('ui-badge');

const icon = () => screen.getByTestId('ui-badge-icon');

const link = () => screen.getByRole('link');
