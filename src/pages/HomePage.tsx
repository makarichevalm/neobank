import { FC } from 'react'
import Header from '../components/ui/Header/Header'
import CardDesign from '../components/home/CardDesign/CardDesign'
import Features from '../components/home/Features/Features'
import ExchangeRate from '../components/home/ExchangeRate/ExchangeRate'
import Map from '../components/home/Map/Map'
import Support from '../components/home/Support/Support'

const HomePage: FC = () => {
  return (
    <div>
      <CardDesign />
      <Features />
      <ExchangeRate />
      <Map />
      <Support />
    </div>
  )
}

export default HomePage
