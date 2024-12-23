import { FC } from 'react'
import './Divider.scss'

type TDivider = {
  style: string
}
const Divider: FC<TDivider> = ({ style }) => {
  return <div className={style}></div>
}

export default Divider
