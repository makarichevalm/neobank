import { FC, ReactElement, useState } from 'react'
import './Tooltip.scss'

type TTooltip = {
  text: string
  children: ReactElement
}
const Tooltip: FC<TTooltip> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const handleMouseEnter = () => {
    setShowTooltip(true)
  }
  const handleMouseLeave = () => {
    setShowTooltip(false)
  }
  return (
    <div className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className='tooltip_text'> {text}</div>}
    </div>
  )
}

export default Tooltip
