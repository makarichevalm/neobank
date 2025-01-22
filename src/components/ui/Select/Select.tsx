import { FC, forwardRef, useState } from 'react'
import './Select.scss'
import Label from '../Label/Label'
import { TSelectOption } from '@/types'
import { FieldError } from 'react-hook-form'

type TSelectProps = {
  id: string
  name: string
  label: string
  defaultValue?: number
  isRequired?: boolean
  isHidden?: boolean
  options: TSelectOption<number | string>[]
  onChange: (val: any, name?: string) => void
  error?: FieldError | undefined
}
const Select: FC<TSelectProps> = forwardRef<HTMLSelectElement, TSelectProps>(
  ({ id, name, label, defaultValue, isRequired, isHidden, options, onChange, error }, ref) => {
    const [isChange, setIsChange] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      name ? onChange(e.target.value, name) : onChange(e.target.value)
      setIsChange(true)
    }
    return (
      <Label isRequired={isRequired} htmlFor={name} value={label}>
        <select
          className={error && !isChange ? 'select selectError' : 'select'}
          id={id}
          ref={ref}
          defaultValue={defaultValue || ''}
          onChange={handleChange}
        >
          {isHidden && <option value='' hidden></option>}
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
        {isChange && <div className='field_error-message'></div>}
        {!isChange && error && <div className='field_error-message'>{error?.message}</div>}
      </Label>
    )
  },
)

export default Select
