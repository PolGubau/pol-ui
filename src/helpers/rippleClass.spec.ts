// Import necessary modules for testing
import { test, assert } from 'vitest'
import type { Colors } from '../types'
import { ColorsEnum } from '../types'
import { rippleClass } from './rippleClass'

// Define test cases for rippleClass function
test('rippleClass - primary color', () => {
  const result = rippleClass(ColorsEnum.primary)
  assert.equal(result, 'bg-primary-600')
})

test('rippleClass - secondary color', () => {
  const result = rippleClass(ColorsEnum.secondary)
  assert.equal(result, 'bg-secondary-600')
})

test('rippleClass - success color', () => {
  const result = rippleClass(ColorsEnum.success)
  assert.equal(result, 'bg-success-600')
})

test('rippleClass - warning color', () => {
  const result = rippleClass(ColorsEnum.warning)
  assert.equal(result, 'bg-warning-600')
})

test('rippleClass - error color', () => {
  const result = rippleClass(ColorsEnum.error)
  assert.equal(result, 'bg-error-600')
})

test('rippleClass - info color', () => {
  const result = rippleClass(ColorsEnum.info)
  assert.equal(result, 'bg-info-600')
})

test('rippleClass - default color', () => {
  const result = rippleClass('unknown-color' as Colors)
  assert.equal(result, 'bg-primary-600')
})
