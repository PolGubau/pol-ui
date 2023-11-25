import { act, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mergeDeep } from '../../helpers/merge-deep';
import { useThemeMode } from '../../hooks/use-theme-mode';
import { getTheme } from '../../theme-store';
import { PoluiProvider } from '.';

describe('Components / PoluiProvider', () => {
  describe('PoluiProvider', () => {
    it('should return default values', () => {
      render(
        <PoluiProvider>
          <TestComponent />
        </PoluiProvider>,
      );

      const { mode, toggleMode } = themeMode;

      expect(mode).toBe('light');
      expect(toggleMode).not.toBeUndefined();
    });

    it('should return custom theme', () => {
      render(
        <PoluiProvider theme={{ theme: customTheme }}>
          <TestComponent />
        </PoluiProvider>,
      );

      const theme = getTheme();
      const mergedTheme = mergeDeep(theme, customTheme);

      expect(theme).toEqual(mergedTheme);
    });

    it('should toggle mode', () => {
      render(
        <PoluiProvider>
          <TestComponent />
        </PoluiProvider>,
      );

      const { mode, toggleMode } = themeMode;

      expect(mode).toBe('light');
      expect(documentEl()).not.toHaveClass('dark');

      act(() => {
        if (toggleMode) toggleMode();
      });

      const { mode: mode2 } = themeMode;

      expect(mode2).toBe('dark');
      expect(documentEl()).toHaveClass('dark');
    });

    it('should return darkmode', () => {
      render(
        <PoluiProvider theme={{ mode: 'dark' }}>
          <TestComponent />
        </PoluiProvider>,
      );

      const { mode } = themeMode;

      expect(mode).toBe('dark');
      expect(documentEl()).toHaveClass('dark');
    });
  });
});

let themeMode: ReturnType<typeof useThemeMode>;

const TestComponent = () => {
  themeMode = useThemeMode();
  return null;
};

const customTheme = {
  avatar: {
    root: {
      size: {
        xxl: 'h-64 w-64',
      },
    },
  },
};

const documentEl = () => document.documentElement;
