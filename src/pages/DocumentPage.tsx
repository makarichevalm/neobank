import { FC } from 'react'
import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import PaymentTable from '@/components/document/PaymentTable/PaymentTable'

const DocumentPage: FC = () => {
  return (
    <div>
      <Header />
      <PaymentTable />
      <Footer />
    </div>
  )
}

export default DocumentPage
