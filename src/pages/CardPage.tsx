import { FC } from 'react'
import Header from '../components/ui/Header/Header'
import Footer from '../components/ui/Footer/Footer'
import PlatinumCard from '../components/card/PlatinumCard/PlatinumCard'

const CardPage: FC = () => {
  return (
    <div>
      <Header />
      <PlatinumCard />
      <Footer />
    </div>
  )
}

export default CardPage
