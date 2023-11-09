import { BadgeProps, BadgeVariant } from '@components/Badge/Badge.types';

export const badgeVariants: Record<BadgeVariant, BadgeProps> = {
  primary: {
    color: 'purple',
    tone: 'solid',
  },
  secondary: {
    color: 'gray',
    tone: 'solid',
  },
  danger: {
    color: 'red',
    tone: 'solid',
  },
  success: {
    color: 'green',
    tone: 'solid',
  },
  warning: {
    color: 'yellow',
    tone: 'solid',
  },
  info: {
    color: 'blue',
    tone: 'solid',
  },
};
