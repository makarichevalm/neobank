import { FC, InputHTMLAttributes, forwardRef } from 'react'
import './Input.scss'
import Label from '../Label/Label'

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}
const Input: FC<TInputProps> = forwardRef<HTMLInputElement, TInputProps>(({ label, ...inputProps }, ref) => {
  return (
    <Label style={inputProps.required ? 'label_required' : 'label'} htmlFor={inputProps.name} value={label}>
      <input className='formInput' ref={ref} {...inputProps} />
      {/*error && <p className='error'>{error}</p>*/}
    </Label>
  )
})

export default Input
