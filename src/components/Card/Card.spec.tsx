import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Card } from './Card';

describe('Components / Card', () => {
  describe('Functionality', () => {
    it('should render an image when `imgSrc` is provided', () => {
      render(<Card imgSrc="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" />);
      expect(screen.queryAllByTestId('PoluiProvider-card-image')).toHaveLength(1);
      expect(screen.queryByTestId('PoluiProvider-card-image')).toHaveAttribute(
        'src',
        'https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75',
      );
    });
    it('should not render an `<img>` given an undefined `imgSrc`', () => {
      render(<Card imgSrc={undefined} />);
      expect(screen.queryAllByTestId('PoluiProvider-card-image')).toHaveLength(0);
    });

    it('should render the image from the `renderImage` prop', () => {
      render(<Card renderImage={() => <div data-testid="dummy-div" />} />);

      expect(screen.queryAllByTestId('dummy-div')).toHaveLength(1);
    });
    it('should use the `renderImage` prop even if the user provides an `imgSrc`', () => {
      render(
        /* @ts-expect-error should be illegal to use `renderImage` and `imgSrc` at the same time */
        <Card
          renderImage={() => <div data-testid="dummy-div2" />}
          imgSrc="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
        />,
      );
      expect(screen.queryAllByTestId('dummy-div2')).toHaveLength(1);
      expect(screen.queryAllByTestId('PoluiProvider-card-image')).toHaveLength(0);
    });
    it('should provide the theme and horizontal flag to the `renderImage` function', () => {
      const spy = vi.fn(() => <div data-testid="dummy-div2" />);
      render(<Card renderImage={spy} />);
      expect(spy).toHaveBeenCalledWith(expect.any(Object), false);
    });
  });
  describe('A11y', () => {
    it('should allow `aria-label`', () => {
      render(<Card aria-label="My card" />);

      expect(card()).toHaveAccessibleName('My card');
    });

    it('should provide `<img />` with alternative text given `imgSrc="..."` and `imgAlt="..."`', () => {
      render(
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
        />,
      );
      const img = screen.getByAltText('Meaningful alt text for an image that is not purely decorative');

      expect(img).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(<Card href="#" />);

      expect(screen.getByRole('link')).toEqual(card());
    });

    it('should render an `<img>` given `imgSrc=".."`', () => {
      render(<Card imgSrc="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" />);
      const img = screen.getByRole('img');

      expect(card()).toContainElement(img);
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            base: 'text-cyan-100',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Card />
        </PoluiProvider>,
      );

      expect(card()).toHaveClass('text-cyan-100');
    });

    it('should use `children` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            children: 'text-cyan-900',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Card>
            <span aria-label="The content">Some content</span>
          </Card>
        </PoluiProvider>,
      );
      const children = screen.getByLabelText('The content');

      expect(children.parentElement).toHaveClass('text-cyan-900');
    });

    it('should use `horizontal` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            horizontal: {
              off: 'text-cyan-200',
              on: 'text-cyan-300',
            },
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Card />
          <Card horizontal />
        </PoluiProvider>,
      );
      const normalCard = cards()[0];
      const horizontalCard = cards()[1];

      expect(normalCard).toHaveClass('text-cyan-200');
      expect(horizontalCard).toHaveClass('text-cyan-300');
    });

    it('should use `href` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          root: {
            href: 'text-cyan-700',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Card href="#">My card</Card>
        </PoluiProvider>,
      );

      expect(card()).toHaveClass('text-cyan-700');
    });

    it('should use `img` classes', () => {
      const theme: CustomPoluiTheme = {
        card: {
          img: {
            base: 'text-cyan-400',
            horizontal: {
              off: 'bg-cyan-500',
              on: 'bg-cyan-600',
            },
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Card imgAlt="Card with image" imgSrc="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" />
          <Card
            horizontal
            imgAlt="Horizontal card with image"
            imgSrc="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
          />
        </PoluiProvider>,
      );
      const cardWithImage = screen.getByAltText('Card with image');
      const horizontalCardWithImage = screen.getByAltText('Horizontal card with image');

      expect(cardWithImage).toHaveClass('text-cyan-400 bg-cyan-500');
      expect(horizontalCardWithImage).toHaveClass('bg-cyan-600');
    });
  });
});

const card = () => screen.getByTestId('PoluiProvider-card');

const cards = () => screen.getAllByTestId('PoluiProvider-card');
