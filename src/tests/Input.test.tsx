import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '@/components/ui/Input/Input'
import { FieldError } from 'react-hook-form'

const error: FieldError = {
  type: 'required',
  message: 'The field is required',
}

describe('Input component', () => {
  it('render input with label', () => {
    render(<Input label='Test input' />)
    const input = screen.getByText(/test input/i)
    expect(input).toBeInTheDocument()
  })
  it('input focus', () => {
    render(<Input label='Test input' />)
    const input = screen.getByRole('textbox', { name: 'Test input' })
    expect(input).not.toHaveFocus()
    input.focus()
    expect(input).toHaveFocus()
  })
  it('render input with error message', () => {
    render(<Input label='Test input' error={error} />)
    const message = screen.getByText('The field is required')
    expect(message).toBeInTheDocument()
  })
  it('change input value', () => {
    const valueInput = 'Text for test'
    render(<Input label='Test input' />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: valueInput } })
    expect(input).toHaveValue(valueInput)
  })
})
