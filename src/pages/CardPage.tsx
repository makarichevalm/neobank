import { FC } from 'react'
import Header from '@components/ui/Header/Header'
import Footer from '@components/ui/Footer/Footer'
import PlatinumCard from '@components/card/PlatinumCard/PlatinumCard'
import GetCard from '@/components/card/GetCard/GetCard'

const CardPage: FC = () => {
  return (
    <div>
      <Header />
      <PlatinumCard />
      <GetCard />
      <Footer />
    </div>
  )
}

export default CardPage
