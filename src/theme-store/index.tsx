import type { CustomPoluiTheme, PoluiTheme } from '../components/PoluiProvider';
import { cloneDeep } from '../helpers/clone-deep';
import { mergeDeep } from '../helpers/merge-deep';
import type { ThemeMode } from '../hooks/use-theme-mode';
import { theme as defaultTheme } from '../theme';

interface ThemeStore {
  mode?: ThemeMode;
  theme: PoluiTheme;
}

const store: ThemeStore = {
  theme: cloneDeep(defaultTheme),
};

export function setThemeMode(mode?: ThemeMode) {
  store.mode = mode;
}

export function getThemeMode(): ThemeMode | undefined {
  return store.mode;
}

export function setTheme(theme?: CustomPoluiTheme) {
  if (theme) store.theme = mergeDeep(defaultTheme, theme);
}

export function getTheme(): PoluiTheme {
  return cloneDeep(store.theme);
}
