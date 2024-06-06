import { describe, expect, it } from 'vitest'
import { omit } from '.'

describe('omit', () => {
  it('should omit keys from object', () => {
    expect(omit(['a', 'b'])({ a: 'a', b: 'b', c: 'c' })).toEqual({ c: 'c' })
  })
})
