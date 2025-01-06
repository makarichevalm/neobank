import { FC } from 'react'
import './AboutCard.scss'
import moneyIcon from '@assets/icons/Money_duotone.svg'
import bagIcon from '@assets/icons/Bag_duotone.svg'
import calendarIcon from '@assets/icons/Calendar_duotone.svg'
import clockIcon from '@assets/icons/Clock_duotone.svg'
import creditIcon from '@assets/icons/Credit card_duotone.svg'

type TAboutCard = {
  icon: string
  title: string
  text: string
}
const cardInfo: Array<TAboutCard> = [
  {
    icon: moneyIcon,
    title: 'Up to 50 000 ₽',
    text: 'Cash and transfers without commission and percent',
  },
  {
    icon: calendarIcon,
    title: 'Up to 160 days',
    text: 'Without percent on the loan',
  },
  {
    icon: clockIcon,
    title: 'Free delivery',
    text: 'We will deliver your card by courier at a convenient place and time for you',
  },
  {
    icon: bagIcon,
    title: 'Up to 12 months',
    text: 'No percent. For equipment, clothes and other purchases in installments',
  },
  {
    icon: creditIcon,
    title: 'Convenient deposit and withdrawal',
    text: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
  },
]
const AboutCard: FC = () => {
  return (
    <div className='aboutCard'>
      {cardInfo.map((card, index) => {
        return (
          <article className='aboutCard_item' key={index}>
            <img src={card.icon} alt='Icon' />
            <h3 className='aboutCard_item-title'>{card.title}</h3>
            <p className='aboutCard_item-text'>{card.text}</p>
          </article>
        )
      })}
    </div>
  )
}

export default AboutCard
