import { FC } from 'react'
import './Offers.scss'
import OfferCard from '@/components/ui/OfferCard/OfferCard'
import { useAppSelector } from '@/hooks'
import { TOffers } from '@/types'
import { utils } from '@/utils'

const Offers: FC = () => {
  const offers: TOffers = useAppSelector((state) => state.loan.offers)
  let sortOffers = utils.sortOffersByRates(offers)
  return (
    <article className='offers'>
      {sortOffers.map((offer, index) => (
        <OfferCard key={index} offer={offer} />
      ))}
    </article>
  )
}

export default Offers
