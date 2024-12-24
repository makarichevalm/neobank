import { FC } from 'react'
import Header from '@components/ui/Header/Header'
import Footer from '@components/ui/Footer/Footer'
import PlatinumCard from '@components/card/PlatinumCard/PlatinumCard'
import GetCard from '@/components/card/GetCard/GetCard'
import TabList from '@/components/card/TabList/TabList'
import AboutCard from '@/components/card/Tabs/AboutCard/AboutCard'
import Rates from '@/components/card/Tabs/Rates/Rates'
import Cashback from '@/components/card/Tabs/Cashback/Cashback'
import Faq from '@/components/card/Tabs/Faq/Faq'

const tabItems = [
  { name: 'About card', content: <AboutCard /> },
  { name: 'Rates and conditions', content: <Rates /> },
  { name: 'Cashback', content: <Cashback /> },
  { name: 'FAQ', content: <Faq /> },
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
