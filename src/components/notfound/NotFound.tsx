import { FC } from 'react'
import './NotFound.scss'
import errorImg from '@assets/images/404Error.png'
import Button from '@/components/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

const NotFound: FC = () => {
  const navigate = useNavigate()
  return (
    <main className='notfound'>
      <section className='notfound_text'>
        <h2 className='notfound_text-h2'>
          <span>Oops...</span>
          <span>Page not found</span>
        </h2>
        <p className='notfound_text-p'>This Page doesn`t exist or was removed! We suggest you go back.</p>
        <Button name='Go Back' style='compBtn' onClick={() => navigate(-1)} />
      </section>
      <figure className='notfound_image'>
        <img src={errorImg} alt='Error 404'></img>
      </figure>
    </main>
  )
}

export default NotFound
