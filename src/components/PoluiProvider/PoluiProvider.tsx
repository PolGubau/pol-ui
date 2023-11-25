import type { FC } from 'react';
import type { ThemeMode } from '../../hooks/use-theme-mode';
import { ThemeInit } from '../../theme-store/init';
import type { CustomPoluiTheme } from './PoluiTheme';
import React from 'react';
export interface ThemeProps {
  mode?: ThemeMode;
  theme?: CustomPoluiTheme;
}

interface ProviderProps {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const PoluiProvider: FC<ProviderProps> = ({ children, theme }) => {
  return (
    <>
      <ThemeInit mode={theme?.mode} theme={theme?.theme} />
      {children}
    </>
  );
};

PoluiProvider.displayName = 'PoluiProvider';
