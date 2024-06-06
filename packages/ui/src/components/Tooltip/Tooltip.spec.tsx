import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { Tooltip } from './Tooltip'

describe('Tooltip Component', () => {
  it('renders the tooltip content when triggered', async () => {
    render(
      <Tooltip label="Tooltip content">
        <button>Hover me</button>
      </Tooltip>,
    )

    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'))

    // Tooltip content should appear with custom styles
    waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument()
    })
  })

  it('opens and closes the tooltip with controlled props', async () => {
    const onOpenChange = vi.fn()

    const { rerender } = render(
      <Tooltip label="Tooltip content 1" open={false} onOpenChange={onOpenChange}>
        <button>Hover me</button>
      </Tooltip>,
    )

    // Tooltip content should not be in the document
    expect(screen.queryByText('Tooltip content 1')).not.toBeInTheDocument()

    // Update the prop to open the tooltip
    rerender(
      <Tooltip label="Tooltip content 2" open={true} onOpenChange={onOpenChange}>
        <button>Hover me</button>
      </Tooltip>,
    )

    // Tooltip content should appear
    await waitFor(() => {
      expect(screen.getAllByText('Tooltip content 2')[0]).toBeInTheDocument()
    })

    // Update the prop to close the tooltip
    rerender(
      <Tooltip label="Tooltip content 3" open={false} onOpenChange={onOpenChange}>
        <button>Hover me</button>
      </Tooltip>,
    )

    // Tooltip content should disappear
    await waitFor(() => {
      expect(screen.queryByText('Tooltip content 3')).not.toBeInTheDocument()
    })
  })

  it('renders with an arrow by default', async () => {
    render(
      <Tooltip label="Tooltip content">
        <button>Hover me</button>
      </Tooltip>,
    )

    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'))
    waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument()
      // Arrow should not be in the document
      expect(screen.getByRole('tooltip').querySelector('.fill-white')).toBeInTheDocument()
    })
    // Tooltip content and arrow should appear
  })

  it('renders without an arrow when the arrow prop is false', async () => {
    render(
      <Tooltip label="Tooltip content" arrow={false}>
        <button>Hover me</button>
      </Tooltip>,
    )

    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'))

    // Tooltip content should appear

    waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument()
      // Arrow should not be in the document
      expect(screen.getByRole('tooltip').querySelector('.fill-white')).not.toBeInTheDocument()
    })
  })

  it('applies custom theme styles', async () => {
    const customTheme = {
      content: {
        base: 'bg-blue-500 text-white',
        animation: 'transition-opacity duration-300',
      },
    }

    render(
      <Tooltip label="Tooltip content" theme={customTheme}>
        <button>Hover me</button>
      </Tooltip>,
    )

    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'))

    // Tooltip content should appear with custom styles
    waitFor(() => {
      const tooltipContent = screen.getByText('Tooltip content')
      expect(tooltipContent).toBeInTheDocument()
      expect(tooltipContent).toHaveClass('bg-blue-500')
      expect(tooltipContent).toHaveClass('text-white')
    })
  })
})
