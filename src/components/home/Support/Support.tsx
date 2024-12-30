import { FC, useEffect, useRef, useState } from 'react'
import './Support.scss'
import email from '@assets/icons/email.svg'
import send from '@assets/icons/send.svg'
import { api } from '@/api/api'

const Support: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (emailRef.current?.value) {
      await api.emailSubscribe(emailRef.current?.value)
      setIsSubscribed(true)
      console.log('okaay')
    }
  }
  const checkSubscribe = () => {
    const email = localStorage.getItem('email')
    return email ? true : false
  }
  useEffect(() => {
    const checkEmail = checkSubscribe()
    setIsSubscribed(checkEmail)
  }, [])
  return (
    <article className='support'>
      <span>Support</span>
      <h3 className='support_h3_sub'>Subscribe Newsletter & get</h3>
      <h3 className='support_h3_news'>Bank News</h3>
      {isSubscribed ? (
        <div className='support_subscribe'>You are already subscribed to the bank's newsletter</div>
      ) : (
        <form className='support_form' onSubmit={handleSubmit}>
          <img src={email} alt='email' />
          <input type='email' placeholder='Your email' ref={emailRef} />
          <button type='submit'>
            <img src={send} />
            Subscribe
          </button>
        </form>
      )}
    </article>
  )
}

export default Support
