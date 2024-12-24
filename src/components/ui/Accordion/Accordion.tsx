import { FC, useEffect, useState } from 'react'
import './Accordion.scss'
import { TAccordionItem } from '@/types'
import itemOpen from '@assets/icons/itemOpen.svg'
import itemClose from '@assets/icons/itemClose.svg'

type TAccordion = {
  item: TAccordionItem
  activeIndex: number
  onAccordionClick: (index: number) => void
}
const Accordion: FC<TAccordion> = ({ item, activeIndex, onAccordionClick }) => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setIsActive(activeIndex === item.index)
  })
  return (
    <div className='accordionItem'>
      <button className='accordionItem_btn' onClick={() => onAccordionClick(item.index)}>
        <span className='accordionItem_btn-title'>{item.title}</span>
        <img src={isActive ? itemOpen : itemClose} />
      </button>
      {isActive && <div className='accordionItem_btn-desc'>{item.content}</div>}
    </div>
  )
}

export default Accordion
