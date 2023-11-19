import { renderHook, act } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { useLocalStorage } from './use-local-storage';

describe('useLocalStorage hook', () => {
  it('should initialize with the correct value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    expect(result.current[0]).toBe('initialValue');
  });

  it('should update the value and localStorage on setValue', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    act(() => {
      result.current[1]('updatedValue');
    });
    expect(result.current[0]).toBe('updatedValue');
    expect(window.localStorage.getItem('testKey')).toBe(JSON.stringify('updatedValue'));
  });

  it('should handle localStorage changes', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    act(() => {
      window.localStorage.setItem('testKey', JSON.stringify('newValue'));
      window.dispatchEvent(new Event('storage'));
    });
    expect(result.current[0]).toBe('newValue');
  });

  it('should handle custom "local-storage" events', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    act(() => {
      window.localStorage.setItem('testKey', JSON.stringify('customValue'));
      window.dispatchEvent(new Event('local-storage'));
    });
    expect(result.current[0]).toBe('customValue');
  });
});
