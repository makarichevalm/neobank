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
import Offers from '@/components/card/Offers/Offers'
import { useAppSelector } from '@/hooks'
import Message from '@/components/ui/Message/Message'

const tabItems = [
  { name: 'About card', content: <AboutCard /> },
  { name: 'Rates and conditions', content: <Rates /> },
  { name: 'Cashback', content: <Cashback /> },
  { name: 'FAQ', content: <Faq /> },
]
const CardPage: FC = () => {
  const btnText = useAppSelector((state) => state.loan.btnText)
  const loanStep = useAppSelector((state) => state.loan.loanStep)
  const formRef = useRef<HTMLDivElement>(null)
  const handleScrollToForm = () => {
    if (formRef.current)
      formRef.current.scrollIntoView({
        behavior: 'smooth',
      })
  }
  const switchLoanStep = () => {
    switch (loanStep) {
      case 1:
        return <PrescoringForm />
      case 2:
        return <Offers />
      case 3:
        return (
          <Message
            header='The preliminary decision has been sent to your email.'
            desc='In the letter you can get acquainted with the preliminary decision on the credit card.'
            border
          />
        )
    }
  }
  return (
    <div>
      <Header />
      <PlatinumCard onClick={handleScrollToForm} text={btnText} />
      <TabList tabs={tabItems} />
      <GetCard />
      <div ref={formRef}>{switchLoanStep()}</div>
      <Footer />
    </div>
  )
}

export default CardPage
