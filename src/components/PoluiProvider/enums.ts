export enum MainSizesEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export const SizesEnum = {
  ...MainSizesEnum,
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
  '6xl': '6xl',
  '7xl': '7xl',
};

export const RoundedSizesEnum = {
  ...MainSizesEnum,
  '2xl': '2xl',
  '3xl': '3xl',
  full: 'full',
  none: 'none',
};
