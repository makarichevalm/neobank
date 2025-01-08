import { FC, InputHTMLAttributes, forwardRef } from 'react'
import './AmountInput.scss'
import Label from '../Label/Label'

type TAmount = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  min: number
  max: number
  amount: number
  handleAmount: (amount: number) => void
}
const AmountInput: FC<TAmount> = forwardRef<HTMLInputElement, TAmount>(
  ({ label, min, max, amount, handleAmount, ...inputProps }, ref) => {
    const setAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleAmount(Number(event.target.value))
    }
    return (
      <div className='amountInput'>
        <Label htmlFor={inputProps.name} value={label}>
          <input type='number' className='amountInput_value' value={amount} onChange={setAmount} />
          <input
            className='amountInput_field'
            style={{ backgroundSize: ((amount - min) * 100) / (max - min) + '% 100%' }}
            type='range'
            min={min}
            max={max}
            ref={ref}
            {...inputProps}
          />
          <div className='amountInput_limits'>
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </Label>
      </div>
    )
  },
)

export default AmountInput
