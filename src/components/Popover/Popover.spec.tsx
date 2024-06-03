import React from 'react'
import { render } from '@testing-library/react'
import { Popover } from './Popover'
import { test, describe, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
const Example = <Popover label="Click me">Popover Content</Popover>

describe('Popover component', () => {
  test('renders popover content when trigger is clicked', async () => {
    const { getByText } = render(Example)
    await userEvent.click(getByText('Click me'))

    expect(getByText('Popover Content')).toBeInTheDocument()
  })

  test('hides popover content when trigger is clicked again', async () => {
    const { getByText, queryByText } = render(Example)
    await userEvent.click(getByText('Click me'))
    await userEvent.click(getByText('Click me'))

    expect(queryByText('Popover Content')).not.toBeInTheDocument()
  })

  test('renders popover content when trigger is clicked and modal is true', async () => {
    const { getByText } = render(Example)
    await userEvent.click(getByText('Click me'))

    expect(getByText('Popover Content')).toBeInTheDocument()
  })
})
