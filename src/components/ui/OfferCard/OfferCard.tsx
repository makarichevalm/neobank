import { FC } from 'react'
import './OfferCard.scss'
import Button from '../Button/Button'
import offerImg from '@/assets/images/surpriseImage.png'
import noImg from '@/assets/icons/Error_fill.svg'
import yesImg from '@/assets/icons/Check_fill.svg'
import { IOfferCard } from '@/types'

const OfferCard: FC<IOfferCard> = ({
  applicationId,
  requestedAmount,
  totalAmount,
  term,
  monthlyPayment,
  rate,
  isInsuranceEnabled,
  isSalaryClient,
}) => {
  return (
    <div className='offerCard'>
      <figure className='offerCard_img'>
        <img src={offerImg} alt='Loan offer image'></img>
      </figure>
      <div className='offerCard_data'>
        <p>Requested amount: {requestedAmount.toLocaleString('ru-RU')} ₽</p>
        <p>Total amount: {totalAmount.toLocaleString('ru-RU')} ₽</p>
        <p>For {term} months</p>
        <p>Monthly payment: {monthlyPayment.toLocaleString('ru-RU')} ₽</p>
        <p>Your rate: {rate}%</p>
        <p className='offerCard_data-img'>
          Insurance included {isInsuranceEnabled ? <img src={yesImg} alt='yes' /> : <img src={noImg} alt='no' />}
        </p>
        <p className='offerCard_data-img'>
          Salary client
          {isSalaryClient ? <img src={yesImg} alt='yes' /> : <img src={noImg} alt='no' />}
        </p>
      </div>
      <div className='offerCard_btn'>
        <Button name='Select' style='compBtn' />
      </div>
    </div>
  )
}

export default OfferCard
