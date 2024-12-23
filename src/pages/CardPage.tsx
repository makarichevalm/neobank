import { FC } from 'react'
import Header from '@components/ui/Header/Header'
import Footer from '@components/ui/Footer/Footer'
import PlatinumCard from '@components/card/PlatinumCard/PlatinumCard'
import GetCard from '@/components/card/GetCard/GetCard'
import TabList from '@/components/card/TabList/TabList'

const tabItems = [
  { name: 'About card', content: 'hi linee' },
  { name: 'Rates and conditions', content: 'hi line2' },
  { name: 'Cashback', content: 'hi line3' },
  { name: 'FAQ', content: 'hi line4' },
]
const CardPage: FC = () => {
  return (
    <div>
      <Header />
      <PlatinumCard />
      <TabList tabs={tabItems} />
      <GetCard />
      <Footer />
    </div>
  )
}

export default CardPage
