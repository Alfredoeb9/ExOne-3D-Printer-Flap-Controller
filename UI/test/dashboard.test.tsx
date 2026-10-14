import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Dashboard from '../src/pages/Dashboard'

describe('Dashboard', () => {
  it('displays the printer connection and current job', () => {
    render(<Dashboard />)

    expect(screen.getByRole('heading', { name: 'Dashboard' }),).toBeVisible()

    const printerHeading = screen.getByRole('heading', {name: 'Printer (ExOne Innovent+)'})
    const printerCard = printerHeading.parentElement!

    expect(within(printerCard).getByText(/connected/i),).toBeVisible()

    expect(within(printerCard).getByText(/demo part 01/i),).toBeVisible()
  })
})