import { FC } from 'react'
import './Faq.scss'
import Accordion from '@/components/ui/Accordion/Accordion'
import { issueItems, useItems } from '@/constants/accordionItems'

const Faq: FC = () => {
  return (
    <article className='faq'>
      <h3>Issuing and receiving a card</h3>
      <Accordion items={issueItems} />
      <h3>Using a credit card</h3>
      <Accordion items={useItems} />
    </article>
  )
}

export default Faq
