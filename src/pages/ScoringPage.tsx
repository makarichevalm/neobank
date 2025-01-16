import { FC } from 'react'
import ScoringForm from '@/components/scoring/ScoringForm/ScoringForm'
import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import { useAppSelector } from '@/hooks'
import Message from '@/components/ui/Message/Message'

const ScoringPage: FC = () => {
  const appStep = useAppSelector((state) => state.loan.appStep)
  const switchScoringStep = () => {
    switch (appStep) {
      case 3:
        return <ScoringForm />
      case 4:
        return (
          <Message
            header='Wait for a decision on the application'
            desc='The answer will come to your mail within 10 minutes'
          />
        )
    }
  }
  return (
    <div>
      <Header />
      {switchScoringStep()}
      <Footer />
    </div>
  )
}

export default ScoringPage
