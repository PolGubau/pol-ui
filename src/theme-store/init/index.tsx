import type { CustomPoluiTheme } from '../../components/PoluiProvider';
import type { ThemeMode } from '../../hooks/use-theme-mode';
import { ThemeClientInit } from './client';
import { ThemeModeInit } from './mode';
import { ThemeServerInit } from './server';
 
interface Props {
  mode?: ThemeMode;
  theme?: CustomPoluiTheme;
}

export function ThemeInit({ mode, theme }: Props) {
  return (
    <>
      <ThemeModeInit mode={mode} />
      <ThemeServerInit theme={theme} />
      <ThemeClientInit theme={theme} />
    </>
  );
}
