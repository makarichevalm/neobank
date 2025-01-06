import { FC, InputHTMLAttributes, forwardRef } from 'react'
import './Input.scss'
import Label from '../Label/Label'
import { FieldError } from 'react-hook-form'
import successIcon from '@assets/icons/Check_fill.svg'
import errorIcon from '@assets/icons/Error_fill.svg'

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  isRequired?: boolean
  isSubmitted?: boolean
  error?: FieldError | undefined
}
const Input: FC<TInputProps> = forwardRef<HTMLInputElement, TInputProps>(
  ({ label, isRequired, isSubmitted, error, ...inputProps }, ref) => {
    return (
      <div className='formInput_container'>
        <Label isRequired={isRequired} htmlFor={inputProps.name} value={label}>
          <input className={error ? 'formInput inputError' : 'formInput'} ref={ref} {...inputProps} />
          {isSubmitted && !error && <img className='img_success' src={successIcon} />}
          {error && <img className='img_error' src={errorIcon} />}
          {error && <div className='error_message'>{error?.message}</div>}
        </Label>
      </div>
    )
  },
)

export default Input
