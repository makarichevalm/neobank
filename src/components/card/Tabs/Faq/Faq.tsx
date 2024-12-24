import React from 'react'
import { FC, useState } from 'react'
import './Faq.scss'
import Accordion from '@/components/ui/Accordion/Accordion'
import { issueItems, useItems } from '@/constants/accordionItems'

const Faq: FC = () => {
  const [activeIndex1, setActiveIndex1] = useState(0)
  const [activeIndex2, setActiveIndex2] = useState(0)
  const handleAccordionClick1 = (index: number) => {
    setActiveIndex1(index === activeIndex1 ? 0 : index)
  }
  const handleAccordionClick2 = (index: number) => {
    setActiveIndex2(index === activeIndex2 ? 0 : index)
  }
  return (
    <article className='faq'>
      <h3>Issuing and receiving a card</h3>
      <div className='faq_accordion'>
        {issueItems.map((item) => (
          <React.Fragment key={item.index}>
            <Accordion item={item} activeIndex={activeIndex1} onAccordionClick={handleAccordionClick1} />
          </React.Fragment>
        ))}
      </div>
      <h3>Using a credit card</h3>
      <div className='faq_accordion'>
        {useItems.map((item) => (
          <React.Fragment key={item.index}>
            <Accordion item={item} activeIndex={activeIndex2} onAccordionClick={handleAccordionClick2} />
          </React.Fragment>
        ))}
      </div>
    </article>
  )
}

export default Faq
