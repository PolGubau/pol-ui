import { ModalCode, ModalExample } from '@/ui/configurators/components/Modal.example';

export const ModalConfig = {
  example: ModalExample,
  default: ModalCode,
  state: {
    closeOnEscape: true,
    mode: 'dialog',
    overlayBlur: 'sm',
    overlayCloseOnClick: true,
    overlayColor: 'dark',
    overlayOpacity: '50',
    position: 'top',
    radius: 'md',
    shadow: 'base',
    size: 'md',
  },
  options: [
    {
      label: 'Overlay color',
      name: 'overlayColor',
      type: 'color',
      colors: ['white', 'gray', 'dark'],
    },
    {
      label: 'Overlay opacity',
      name: 'overlayOpacity',
      type: 'selector',
      options: ['25', '50', '75'],
    },
    {
      label: 'Mode',
      name: 'mode',
      type: 'selector',
      options: ['fullscreen', 'dialog'],
    },
    {
      label: 'Position',
      name: 'position',
      type: 'selector',
      options: ['top', 'center', 'bottom'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'select',
      options: ['auto', 'sm', 'md', 'lg', 'xl', 'screen'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Close on escape',
      name: 'closeOnEscape',
      type: 'switch',
    },
    {
      label: 'Close on overlay click',
      name: 'overlayCloseOnClick',
      type: 'switch',
    },
  ],
};
