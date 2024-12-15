import type { ThemeMode } from "../../hooks/use-theme-mode";

export interface ThemeModeScriptProps extends React.ComponentPropsWithoutRef<"script"> {
  mode?: ThemeMode;
}

export const ThemeModeScript = ({ mode, ...others }: ThemeModeScriptProps) => {
  return (
    <script
      {...others}
      data-ui-theme-mode-script={true}
      dangerouslySetInnerHTML={{
        __html: getScript({
          mode,
          defaultMode: "light",
          localStorageKey: "ui-theme-mode",
        }),
      }}
    />
  );
};

function getScript({
  mode = "auto",
  defaultMode,
  localStorageKey,
}: {
  mode?: ThemeMode;
  defaultMode: ThemeMode;
  localStorageKey: string;
}) {
  return `
    try {
      const mode = window.localStorage.getItem('${localStorageKey}') ?? '${mode}' ?? '${defaultMode}';
      const computedMode =
        mode === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode;

      if (computedMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  `;
}
