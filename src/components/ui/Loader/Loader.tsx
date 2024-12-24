import { FC } from 'react'
import './Loader.scss'
import spinner from '@assets/images/spinner.svg'
const Loader: FC = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt='spinner' />
    </div>
  )
}

export default Loader
