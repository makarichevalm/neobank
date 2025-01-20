import CodeModule from '@/components/code/CodeModule/CodeModule'
import FinalStep from '@/components/code/FinalStep/FinalStep'
import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import { useAppSelector, useCheckApplicationId } from '@/hooks'
import { FC } from 'react'

const CodePage: FC = () => {
  const appStep = useAppSelector((state) => state.loan.appStep)
  useCheckApplicationId()
  const switchCodeStep = () => {
    switch (appStep) {
      case 6:
        return <CodeModule />
      case 7:
        return <FinalStep />
    }
  }
  return (
    <div className='container'>
      <Header />
      {switchCodeStep()}
      <Footer />
    </div>
  )
}

export default CodePage
