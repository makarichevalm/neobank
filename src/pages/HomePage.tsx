import { FC } from 'react'
import Header from '../components/ui/Header/Header'
import CardDesign from '../components/home/CardDesign/CardDesign'
import Features from '../components/home/Features/Features'
import ExchangeRate from '../components/home/ExchangeRate/ExchangeRate'
import Map from '../components/home/Map/Map'
import Support from '../components/home/Support/Support'
import Footer from '../components/ui/Footer/Footer'

const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <CardDesign />
      <Features />
      <ExchangeRate />
      <Map />
      <Support />
      <Footer />
    </div>
  )
}

export default HomePage
