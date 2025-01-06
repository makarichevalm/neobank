import { FC } from 'react'
import './Label.scss'

type TLabel = {
  htmlFor?: string
  isRequired?: boolean
  value: string
  children: React.ReactNode
}
const Label: FC<TLabel> = ({ htmlFor, isRequired, value, children }) => {
  return (
    <label htmlFor={htmlFor}>
      <span className={isRequired ? 'label_required' : 'label'}>{value}</span>
      {children}
    </label>
  )
}

export default Label
