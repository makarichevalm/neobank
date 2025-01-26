import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from '@/components/ui/Checkbox/Checkbox'

describe('Checkbox component', () => {
  const mockOnChange = jest.fn()
  it('render checkbox with label', () => {
    render(<Checkbox label='Checkbox title' isChecked={false} onChange={mockOnChange} />)
    const label = screen.getByLabelText(/checkbox title/i)
    expect(label).toBeInTheDocument()
  })
  it('render checkbox is checked', () => {
    render(<Checkbox label='Checkbox title' isChecked={true} onChange={mockOnChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })
  it('render checkbox is not checked', () => {
    render(<Checkbox label='Checkbox title' isChecked={false} onChange={mockOnChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })
  it('click on checkbox', () => {
    const { rerender } = render(<Checkbox label='Checkbox title' isChecked={false} onChange={mockOnChange} />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    rerender(<Checkbox label='Checkbox title' isChecked={true} onChange={mockOnChange} />)
    expect(checkbox).toBeChecked()
  })
})
