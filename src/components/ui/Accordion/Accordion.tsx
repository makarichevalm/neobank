import { FC, useState } from 'react'
import './Accordion.scss'
import { TAccordionItem } from '@/types'
import itemOpen from '@assets/icons/itemOpen.svg'
import itemClose from '@assets/icons/itemClose.svg'

type TAccordion = {
  items: TAccordionItem[]
}
const Accordion: FC<TAccordion> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index)
  }
  return (
    <div className='accordion'>
      {items.map((item) => (
        <div className='accordionItem' key={item.index}>
          <button className='accordionItem_btn' onClick={() => handleItemClick(item.index)}>
            <span className='accordionItem_btn-title'>{item.title}</span>
            {activeIndex === item.index ? <img src={itemOpen} alt='Open' /> : <img src={itemClose} alt='Close' />}
          </button>
          {activeIndex === item.index && <div className='accordionItem_btn-desc'>{item.content}</div>}
        </div>
      ))}
    </div>
  )
}

export default Accordion
