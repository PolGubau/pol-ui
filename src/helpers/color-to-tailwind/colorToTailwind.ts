import type { Colors } from '../../types'
import { ColorsEnum } from '../../types'

/**
 * @name colorToTailwind
 * @description colorToTailwind function takes a color from the Colors enum and generates a corresponding Tailwind CSS class for the ripple effect. It switches on the provided color and returns the appropriate Tailwind CSS class based on the color type. If the color is not recognized, it defaults to the primary color. This function ensures consistency in applying ripple effects based on predefined colors in the application.
 * @param {Colors} color - Color for generating the ripple class.
 * @returns {string} - Generated ripple class.
 */
export const colorToTailwind = (color: Colors): string => {
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
