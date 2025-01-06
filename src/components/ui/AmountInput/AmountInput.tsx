import { FC, InputHTMLAttributes, forwardRef } from 'react'
import './AmountInput.scss'
import Label from '../Label/Label'
import successIcon from '@assets/icons/Check_fill.svg'
import errorIcon from '@assets/icons/Error_fill.svg'
import { FieldError } from 'react-hook-form'

type TAmount = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  isRequired?: boolean
  isSubmitted?: boolean
  error?: FieldError | undefined
}
const AmountInput: FC<TAmount> = forwardRef<HTMLInputElement, TAmount>(
  ({ label, isRequired, isSubmitted, error, ...inputProps }, ref) => {
    return (
      <div className='amountInput'>
        <Label isRequired={isRequired} htmlFor={inputProps.name} value={label}>
          <input className={error ? 'formInput inputError' : 'formInput'} ref={ref} {...inputProps} />
          {isSubmitted && !error && <img className='icon_success' src={successIcon} />}
          {error && <img className='icon_error' src={errorIcon} />}
          {error && <div className='error_message'>{error?.message}</div>}
        </Label>
      </div>
    )
  },
)

export default AmountInput
