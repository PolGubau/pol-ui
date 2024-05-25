export const animations = {
  animation: {
    'drip-expand': 'drip-expand 420ms linear',
    'spinner-ease-spin': 'spinner-spin 0.8s ease infinite',
    'spinner-linear-spin': 'spinner-spin 0.8s linear infinite',
    'appearance-in': 'appearance-in 250ms ease-out normal both',
    'appearance-out': 'appearance-out 60ms ease-in normal both',
    'indeterminate-bar': 'indeterminate-bar 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite normal none running',
    scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
    'fade-in': 'fadeIn 200ms ease-in-out',
    scaleIn: 'scaleIn 200ms ease',
    scaleOut: 'scaleOut 200ms ease',
    fadeIn: 'fadeIn 200ms ease',
    fadeOut: 'fadeOut 200ms ease',
    enterFromLeft: 'enterFromLeft 250ms ease',
    enterFromRight: 'enterFromRight 250ms ease',
    exitToLeft: 'exitToLeft 250ms ease',
    exitToRight: 'exitToRight 250ms ease',
    slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    growAndContract: 'growAndContract 3s ease-in-out infinite',
    totalScaleAppear: 'totalScaleAppear 200ms ease',
    'fade-out-down': 'fade-out-down linear forwards',
    'make-it-bigger': 'make-it-bigger linear forwards',
  },
  supports: {
    'scroll-timeline': '(animation-timeline: scroll())',
    'no-scroll-timeline': 'not (animation-timeline: scroll())',
  },
  keyframes: {
    'fade-out-down': {
      from: {
        opacity: '1',
        transform: 'translateY(0)',
      },
      to: {
        opacity: '0',
        transform: 'translateY(40%)',
      },
    },
    'make-it-bigger': {
      '0%': {
        transform: 'translateY(0%)',
      },
      '80%': {
        transform: 'translateY(-30%)',
      },
      '90%': {
        transform: 'translateY(-10%) scale(1.75)',
      },
      '100%': {
        transform: 'translateY(0%) scale(2)',
        opacity: '30%',
      },
    },

    shimmer: {
      to: {
        transform: 'translateX(100%)',
      },
    },
    translateDown: {
      to: {
        transform: 'translateY(0)',
      },
    },
    'spinner-spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    'drip-expand': {
      '0%': {
        opacity: '0.2',
        transform: 'scale(0)',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(2)',
      },
    },
    'appearance-in': {
      '0%': {
        opacity: '0',
        transform: 'translateZ(0)  scale(0.95)',
      },
      '60%': {
        opacity: '0.75',
        backfaceVisibility: 'hidden',
        webkitFontSmoothing: 'antialiased',
        transform: 'translateZ(0) scale(1.05)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateZ(0) scale(1)',
      },
    },
    'appearance-out': {
      '0%': {
        opacity: '1',
        transform: 'scale(1)',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(0.85)',
      },
    },
    'indeterminate-bar': {
      '0%': {
        transform: 'translateX(-50%) scaleX(0.2)',
      },
      '100%': {
        transform: 'translateX(100%) scaleX(1)',
      },
    },
    slideDownAndFade: {
      from: { opacity: '0', transform: 'translateY(-2px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    slideLeftAndFade: {
      from: { opacity: '0', transform: 'translateX(2px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    slideUpAndFade: {
      from: { opacity: '0', transform: 'translateY(2px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    slideRightAndFade: {
      from: { opacity: '0', transform: 'translateX(-2px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    scroll: {
      to: {
        transform: 'translate(calc(-50% - 0.5rem))',
      },
    },

    scaleIn: {
      from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
      to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
    },
    scaleOut: {
      from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
      to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
    },
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    growAndContract: {
      '0%': {
        transform: 'scale(0.8)',
      },
      '50%': {
        transform: 'scale(1.2)',
      },
      '100%': {
        transform: 'scale(0.8)',
      },
    },
    totalScaleAppear: {
      from: { opacity: '0', transform: 'scale(0)' },
      to: { opacity: '1', transform: 'scale(1)' },
    },
  },
}
