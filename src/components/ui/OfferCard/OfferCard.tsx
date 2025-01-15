import { FC } from 'react'
import './OfferCard.scss'
import Button from '../Button/Button'
import offerImg from '@/assets/images/surpriseImage.png'
import noImg from '@/assets/icons/Error_fill.svg'
import yesImg from '@/assets/icons/Check_fill.svg'
import { IOfferCard } from '@/types'

type TOffer = {
  offer: IOfferCard
  onChoose: (offer: IOfferCard) => void
}
const OfferCard: FC<TOffer> = ({ offer, onChoose }) => {
  return (
    <div className='offerCard'>
      <figure className='offerCard_img'>
        <img src={offerImg} alt='Loan offer image'></img>
      </figure>
      <div className='offerCard_data'>
        <p>Requested amount: {offer.requestedAmount.toLocaleString('ru-RU')} ₽</p>
        <p>Total amount: {offer.totalAmount.toLocaleString('ru-RU')} ₽</p>
        <p>For {offer.term} months</p>
        <p>Monthly payment: {offer.monthlyPayment.toLocaleString('ru-RU')} ₽</p>
        <p>Your rate: {offer.rate}%</p>
        <p className='offerCard_data-img'>
          Insurance included {offer.isInsuranceEnabled ? <img src={yesImg} alt='yes' /> : <img src={noImg} alt='no' />}
        </p>
        <p className='offerCard_data-img'>
          Salary client
          {offer.isSalaryClient ? <img src={yesImg} alt='yes' /> : <img src={noImg} alt='no' />}
        </p>
      </div>
      <div className='offerCard_btn'>
        <Button name='Select' style='compBtn' type='submit' onClick={() => onChoose(offer)} />
      </div>
    </div>
  )
}

export default OfferCard
