export interface ITheme {
  content: {
    width: string;
    maxWidth: string;
    centered: boolean;
    padding: string;
  };

  colors: {
    primary: string;
    secondary: string;
    neutral: string;
    accent: string;
    error: string;
  };
  borderRadius: {
    none: string;
    small: string;
    medium: string;
    large: string;
    rounded: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
}
