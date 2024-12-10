import { FC, useState, useEffect } from 'react'
import Header from '../components/ui/Header/Header'
import CardDesign from '../components/home/CardDesign/CardDesign'
import Features from '../components/home/Features/Features'
import ExchangeRate from '../components/home/ExchangeRate/ExchangeRate'
import Map from '../components/home/Map/Map'
import News from '../components/home/News/News'
import Support from '../components/home/Support/Support'
import Footer from '../components/ui/Footer/Footer'
import { exchangeRate } from '../api/exchangeRate'
import { TNewsItem, TCurrencies } from '../types'
import { getExchangeRate } from '../api/getExchangeRate'
import { newsApi } from '../api/getNews'
const HomePage: FC = () => {
  const [currencyValues, setCurrencyValues] = useState<TCurrencies[]>([])
  const [news, setNews] = useState<TNewsItem[] | string>([])
  const minutes: number = 15
  const seconds: number = 60
  const milliseconds: number = 1000

  const getNewsData = async () => {
    const data = await newsApi.getNews(newsApi.baseURL)
    if (typeof data === 'string') setNews(data)
    else {
      let validData = data.filter((newsItem: TNewsItem) => {
        return IsValidImg(newsItem.urlToImage) && IsValidDesc(newsItem.description)
      })
      setNews(validData)
      console.log(validData)
    }
  }
  const IsValidImg = (url: string | null): boolean => {
    if (!url) return false
    const img = new Image()
    img.src = url
    return img.complete && img.naturalWidth !== 0
  }
  const IsValidDesc = (description: string | null): boolean => {
    if (!description) return true
    const DescRegex = /<[^>]+>/g
    return !DescRegex.test(description)
  }
  const getCurrencies = async () => {
    const data = await getExchangeRate(exchangeRate)
    if (data) setCurrencyValues(data)
  }
  useEffect(() => {
    getCurrencies()
    getNewsData()
    setInterval(() => {
      getCurrencies()
    }, minutes * seconds * milliseconds)
  }, [])
  return (
    <div>
      <Header />
      <CardDesign />
      <Features />
      <ExchangeRate currencies={currencyValues} />
      <Map />
      <News newsData={news} />
      <Support />
      <Footer />
    </div>
  )
}

export default HomePage
