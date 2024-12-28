import { FC, forwardRef } from 'react'
import './Select.scss'
import Label from '../Label/Label'

type TSelectOption = {
  value: number
  name: string
}
type TSelectProps = {
  id: string
  name: string
  label: string
  required: boolean
  options: TSelectOption[]
  register: any
}
const Select: FC<TSelectProps> = forwardRef<HTMLSelectElement, TSelectProps>(
  ({ id, name, label, required, options, register }, ref) => {
    return (
      <Label style={required ? 'label_required' : 'label'} htmlFor={name} value={label}>
        <select className='select' id={id} ref={ref} {...register(name)}>
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
      </Label>
    )
  },
)

export default Select
