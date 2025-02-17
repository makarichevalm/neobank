import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '@/components/ui/Button/Button'

describe('Button component', () => {
  it('render button with correct name', () => {
    render(<Button name='Continue' style='compBtn' />)
    const button = screen.getByText(/continue/i)
    expect(button).toBeInTheDocument()
  })
  it('click on button', () => {
    const handleClick = jest.fn()
    render(<Button name='Continue' style='compBtn' onClick={handleClick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  it('render button without onclick', () => {
    const handleClick = jest.fn()
    render(<Button name='Continue' style='compBtn' />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
  it('render button with type', () => {
    render(<Button name='Continue' style='compBtn' type='submit' />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
  })
})
