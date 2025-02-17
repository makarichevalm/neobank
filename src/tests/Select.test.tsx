import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Select from '@/components/ui/Select/Select'
import { TSelectOption } from '@/types'

describe('Select component', () => {
  const options: TSelectOption<number>[] = [
    { value: 1, name: 'Option 1' },
    { value: 2, name: 'Option 2' },
    { value: 3, name: 'Option 3' },
  ]
  const mockOnChange = jest.fn()
  it('render select with label', () => {
    render(<Select id='select' name='select' label='Select label' options={options} onChange={mockOnChange} />)
    const label = screen.getByLabelText(/select label/i)
    expect(label).toBeInTheDocument()
  })
  it('render number of options', () => {
    render(<Select id='select' name='select' label='Select label' options={options} onChange={mockOnChange} />)
    const optionsRendered = screen.getAllByRole('option')
    expect(optionsRendered.length).toBe(options.length)
  })
  it('select with default value', () => {
    render(
      <Select
        id='select'
        name='select'
        label='Select label'
        options={options}
        onChange={mockOnChange}
        defaultValue={options[0].value}
      />,
    )
    const selectedOption = screen.getByRole('combobox')
    expect(selectedOption).toHaveDisplayValue(options[0].name)
  })
  it('call onChange when options selected', () => {
    render(<Select id='select' name='select' label='Select label' options={options} onChange={mockOnChange} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 3 } })
    expect(mockOnChange).toHaveBeenCalled()
    expect(select).toHaveDisplayValue('Option 3')
  })
})
