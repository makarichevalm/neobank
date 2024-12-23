import { FC } from 'react'
import './Rates.scss'
import Divider from '@/components/ui/Divider/Divider'

const Rates: FC = () => {
  return (
    <article className='rates'>
      <div className='rates_item'>
        <p>Card currency</p>
        <p>Rubles, dollars, euro</p>
      </div>
      <Divider style='tabDivider' />
      <div className='rates_item'>
        <p>Interest free period</p>
        <p>0% up to 160 days</p>
      </div>
      <Divider style='tabDivider' />
      <div className='rates_item'>
        <p>Payment system</p>
        <p>Mastercard, Visa</p>
      </div>
      <Divider style='tabDivider' />
      <div className='rates_item'>
        <p>Maximum credit limit on the card</p>
        <p>600 000 ₽</p>
      </div>
      <Divider style='tabDivider' />
      <div className='rates_item'>
        <p>Replenishment and withdrawal</p>
        <p>At any ATM. Top up your credit card for free with cash or transfer from other cards</p>
      </div>
      <Divider style='tabDivider' />
      <div className='rates_item'>
        <p>Max cashback per month</p>
        <p>15 000 ₽</p>
      </div>
      <Divider style='tabDivider' />
      <div className='rates_item'>
        <p>Transaction Alert</p>
        <p>
          60 ₽ — SMS or push notifications <br /> 0 ₽ — card statement, information about transactions in the online
          bank
        </p>
      </div>
    </article>
  )
}

export default Rates
