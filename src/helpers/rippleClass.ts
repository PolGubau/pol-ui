import type { Colors } from '../types'
import { ColorsEnum } from '../types'

/**
 * @name rippleClass
 * @description Function to generate a ripple class based on the provided color.
 * @param {Colors} color - Color for generating the ripple class.
 * @returns {string} - Generated ripple class.
 */
export const rippleClass = (color: Colors) => {
  switch (color) {
    case ColorsEnum.primary:
      return 'bg-primary-600'
    case ColorsEnum.secondary:
      return 'bg-secondary-600'
    case ColorsEnum.success:
      return 'bg-success-600'
    case ColorsEnum.warning:
      return 'bg-warning-600'
    case ColorsEnum.error:
      return 'bg-error-600'
    case ColorsEnum.info:
      return 'bg-info-600'
    default:
      return 'bg-primary-600'
  }
}
