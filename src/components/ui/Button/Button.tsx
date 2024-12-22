import { FC } from 'react'
import './Button.scss'

type TButton = {
  name: string
  style: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
const Button: FC<TButton> = ({ name, style, type, onClick }) => {
  return (
    <button className={style} type={type || 'button'} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
