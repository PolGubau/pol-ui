import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useDebounce } from './use-debounce';

describe('useDebounce()', () => {
  test('should return debounce value', () => {
    const value = 'value';
    const {
      result: { current: debounceValue },
    } = renderHook(() => useDebounce(value));

    expect(value).toBe(debounceValue);
  });
});
