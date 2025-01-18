import { FC } from 'react'
import './Checkbox.scss'

type TCheckbox = {
  label: string
  isChecked: boolean
  onChange: (checked: boolean) => void
}
const Checkbox: FC<TCheckbox> = ({ label, isChecked, onChange }) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }
  return (
    <label className='checkbox'>
      <input type='checkbox' className='checkbox_input' onChange={handleCheck} checked={isChecked} />
      {label}
    </label>
  )
}

export default Checkbox
