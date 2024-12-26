import { FC } from 'react'
import './AmountInput.scss'
import Input from '../Input/Input'
import Label from '../Label/Label'

const AmountInput: FC = () => {
  return (
    <div className='amount'>
      <Label value='Select amount'>
        <Input />
      </Label>
    </div>
  )
}

export default AmountInput
