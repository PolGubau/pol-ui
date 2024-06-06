import { setTheme } from '..';
import type { CustomPoluiTheme } from '../../components/PoluiProvider';

interface Props {
  theme?: CustomPoluiTheme;
}

export function ThemeServerInit({ theme }: Props) {
  setTheme(theme);

  return null;
}
