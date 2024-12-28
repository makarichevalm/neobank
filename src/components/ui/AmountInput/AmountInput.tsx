import { FC } from 'react'
import './AmountInput.scss'
import Label from '../Label/Label'
type TAmount = {
  register: any
  name: string
}
const AmountInput: FC<TAmount> = ({ name, register }) => {
  return (
    <div className='amount'>
      <Label style='label' htmlFor='amount' value='Select amount'>
        <input className='formInput' type='number' min='15000' max='600000' defaultValue={15000} {...register(name)} />
      </Label>
    </div>
  )
}

export default AmountInput
