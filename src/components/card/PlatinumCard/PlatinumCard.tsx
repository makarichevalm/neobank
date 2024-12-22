import { FC } from 'react'
import './PlatinumCard.scss'
import card from '@assets/images/cardImage1.png'
import Button from '@components/ui/Button/Button'
import Tooltip from '@/components/ui/Tooltip/Tooltip'
const PlatinumCard: FC = () => {
  return (
    <article className='platinum'>
      <section className='platinum_cond'>
        <h1>Platinum digital credit card</h1>
        <p>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers without
          commission and interest.
        </p>
        <div className='platinum_cond_list'>
          <Tooltip text='When repaying the full debt up to 160 days.'>
            <div className='platinum_cond_list-item'>
              <span>Up to 160 days</span>
              <span>No percent</span>
            </div>
          </Tooltip>
          <Tooltip text='Over the limit willaccrue percent'>
            <div className='platinum_cond_list-item'>
              <span>Up to 600 000 ₽</span>
              <span>Credit limit</span>
            </div>
          </Tooltip>
          <Tooltip text='Promotion valid until December 31, 2022.'>
            <div className='platinum_cond_list-item'>
              <span>0 ₽</span>
              <span>Card service is free</span>
            </div>
          </Tooltip>
        </div>
        <Button name='Apply for card' style='compBtn' />
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
