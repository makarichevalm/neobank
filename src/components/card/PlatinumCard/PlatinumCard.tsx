import { FC } from 'react'
import './PlatinumCard.scss'
import card from '@assets/images/cardImage1.png'
import Button from '@components/ui/Button/Button'
const PlatinumCard: FC = () => {
  return (
    <article className='platinum'>
      <section className='platinum_cond'>
        <h1>Platinum digital credit card</h1>
        <p>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers without
          commission and interest.
        </p>
        <ul className='platinum_cond_list'>
          <li className='platinum_cond_list-item' data-tooltip='When repaying the full debt up to 160 days.'>
            <span>Up to 160 days</span>
            <span>No percent</span>
          </li>
          <li className='platinum_cond_list-item' data-tooltip='Over the limit willaccrue percent'>
            <span>Up to 600 000 ₽</span>
            <span>Credit limit</span>
          </li>
          <li className='platinum_cond_list-item' data-tooltip='Promotion valid until December 31, 2022.'>
            <span>0 ₽</span>
            <span>Card service is free</span>
          </li>
        </ul>
        <Button name='Apply for card' />
      </section>
      <section className='platinum_img'>
        <figure>
          <img className='platinum_img_card' src={card} alt='Card Image' />
        </figure>
      </section>
    </article>
  )
}

export default PlatinumCard
