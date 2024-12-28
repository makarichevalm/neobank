import { FC } from 'react'
import './Label.scss'

type TLabel = {
  style: string
  htmlFor?: string
  value: string
  children: React.ReactNode
}
const Label: FC<TLabel> = ({ style, htmlFor, value, children }) => {
  return (
    <label htmlFor={htmlFor}>
      <span className={style}>{value}</span>
      {children}
    </label>
  )
}

export default Label
