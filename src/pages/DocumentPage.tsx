import { FC } from 'react'
import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import PaymentTable from '@/components/document/PaymentTable/PaymentTable'
import { useAppSelector, useCheckApplicationId } from '@/hooks'
import Message from '@/components/ui/Message/Message'

const DocumentPage: FC = () => {
  const appStep = useAppSelector((state) => state.loan.appStep)
  useCheckApplicationId()
  const switchDocumentStep = () => {
    switch (appStep) {
      case 4:
        return <PaymentTable />
      case 5:
        return <Message header='Documents are formed' desc='Documents for signing will be sent to your email' />
    }
  }
  return (
    <div className='container'>
      <Header />
      {switchDocumentStep()}
      <Footer />
    </div>
  )
}

export default DocumentPage
