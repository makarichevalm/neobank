import { FC } from 'react'
import './Cashback.scss'

type TCashback = {
  text: string
  percent: string
}
const cashbackItems: Array<TCashback> = [
  { text: 'For food delivery, cafes and restaurants', percent: '5%' },
  { text: 'In supermarkets with our subscription', percent: '5%' },
  { text: "In clothing stores and children's goods", percent: '2%' },
  { text: 'Other purchases and payment of services and fines', percent: '1%' },
  { text: 'Shopping in online stores', percent: 'up to 3%' },
  { text: 'Purchases from our partners', percent: '30%' },
]
const Cashback: FC = () => {
  return (
    <article className='cashback'>
      {cashbackItems.map((card, index) => {
        return (
          <div className='cashback_item' key={index}>
            <p>{card.text}</p>
            <p>{card.percent}</p>
          </div>
        )
      })}
    </article>
  )
}

export default Cashback
