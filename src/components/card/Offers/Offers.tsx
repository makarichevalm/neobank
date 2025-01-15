import { FC } from 'react'
import './Offers.scss'
import OfferCard from '@/components/ui/OfferCard/OfferCard'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { IOfferCard, TOffers } from '@/types'
import { utils } from '@/utils'
import { api } from '@/api/api'
import { setBtnText, setLoanStep } from '@/store/loanOffersSlice'

const Offers: FC = () => {
  const offers: TOffers = useAppSelector((state) => state.loan.offers)
  const dispatch = useAppDispatch()
  let sortOffers = utils.sortOffersByRates(offers)
  const onChooseOffer = async (offer: IOfferCard) => {
    console.log(offer)
    try {
      const response = await api.chooseOffer(offer)
      dispatch(setBtnText('Continue registration'))
      dispatch(setLoanStep(3))
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <article className='offers'>
      {sortOffers.map((offer, index) => (
        <OfferCard key={index} offer={offer} onChoose={onChooseOffer} />
      ))}
    </article>
  )
}

export default Offers
