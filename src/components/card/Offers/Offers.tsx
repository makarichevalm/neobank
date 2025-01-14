import { FC } from 'react'
import './Offers.scss'
import OfferCard from '@/components/ui/OfferCard/OfferCard'
import { useAppSelector } from '@/hooks'
import { TOffers } from '@/types'

const Offers: FC = () => {
  const offers: TOffers = useAppSelector((state) => state.loan.offers)
  return (
    <article className='offers'>
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          applicationId={offer.applicationId}
          requestedAmount={offer.requestedAmount}
          totalAmount={offer.totalAmount}
          term={offer.term}
          monthlyPayment={offer.monthlyPayment}
          rate={offer.rate}
          isInsuranceEnabled={offer.isInsuranceEnabled}
          isSalaryClient={offer.isSalaryClient}
        />
      ))}
    </article>
  )
}

export default Offers
