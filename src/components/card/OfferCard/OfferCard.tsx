import { FC } from 'react'
import './OfferCard.scss'
import Button from '../../ui/Button/Button'
import offerImg from '@/assets/images/surpriseImage.png'
import noImg from '@/assets/icons/Error_fill.svg'
import yesImg from '@/assets/icons/Check_fill.svg'
import { TOffer } from '@/types'

type TOfferCard = {
  offers: TOffer[]
}
const OfferCard: FC<TOfferCard> = ({ offers }) => {
  return (
    <article className='offerCards'>
      {offers.map((offer, index) => {
        return (
          <div className='offerCard' key={index}>
            <figure className='offerCard_img'>
              <img src={offerImg} alt='Loan offer image'></img>
            </figure>
            <div className='offerCard_data'>
              <p>Requested amount: {offer.requested.toLocaleString('ru-RU')} ₽</p>
              <p>Total amount: {offer.total.toLocaleString('ru-RU')} ₽</p>
              <p>For {offer.period} months</p>
              <p>Monthly payment: {offer.payment.toLocaleString('ru-RU')} ₽</p>
              <p>Your rate: {offer.rate}%</p>
              <p className='offerCard_data-img'>
                Insurance included {offer.insurance ? <img src={yesImg} alt='yes' /> : <img src={noImg} alt='no' />}
              </p>
              <p className='offerCard_data-img'>
                Salary client
                {offer.salary ? <img src={yesImg} alt='yes' /> : <img src={noImg} alt='no' />}
              </p>
            </div>
            <div className='offerCard_btn'>
              <Button name='Select' style='compBtn' />
            </div>
          </div>
        )
      })}
    </article>
  )
}

export default OfferCard
