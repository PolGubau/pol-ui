import transition from './transition'
import animations from './animations'
import scrollbarHide from './scrollbar-hide'
import custom from './custom'

export const utilities = {
  ...custom,
  ...transition,
  ...scrollbarHide,
  ...animations,
}
