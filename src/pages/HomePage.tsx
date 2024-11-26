import { FC } from 'react'
import Header from '../components/ui/Header/Header'
import CardDesign from '../components/home/CardDesign/CardDesign'
import Features from '../components/home/Features/Features'
import ExchangeRate from '../components/home/ExchangeRate/ExchangeRate'
import Map from '../components/home/Map/Map'

const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <CardDesign />
      <Features />
      <ExchangeRate />
      <Map />
    </div>
  )
}

export default HomePage
