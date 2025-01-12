import { FC, forwardRef } from 'react'
import './Select.scss'
import Label from '../Label/Label'
import { TSelectOption } from '@/types'

type TSelectProps = {
  id: string
  name: string
  label: string
  defaultValue?: number
  isRequired?: boolean
  isHidden?: boolean
  options: TSelectOption<number | string>[]
  onChange: (val: any, name?: string) => void
}
const Select: FC<TSelectProps> = forwardRef<HTMLSelectElement, TSelectProps>(
  ({ id, name, label, defaultValue, isRequired, isHidden, options, onChange }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      name ? onChange(e.target.value, name) : onChange(e.target.value)
      console.log(e.target.value, name)
    }
    return (
      <Label isRequired={isRequired} htmlFor={name} value={label}>
        <select className={'select'} id={id} ref={ref} defaultValue={defaultValue || ''} onChange={handleChange}>
          {isHidden && <option value='' hidden></option>}
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
