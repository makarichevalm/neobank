import { FC, useRef } from 'react'
import Header from '@components/ui/Header/Header'
import Footer from '@components/ui/Footer/Footer'
import PlatinumCard from '@components/card/PlatinumCard/PlatinumCard'
import GetCard from '@/components/card/GetCard/GetCard'
import TabList from '@/components/card/TabList/TabList'
import AboutCard from '@/components/card/Tabs/AboutCard/AboutCard'
import Rates from '@/components/card/Tabs/Rates/Rates'
import Cashback from '@/components/card/Tabs/Cashback/Cashback'
import Faq from '@/components/card/Tabs/Faq/Faq'
import PrescoringForm from '@/components/card/PrescoringForm/PrescoringForm'

const tabItems = [
  { name: 'About card', content: <AboutCard /> },
  { name: 'Rates and conditions', content: <Rates /> },
  { name: 'Cashback', content: <Cashback /> },
  { name: 'FAQ', content: <Faq /> },
]
const CardPage: FC = () => {
  const formRef = useRef<HTMLDivElement>(null)
  const handleScrollToForm = () => {
    if (formRef.current)
      formRef.current.scrollIntoView({
        behavior: 'smooth',
      })
  }
  return (
    <div>
      <Header />
      <PlatinumCard onClick={handleScrollToForm} />
      <TabList tabs={tabItems} />
      <GetCard />
      <div ref={formRef}>
        <PrescoringForm />
      </div>
      <Footer />
    </div>
  )
}

export default CardPage
