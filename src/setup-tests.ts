import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

// eslint-disable-next-line no-undef
global.ResizeObserver = ResizeObserver
