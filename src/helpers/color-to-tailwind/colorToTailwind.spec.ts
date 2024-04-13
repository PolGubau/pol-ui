// Import necessary modules for testing
import { test, assert } from 'vitest'
import type { Colors } from '../../types'
import { ColorsEnum } from '../../types'
import { colorToTailwind } from './colorToTailwind'

// Define test cases for colorToTailwind function
test('colorToTailwind - primary color', () => {
  const result = colorToTailwind(ColorsEnum.primary)
  assert.equal(result, 'bg-primary-600')
})

test('colorToTailwind - secondary color', () => {
  const result = colorToTailwind(ColorsEnum.secondary)
  assert.equal(result, 'bg-secondary-600')
})

test('colorToTailwind - success color', () => {
  const result = colorToTailwind(ColorsEnum.success)
  assert.equal(result, 'bg-success-600')
})

test('colorToTailwind - warning color', () => {
  const result = colorToTailwind(ColorsEnum.warning)
  assert.equal(result, 'bg-warning-600')
})

test('colorToTailwind - error color', () => {
  const result = colorToTailwind(ColorsEnum.error)
  assert.equal(result, 'bg-error-600')
})

test('colorToTailwind - info color', () => {
  const result = colorToTailwind(ColorsEnum.info)
  assert.equal(result, 'bg-info-600')
})

test('colorToTailwind - default color', () => {
  const result = colorToTailwind('unknown-color' as Colors)
  assert.equal(result, 'bg-primary-600')
})
