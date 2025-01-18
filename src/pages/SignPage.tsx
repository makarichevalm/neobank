import { FC } from 'react'
import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import SignDocument from '@/components/sign/SignDocument'
import { useAppSelector } from '@/hooks'
import Message from '@/components/ui/Message/Message'

const SignPage: FC = () => {
  const appStep = useAppSelector((state) => state.loan.appStep)
  const switchSignStep = () => {
    switch (appStep) {
      case 5:
        return <SignDocument />
      case 6:
        return (
          <Message
            header='Documents have been successfully signed and sent for approval'
            desc='Within 10 minutes you will be sent a PIN code to your email for confirmation'
          />
        )
    }
  }
  return (
    <div className='container'>
      <Header />
      {switchSignStep()}
      <Footer />
    </div>
  )
}

export default SignPage
