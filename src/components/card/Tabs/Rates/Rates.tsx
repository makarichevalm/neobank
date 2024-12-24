import React from 'react'
import { FC } from 'react'
import './Rates.scss'
import Divider from '@/components/ui/Divider/Divider'

type TRates = {
  title: string
  desc: string | JSX.Element
}
const ratesItems: Array<TRates> = [
  { title: 'Card currency', desc: 'Rubles, dollars, euro' },
  { title: 'Interest free period', desc: '0% up to 160 days' },
  { title: 'Payment system', desc: 'Mastercard, Visa' },
  { title: 'Maximum credit limit on the card', desc: '600 000 ₽' },
  {
    title: 'Replenishment and withdrawal',
    desc: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
  },
  { title: 'Max cashback per month', desc: '15 000 ₽' },
  {
    title: 'Transaction Alert',
    desc: (
      <>
        60 ₽ — SMS or push notifications
        <br />0 ₽ — card statement, information about transactions in the online bank
      </>
    ),
  },
]
const Rates: FC = () => {
  return (
    <article className='rates'>
      {ratesItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className='rates_item' key={index}>
            <p>{item.title}</p>
            <p>{item.desc}</p>
          </div>
          {index < ratesItems.length - 1 && <Divider style='tabDivider' />}
        </React.Fragment>
      ))}
    </article>
  )
}

export default Rates
