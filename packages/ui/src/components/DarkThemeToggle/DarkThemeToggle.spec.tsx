import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { PoluiProvider } from '../PoluiProvider'
import { DarkThemeToggle } from './DarkThemeToggle'

describe('Dark theme toggle', () => {
  it('should toggle the theme when `Space` is pressed', async () => {
    const user = userEvent.setup()
    render(
      <PoluiProvider>
        <DarkThemeToggle />
      </PoluiProvider>,
    )

    await user.tab()
    await user.keyboard('[Space]')

    expect(screen.queryByLabelText('Toggle dark mode')).toHaveAttribute('data-active', 'true')
    expect(screen.queryByLabelText('Toggle dark mode')).toHaveAttribute('data-active', 'true')
  })
})
