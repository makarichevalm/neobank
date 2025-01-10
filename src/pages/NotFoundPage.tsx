import { FC } from 'react'
import Header from '@components/ui/Header/Header'
import Footer from '@/components/ui/Footer/Footer'
import NotFound from '@/components/notfound/NotFound'

const NotFoundPage: FC = () => {
  return (
    <div>
      <Header />
      <NotFound />
      <Footer />
    </div>
  )
}

export default NotFoundPage
