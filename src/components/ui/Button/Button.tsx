import { FC } from 'react'
import './Button.scss'

type TButton = {
  name: string
}
const Button: FC<TButton> = ({ name }) => {
  return <button className='blueButton'>{name}</button>
}

export default Button
