import { FC } from 'react'
import './Support.scss'
import email from '@assets/icons/email.svg'
import send from '@assets/icons/send.svg'

const Support: FC = () => {
  return (
    <article className='support'>
      <span>Support</span>
      <h3 className='support_h3_sub'>Subscribe Newsletter & get</h3>
      <h3 className='support_h3_news'>Bank News</h3>
      <div className='support_input'>
        <img src={email} alt='email' />
        <input type='email' placeholder='Your email' />
        <button>
          <img src={send} />
          Subscribe
        </button>
      </div>
    </article>
  )
}

export default Support
