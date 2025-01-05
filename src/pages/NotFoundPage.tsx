import { FC } from 'react'
import Header from '@components/ui/Header/Header'
import Footer from '@/components/ui/Footer/Footer'
import Content from '@/components/notfound/Content/Content'

const NotFoundPage: FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default NotFoundPage
