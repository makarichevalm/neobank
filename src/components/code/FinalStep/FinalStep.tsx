import { FC } from 'react'
import './FinalStep.scss'
import offerImg from '@assets/images/surpriseImage.png'
import Button from '@/components/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks'
import { persistor } from '@/store'
import { reset } from '@/store/applicationSlice'

const FinalStep: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleFinish = () => {
    persistor.purge()
    dispatch(reset())
    navigate('/')
  }
  return (
    <article className='final'>
      <figure className='final_img'>
        <img src={offerImg} alt='Loan offer image'></img>
      </figure>
      <h3>Congratulations! You have completed your new credit card.</h3>
      <p>Your credit card will arrive soon. Thank you for choosing us!</p>
      <Button name='View other offers of our bank' style='mainBtn' onClick={handleFinish} />
    </article>
  )
}

export default FinalStep
