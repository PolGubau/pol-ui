import { cva } from 'class-variance-authority';

const base = cva([], {
  variants: {
    color: {
      white: 'text-white',
      blue: 'text-blue-500',
      red: 'text-red-500',
      green: 'text-green-500',
      yellow: 'text-yellow-400',
      purple: 'text-purple-500',
      gray: 'text-gray-600',
      dark: 'text-gray-900',
      black: 'text-black',
    },
    leading: {
      '3': 'leading-3',
      '4': 'leading-4',
      '5': 'leading-5',
      '6': 'leading-6',
      '7': 'leading-7',
      '8': 'leading-8',
      '9': 'leading-9',
      '10': 'leading-10',
      none: 'leading-none',
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    tracking: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    weight: {
      thin: 'font-thin',
      extraLight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semiBold: 'font-semibold',
      bold: 'font-bold',
      extraBold: 'font-extrabold',
      black: 'font-black',
    },
  },
});

const textStyles = {
  base,
};

export { textStyles };
