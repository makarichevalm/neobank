import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const appStep = useAppSelector((state) => state.loan.appStep)
  const applicationId = useAppSelector((state) => state.loan.applicationId)
  const formRef = useRef<HTMLDivElement>(null)
  const handleScrollToForm = () => {
    if (formRef.current)
      formRef.current.scrollIntoView({
        behavior: 'smooth',
      })
  }
  const switchLoanStep = () => {
    switch (appStep) {
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
  const navigate = useNavigate()
  const switchApplicationStep = () => {
    switch (appStep) {
      case 3:
        navigate(`/loan/${applicationId}`)
        break
      case 4:
        navigate(`/loan/${applicationId}/document`)
        break
      case 5:
        navigate(`/loan/${applicationId}/document/sign`)
        break
      case 6:
        navigate(`/loan/${applicationId}/code`)
        break
    }
  }
  return (
    <div className='container'>
      <Header />
      <PlatinumCard
        onClick={btnText !== 'Continue registration' ? handleScrollToForm : switchApplicationStep}
        text={btnText}
      />
      <TabList tabs={tabItems} />
      <GetCard />
      <div ref={formRef}>{switchLoanStep()}</div>
      <Footer />
    </div>
  )
}

export default CardPage
