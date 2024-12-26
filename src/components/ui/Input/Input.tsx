import { FC, InputHTMLAttributes } from 'react'
import './Input.scss'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...inputProps }) => {
  return <input className='formInput' {...inputProps} />
}

export default Input
