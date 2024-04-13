import { renderHook, act } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { useLocalStorage } from './use-local-storage'

describe('useLocalStorage hook', () => {
  test('should initialize with the correct value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'))
    expect(result.current[0]).toBe('initialValue')
  })

  test('should update the value and localStorage on setValue', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'))
    act(() => {
      result.current[1]('updatedValue')
    })
    expect(result.current[0]).toBe('updatedValue')
    expect(window.localStorage.getItem('testKey')).toBe(JSON.stringify('updatedValue'))
  })

  test('should handle localStorage changes', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'))
    act(() => {
      window.localStorage.setItem('testKey', JSON.stringify('newValue'))
      window.dispatchEvent(new Event('storage'))
    })
    expect(result.current[0]).toBe('newValue')
  })

  test('should handle custom "local-storage" events', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'))
    act(() => {
      window.localStorage.setItem('testKey', JSON.stringify('customValue'))
      window.dispatchEvent(new Event('local-storage'))
    })
    expect(result.current[0]).toBe('customValue')
  })

  test('should handle invalid JSON in localStorage', () => {
    window.localStorage.setItem('testKey', 'invalidJson')
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'))
    expect(result.current[0]).toBe(undefined) // initial value because of invalid JSON
  })

  test('should handle encriptation with third parameter', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'))
    expect(result.current[0]).toBe('initialValue')
  })
})
