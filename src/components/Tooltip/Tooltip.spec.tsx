import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Tooltip } from './Tooltip'
import { describe, expect, test } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('Tooltip component', () => {
  test('renders tooltip content when trigger is hovered', async () => {
    const { getByText } = render(
      <Tooltip content="Tooltip Content">
        <span>Hover me</span>
      </Tooltip>,
    )

    await userEvent.hover(getByText('Hover me'))

    expect(getByText('Tooltip Content')).toBeInTheDocument()
  })

  test('hides tooltip content when trigger loses focus', () => {
    const { getByText, queryByText } = render(
      <Tooltip content="Tooltip Content">
        <span>Hover me</span>
      </Tooltip>,
    )

    fireEvent.mouseEnter(getByText('Hover me'))
    fireEvent.mouseLeave(getByText('Hover me'))

    expect(queryByText('Tooltip Content')).not.toBeInTheDocument()
  })

  test('opens tooltip content when trigger is focused', () => {
    const { getByText, getByTestId } = render(
      <Tooltip content="Tooltip Content">
        <span>Hover me</span>
      </Tooltip>,
    )

    fireEvent.focus(getByText('Hover me'))

    expect(getByTestId('ui-arrow')).toBeInTheDocument()
    expect(getByText('Tooltip Content')).toBeInTheDocument()
  })
})
