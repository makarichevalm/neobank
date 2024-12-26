import { FC } from 'react'
import './Label.scss'

type TLabel = {
  value: string
  children: JSX.Element
}
const Label: FC<TLabel> = ({ value, children }) => {
  return (
    <label>
      <span className='label'>{value}</span>
      {children}
    </label>
  )
}

export default Label
