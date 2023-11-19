import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC } from 'react';
import { useState } from 'react';
import { HiEye, HiHeart, HiInformationCircle } from 'react-icons/hi';
import { describe, expect, it, vi } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';

import type { AlertProps } from './Alert';
import { Alert } from './Alert';

describe.concurrent('Components / Alert', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="alert"`', () => {
      render(<TestAlert />);

      expect(alert()).toBeInTheDocument();
    });

    describe('Theme', () => {
      it('should use custom `base` classes', () => {
        const theme: CustomPoluiTheme = {
          alert: {
            color: {
              info: 'text-purple-100',
            },
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <TestAlert />
          </PoluiProvider>,
        );

        expect(alert()).toHaveClass('text-purple-100');
      });

      it('should use custom `borderAccent` classes', () => {
        const theme: CustomPoluiTheme = {
          alert: {
            borderAccent: 'border-t-4 border-purple-500',
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <TestAlert withBorderAccent />
          </PoluiProvider>,
        );

        expect(alert()).toHaveClass('border-t-4 border-purple-500');
      });

      it('should use custom `wrapper` classes', () => {
        const theme: CustomPoluiTheme = {
          alert: {
            wrapper: 'flex items-center',
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <TestAlert />
          </PoluiProvider>,
        );

        expect(wrapper()).toHaveClass('flex items-center');
      });

      it('should use custom `color` classes', () => {
        const theme: CustomPoluiTheme = {
          alert: {
            closeButton: {
              color: {
                info: 'text-purple-500 hover:bg-purple-200 dark:text-purple-600 dark:hover:text-purple-300',
              },
            },
            color: {
              info: 'text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800',
            },
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <TestAlert />
          </PoluiProvider>,
        );

        expect(alert()).toHaveClass(
          'text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800',
        );
        expect(dismiss()).toHaveClass(
          'text-purple-500 hover:bg-purple-200 dark:text-purple-600 dark:hover:text-purple-300',
        );
      });

      it('should use custom `icon`', () => {
        const theme: CustomPoluiTheme = {
          alert: {
            icon: 'alert-custom-icon',
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <TestAlert icon={HiHeart} />
          </PoluiProvider>,
        );

        expect(icon()).toHaveClass('alert-custom-icon');
      });

      it('should show custom `rounded` class', () => {
        const theme: CustomPoluiTheme = {
          alert: {
            rounded: 'rounded',
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <TestAlert />
          </PoluiProvider>,
        );

        expect(alert()).toHaveClass('rounded');
      });
    });
  });

  describe.concurrent('Keyboard interactions', () => {
    it('should dismiss when `Tab` is pressed to navigate to Dismiss button and `Space` is pressed', async () => {
      const onDismiss = vi.fn();
      const user = userEvent.setup();
      render(<Alert onDismiss={onDismiss} />);

      await waitFor(async () => {
        await user.tab();

        expect(dismiss()).toHaveFocus();
      });

      await user.keyboard('[Space]');

      expect(onDismiss).toHaveBeenCalled();
    });
  });

  describe.concurrent('Props', () => {
    it('should call `onDismiss` when clicked', async () => {
      const onDismiss = vi.fn();
      const user = userEvent.setup();
      render(<Alert onDismiss={onDismiss} />);

      await user.click(dismiss());

      expect(onDismiss).toHaveBeenCalled();
    });
  });
});

const TestAlert: FC<AlertProps> = (props: AlertProps) => {
  const [isDismissed, setDismissed] = useState(false);

  return (
    <Alert
      {...props}
      additionalContent={
        <>
          <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
            More info about this info alert goes here. This example text is going to run a bit longer so that you can
            see how spacing within an alert works with this kind of content.
          </div>
          <div className="flex">
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
            >
              <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </button>
            <button
              type="button"
              className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </>
      }
      color="info"
      icon={HiInformationCircle}
      onDismiss={() => setDismissed(!isDismissed)}
      rounded
      withBorderAccent
    >
      {isDismissed ? 'dismissed' : 'waiting'}
    </Alert>
  );
};

const alert = () => screen.getByRole('alert');

const wrapper = () => screen.getByTestId('ui-alert-wrapper');

const icon = () => screen.getByTestId('ui-alert-icon');

const dismiss = () => screen.getByLabelText('Dismiss');
