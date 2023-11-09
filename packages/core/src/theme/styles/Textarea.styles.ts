import { cva } from 'class-variance-authority';

const base = cva(
  [
    'w-full',
    'transition-colors',
    'duration-100',
    'ease-in-out',
    'outline-none',
    'data-[has-left-element=true]:rounded-l-none',
    'data-[has-right-element=true]:rounded-r-none',
    'z-10',
  ],
  {
    variants: {
      color: {
        blue: [],
        purple: [],
        gray: [],
        dark: [],
        black: [],
      },
      size: {
        xs: ['px-2', 'text-xs', 'py-2'],
        sm: ['px-3', 'text-sm', 'py-3'],
        md: ['px-3', 'text-base', 'py-3'],
        lg: ['px-4', 'text-lg', 'py-4'],
      },
      tone: {
        light: ['text-gray-800', 'border', 'focus:bg-gray-50', 'placeholder:text-gray-400'],
        solid: ['text-gray-800', 'border', 'focus:bg-gray-100', 'placeholder:text-gray-400'],
        transparent: ['text-gray-800', 'border', 'placeholder:text-gray-400'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        xl: ['rounded-xl'],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
      },
      validation: {
        none: [],
        invalid: ['border-red-500', 'focus-visible:border-red-500'],
        valid: ['border-green-500', 'focus-visible:border-green-500'],
        warning: ['border-yellow-400', 'focus-visible:border-yellow-400'],
      },
      withRing: {
        true: ['focus:ring-2', 'focus:ring-offset-1'],
        false: ['focus:ring-0'],
      },
      disabled: {
        true: ['cursor-not-allowed'],
        false: [],
      },
    },
    compoundVariants: [
      {
        validation: 'none',
        color: 'blue',
        withRing: true,
        className: ['focus:ring-blue-100'],
      },
      {
        validation: 'none',
        color: 'purple',
        withRing: true,
        className: ['focus:ring-purple-100'],
      },
      {
        validation: 'none',
        color: 'gray',
        withRing: true,
        className: ['focus:ring-gray-100'],
      },
      {
        validation: 'none',
        color: 'dark',
        withRing: true,
        className: ['focus:ring-gray-200'],
      },
      {
        validation: 'none',
        color: 'black',
        withRing: true,
        className: ['focus:ring-gray-300'],
      },
      {
        validation: 'invalid',
        withRing: true,
        className: ['focus:ring-red-100'],
      },
      {
        validation: 'valid',
        withRing: true,
        className: ['focus:ring-green-100'],
      },
      {
        validation: 'warning',
        withRing: true,
        className: ['focus:ring-yellow-100'],
      },
      {
        tone: 'light',
        disabled: false,
        className: ['bg-white'],
      },
      {
        tone: 'solid',
        disabled: false,
        className: ['bg-gray-50'],
      },
      {
        tone: 'transparent',
        disabled: false,
        className: ['bg-transparent'],
      },
      {
        tone: 'light',
        disabled: true,
        className: ['bg-gray-100'],
      },
      {
        tone: 'solid',
        disabled: true,
        className: ['bg-gray-200'],
      },
      {
        tone: 'transparent',
        disabled: true,
        className: ['bg-gray-50'],
      },
      {
        tone: 'light',
        validation: 'none',
        className: ['border-gray-300'],
      },
      {
        tone: 'solid',
        validation: 'none',
        className: ['border-gray-200'],
      },
      {
        tone: 'transparent',
        validation: 'none',
        className: ['border-transparent'],
      },
      {
        validation: 'none',
        color: 'blue',
        className: ['focus-visible:border-blue-500'],
      },
      {
        validation: 'none',
        color: 'purple',
        className: ['focus-visible:border-purple-500'],
      },
      {
        validation: 'none',
        color: 'gray',
        className: ['focus-visible:border-gray-500'],
      },
      {
        validation: 'none',
        color: 'dark',
        className: ['focus-visible:border-gray-700'],
      },
      {
        validation: 'none',
        color: 'black',
        className: ['focus-visible:border-black'],
      },
    ],
  }
);

const textareaStyles = {
  base,
};

export { textareaStyles };
