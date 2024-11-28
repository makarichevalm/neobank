import { FC, useState, useEffect } from 'react'
import Header from '../components/ui/Header/Header'
import CardDesign from '../components/home/CardDesign/CardDesign'
import Features from '../components/home/Features/Features'
import ExchangeRate from '../components/home/ExchangeRate/ExchangeRate'
import Map from '../components/home/Map/Map'
import Support from '../components/home/Support/Support'
import Footer from '../components/ui/Footer/Footer'
import { exchangeRate } from '../api/exchangeRate'
import { getExchangeRate, TCurrencies } from '../api/getExchangeRate'

const HomePage: FC = () => {
  const [currencyValues, setCurrencyValues] = useState<TCurrencies[]>([])
  const getCurrencies = async () => {
    const data = await getExchangeRate(exchangeRate)
    if (data) setCurrencyValues(data)
  }
  useEffect(() => {
    getCurrencies()
    setInterval(() => {
      getCurrencies()
    }, 15 * 60 * 1000)
  }, [])
  return (
    <div>
      <Header />
      <CardDesign />
      <Features />
      <ExchangeRate currencies={currencyValues} />
      <Map />
      <Support />
      <Footer />
    </div>
  )
}

export default HomePage
