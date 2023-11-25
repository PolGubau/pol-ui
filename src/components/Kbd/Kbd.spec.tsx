import { render, screen } from '@testing-library/react';
import { MdKeyboardArrowLeft, MdKeyboardCommandKey } from 'react-icons/md';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Kbd } from './Kbd';
import React from 'react';
describe('Components / Kbd', () => {
  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme: CustomPoluiTheme = {
        kbd: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <Kbd />
        </PoluiProvider>,
      );

      expect(kbd()).toBeInTheDocument();
      expect(kbd()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });

  describe('Rendering', () => {
    it('should render when `children={0}`', () => {
      render(<Kbd>0</Kbd>);
      expect(kbd()).toHaveTextContent('0');
    });

    it('should show icon when render', () => {
      render(<Kbd icon={MdKeyboardArrowLeft} />);

      expect(kbd()).toBeInTheDocument();
      expect(kbd().childNodes[0]).toContainHTML('svg');
    });

    it('should show icon and children when render', () => {
      render(<Kbd icon={MdKeyboardCommandKey}>command</Kbd>);

      expect(kbd()).toBeInTheDocument();
      expect(kbd().childNodes[0]).toContainHTML('svg');
      expect(kbd()).toHaveTextContent('command');
    });
  });
});

const kbd = () => screen.getByTestId('ui-kbd');
