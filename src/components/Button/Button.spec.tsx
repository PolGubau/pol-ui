import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PropsWithChildren } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { describe, expect, it, vi } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Button } from './Button';

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="button"` by default', () => {
      render(<Button>Hi there</Button>);

      expect(button()).toBeInTheDocument();
    });

    it('should be able to use any other role permitted for `<button>`s', () => {
      render(<Button role="menuitem">Hi there</Button>);

      const button = screen.getByRole('menuitem');

      expect(button).toBeInTheDocument();
    });
  });

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(<Button onClick={onClick}>Hi there</Button>);

      await user.click(button());

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup();
      render(<Button>Hi there</Button>);

      await user.tab();

      expect(button()).toHaveFocus();
    });

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup();
      render(
        <>
          <Button>Hi there</Button>
          <Button>Hello there</Button>
          <button type="submit">Submit</button>
        </>,
      );

      await user.tab();

      expect(buttons()[0]).toHaveFocus();

      await user.tab();

      expect(buttons()[1]).toHaveFocus();

      await user.tab();

      expect(buttons()[2]).toHaveFocus();
    });
  });

  describe('Props', () => {
    it('should allow HTML attributes for `<button>`s', () => {
      render(
        <Button formAction="post.php" type="submit">
          Hi there
        </Button>,
      );

      expect(button()).toHaveAttribute('formAction', 'post.php');
      expect(button()).toHaveAttribute('type', 'submit');
    });

    it('should be disabled when `disabled={true}`', () => {
      render(<Button disabled>Hi there</Button>);

      expect(button()).toBeDisabled();
    });

    it('should show <Loader /> when `isProcessing={true}`', () => {
      render(<Button isProcessing>Hi there</Button>);

      expect(screen.getByText(/Hi there/)).toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should show custom Loader when `isProcessing={true}` and `processingLoader` is present', () => {
      render(
        <Button isProcessing processingLoader={<AiOutlineLoading data-testid="Loader" />}>
          Hi there
        </Button>,
      );

      expect(screen.getByText(/Hi there/)).toBeInTheDocument();
      expect(screen.getByTestId('Loader')).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render when `children={0}`', () => {
      render(<Button>0</Button>);

      expect(button()).toHaveTextContent('0');
    });

    it('should render when `children={undefined}`', () => {
      render(<Button label="Something or other" />);

      expect(button()).toHaveTextContent('Something or other');
    });

    describe('`as` and `href` props', () => {
      it('should render an anchor `<a>` when `href=".."`', () => {
        render(<Button href="#" label="Something or other" />);

        expect(buttonLink()).toBeInTheDocument();
      });

      it('should render component defined in `as`', () => {
        const CustomComponent = ({ children }: PropsWithChildren<{ uniqueProp: boolean }>) => {
          return <li>{children}</li>;
        };

        render(
          <ul>
            <Button as={CustomComponent} uniqueProp>
              Something or other
            </Button>
          </ul>,
        );

        const button = buttonListItem();

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Something or other');
      });

      it('should render component defined in `as` prop even though `href` is defined', () => {
        const CustomComponent = ({ children }: PropsWithChildren) => {
          return <li>{children}</li>;
        };

        render(
          <ul>
            <Button href="#" as={CustomComponent} label="Something or other" />
          </ul>,
        );

        expect(buttonListItem()).toBeInTheDocument();
      });

      it('should render tag element defined in `as`', () => {
        render(
          <ul>
            <Button as="li" label="Something or other" />
          </ul>,
        );

        expect(buttonListItem()).toBeInTheDocument();
      });

      it('should render as button `as={null}`', () => {
        render(
          <ul>
            <Button as={null} label="Something or other" />
          </ul>,
        );

        expect(button()).toBeInTheDocument();
      });
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          base: 'font-extralight',
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button />
        </PoluiProvider>,
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `color` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          color: {
            primary: 'bg-red-300',
          },
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button color="primary" />
        </PoluiProvider>,
      );

      expect(button()).toHaveClass('bg-red-300');
    });

    it('should use `disabled` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          disabled: 'opacity-10',
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button disabled />
        </PoluiProvider>,
      );

      expect(button()).toHaveClass('opacity-10');
    });

    it('should use `inner` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          inner: {
            base: 'font-extralight',
          },
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button>Hi there</Button>
        </PoluiProvider>,
      );

      const buttonInnerContent = screen.getByText('Hi there');

      expect(buttonInnerContent).toHaveClass('font-extralight');
    });

    it('should use `label` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          label: 'font-extralight',
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button label="Hi there" />
        </PoluiProvider>,
      );

      const buttonLabel = screen.getByText('Hi there');

      expect(buttonLabel).toHaveClass('font-extralight');
    });

    it('should use `rounded` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          rounded: {
            xs: 'rounded-sm',
          },
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button label="Normal button" />
          <Button label="full" rounded="full" />
        </PoluiProvider>,
      );

      const normalButton = buttons()[0];
      const full = buttons()[1];

      expect(normalButton).toHaveClass('rounded-md');
      expect(full).toHaveClass('rounded-full');
    });

    it('should use `size` classes', () => {
      const theme: CustomPoluiTheme = {
        button: {
          size: {
            xxl: 'font-extrabold',
          },
        },
      };

      render(
        <PoluiProvider theme={{ theme }}>
          <Button size="xxl">Hello</Button>
        </PoluiProvider>,
      );

      const button = screen.getByText('Hello');

      expect(button).toHaveClass('font-extrabold');
    });
  });
});

const button = () => screen.getByRole('button');

const buttonLink = () => screen.getByRole('link');

const buttonListItem = () => screen.getByRole('listitem');

const buttons = () => screen.getAllByRole('button');
