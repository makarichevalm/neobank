import { FC } from 'react'
import './FormHeader.scss'

type TFormHeader = {
  value: string
  step: number
}
const FormHeader: FC<TFormHeader> = ({ value, step }) => {
  return (
    <div className='formHeader'>
      <h3 className='formHeader-h3'>{value}</h3>
      <span className='formHeader-span'>Step {step} of 5</span>
    </div>
  )
}

export default FormHeader
