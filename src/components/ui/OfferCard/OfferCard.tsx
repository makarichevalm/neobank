import { FC, useState } from 'react'
import './OfferCard.scss'
import Button from '../Button/Button'
import offerImg from '@/assets/images/surpriseImage.png'
import noImg from '@/assets/icons/Error_fill.svg'
import yesImg from '@/assets/icons/Check_fill.svg'
import { IOfferCard } from '@/types'
import Loader from '../Loader/Loader'
import { api } from '@/api/api'
import { useAppDispatch } from '@/hooks'
import { setAppStep, setApplicationId, setBtnText } from '@/store/applicationSlice'

type TOffer = {
  offer: IOfferCard
}
const OfferCard: FC<TOffer> = ({ offer }) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const onChooseOffer = async (offer: IOfferCard) => {
    try {
      setIsLoading(true)
      await api.chooseOffer(offer)
      dispatch(setBtnText('Continue registration'))
      dispatch(setAppStep(3))
      dispatch(setApplicationId(offer.applicationId))
    } finally {
      setIsLoading(false)
    }
  }
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
        {isLoading ? (
          <Loader />
        ) : (
          <Button name='Select' style='compBtn btn-form' type='submit' onClick={() => onChooseOffer(offer)} />
        )}
      </div>
    </div>
  )
}

export default OfferCard
